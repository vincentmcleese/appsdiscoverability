import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";

// --- Shaders ---

const particleVs = `
uniform float uSize;
uniform float uHalfHeight;
uniform float uTime;
uniform vec3 uPointer;
uniform float uAnimation;
uniform float uPointerEffect;
uniform float uClickFactor;

attribute float aRandom;
attribute vec3 aRandom3;

varying float vRandom;
varying float vDistanceFactor;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

void main() {

  vec4 mPosition = modelMatrix * vec4(position, 1.0);

  float animation = 1.0 - uAnimation;
  vec3 animationOffset = aRandom3 * 5.0 * animation;
  mPosition.xyz += animationOffset;

  float blinkOffset = uTime + aRandom * 2.0;
  float blinkSpeed = 2.0 + aRandom * 2.0;
  float blinkRange = 0.1;

  float blinkFactor = sin(blinkOffset * blinkSpeed) * blinkRange;
  vec3 blink = aRandom3 * blinkFactor * max(uClickFactor, animation);
  mPosition.xyz += blink;

  float d = distance(uPointer, mPosition.xyz);
  d = remap(d, 0.0, 4.0, 0.0, 1.0);
  d = smoothstep(0.5, 0.0, d);
  d *= uPointerEffect;

  vec3 moved = mPosition.xyz;
  moved = mix(moved, uPointer, d);
  mPosition.xyz = moved;

  vec4 mvPosition = viewMatrix * mPosition;
  vec4 mvpPosition = projectionMatrix * mvPosition;

  gl_Position = mvpPosition;

  float baseSize = uSize;
  float size = uSize * 0.01 * (uHalfHeight / length( mvPosition.xyz ));
  gl_PointSize = size;

  vRandom = aRandom;

}
`;

const particleFs = `
uniform vec3 uColor;
uniform float uTime;
uniform sampler2D uAlphaMap;

varying float vRandom;

void main() {

  float alphaMapFactor = texture2D(uAlphaMap, gl_PointCoord).r;

  float alpha = alphaMapFactor;

  gl_FragColor = vec4(uColor, alpha);

}
`;

// --- ThreeElements Class ---

export class ThreeElements {
  domElement: HTMLElement;
  canvas: HTMLCanvasElement;
  sizes: { width: number; height: number; pixelRatio: number };
  pointer: THREE.Vector2;
  resizeCallbacks: ((sizes: any) => void)[];
  tickCallbacks: ((elapsed: number) => void)[];
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  clock!: THREE.Clock;
  raycaster!: THREE.Raycaster;
  animationId: number | null = null;

  constructor(domElement: HTMLElement) {
    this.domElement = domElement;
    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
    `;
    this.domElement.innerHTML = "";
    this.domElement.appendChild(this.canvas);

    this.sizes = { width: 0, height: 0, pixelRatio: 1 };
    this.setSizes();

    this.pointer = new THREE.Vector2(-1, -1);

    this.resizeCallbacks = [];
    this.tickCallbacks = [];

    this.setCoreElements();
    this.addEventListeners();
  }

  setSizes() {
    this.sizes.width = this.domElement.offsetWidth;
    this.sizes.height = this.domElement.offsetHeight;
    this.sizes.pixelRatio = Math.min(2, window.devicePixelRatio);
  }

  setCoreElements() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      40,
      this.sizes.width / this.sizes.height,
      0.01,
      100
    );

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);

    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
  }

  addEventListeners() {
    window.addEventListener("resize", this.handleResize);

    const animate = () => {
      this.tick();
      this.animationId = requestAnimationFrame(animate);
    };
    this.animationId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", this.handleMouseMove);
  }

  handleResize = () => {
    this.resize();
  };

  handleMouseMove = (e: MouseEvent) => {
    this.mousemove(e);
  };

  resize() {
    this.setSizes();
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);

    this.resizeCallbacks.forEach((callback) => {
      callback(this.sizes);
    });
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    let elapsed = this.clock.getElapsedTime();

    this.tickCallbacks.forEach((callback) => {
      callback(elapsed);
    });
  }

  mousemove(e: MouseEvent) {
    this.pointer.x = (e.clientX / this.sizes.width) * 2 - 1;
    this.pointer.y = -(e.clientY / this.sizes.height) * 2 + 1;
  }

  onResize(callback: (sizes: any) => void) {
    this.resizeCallbacks.push(callback);
  }

  onTick(callback: (elapsed: number) => void) {
    this.tickCallbacks.push(callback);
  }

  dispose() {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousemove", this.handleMouseMove);
    this.renderer.dispose();
    
    // Dispose of scene contents
    this.scene.traverse((object) => {
        if ((object as any).geometry) (object as any).geometry.dispose();
        if ((object as any).material) {
            if (Array.isArray((object as any).material)) {
                (object as any).material.forEach((material: any) => material.dispose());
            } else {
                (object as any).material.dispose();
            }
        }
    });
  }
}

// --- GhostLogo Class ---

export interface GhostLogoParams {
  particleColor?: string;
  layer1Color?: string;
  layer2Color?: string;
  particleSize?: number;
  rotationSpeed?: number;
  rotationRange?: number;
  pointerEffect?: number;
  alphaBlending?: boolean;
}

export class GhostLogoEffect {
  domElement: HTMLElement;
  params: GhostLogoParams;
  threeElements: ThreeElements;
  materials: THREE.ShaderMaterial[];
  group: THREE.Group;
  controls!: OrbitControls;
  cursorPlane!: THREE.Mesh;
  textures: { alpha?: THREE.Texture } = {};
  uniforms: any;
  materialProps: any;
  animation: any;
  timeline: any;
  model: any;
  points: any;
  layer1: any;
  layer2: any;

  constructor(domElement: HTMLElement, params: GhostLogoParams) {
    this.domElement = domElement;
    this.params = {
      particleColor: "#1bc88c",
      layer1Color: "#ff0000",
      layer2Color: "#0000ff",
      particleSize: 3,
      rotationSpeed: 0.4,
      rotationRange: 0.1,
      pointerEffect: 0.1,
      alphaBlending: true,
      ...params,
    };

    this.threeElements = new ThreeElements(this.domElement);
    this.materials = [];
    this.group = new THREE.Group();
    this.threeElements.scene.add(this.group);

    this.setControls();
    this.loadTextures();
    this.setCommonUniforms();
    this.setAnimation();
    this.loadModel();
    this.addEventListeners();
  }

  setControls() {
    let { camera, scene } = this.threeElements;
    camera.position.set(0, 0, 7);
    this.controls = new OrbitControls(camera, this.domElement);
    this.controls.enabled = false;

    this.cursorPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
    );
    this.cursorPlane.position.z = -6;

    camera.add(this.cursorPlane);
    scene.add(camera);
  }

  loadTextures() {
    this.textures = {};
    let textureLoader = new THREE.TextureLoader();
    this.textures.alpha = textureLoader.load("/ghost-logo/alpha.png");
  }

  setCommonUniforms() {
    let { sizes } = this.threeElements;
    this.uniforms = {
      uHalfHeight: new THREE.Uniform(sizes.height * 0.5),
      uTime: new THREE.Uniform(0),
      uAlphaMap: new THREE.Uniform(this.textures.alpha),
      uPointer: new THREE.Uniform(new THREE.Vector3(-10, -10, -10)),
      uAnimation: new THREE.Uniform(0),
      uPointerEffect: new THREE.Uniform(this.params.pointerEffect),
      uClickFactor: new THREE.Uniform(0),
    };

    this.materialProps = {
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: this.params.alphaBlending
        ? THREE.AdditiveBlending
        : THREE.NormalBlending,
    };
  }

  setAnimation() {
    this.animation = {
      progress: 0,
    };

    this.timeline = gsap.timeline().pause();
    this.timeline.to(this.animation, {
      progress: 1,
      duration: 3,
      ease: "power4.out",
      onUpdate: () => {
        this.uniforms.uAnimation.value = this.animation.progress;
      },
    });
  }

  loadModel() {
    let loader = new GLTFLoader();

    loader.load("/ghost-logo/model.glb", (gltf) => {
      let model = gltf.scene;
      this.model = model;

      model.traverse((node: any) => {
        switch (node.name) {
          case "opt3_body":
            this.addPoints(node);
            break;
        }
      });
      
      // Play animation after load
      this.playAnimation();
    });
  }

  addPoints(node: THREE.Mesh) {
    let geometry = node.geometry.clone();
    this.addRandomizerAttribute(geometry);

    let createMaterial = (color: string) => {
      return new THREE.ShaderMaterial({
        vertexShader: particleVs,
        fragmentShader: particleFs,
        uniforms: {
          uColor: new THREE.Uniform(new THREE.Color(color)),
          uSize: new THREE.Uniform(this.params.particleSize || 3),
          ...this.uniforms,
        },
        ...this.materialProps,
      });
    };

    let material = createMaterial(this.params.particleColor || "#ffffff");
    this.points = new THREE.Points(geometry, material);

    let layer1Material = createMaterial(this.params.layer1Color || "#ff0000");
    this.layer1 = new THREE.Points(geometry, layer1Material);
    this.layer1.scale.setScalar(1.03);
    this.layer1.visible = false;

    let layer2Material = createMaterial(this.params.layer2Color || "#0000ff");
    this.layer2 = new THREE.Points(geometry, layer2Material);
    this.layer2.scale.setScalar(1.06);
    this.layer2.visible = false;

    this.materials.push(material, layer1Material, layer2Material);
    this.group.add(this.points, this.layer1, this.layer2);
  }

  addRandomizerAttribute(geometry: THREE.BufferGeometry) {
    let count = geometry.attributes.position.count;
    let values = [];
    let values3 = [];

    for (let i = 0; i < count; i++) {
      values.push(Math.random());
      values3.push(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      );
    }

    geometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(new Float32Array(values), 1)
    );

    geometry.setAttribute(
      "aRandom3",
      new THREE.BufferAttribute(new Float32Array(values3), 3)
    );
  }

  addEventListeners() {
    let { raycaster, pointer, camera } = this.threeElements;

    let rotationSpeed = this.params.rotationSpeed || 0;
    let rotationRange = this.params.rotationRange || 0;

    this.threeElements.onTick((elapsed) => {
      raycaster.setFromCamera(pointer, camera);
      let intersection = raycaster.intersectObject(this.cursorPlane);
      
      if (intersection.length > 0) {
          let cursor = intersection[0].point.clone();
          this.uniforms.uPointer.value.copy(cursor);
      }

      this.uniforms.uTime.value = elapsed;

      this.group.rotation.y =
        Math.cos(Math.PI * 0.5 + elapsed * rotationSpeed) *
        Math.PI *
        rotationRange;
    });

    this.threeElements.onResize((sizes: any) => {
      this.materials.forEach((material) => {
        material.uniforms.uHalfHeight.value = sizes.height * 0.5;
      });
    });

    this.domElement.addEventListener("mousedown", this.handleClick);
    this.domElement.addEventListener("mouseup", this.handleClickRelease);
    this.domElement.addEventListener("mouseleave", this.handleClickRelease);
  }
  
  handleClick = () => {
      this.click();
  }
  
  handleClickRelease = () => {
      this.clickRelease();
  }

  click() {
    if (this.layer1) this.layer1.visible = true;
    if (this.layer2) this.layer2.visible = true;
    this.uniforms.uClickFactor.value = 1;
  }

  clickRelease() {
    if (this.layer1) this.layer1.visible = false;
    if (this.layer2) this.layer2.visible = false;
    this.uniforms.uClickFactor.value = 0;
  }

  playAnimation() {
    this.timeline.restart();
  }

  dispose() {
      this.domElement.removeEventListener("mousedown", this.handleClick);
      this.domElement.removeEventListener("mouseup", this.handleClickRelease);
      this.domElement.removeEventListener("mouseleave", this.handleClickRelease);
      this.threeElements.dispose();
  }
}


"use client";

import { MeshGradient as PaperMeshGradient } from "@paper-design/shaders-react";
import { CSSProperties } from "react";

interface MeshGradientProps {
  colors: string[];
  speed?: number;
  distortion?: number;
  swirl?: number;
  style?: CSSProperties;
}

export function MeshGradient({
  colors,
  speed = 1,
  distortion = 0.8,
  swirl = 1,
  style,
}: MeshGradientProps) {
  return (
    <PaperMeshGradient
      colors={colors}
      speed={speed}
      distortion={distortion}
      swirl={swirl}
      grainMixer={0}
      grainOverlay={0}
      style={style}
    />
  );
}








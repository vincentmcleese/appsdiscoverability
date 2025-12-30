# Agent Guidelines for Spec-Driven Development

## Protocol for AI Agents
When starting a session in this repository, follow this sequence to ensure compliance with our Spec-Driven Development (SDD) workflow.

### 1. Load Context
Always read `specs.md` at the root of `ghost-team-new` to understand the internal architectural rules.

```bash
read_file ghost-team-new/specs.md
```

### 2. Verify Tessl Specs
Check if Tessl specs are installed for the current workspace. These specs provide the correct API usage for external libraries (Next.js, React, Tailwind, etc.).

```bash
npx @tessl/cli list
```

If specs are missing, install them from the `tessl` workspace:
```bash
npx @tessl/cli install tessl/npm-next@16.0.0 tessl/npm-react@19.2.0 tessl/npm-framer-motion@12.23.0 tessl/npm-lucide-react@0.542.0 tessl/npm-tailwindcss@3.4.0
```

### 3. Implementation Rules
*   **Strict Adherence**: If `specs.md` says "Use `sanityFetch`", do not use `fetch()`.
*   **Version Awareness**: We are on **Next.js 16** and **React 19**. Do not suggest `pages/` directory patterns or outdated React patterns (e.g., default to Server Components unless `use client` is strictly needed).
*   **Component Reuse**: Always prioritize `components/ui` over creating new styles.

## Quick Reference
*   **Merging Classes**: `import { cn } from "@/lib/utils"`
*   **Fetching Data**: `import { sanityFetch } from "@/lib/sanity"`
*   **Layout Container**: `import { Card } from "@/components/ui/Card"`

# Agent Rules <!-- tessl-managed -->

@.tessl/RULES.md follow the [instructions](.tessl/RULES.md)

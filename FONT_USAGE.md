# PP Neue Montreal Font Usage

The PP Neue Montreal font is configured as the primary font for the application.

## Default Font
- **Default weight**: Medium (500) - automatically applied to all text

## Available Utility Classes

### Font Weights
Use Tailwind's font-weight utilities to access different weights:

- `font-thin` - Thin (100)
- `font-normal` - Book (400)
- `font-medium` - Medium (500) - **Default**
- `font-bold` - Bold (700)

### Font Styles
- `italic` - Italic style (uses Book Italic at weight 400)
- `font-semibold italic` - Semibold Italic (600)

## Examples

```tsx
// Default - Medium weight
<p>This is default text in Medium weight</p>

// Thin
<p className="font-thin">This is thin text</p>

// Book (Normal)
<p className="font-normal">This is book weight text</p>

// Bold
<p className="font-bold">This is bold text</p>

// Italic
<p className="italic">This is italic text</p>

// Semibold Italic
<p className="font-semibold italic">This is semibold italic text</p>
```

## Technical Details

The font is configured using Next.js `localFont` in `app/fonts.ts` and applied via CSS variable `--font-neue-montreal` in the Tailwind config.

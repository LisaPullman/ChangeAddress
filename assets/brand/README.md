# foxai brand assets

This folder holds the foxai brand layer for the address generator.
The implementation spec lives at `../../LOGO.html`; the tokens and
recipes below are derived from §3 and §4 of that document.

## Files

| File | Purpose | Use when |
| --- | --- | --- |
| `mark.svg` | Bare stroke "f" with detached endpoint dot | Anywhere with enough contrast (cards, nav, hero). Strokes + dot inherit from `currentColor`, so the surrounding CSS theme decides the accent. |
| `tile.svg` | Opaque Ember rounded square with reversed white mark | Favicons, app icons, any surface ≤ 24 px. |
| `lockup.svg` | Mark + "foxai" wordmark ("ai" picks up brand color) | Navbars, hero, footer. |
| `brand.css` | Light + dark `--brand` / `--brand-foreground` / `--brand-muted` tokens | Imported by `../../style.css` before any other rules. |

## Tokens

| Token | Light | Dark | Notes |
| --- | --- | --- | --- |
| `--brand` | `#E2571F` | `#FF7A4D` | Ember. Hue hovers at 39° in both modes. |
| `--brand-foreground` | `#FFFFFF` | `#1a1a1a` | Mark fill inside a tile. |
| `--brand-muted` | `rgba(226,87,31,0.12)` | `rgba(255,122,77,0.16)` | Soft tint for hover / selected. |
| `--primary` | `var(--brand)` | `var(--brand)` | All site chrome uses this. |
| `--primary-dark` | `#b9461a` | `#e3643a` | Hover / pressed. |
| `--primary-light` | `var(--brand-muted)` | `var(--brand-muted)` | Soft fills. |

## Usage

```html
<!-- Bare mark, color follows currentColor -->
<span style="color: var(--brand)">
  <svg width="28" height="28" viewBox="0 0 64 64"><!-- mark.svg content --></svg>
</span>

<!-- Lockup, "ai" already lifted to brand color -->
<img src="assets/brand/lockup.svg" alt="foxai" width="120">
```

## Theme switching

`brand.css` honours `prefers-color-scheme` automatically. Users can
override with `data-theme="dark"` or `data-theme="light"` on `<html>`.
The site stores the choice in `localStorage["theme"]`.

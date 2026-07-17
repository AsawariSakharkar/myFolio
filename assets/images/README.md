# Images — how to replace the placeholders

Every image slot has a labeled SVG placeholder so the site looks complete
before you add real exports. Each placeholder shows its filename and the
target dimensions right on it.

## Map of image slots

| File(s)                                | What it is                     | Set in `content.js`        | Suggested size |
| -------------------------------------- | ------------------------------ | -------------------------- | -------------- |
| `hero-locket.svg`                      | The open-locket hero artwork   | `hero.image`               | 476 × 332      |
| `favicon.svg`                          | Browser tab icon               | `meta.favicon`             | square         |
| `projects/project-1..5.svg`            | Project thumbnails             | `projects.items[].image`   | 295 × 237      |
| `outfits/outfit-1..15.svg`             | Fashion gallery (scrolls)      | `fashion.photos[].image`   | 333 × 592 (portrait) |

## To swap an image

1. Export from Figma. For the **locket**, select the whole "Group 32" and
   export it as ONE transparent **PNG** — simplest and cleanest.
2. Drop the file into the matching folder, e.g. `projects/project-1.png`.
3. In `assets/js/content.js`, update that one path (or keep the exact same
   filename to skip even that step).

Projects and outfits are arrays — add or remove entries freely and the layout
adapts. Delete the ones you don't use.

## Resume

The header "Resume" button links to `assets/resume.pdf`. Replace that file with
your real PDF (or change `header.resumeFile` in `content.js`).

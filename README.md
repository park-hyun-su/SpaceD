# SpaceD Website

Official static website for **SpaceD - Software-Defined Datacenter Satellites**.

Live site: [https://www.spacedpt.com](https://www.spacedpt.com)

## Pages

| Page | Source | URL |
| --- | --- | --- |
| Home | `index.html` | `/` |
| Why Space | `why-space/index.html` | `/why-space/` |
| Technology | `technology/index.html` | `/technology/` |
| SDDS | `sdds/index.html` | `/sdds/` |
| XaaS | `xaas/index.html` | `/xaas/` |
| Applications | `applications/index.html` | `/applications/` |

## Shared assets

- `spaced-logo-cutout-white.png`: shared SpaceD logo
- `spaced-intro-en.mp4`: English-subtitled introduction video used on the home page
- `member-seungjo-kim.jpg`: Seung Jo Kim profile photo
- `assets/detail.css`: detail-page stylesheet based on the home-page design system
- `assets/detail.js`: EN/KO language toggle for detail pages

## Editing

- Keep folder and file names lowercase.
- Every clean URL folder must contain an `index.html` file.
- Preserve UTF-8 encoding when editing Korean content.
- Update both `data-lang="en"` and `data-lang="ko"` versions when changing copy.
- Do not change absolute links such as `/technology/` to local file paths.

## Deployment

The site is deployed with GitHub Pages and the custom domain `www.spacedpt.com`.

1. Commit changes to the GitHub Pages publishing branch.
2. Wait for the Pages deployment workflow to complete.
3. Verify the home page and each clean URL above.
4. Confirm that HTTPS remains enforced in repository **Settings > Pages**.

## Contact

`syntax.kmu@gmail.com`

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-04-13

### Added
- CI workflow that runs type checking and build on every push to `main` and every pull request
- `Footer` component `showCopyright` and `compact` props to control copyright visibility and padding
- `Layout` component `compactFooter` prop, forwarded to `Footer`

### Changed
- Upgraded to Astro 6 with the new loader-based content collections API (`src/content.config.ts`, `glob()` loader)
- Upgraded to Tailwind CSS v4, configured via `@tailwindcss/vite` Vite plugin — no config file needed; dark mode now uses `@custom-variant` in CSS
- Replaced `standard-version` with plain `npm version` for releases — changelog is now maintained manually in Keep a Changelog format
- Simplified release workflow: replaced `softprops/action-gh-release` with built-in `gh release create`; build artifact is shared between jobs via `actions/upload-artifact` to avoid a double build
- Release pipeline now uses `env:` blocks for all dynamic values to eliminate injection risk

### Fixed
- Changelog extraction `awk` pattern in release workflow now correctly handles Keep a Changelog format

## [0.2.2] - 2025-11-11

### Fixed
- Fixed GitHub Actions build failures
- Resolved TypeScript errors in Layout.astro
- Corrected Footer component prop interface

### Changed
- Improved GitHub release notes workflow to extract full changelog content
- Updated release automation to handle both standard-version and Keep a Changelog formats

## [0.2.1] - 2025-11-11

### Fixed
- Fixed build errors caused by `showCopyright` prop references
- Removed unused `showCopyright` from Layout.astro Props interface
- Updated index.astro to remove `showCopyright` prop

## [0.2.0] - 2024-11-11

### Added
- WebP image support with automatic conversion for optimized performance
- Sample blog post images (sample-1.jpg, sample-2.jpg) with WebP versions
- Logo WebP version with 98% size reduction (17KB vs 829KB)
- Custom favicon set (16x16, 32x32, Apple touch icon, Android chrome icons)

### Changed
- Updated author information to "amirdaraee" throughout the project
- Updated GitHub repository URLs to amirdaraee/astro-pulsar
- Updated email to amirdaraee@gmail.com
- Blog post images now use sample-1.jpg and sample-2.jpg with image credits
- All blog post authors updated to "amirdaraee"

### Fixed
- Fixed double slash bug in blog image paths (was //sample-1.webp, now /sample-1.webp)
- Fixed image loading issues in blog listing and individual post pages
- Corrected image path handling in blog templates

### Removed
- Copyright notice from footer (keeping only social links)

## [0.1.0] - 2024-11-10

### Added
- Initial release of Astro Pulsar theme
- Dark mode support with localStorage persistence
- SEO optimization (meta tags, Open Graph, Twitter Cards, JSON-LD)
- Responsive design with pure Tailwind CSS
- Blog functionality with Astro Content Collections
- Syntax highlighting with Prism (GitHub Dark theme)
- Automatic sitemap generation
- Google Analytics 4 integration (optional)
- Accessible design with ARIA labels and semantic HTML
- Mobile-responsive navigation with hamburger menu
- Font Awesome 4.7 icons integration
- Custom 404 error page
- Print-friendly styles for blog posts
- Skip-to-content link for accessibility
- Layout system with customizable header and footer
- SEO component for meta tags
- Dark mode toggle component
- Responsive header with mobile menu
- Social links footer
- Homepage, blog listing, individual post, about, and 404 pages

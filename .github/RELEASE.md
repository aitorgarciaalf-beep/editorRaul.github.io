# Release Process

## How to create a release

1. **Update `CHANGELOG.md`** — add a new `## [x.y.z] - YYYY-MM-DD` section under `## [Unreleased]` with your changes

2. **Run the release script** — this builds the project and bumps the version in `package.json`, creating a git commit and tag automatically:

   ```bash
   npm run release        # patch:  0.2.2 → 0.2.3
   npm run release:minor  # minor:  0.2.2 → 0.3.0
   npm run release:major  # major:  0.2.2 → 1.0.0
   ```

3. **Push the commit and tag**:

   ```bash
   git push --follow-tags origin main
   ```

4. GitHub Actions picks up the tag, extracts the matching section from `CHANGELOG.md`, and publishes the GitHub Release with `.tar.gz` and `.zip` archives automatically.

---

## CHANGELOG format

Each version block must start with exactly `## [x.y.z] - YYYY-MM-DD` for the release workflow to extract it correctly.

```markdown
## [Unreleased]

## [0.3.0] - 2026-04-13

### Added
- New feature description

### Changed
- Changed behaviour description

### Fixed
- Bug fix description

## [0.2.2] - 2025-11-11
...
```

Supported subsections: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`.

---

## Pre-releases

Any version containing a `-` is automatically marked as a pre-release on GitHub (e.g. `v1.0.0-beta.1`).

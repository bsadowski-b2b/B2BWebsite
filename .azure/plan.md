# Azure Static Web Apps Deployment Plan

Status: Ready for Validation

## Goal

Deploy the B to B Visions static website to Azure Static Web Apps.

## Current Project

- Project path: `/Users/Laura/Documents/B2BWebsite/b2b-template`
- Site type: plain static HTML, CSS, JavaScript, and image assets
- Entry point: `index.html`
- No backend API
- No framework build step required
- Local preview command: `npm start`

## Recommended Azure Service

Azure Static Web Apps.

## Deployment Recipe

Use GitHub-backed Azure Static Web Apps deployment as the primary path.

- App location: `/`
- API location: empty
- Output location: empty
- Skip app build: true

This matches the current project because the deployable files already live at the project root.

## Files Added

- `staticwebapp.config.json`
  - Adds static-site headers and clean fallback behavior.
- `.github/workflows/azure-static-web-apps.yml`
  - Provides a reusable GitHub Actions deployment workflow.
- `README.md`
  - Documents the Azure Portal, GitHub Actions, SWA CLI, and package steps.
- `package.json`
  - Adds `npm run package:azure`.
- `.gitignore`
  - Excludes generated deployment packages in `dist/`.

## Manual Package Option

Create a zip package from the project root excluding local-only folders and system files.

The zip should include:

- `index.html`
- `styles.css`
- `script.js`
- `assets/**`
- `staticwebapp.config.json` once added

The zip should exclude:

- `.git`
- `.DS_Store`
- `node_modules`
- downloaded source mirrors

## Validation

- Confirm local site loads with `npm start`.
- Confirm Azure deployment settings point to app location `/`.
- Confirm no build output folder is configured for this plain static site.
- Confirm all images and CSS load from relative paths.
- Confirm the Azure package command creates `dist/btobvisions-static-site.zip`.

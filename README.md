# B2BWebsite

B to B Visions static website for Azure Static Web Apps.

## Run Locally

```sh
npm start
```

Open `http://localhost:4173`.

If that port is busy:

```sh
PORT=4174 npm start
```

## Project Layout

- `index.html` contains the page sections and copy.
- `styles.css` controls layout, colors, spacing, and responsive behavior.
- `script.js` handles the mobile menu, FAQ toggles, and trading partner UI.
- `assets/` contains brand, footer, and trading partner images.
- `staticwebapp.config.json` contains Azure Static Web Apps routing and headers.

## Package For Handoff

Create a clean zip package:

```sh
npm run package:azure
```

The zip is written to:

```text
dist/btobvisions-static-site.zip
```

The zip is useful for backup or handoff. For Azure Static Web Apps deployment, use the GitHub workflow or SWA CLI path below.

## Deploy With Azure Portal And GitHub

1. Push this repository to GitHub.
2. In the Azure Portal, create a new **Static Web App**.
3. Choose **GitHub** as the deployment source.
4. Select the repository and branch. The included workflow assumes the branch is `main`; edit `.github/workflows/azure-static-web-apps.yml` if your branch is different.
5. Use these build settings:

```text
App location: /
API location: leave blank
Output location: leave blank
Skip app build: true
```

6. This repository already includes the Azure-generated workflow at:

```text
.github/workflows/azure-static-web-apps-wonderful-beach-042aa080f.yml
```

7. Confirm the workflow uses these settings:

```yaml
app_location: "/"
api_location: ""
output_location: ""
skip_app_build: true
```

8. Confirm the Static Web Apps deployment token exists as the GitHub repository secret used by the workflow:

```text
AZURE_STATIC_WEB_APPS_API_TOKEN_WONDERFUL_BEACH_042AA080F
```

You can get or rotate the token in the Azure Portal from the Static Web App resource overview by choosing **Manage deployment token**.

After the secret is set, a push to `main` deploys the site.

## Deploy With The Static Web Apps CLI

Install the CLI:

```sh
npm install -g @azure/static-web-apps-cli
```

Deploy the current folder:

```sh
swa deploy . --env production
```

If you are not already logged in, use:

```sh
swa login
```

Or deploy with a token:

```sh
SWA_CLI_DEPLOYMENT_TOKEN="<deployment-token>" swa deploy . --env production
```

Do not commit deployment tokens to the repository.

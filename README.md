# Faultline Website

Premium, responsive landing page concept for Faultline — an open-source security remediation project.

## Requirements
- Node.js 20 or newer recommended
- npm

## Run locally (PowerShell)
```powershell
Set-Location .\FaultlineWebsite
npm.cmd install
npm.cmd run dev
```
Open http://localhost:3000

## Build for production
```powershell
npm.cmd run build
npm.cmd start
```

## Assets
- `public/logo.png` — supplied Faultline orange/red F logo.
- `public/images/hero-reference.png` — design reference image, not used as a page background.

## Notes
- The page uses the public repository at https://github.com/devloperdevesh/Faultline.
- The dashboard and walkthrough are explicitly labelled conceptual. They do not claim live scanner integration, automatic remediation, or verified production outcomes.
- Fonts are loaded from Google Fonts; if offline, system fallbacks are used.

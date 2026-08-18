# IEKA CRM Mobile

A React Native TypeScript mobile application (Expo-based) for IEKA CRM features and dashboards.

## Table of contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This repository contains the IEKA CRM mobile app implemented with React Native and TypeScript. It provides authentication flows, a dashboard with modules (leaves, attendance, reimbursements), reusable UI components, and API integration.

## Prerequisites

- Node.js (recommend LTS)
- npm or yarn
- Expo CLI (if running via Expo) — check `app.json` to confirm SDK

## Getting started

1. Install dependencies

```bash
npm install
# or
# yarn
```

2. Start the development server

```bash
npm run dev
# or
npm start
```

3. Run on device/emulator

- For Expo: use the Expo Go app or `expo run:android` / `expo run:ios` depending on setup.

Note: Check `package.json` scripts for exact commands used in this repository.

## Available scripts

Check the scripts section in [package.json](package.json) for up-to-date commands. Common scripts you may find:

- `dev` — start development server
- `start` — start Metro/Expo
- `build` — create a production build

## Project structure

- [App.tsx](App.tsx) — application entry point
- [app.json](app.json) — Expo / app configuration
- [package.json](package.json) — dependencies and scripts
- [src/](src/) — application source
  - [src/navigation/AppNavigator.tsx](src/navigation/AppNavigator.tsx) — app navigation
  - [src/navigation/RootNavigator.tsx](src/navigation/RootNavigator.tsx)
  - [src/screens/](src/screens/) — feature screens (Auth, Dashboard, Services, Menu)
  - [src/components/](src/components/) — shared components and UI primitives
  - [src/services/api.ts](src/services/api.ts) — API setup and request helper
  - [src/store/auth.store.ts](src/store/auth.store.ts) — auth state management
  - [src/utils/](src/utils/) — helpers, constants and config
- [assets/](assets/) — images, fonts and static assets
- [public/](public/) — extra static files
- [LICENSE](LICENSE) — project license

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Implement changes and add tests where applicable
4. Open a pull request and describe your changes

Please follow existing TypeScript and linting styles used in the codebase.

## License

This project is licensed under the terms in the [LICENSE](LICENSE) file.

---

If you'd like, I can expand sections (detailed setup, environment variables, example API usage) or adjust wording for internal/external docs.
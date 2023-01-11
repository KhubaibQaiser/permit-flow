This is a [Permit-Flow](https://permit-flow.vercel.app/) take home assignment, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Walkthrough of the project

Visit the following link to get a walkthrough of the project: [Permit-Flow-Loom](https://www.loom.com/share/460d87cc26134e188a4ea19b7b912234)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- NextJS
- TypeScript
- MUI
- tRPC
- zod
- ESLINT+PRETTIER

  #### Improvements

  - Can integrate Primsa+SQLite for the DB.
  - Can integrate a form handling library like react-hook-form or formik.

## Folder Hierarchy

    .
    ├── public
    ├── src
    │   ├── app
    │   │   ├── components                                        # Shared Components
    │   │   │   ├── core
    │   │   │   │   └── form
    │   │   │   └── Page
    │   │   ├── containers                                        # Page Containers
    │   │   │   ├── Permit
    │   │   │   │   └── Requirements
    │   │   │   │       ├── components
    │   │   │   │       │   ├── PermitRequirementForm
    │   │   │   │       │   ├── PermitRequirementPage
    │   │   │   │       │   └── PermitProcess
    │   │   │   │       ├── PermitRequirements.tsx
    │   │   │   │       ├── usePermitRequirementsState.ts         # Custom Hooks for each component to handle business logic
    │   │   │   │       └── ...
    │   │   └── styles                                            # Global styles
    │   ├── pages
    │   │   ├── api
    │   │   │   └── trpc                                          # tRPC config for NextJS
    │   └── server                                                # BE
    │   │   ├── routers                                           # Routers from all modules
    │   │   │   ├── permit                                        # Permit module specific routers
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── db.ts                                     # Dummy db
    │   │   │   │   ├── permit.route.ts                           # All Permit Routes/Endpoints
    │   │   │   │   ├── types.ts                                  # Permit typings
    │   │   │   │   └── utils.ts                                  # Utility functions for Permit module
    │   │   │   └── _app.ts                                       # Merge all routers from all modules into one AppRouter
    │   │   ├── context.ts
    │   │   └── trpc.ts                                           # tRPC setup
    └── ...

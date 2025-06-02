---
description: Project-specific rules for React Native Template
globs: 
alwaysApply: true
---

# Project-Specific Rules (React Native Template)

## Package Structure Rules
- Never edit files in `/packages/gen/` directly as they are auto-generated

## i18n Generation Workflow
- Add new translations to `/i18n/*.csv` files, never directly to JSON
- CSV filename automatically becomes prefix (`/i18n/common.csv` → `t('common.xxx')`)
- Use translation keys in `t('filename.xxx')` format
- Always run `npm run gen:i18n` after updating CSV files

## Database & Migration Rules
- Always run `npm run db:generate` to create migrations after Drizzle schema changes

## Monorepo Workspace Rules
- Use `workspace:*` for inter-package dependencies
- Place shared type definitions in `/packages/shared/types/`
- Use `shared/foo/bar` format for cross-package imports
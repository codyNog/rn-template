# shared

This directory contains modules that are shared in the monorepo.

## Package Structure

The `shared` package is organized as follows:

```
shared/
├── api/          # Hono-based API endpoints
├── convex/       # Convex schemas and functions
├── db/           # Database migrations and schemas (Drizzle ORM)
├── libs/         # Shared libraries and hooks
├── rpc/          # RPC definitions
├── supabase/     # Supabase client configurations
└── types/        # Shared TypeScript types
```

## Convex Integration

This project uses [Convex](https://www.convex.dev/) for real-time data synchronization.

### Setup

1. Install dependencies (already included in package.json):
   ```bash
   npm install convex
   ```

2. Configure environment variables:
   ```env
   CONVEX_URL=your_convex_url
   NEXT_PUBLIC_CONVEX_URL=your_convex_url  # For Next.js
   EXPO_PUBLIC_CONVEX_URL=your_convex_url  # For React Native
   ```

3. Convex functions are located in `packages/shared/convex/`

### Usage

Import the Convex provider and hooks from the shared library:

```typescript
// For React Native
import { ConvexProvider } from 'shared/libs/convex/provider'

// Use in your app
<ConvexProvider>
  <App />
</ConvexProvider>
```

```typescript
// Use Convex hooks
import { useConvex } from 'shared/libs/convex/useConvex'

const convex = useConvex()
```

## Supabase Integration

[Supabase](https://supabase.com/) is used for authentication and database operations.

### Setup

1. Configure environment variables:
   ```env
   SUPABASE_PROJECT_ID=your_project_id
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_anon_key
   ```

2. Initialize Supabase clients:

```typescript
// For client-side
import { supabase } from 'shared/supabase/client'

// For server-side (with service role)
import { createClient } from 'shared/supabase/server'
```

### Database Types

Supabase database types are auto-generated and stored in `shared/supabase/types/database.types.ts`.

To regenerate types after schema changes:
```bash
npm run db:types
```

## Hono API

The API layer is built with [Hono](https://hono.dev/), a lightweight web framework.

### Structure

- **Routes**: Defined in `shared/api/route/`
- **Server**: Configuration in `shared/api/server/`
- **Types**: API types in `shared/api/types/`

### Usage

```typescript
import { server } from 'shared/api/server'
import { route } from 'shared/api/route'

// The API is already configured with:
// - CORS enabled for all origins
// - Routes for users endpoint
// - Type-safe API client via RPC
```

### API Client

Use the type-safe RPC client:

```typescript
import { client } from 'shared/rpc/client'

// Make API calls
const response = await client.api.users.$get()
const data = await response.json()
```

## Development Workflow

1. **Database Changes**: 
   - Update Drizzle schemas in `shared/db/schemas/`
   - Run `npm run db:generate` to create migrations

2. **Translations**:
   - Add translations to `/i18n/*.csv` files
   - Run `npm run gen:i18n` to generate JSON files

3. **Type Generation**:
   - Supabase types: `npm run db:types`
   - API types are automatically inferred from Hono routes

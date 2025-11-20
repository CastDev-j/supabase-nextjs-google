# Supabase + Next.js OAuth Example

A minimal example showing how to wire Supabase auth into a Next.js app for local development.

## Prerequisites

- Node.js (16+ recommended)
- A Supabase project (you’ll need the Project URL and the public anon key)

## Setup

1. Copy the example environment file

- macOS / Linux:

```bash
cp .template.env .env.local
```

- Windows (PowerShell):

```powershell
Copy-Item .template.env .env.local
```

2. Edit `.env.local` and set the values from your Supabase project:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-or-publishable-key
```

Make sure you obtain the URL and keys from Supabase → Project Settings → API.

If this example uses OAuth, also add the redirect URL in Supabase Auth settings, e.g.:

- http://localhost:3000/api/auth/callback

## Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 and test sign-in / OAuth flows.

## Notes / Troubleshooting

- After changing `.env.local` restart the dev server.
- If auth redirects fail, confirm the redirect URL configured in Supabase exactly matches the URL used by the app (including protocol and trailing slash).
- For production, never expose service_role keys to the client—use server-side environment variables only.

For more info, see Supabase docs: https://supabase.com/docs

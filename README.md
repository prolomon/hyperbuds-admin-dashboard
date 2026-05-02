# hyperbuds-admin-dashboard

A Next.js 16 (App Router) admin dashboard with TypeScript, Tailwind CSS, and Lucide React icons.

## Pages

| Route | Description |
|---|---|
| `/` | Login page |
| `/admin` | Dashboard – stats overview & recent activity |
| `/admin/members` | Members management table |
| `/admin/payments` | Payments & transactions |
| `/admin/customer-support` | Support ticket tracker |
| `/admin/reports` | Reports list & downloads |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo login credentials (development only)
- **Email:** `admin@hyperbuds.com`
- **Password:** `password`

> ⚠️ Replace the hardcoded demo credentials in `src/app/page.tsx` with a real authentication provider before deploying to production.

## Tech Stack

- [Next.js 16](https://nextjs.org/) – App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- [Lucide React](https://lucide.dev/) – icon library

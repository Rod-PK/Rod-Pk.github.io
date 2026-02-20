# rodneyhinson.dev

Personal portfolio — **Fullstack & AI Engineer**.

Built with React (Vite), Tailwind CSS, Express, and Firebase.

## Structure

```
client/   → React SPA (Vite + Tailwind CSS)
server/   → Express API (contact form + email delivery)
```

## Quick Start

### Frontend

```bash
cd client
npm install
npm run dev        # → http://localhost:5173
```

### Backend

```bash
cd server
cp .env.example .env   # Fill in your credentials
npm install
npm run dev            # → http://localhost:8080
```

## Deployment

| Layer    | Host             |
| -------- | ---------------- |
| Frontend | Firebase Hosting |
| Backend  | Google Cloud Run |
| Database | Firestore        |

CI/CD via GitHub Actions — pushes to `main` auto-deploy.

## License

MIT

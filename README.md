# Personal Portfolio Website

This is my personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark/Light mode
- Interactive UI with Framer Motion
- PDF Resume generation
- Projects showcase
- Contact form
- Experience timeline

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is configured for deployment on GitHub Pages. The deployment process is automated using GitHub Actions.

### Deployment Steps

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - Branch: Select "main"

The website will be automatically deployed to `https://<your-username>.github.io/website/`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
```

The static files will be generated in the `out` directory, which can be deployed to any static hosting service.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Puppeteer (for PDF generation) 
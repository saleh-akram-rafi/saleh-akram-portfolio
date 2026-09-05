# Saleh Akram Portfolio

A scroll-driven personal portfolio for Saleh Akram, a Computer Science and Engineering student at Daffodil International University. The site presents his education, technical and professional skills, projects, career goals, certifications, and awards through an animated single-page experience.

## Highlights

- Scroll-linked hero animation rendered from a WebP image sequence
- Animated section reveals and transitions with Framer Motion
- Responsive layout for desktop and mobile screens
- Education timeline and skills overview
- Projects and professional experience showcase
- Short-term and long-term career goals
- Certification and award gallery
- Links to GitHub, LinkedIn, and email

## Built With

- Next.js 14 using the App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- WebP image assets

## Portfolio Sections

The home page is composed from the following sections:

- **Hero:** Profile introduction and scroll-controlled visual sequence
- **Education:** Academic history at DIU, HSC, and SSC levels
- **Skills:** Technical skills including C, C++, Java, Python, ESP32, and AI Annotation, plus professional soft skills
- **Projects & Experience:** IoT, database, compiler design, web application, and data-structure projects, along with experience at Shikkha IT LTD.
- **Career Mapping & Vision:** Short-term goals for 2026-2027 and long-term goals for 2028 and beyond
- **Certifications & Awards:** Certificate and achievement gallery
- **Footer:** GitHub, LinkedIn, and email contact links

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/saleh-akram-rafi/saleh-akram-portfolio.git
cd saleh-akram-portfolio
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the Next.js lint command |

## Project Structure

```text
public/
  Profile/       Profile image
  certificates/  Certificate and award images
  sequence/      WebP frames used by the scroll animation
src/
  app/           App Router entry point, layout, and global styles
  components/   Portfolio sections
```

The hero preloads the frames in `public/sequence/` and draws the appropriate frame on a canvas as the visitor scrolls through the opening section.

## Production Build

To verify and build the application for production:

```bash
npm run build
npm run start
```

The optional `sharp` package can be installed for production image optimization:

```bash
npm install sharp
```

## Deployment

This project can be deployed to Vercel or another platform that supports Next.js applications. Use the standard build command:

```bash
npm run build
```

## Contact

- GitHub: [saleh-akram-rafi](https://github.com/saleh-akram-rafi/)
- LinkedIn: [saleh-akram01](https://www.linkedin.com/in/saleh-akram01/)
- Email: [salehakram02921@gmail.com](mailto:salehakram02921@gmail.com)

## License

No license has been added to this repository yet.

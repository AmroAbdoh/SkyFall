# SkyFall Enterprises Website Mimic

This project is a front-end recreation of the SkyFall Enterprises website, built as a practical training exercise and UI task inspired by the company’s brand and structure. The goal was to practice building a polished, responsive company website using React while recreating the overall look and feel of the SkyFall web experience.

This project is intended as a front-end mimic and learning exercise, not an official company website or production deployment of the original brand.

## Project Overview

SkyFall Enterprises is presented as a modern technology and digital services company, and this project recreates that identity through:

- a landing page with strong visual hierarchy
- service and business information sections
- company value and trust-building content
- work showcase sections
- contact and FAQ areas
- a responsive web layout suitable for desktop and mobile screens

## Features

- Responsive one-page website design
- React-based component architecture
- Reusable UI sections and cards
- Modern landing page styling
- Contact form and information blocks
- Service, work, about, and company detail sections
- Clean and lightweight front-end structure

## Tech Stack

- React
- JavaScript
- CSS Modules / custom CSS
- Create React App

## Project Structure

```bash
skyfall/
├── public/
├── src/
│   ├── AboutPage/
│   ├── ContactPage/
│   ├── HomePage/
│   ├── ServicesPage/
│   ├── WorkPage/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── index.jsx
│   └── ...
├── package.json
├── README.md
└── build/
```

## Getting Started

1. Clone the repository
2. Navigate to the project folder:

```bash
cd skyfall
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open the browser at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm start
```

Runs the app in development mode.

```bash
npm run build
```

Creates a production-ready build.

```bash
npm test
```

Runs the test suite.

```bash
npm run deploy
```

Deploys the app to GitHub Pages using the configured deployment setup.

## Deployment

This project is set up for deployment using GitHub Pages.

The repository already includes the deployment script configuration through `gh-pages` in `package.json`, so you can publish the app with:

```bash
npm run deploy
```

This command runs the production build first and then deploys the generated static files to the GitHub Pages hosting target.

If needed, update the project homepage URL in the package configuration before publishing:

```json
"homepage": "https://your-username.github.io/skyfall/"
```

After deployment, the website will be available at a GitHub Pages URL such as:

```text
https://your-username.github.io/skyfall/
```

## Notes

This project was created as a learning and training task focused on front-end implementation and UI mimicry for the SkyFall company brand. It demonstrates practical React and CSS work and serves as a portfolio-style exercise.

## License

This project is for educational and portfolio purposes.

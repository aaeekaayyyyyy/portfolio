# Portfolio - Ayushman Khandelwal

A modern, responsive portfolio website for a Machine Learning Engineer built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Professional sections: About, Education, Skills, Experience, Research, and Projects
- 🔗 Social media links and contact information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Research.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

To customize the portfolio:

1. **Personal Information**: Edit `src/components/Hero.jsx` for contact details
2. **Education**: Update `src/components/Education.jsx`
3. **Skills**: Modify `src/components/Skills.jsx`
4. **Experience**: Edit `src/components/Experience.jsx`
5. **Research**: Update `src/components/Research.jsx`
6. **Projects**: Modify `src/components/Projects.jsx`
7. **Colors**: Adjust the color scheme in `tailwind.config.js`

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `dist` folder contents
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is open source and available for personal use.


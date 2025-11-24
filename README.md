# Portfolio Template

A modern, responsive, and highly customizable portfolio template built with React, Vite, and Framer Motion.

## Features

- 🎨 **Modern Design**: Glassmorphism, gradients, and smooth animations.
- 📱 **Responsive**: Fully responsive layout for all devices.
- ⚡ **Fast**: Built with Vite for lightning-fast development and production.
- 🔧 **Configurable**: Easily customize content via a central configuration file.
- 📧 **Contact Form**: Integrated with EmailJS for working contact form.

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/vigneshdotdev/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```

## Customization

### Personal Information
Edit `src/data/config.js` to update your personal details, including:
- Name and Titles
- Story/Bio
- Social Links
- Contact Info

### Experience, Projects, and Skills
Update the following files in `src/data/`:
- `experience.js`: Add your work experience.
- `projects.js`: Add your projects.
- `skills.js`: Update your technical skills.

### Contact Form
1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Create a new service and template.
3.  Update `src/data/config.js` with your `serviceId`, `templateId`, and `publicKey`.

## License

MIT
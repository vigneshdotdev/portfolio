# Deployment Guide

Your portfolio is built with Vite + React, which makes it perfect for free hosting on **Vercel** or **Netlify**.

## Option 1: Vercel (Recommended)

1.  **Create a GitHub Repository**:
    - Push your code to a new GitHub repository.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Create a repo on GitHub and follow instructions to push
    ```

2.  **Sign up/Login to Vercel**:
    - Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3.  **Import Project**:
    - Click "Add New..." -> "Project".
    - Select your portfolio repository.

4.  **Deploy**:
    - Vercel will automatically detect it's a Vite project.
    - Click "Deploy".
    - Wait ~1 minute, and your site will be live!

## Option 2: Netlify

1.  **Sign up/Login to Netlify**:
    - Go to [netlify.com](https://netlify.com).

2.  **Import from Git**:
    - Click "Add new site" -> "Import an existing project".
    - Connect to GitHub and select your repo.

3.  **Deploy**:
    - Build command: `npm run build`
    - Publish directory: `dist`
    - Click "Deploy Site".

## Custom Domain

Since you have `vigneshhq.dev`:
1.  Go to your Vercel/Netlify project settings.
2.  Find "Domains".
3.  Add `vigneshhq.dev`.
4.  Follow the instructions to update your DNS records (usually adding an A record or CNAME) at your domain registrar.

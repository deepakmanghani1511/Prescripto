**Prescripto** is a streamlined online doctor appointment booking system designed to enhance patient-doctor interaction. It allows patients to effortlessly schedule and manage appointments, while doctors can oversee bookings and update their profiles. With its intuitive interface, secure payment integration, and smooth functionality, it ensures a hassle-free and efficient healthcare experience for all users.

This is an ongoing project. ** I have developed till frontend only.** 

**FRONTEND**

1. Create a folder "frontend"

2. npm create vite@latest

3. Project name = frontend

4. Select a framework: React

5. Select a variant: JavaScript

6.  cd frontend (navigate to folder)
    npm install (install dependencies)

7.  npm install axios react-router-dom react-toastify

8.  npm run dev	(run the project)

9. 	Clt + C

10. Install tailwind for vite from https://tailwindcss.com/docs/guides/vite

  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p 

11.  Write in tailwind.config.js

    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Write in index.css

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

12. npm run dev

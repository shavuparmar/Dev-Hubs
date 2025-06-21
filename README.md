# ⚡ DevHubs — Developer Resource Hub

A sleek, open-source platform built with **React** and **Vite** to help developers discover curated APIs, tools, and open-source resources. DevHubs features full support for dark/light mode, responsive design, smooth animations, and optimized performance — all designed to boost your development workflow.

---

## 🚀 Tech Stack

- **⚛️ React** — Component-based UI for fast, maintainable interfaces
- **⚡ Vite** — Blazing-fast development server and bundler
- **🎨 Tailwind CSS** — Utility-first CSS framework for rapid styling
- **🌗 Dark/Light Mode** — Context-based theme toggle for user preference
- **🧠 React Context API** — Global state management for theme and app data
- **📦 React Icons** — Lightweight icon components

---

## 🌟 Features

- **📚 Curated Developer Tools**  
  A comprehensive directory of APIs, frameworks, toolkits, and other resources — handpicked for quality and utility.

- **🌗 Dark & Light Themes**  
  Seamlessly switch between dark and light modes anywhere on the site with a toggle button.

- **📱 Mobile Responsive**  
  Fully responsive design that works smoothly on all devices, from phones to desktops.

- **✨ Animated UI**  
  Smooth fade-in and hover animations enhance user experience without overwhelming.

- **🧭 Smooth Scroll Navigation**  
  Anchor links scroll smoothly to page sections for intuitive browsing.

- **🛠 Modular Components**  
  Well-structured, reusable React components make the project scalable and maintainable.

---

## 📦 Installation & Running Locally

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/devhubs.git
cd devhubs
2. Install Dependencies
Make sure you have Node.js installed, then run:

bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm run dev
This will start the Vite dev server. Open your browser and visit http://localhost:5173 (or the port shown in your terminal) to see the app live.

🛠️ Build for Production
To build a production-ready optimized version of the app, run:

bash
Copy
Edit
npm run build
The optimized files will be generated in the dist/ folder.

To preview the production build locally:

bash
Copy
Edit
npm run preview
📝 Project Structure
plaintext
Copy
Edit
devhubs/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components (Header, Footer, etc.)
│   ├── context/          # React Context for Dark/Light mode and state
│   ├── pages/            # Page components
│   ├── styles/           # Tailwind and custom styles
│   ├── App.jsx           # Main React app
│   └── main.jsx          # Entry point for React + Vite
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # Tailwind CSS config
├── vite.config.js        # Vite config
└── README.md             # Project documentation
🎨 Customization & Theming
The app uses React Context to manage theme state (dark/light).

Toggle switch updates theme globally and persists user preference using localStorage.

Tailwind CSS dark: variants enable theme-specific styling effortlessly.

🤝 Contributing
Contributions are welcome! If you want to:

Add new developer tools or resources

Improve UI/UX or accessibility

Fix bugs or optimize performance

Please open an issue or submit a pull request with your changes.

📫 Contact
If you have suggestions, ideas, or want to collaborate, reach out at:

Email: contact@devhubs.io
GitHub: https://github.com/your-username

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

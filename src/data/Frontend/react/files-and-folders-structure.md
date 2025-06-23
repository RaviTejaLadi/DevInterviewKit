# 📁 Vite React Project – Default Files and Folders structure

```bash
my-vite-react-app/
├── node_modules/          # 📦 3rd-party packages
├── public/                # 🗂️ Static assets
│   └── vite.svg           # ⚡ Vite logo (served at /vite.svg)
├── src/
│   ├── assets/            # 🖼️ Project assets (images, fonts, etc.)
│   │   └── react.svg      # ⚛️ React logo
│   ├── App.css            # 🎨 App component styles
│   ├── App.tsx            # 🏠 App component (or .jsx)
│   ├── index.css          # 🌐 Global styles
│   ├── main.tsx           # 🚀 Entry point (or main.jsx)
│   └── vite-env.d.ts      # 📝 TypeScript types for Vite
├── .gitignore             # 🙈 Git ignore rules
├── index.html             # 🏁 Main HTML file (entry)
├── package.json           # 📋 Project metadata & dependencies
├── package-lock.json      # 🔒 Exact dependency versions
├── tsconfig.json          # ⚙️ TypeScript config (if using TS)
├── tsconfig.node.json     # 🛠️ TypeScript config for Vite
└── vite.config.ts         # 🧩 Vite configuration (or .js)
```

### 👀 Key Visual Notes
1. 🏁 `index.html` is at the root (unlike Create React App)
2. 💻 `src/` contains all application code
3. 🗂️ `public/` is for static files that don't need processing
4. 🟦 Vite uses TypeScript by default (but can use JS)
5. 🎨 CSS files are placed next to components

---

## 🗂️ Root-Level Files

| File/Folder          | Purpose |
|----------------------|---------|
| **`node_modules/`**  | 📦 All npm/yarn/pnpm installed dependencies. Never modify manually. |
| **`public/`**        | 🗂️ Static assets (images, fonts, favicons) copied directly into the build output. |
| **`src/`**           | 💻 Main directory for your React application code (components, styles, logic). |
| **`.gitignore`**     | 🙈 Specifies files/folders Git should ignore (e.g., `node_modules/`, `.env`). |
| **`index.html`**     | 🏁 **Entry HTML file** (unlike CRA, Vite uses root-level `index.html`). Includes `<div id="root"></div>` and links to `src/main.tsx`. |
| **`package.json`**   | 📋 Lists project dependencies, scripts (`dev`, `build`, `preview`), and metadata. |
| **`vite.config.ts`** | 🧩 Vite’s configuration file (supports TypeScript). Customize plugins, aliases, server settings, etc. |
| **`tsconfig.json`**  | ⚙️ TypeScript configuration (if using TS). Defines compiler options. |
| **`tsconfig.node.json`** | 🛠️ Additional TS config for Vite’s Node.js environment. |

---

## 🗂️ `public/` Folder

| File          | Purpose |
|--------------|---------|
| **`vite.svg`** | ⚡ Example static file (served at `/vite.svg`). Replace with your own assets. |

---

## 💻 `src/` Folder (Core React Files)

| File/Folder       | Purpose |
|------------------|---------|
| **`assets/`**    | 🖼️ Project assets (images, SVGs, fonts) processed by Vite. |
| **`App.tsx`** (or `App.jsx`) | 🏠 **Root React component**. Modify this to build your app. |
| **`App.css`**    | 🎨 Styles specific to `App.tsx`. Vite supports CSS Modules (`App.module.css`). |
| **`main.tsx`**   | 🚀 **Entry point** where React is mounted to the DOM via `ReactDOM.createRoot()`. |
| **`index.css`**  | 🌐 Global styles (applied to the entire app). |
| **`vite-env.d.ts`** | 📝 TypeScript type declarations for Vite (e.g., `import.meta.env` variables). |

---

## 🔄 Key Differences from Create React App (CRA)

1. 🏁 **`index.html` at Root**  
   - In CRA, it’s inside `public/`. Vite treats it as the entry point.
2. ⚡ **No `react-scripts`**  
   - Vite uses its own dev server (`vite`) for faster builds.
3. 🟦 **TypeScript by Default**  
   - Vite encourages TS (but JS works too).
4. 🎨 **CSS Handling**  
   - Supports CSS Modules, Sass, and PostCSS out of the box.

---

## 🔗 Visual Flow

```
index.html → main.tsx → App.tsx → Your Components
```
- 🏁 **`index.html`** loads `main.tsx`.
- 🚀 **`main.tsx`** renders `App.tsx` into the DOM.
- 🏠 **`App.tsx`** contains your app’s components.

---

## ➕ Optional Files (Common Additions)

- **`src/components/`** – 🧩 Reusable React components.
- **`src/pages/`** – 📄 Page-level components (used with routers like React Router).
- **`src/hooks/`** – 🪝 Custom React hooks.
- **`.env`** – 🔑 Environment variables (e.g., `VITE_API_KEY=abc`).

---

## 📝 Summary

- 🏁 **`index.html`** → Entry point.
- 🚀 **`main.tsx`** → Renders React.
- 🏠 **`App.tsx`** → Root component.
- 🧩 **`vite.config.ts`** → Customize Vite.
- 🗂️ **`public/`** → Static files.
- 💻 **`src/`** → Your app’s code.

Vite’s structure is minimal and flexible, allowing you to scale as needed. 🚀
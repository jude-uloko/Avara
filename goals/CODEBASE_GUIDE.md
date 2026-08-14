📚 GrabBoss Ecommerce Project - Setup Summary & Codebase Guide
================================================================

## 🏗️ Project Structure Overview

```
GrabBoss/
├── backend/                    # Node.js/Express API server
│   ├── src/
│   │   └── index.js           # Main server file (START HERE for backend)
│   │   └── build.js           # Production build script
│   ├── package.json           # Backend dependencies & npm scripts
│   ├── .eslintrc.json         # Code quality rules
│   ├── jest.config.js         # Testing configuration
│   └── build/                 # Production build output
│
├── frontend/                   # HTML/CSS/Bootstrap UI
│   ├── package.json           # Frontend dependencies & npm scripts
│   ├── .eslintrc.json         # Code quality rules
│   ├── bootstrap-5.0.2-dist/  # Bootstrap CSS framework
│   ├── images/                # Product images, icons, ratings
│   └── index.html             # Main HTML file (START HERE for frontend)
│
├── .github/
│   ├── workflows/             # GitHub Actions CI/CD pipelines
│   │   ├── test.yml          # Automated testing
│   │   ├── lint.yml          # Code quality checks
│   │   ├── deploy.yml        # Deployment automation
│   │   └── security.yml      # Security scanning
│   ├── extension.json        # Recommended VS Code extensions
│   └── dependabot.yml        # Automatic dependency updates
│
├── .vscode/
│   ├── config.json           # VS Code workspace settings
│   └── extension.json        # Extension recommendations
│
├── .prettierrc.json          # Code formatting rules (shared)
├── LICENCE                   # Apache 2.0 open-source license
├── goals/
│   ├── tasks.txt            # Setup checklist & goals
│   └── README.md            # This file
└── CONTRIBUTING.md          # Guidelines for contributors


## 🚀 Tech Stack Breakdown

### Backend (Node.js)
- **Framework**: Express.js (web server)
- **Database**: MongoDB (NoSQL database)
- **Auth**: JWT + bcryptjs (password hashing)
- **Utilities**: CORS (cross-origin requests), dotenv (environment variables)
- **Build Tool**: Custom build script (copies files to /build)
- **Testing**: Jest (unit tests)
- **Linting**: ESLint (code quality)
- **Formatter**: Prettier (consistent code style)

### Frontend (HTML/CSS/Bootstrap)
- **Framework**: Bootstrap 5.0.2 (responsive UI)
- **Structure**: HTML files (will evolve into single-page app)
- **Styling**: Bootstrap CSS utilities
- **Assets**: Images for products, light/dark mode themes

### DevOps & Automation
- **Version Control**: Git & GitHub
- **CI/CD**: GitHub Actions (automated testing & deployment)
- **Containers**: Docker (optional, for production)
- **Dependency Management**: Dependabot (auto-updates packages)


## 🎯 Where to Start Coding

### If you want to build the BACKEND API:
1. **Start here**: `backend/src/index.js`
   - This is your Express server entry point
   - Currently has placeholder routes for:
     - `/api/auth` — Login, registration
     - `/api/users` — User profiles
     - `/api/products` — Product catalog
     - `/api/orders` — Order management
     - `/api/cart` — Shopping cart

2. **What you need to do**:
   ```
   Create Models (database schemas):
   └── backend/src/models/
       ├── User.js       (user profiles, auth)
       ├── Product.js    (products, inventory)
       ├── Order.js      (orders, history)
       └── Cart.js       (shopping cart items)

   Create Routes (API endpoints):
   └── backend/src/routes/
       ├── auth.js       (login, register)
       ├── users.js      (profile, settings)
       ├── products.js   (list, search, details)
       ├── orders.js     (create, list, status)
       └── cart.js       (add, remove, checkout)

   Create Controllers (business logic):
   └── backend/src/controllers/
       ├── authController.js
       ├── userController.js
       ├── productController.js
       ├── orderController.js
       └── cartController.js

   Create Middleware (authentication, validation):
   └── backend/src/middleware/
       ├── auth.js       (verify JWT tokens)
       ├── validation.js (check input data)
       └── errorHandler.js (centralized error handling)
   ```

3. **Start by**:
   - Creating `backend/src/models/User.js` (MongoDB schema for users)
   - Creating routes in `backend/src/routes/auth.js` for login/signup
   - Testing with Postman or Thunder Client

### If you want to build the FRONTEND:
1. **Start here**: `frontend/index.html`
   - This is your main HTML file (currently empty)
   - Contains Bootstrap CSS framework

2. **What you need to do**:
   ```
   Create Pages:
   └── frontend/
       ├── index.html        (homepage)
       ├── products.html     (product listing)
       ├── product.html      (single product details)
       ├── cart.html         (shopping cart)
       ├── checkout.html     (payment)
       ├── login.html        (user login)
       ├── register.html     (user registration)
       ├── profile.html      (user account)
       └── orders.html       (order history)

   Create JavaScript Files:
   └── frontend/js/
       ├── api.js           (fetch backend API)
       ├── auth.js          (login/logout logic)
       ├── cart.js          (add/remove items)
       ├── products.js      (display products)
       └── main.js          (page initialization)

   Create CSS Files:
   └── frontend/css/
       ├── style.css        (custom styling)
       ├── navbar.css       (header/navigation)
       ├── footer.css       (footer styling)
       └── responsive.css   (mobile friendly)
   ```

3. **Start by**:
   - Creating a navbar component with Bootstrap
   - Creating a product listing page
   - Fetching data from backend `/api/products` endpoint
   - Using Bootstrap grid for responsive layout

### Full-Stack Workflow (Recommended):
1. **Phase 1**: Create backend API routes & models
2. **Phase 2**: Test backend with Postman
3. **Phase 3**: Create frontend pages
4. **Phase 4**: Connect frontend to backend API
5. **Phase 5**: Deploy to production


## 💻 Commands to Remember

### Backend
```bash
cd backend
npm install              # Install dependencies (one-time)
npm run dev             # Start development server (with auto-reload)
npm run build           # Build for production
npm run lint            # Check code quality
npm run lint:fix        # Auto-fix linting issues
npm run test            # Run tests
npm start               # Start production server
```

### Frontend
```bash
cd frontend
npm install             # Install dependencies (one-time)
npm run dev            # Start development server
npm run build          # Build for production
npm run lint           # Check code quality
npm run test           # Run tests
```

### Git & GitHub
```bash
git add .              # Stage changes
git commit -m "message" # Commit changes
git push               # Push to GitHub (triggers CI/CD)
git pull               # Get latest changes
```


## 🔧 Configuration Files Explained

| File | Purpose | When to Edit |
|------|---------|--------------|
| `.env` | Environment variables (API keys, DB URL) | Before running locally |
| `package.json` | Dependencies & npm scripts | When adding packages |
| `.eslintrc.json` | Code quality rules | If you want stricter linting |
| `.prettierrc.json` | Code formatting | If you prefer different spacing |
| `.github/workflows/*.yml` | CI/CD automation | When customizing build process |
| `.vscode/config.json` | VS Code settings | Personal preferences |


## 🗄️ Database Setup (MongoDB)

### Option 1: Local MongoDB
```bash
1. Download MongoDB Community Edition
2. Start MongoDB service
3. Connect with MONGODB_URI=mongodb://localhost:27017/grabboss
```

### Option 2: MongoDB Atlas (Cloud)
```bash
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to backend/.env as MONGODB_URI
```


## ✅ Quick Start Checklist (Do This First!)

- [ ] Copy `.env.example` to `.env` (if exists) or create `.env`
- [ ] In `backend/.env`, add: `MONGODB_URI=mongodb://localhost:27017/grabboss`
- [ ] Run `cd backend && npm install`
- [ ] Run `cd ../frontend && npm install`
- [ ] Start MongoDB (local or Atlas)
- [ ] Run `npm run dev` in backend folder
- [ ] Check http://localhost:5000/api/health (should see JSON response)
- [ ] Start building models and routes!


## 📖 Key Files to Review

1. **backend/src/index.js** — Your server main file, understand how Express works
2. **backend/package.json** — See all dependencies you have available
3. **frontend/index.html** — Your HTML starting point
4. **.github/workflows/test.yml** — Understand the automated testing pipeline
5. **goals/tasks.txt** — The setup checklist

## 🤔 Common Questions

**Q: Where do I write my database models?**
A: `backend/src/models/` folder (create it). Use Mongoose to define schemas.

**Q: Where do I write my API routes?**
A: `backend/src/routes/` folder (create it). Export routes and import in index.js.

**Q: How do I connect frontend to backend?**
A: In `frontend/js/api.js`, use `fetch()` to call backend API routes.

**Q: How do I handle user login?**
A: Create `/api/auth/login` route in backend that returns JWT token.
   Store token in `localStorage` in frontend. Send token with each request.

**Q: When should I deploy?**
A: After completing Phase 2 (backend) or Phase 4 (full-stack integration).

**Q: What if I get errors?**
A: Check `.github/workflows/lint.yml` and `test.yml` outputs on GitHub.
   Or run `npm run lint` locally to see code quality issues.


---
Last Updated: 2026-08-14
Good luck! 🚀

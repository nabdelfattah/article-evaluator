# Article Evaluator 🤖

A full-stack web tool that allows users to analyze articles or blogs using **Natural Language Processing (NLP)** with the [MeaningCloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis). The tool provides insights into the polarity, subjectivity, and a snippet from the article.

## Table of Contents

- [📑 Project Overview](#📑-project-overview)
- [🛠️ Technologies Used](#🛠️-technologies-used)
- [📂 Project Structure](#📂-project-structure)
- [🔧 Dependencies](#🔧-dependencies)
- [⚙️ Installation](#⚙️-installation)
- [🚀 Usage](#🚀-usage)
- [✅ Testing](#✅-testing)
- [📜 License](#📜-license)

---

## 📑 Project Overview

The **Evaluate News NLP** tool enables users to:

- Determine the **polarity** of an article (positive, negative, or neutral).
- Check whether the article is **subjective** or **objective**.
- Retrieve a **short snippet** from the article for context.

This is achieved using the **MeaningCloud Sentiment Analysis API**, and the app is implemented as a full-stack project with a modern development workflow.

---

## 🛠️ Technologies Used

### Frontend:

- **HTML**
- **Sass**
- **Vanilla JavaScript**

### Backend:

- **Node.js** with **Express.js**

### Bundler:

- **Webpack**

### Testing:

- **Jest** (for testing client-side JavaScript)

### Additional Features:

- **Service Worker** for offline capabilities.
- **MeaningCloud Sentiment Analysis API** integration.

---

## 📂 Project Structure

```plaintext
├── .babelrc                # Babel configuration file
├── .gitignore
├── jest.config.js          # Jest configuration file for testing client-side code
├── package-lock.json
├── package.json
├── README.MD
├── src/                    # Main source folder containing all the project's code
│   ├── client/             # Frontend code and assets
│   │   ├── assets/         # Images, icons, and other static assets
│   │   ├── index.js              # Main JavaScript file for the frontend logic
│   │   ├── js/                   # Client-side JavaScript logic and functions
│   │   │   ├── handlers.js        # Event handlers
│   │   │   ├── validator.js       # Validation functions
│   │   │   └── __tests__/         # Unit tests for the frontend logic
│   │   │       ├── handlers.test.js
│   │   │       └── validator.test.js
│   │   ├── styles/               # SCSS files for styling the frontend
│   │   │   ├── styles.scss        # Main stylesheet
│   │   │   ├── _footer.scss       # Footer-specific styles
│   │   │   ├── _form.scss         # Form-specific styles
│   │   │   ├── _general.scss      # General styling (layout, variables, etc.)
│   │   │   ├── _header.scss       # Header-specific styles
│   │   │   ├── _main.scss         # Main content-specific styles
│   │   │   └── _queries.scss      # Media queries for responsive design
│   │   └── views/                 # HTML templates and views
│   │       └── index.html
│   └── server/                  # Backend logic
│       ├── fetch.js              # Utility file for fetching data from APIs
│       └── index.js              # Main server file that sets up the Express app and routes
├── webpack.dev.js             # Webpack configuration for development
└── webpack.prod.js            # Webpack configuration for production (e.g., minification, optimization)
```

---

## 🔧 Dependencies

This project relies on the following dependencies:

### Core Dependencies:

- `corejs`: ^1.0.0
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.21.1
- `regenerator-runtime`: ^0.14.1

### Development Dependencies:

- `@babel/core`: ^7.26.0
- `@babel/preset-env`: ^7.26.0
- `babel-loader`: ^9.2.1
- `clean-webpack-plugin`: ^4.0.0
- `css-loader`: ^7.1.2
- `css-minimizer-webpack-plugin`: ^7.0.0
- `html-loader`: ^5.1.0
- `html-webpack-plugin`: ^5.6.3
- `jest`: ^29.7.0
- `jest-environment-jsdom`: ^29.7.0
- `mini-css-extract-plugin`: ^2.9.2
- `sass`: ^1.81.0
- `sass-loader`: ^16.0.3
- `style-loader`: ^4.0.0
- `terser-webpack-plugin`: ^5.3.10
- `webpack`: ^5.96.1
- `webpack-cli`: ^5.1.4
- `webpack-dev-server`: ^5.1.0
- `workbox-webpack-plugin`: ^7.3.0

---

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nabdelfattah/article-evaluator.git
   cd article-evaluator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:** Create a .env file in the root directory and add your MeaningCloud API key:

   ```env
   API_KEY=your_meaningcloud_api_key
   ```

4. **Run in development mode:**

   - Run the frontend development server (which will open on **port 8080**):

     ```bash
     npm run build-dev
     ```

   - In a new terminal, start the backend server (which will open on **port 8081**):

     ```bash
     npm run start
     ```

   The frontend (on port 8080) will send requests to the backend server (on port 8081) to get responses.

5. **Run in production mode:**

   - First, build the production version of the app:

     ```bash
     npm run build-prod
     ```

   - Then, start the server, which will serve the built production files from the dist folder:
     ```bash
     npm run start
     ```
     The server will serve the production-ready files from the dist folder.

---

## 🚀 Usage

1. Open the application in your browser at http://localhost:8080 (for development mode).
2. Enter the URL of an article or blog you want to analyze.
3. Click "Analyze" to retrieve the following:
   - Polarity (e.g., positive, negative, neutral).
   - Subjectivity (subjective or objective).
   - A short snippet from the article.

---

## ✅ Testing

Run the Jest test suite to ensure client-side code integrity:

```bash
npm run test
```

---

## 📜 License

All rights reserved. This project is not licensed for redistribution or modification without explicit permission.

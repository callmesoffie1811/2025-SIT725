# SIT725 Week 3 Project

## Overview

This is a demo web application for SIT725 Week 3 practical. The project demonstrates the use of Materialize CSS framework, jQuery, and Express.js to build a simple interactive web page. Users can view cards, interact with a modal form, and see dynamic UI updates.

## Features

- Responsive UI using Materialize CSS
- Interactive cards with images and reveal sections
- Modal form for user input (First Name, Last Name, Password, Email)
- Toast notifications on form submission
- Dynamic card rendering via JavaScript
- Express.js server for static file serving

## Technologies Used

- [Materialize CSS](https://materializecss.com/)
- [jQuery](https://jquery.com/)
- [Express.js](https://expressjs.com/)
- HTML, CSS, JavaScript

## Project Structure

```
Week3/
├── index.js                # Express server setup
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lock file
├── public/
│   ├── css/
│   │   └── styles.css      # Custom styles
│   ├── images/             # Image assets
│   ├── js/
│   │   └── scripts.js      # Frontend scripts
│   └── index.html          # Main HTML page
└── Readme.MD               # Project documentation
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Week3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm start
   ```
   The app will run on [http://localhost:3000](http://localhost:3000) by default.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Click the "Click Me" button to open the modal form.
- Fill in the form and click "SUBMIT" to see a toast notification.
- Explore the cards section for interactive content.

## Customization

- **Add more cards:** Update the `cardList` array in `public/js/scripts.js`.
- **Change styles:** Edit `public/css/styles.css`.
- **Modify server logic:** Update `index.js`.

## License

This project is licensed under the ISC License.

## Author

[Sophie Ngo](https://www.linkedin.com/in/callmesoffie/)

---

*For SIT725 practical use only.*

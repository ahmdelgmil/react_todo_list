# React Todo List

## Description
React Todo List is a simple and efficient task management application built with React.js. It allows users to add, delete, and mark tasks as completed. The project is designed to demonstrate best practices in React development, including state management and component structuring.

## Features
- Add new tasks
- Delete tasks
- Mark tasks as completed
- Persistent state using local storage
- Responsive and user-friendly UI

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ahmdelgmil/react_todo_list.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react_todo_list
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Deployment on GitHub Pages
1. Install `gh-pages` package:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add the following lines to `package.json`:
   ```json
   "homepage": "https://ahmedelgmil.github.io/react_todo_list",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the project:
   ```sh
   npm run deploy
   ```

Your application will be live at:
```
https://ahmdelgmil.github.io/react_todo_list/
```

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5 & CSS3
- Local Storage

## Author
**Ahmed Elgamil Abdo**  
Full Stack Developer | Odoo Expert  
[Portfolio](https://www.linkedin.com/in/ahmed-elgamil/)


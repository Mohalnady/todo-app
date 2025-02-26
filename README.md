# Vue Todo Application

This is a simple Todo application built with Vue.js 2. It allows users to manage their tasks efficiently by adding, deleting, and marking them as completed.

## Features

- Add new todo items
- Delete existing todo items
- Toggle completion status of todo items
- Responsive design

## Project Structure

```
vue-todo-app
├── public
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── assets
│   │   └── styles.css    # Global styles for the application
│   ├── components
│   │   ├── TodoItem.vue   # Component for a single todo item
│   │   └── TodoList.vue   # Component for the list of todo items
│   ├── views
│   │   └── Home.vue       # Main page of the application
│   ├── App.vue            # Root component of the application
│   ├── main.js            # Entry point of the Vue application
│   └── router
│       └── index.js       # Vue Router setup
├── package.json           # npm configuration file
├── babel.config.js        # Babel configuration file
├── vue.config.js          # Vue CLI configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vue-todo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm run serve
   ```

5. Open your browser and go to `http://localhost:8080` to see the application in action.

## Usage

- To add a new todo, enter the task in the input field and click "Add".
- To delete a todo, click the "Delete" button next to the item.
- To mark a todo as completed, click on the checkbox next to the item.

## License

This project is licensed under the MIT License.
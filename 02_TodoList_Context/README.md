# Todo App with Context API

This is a simple Todo App created using React and the Context API. It allows you to manage your tasks.

## Functionality

1. **Add Item** \
  You can add a new task to your todo list by entering the task description and clicking the "Add" button.

2. **Delete Item** \
  You can delete a task from the list by clicking the "Delete" button next to the task.

3. **Update Item** \
  You can update the description of a task by clicking the "Edit" button and making changes to the task.

4. **Mark as Active** \
  You can mark a task as active by clicking the "Mark as Active" button. Active tasks are displayed with a different style to distinguish them from completed tasks.

5. **Mark as Complete** \
  You can mark a task as complete by clicking the "Mark as Complete" button. Completed tasks are displayed with a strike-through style.

6. **Search Item** \
  You can search for tasks by entering a search query in the search bar. The app will filter and display tasks that match the search query.

## Components

The app consists of the following components:

- **[TodoApp]()** (Main Component)
- **[TodoList]()** (Displays the list of tasks)
- **[TodoItem]()** (Individual task item)
- **[TodoForm]()** (Form for adding and updating tasks)
- **[SearchBar]()** (Search functionality)

## Context API

The Context API is used to manage the state of the todo list and provide the necessary data and functions to the components.

## Folder Structure

```
    src/
    ├── components/
    │ ├── TodoApp.js
    │ ├── TodoList.js
    │ ├── TodoItem.js
    │ ├── TodoForm.js
    │ └── SearchBar.js
    ├── app/
    │ └── store.js
    │ └── todoSlice.js
    ├── App.js
    ├── App.css
    ├── main.js
    └── ...
```


## Getting Started

To run this Todo App in your local development environment, follow these steps:

1. Clone the repository `https://github.com/adarsh878856/React-Development.git`.
2. Navigate to the project directory `/frontend_projetcts/todo_app_with_context`.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.

## Dependencies

This project uses the following dependencies:
1. Install `tailwindcss` and its peer dependencies,
```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
2. Add the paths to all of your template files in your `tailwind.config.js` file.
```
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
```

## Additional Features (Optional)

You can enhance this Todo App by adding features like sorting tasks, setting due dates, or categorizing tasks into different lists.

Happy coding!

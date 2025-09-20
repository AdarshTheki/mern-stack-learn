# How different state management in React:

- **useState**
- **useContext**
- **Simple Redux (manual setup)**
- **Redux Toolkit (@reduxjs/toolkit)**
- **Zustand**

## ⚖️ When to Use What?

1. **useState** → Local UI state (form inputs, toggles)
2. **useContext** → Small apps, global theme/auth state
3. **Redux (classic)** → Large apps, complex business logic (legacy projects)
4. **Redux Toolkit** → Large/modern apps with middleware needs
5. **Zustand** → Medium apps, simpler global state (alternative to Redux)

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

## Getting Started

To run this Todo App in your local development environment, follow these steps:

1. Clone the repository `https://github.com/AdarshTheki/mern-stack-learn.git`.
2. Navigate to the project directory `/02_State_Managment`.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.

## Additional Features (Optional)

You can enhance this Todo App by adding features like sorting tasks, setting due dates, or categorizing tasks into different lists.

Happy coding!

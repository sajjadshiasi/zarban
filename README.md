# Task Filter App

This is a simple React application that allows users to filter tasks based on completion status and search for specific tasks. The tasks are fetched from the JSONPlaceholder API.

## Approach

- **State Management**: The application uses React hooks to manage states such as `tasks`, `filteredTasks`, `filterType`, and `searchTerm`.
- **API Call**: A custom hook `useFetch` is used to fetch tasks from the `https://jsonplaceholder.typicode.com/todos` API.
- **Filtering**: Tasks are filtered by their completion status (`All`, `Complete`, `Pending`) and by a search term.
- **Error Handling**: The app displays an error message if the API request fails and provides a retry option.
- **Loading State**: A loading message is shown while the data is being fetched.

## Assumptions

- The tasks API is available at `https://jsonplaceholder.typicode.com/todos`.
- The tasks returned by the API are in the following format:
  ```ts
  interface TaskResponse {
    id: number;
    title: string;
    completed: boolean;
  }

- The app uses ```pnpm``` as the package manager

## Instructions for Running the App

1- Clone the repository:
```ts
git clone https://github.com/sajjadshiasi/zarban.git
cd zarban
```
2- Install dependencies:

```ts
pnpm install
```

3- Run the application:
```ts
pnpm run start
```

4- Open your browser and navigate to ```http://localhost:5173``` to view the app.

## Additional Features / Improvements

- **Error Retry**:When an error occurs, users can retry fetching the tasks by clicking a button in the error message component.

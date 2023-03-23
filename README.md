# Shop

This project was bootstrapped with [Vite](https://vitejs.dev/).\
Functionality: addition and removing items from the cart

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Technologies Used

React\
TypeScript\
REDUX toolkit\
Styled Component\
FSD architecture

## Folder Structure

The application is structured using the FSD (Feature-Structured Directory) architecture. The `src` directory is organized into the following folders:\

shared — reusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, API)\
entities — business entities.(e.g., User, Product, Order)\
features — user interactions, actions that bring business value to the user.(e.g. SendComment, AddToCart, UsersSearch)\
widgets — compositional layer to combine entities and features into meaningful blocks.(e.g. IssuesList, UserProfile)\
pages — compositional layer to construct full pages from entities, features and widgets.\
processes — complex inter-page scenarios. (e.g., authentication)\
app — app-wide settings, styles and providers.\

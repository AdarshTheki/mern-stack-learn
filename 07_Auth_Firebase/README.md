## Firebase Authentication Process
Firebase Authentication is a robust service that allows you to easily add authentication to your web applications.

1. [**Initialization**](#1-initialization)
2. [**Create a Firebase Project**](#2-create-a-firebase-project)
3. [**Include Firebase in Your Project**](#3-include-firebase-in-your-project)
4. [**Register New Users**](#4-register-new-users)
5. [**Log In Users**](#5-log-in-users)
6. [**Log Out Users**](#6-log-out-users)
7. [**Redirect After Authentication**](#7-redirect-after-authentication)
8. [**Implement Popup Login**](#8-implement-popup-login)

## 1. Initialization

Before you begin, ensure you have Node.js installed.

## 2. Create a Firebase Project

- Go to the [Firebase Console](https://console.firebase.google.com/).
- Click "Add Project" and follow the setup instructions.
- Make note of your Firebase project's configuration information.

## 3. Include Firebase in Your Project

- In your HTML file, include the Firebase JavaScript SDK by adding the following script tag:

```jsx
<script src="https://www.gstatic.com/firebasejs/9.3.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.3.2/firebase-auth.js"></script>
// OR
  npm install firebase
```

- Initialize Firebase with your project's configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

## 4. Register New Users

To allow users to register with your application:

```javascript
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User registered successfully.
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle registration errors.
    const errorMessage = error.message;
  });
```

## 5. Log In Users

To allow users to log in:

```javascript
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User logged in successfully.
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle login errors.
    const errorMessage = error.message;
  });
```

## 6. Log Out Users

To allow users to log out:

- Implement a JavaScript function to handle user logout:

```javascript
firebase.auth().signOut().then(() => {
  // User logged out successfully.
}).catch((error) => {
  // Handle logout errors.
});
```

## 7. Redirect After Authentication

To redirect users to a different page after authentication:

- Use the `onAuthStateChanged` method to detect authentication changes:

```javascript
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, redirect to a different page.
    window.location.href = "dashboard.html";
  } else {
    // User is signed out.
  }
});
```

## 8. Implement Popup Login

To implement a popup login:

- Use Firebase UI to create a popup login interface. You can follow the [Firebase UI documentation](https://firebase.google.com/docs/auth/web/firebaseui) for guidance.



### Setup Instructions

1.  Clone the Project

```
  git clone https://github.com/AdarshTheki/React-Development.git
```

2. Move to the directory

```
  cd authenticate-with-firebase/
```

3. Install dependencies

```
  npm install
```

4. Run the server

```
  npm run dev
```
### Adding plugin and dependencies
``` 
    react-router-dom appwrite @tinymce/tinymce-react react-hook-form html-react-parser  @reduxjs/toolkit react-redux
```

### How to setup tailwind in your Project Link
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

### Add daisyUI as a Tailwind CSS plugin
1. Add daisyUI to your tailwind.config.js files:
```
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
```
2. Use in index.html file Add Attributes to data-theme in html tag:
```
  <html data-theme="dark"></html>
```
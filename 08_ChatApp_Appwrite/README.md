### Create the ChatApp with ApppWrite Backend used:-

#### [HOSTED URL](https://chatapp-with-appwrite.netlify.app/) in Netlify 

### Can you used the Chat App

-  testuser1@example.com
-  testuser2@example.com
-  testuser3@example.com
-  testuser4@example.com
-  testuser5@example.com
-  password : password123

### Testing User-Related Services with Appwrite

Before you begin, make sure you have the following set up:

1. An Appwrite server instance.
2. Appwrite SDK initialized in your application.

### Step 1: Create a Test User

Replace `YOUR_APPWRITE_ENDPOINT` and `YOUR_APPWRITE_PROJECT_ID` with your Appwrite server's endpoint and project ID.

```js
const appwrite = new Appwrite();
appwrite.setEndpoint('YOUR_APPWRITE_ENDPOINT');
appwrite.setProject('YOUR_APPWRITE_PROJECT_ID');

appwrite.account
   .create('email', 'testuser@example.com', 'password', 'Test User', [], [])
   .then((response) => {
      console.log('User created', response);
   })
   .catch((error) => {
      console.error('Error creating user', error);
   });
```

### Step 2: Send Verification Email

```js
appwrite.account
   .createVerification('email', 'testuser@example.com')
   .then((response) => {
      console.log('Verification email sent', response);
   })
   .catch((error) => {
      console.error('Error sending verification email', error);
   });
```

### Step 3: Verify User's Email

Replace `verification_token` with the actual verification token received by the user.

```js
appwrite.account
   .updateVerification('email', 'verification_token')
   .then((response) => {
      console.log('Email verified', response);
   })
   .catch((error) => {
      console.error('Error verifying email', error);
   });
```

### Step 4: Login as Test User

```js
appwrite.account
   .createSession('email', 'testuser@example.com', 'password')
   .then((response) => {
      console.log('User logged in', response);
   })
   .catch((error) => {
      console.error('Error logging in', error);
   });
```

## Conclusion

It can serve as documentation for testing user-related services with Appwrite in your application. Make sure to replace `'YOUR_APPWRITE_ENDPOINT'` and `'YOUR_APPWRITE_PROJECT_ID'` with your actual Appwrite server details.

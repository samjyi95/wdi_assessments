<img src="https://i.imgur.com/sX12DTc.png">

# Project 3 Assessment

## Introduction (By Instructor)

This **Introduction** section will be read in class by the instructor.

Students are to have their laptops closed until directed to open them.

Students will be self-directed beginning with the **Instructions & Time Guidelines** section below.

### GOAL

The goal of this final assessment is to gauge your ability to develop a **minimal** front-end web application using React, including your ability to:

- Create function-based and class-based React components.
- Layout their appearance using JSX.
- Define and use State.
- Pass data as props and use handler ("remote control") functions to modify another component's State.
- Use AJAX libraries to retrieve data.

### DEMO

The instructor will now demonstrate the app you will be building.

### OVERALL APPLICATION REQUIREMENTS

As you saw, the application's UI consists of:

- A header
- Two buttons ("<" & ">")
- A list of posts

Use the screenshots below as your "wireframes".

Lastly, the styling does not have to be exact, however, the closer it is to the screenshots, the better!

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, etc. 

However, don't spend too much time researching unless you're stuck - **do not over-think this application!!!**

It is estimated that this project assessment will take 90 to 120 minutes to complete. However, you have until 5 pm should you need the extra time.

## Instructions & Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 10 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 60 minutes)
- **STEP 4 - Push to GitHub** (&asymp; 10 minutes)

**The times above are just estimated guidelines.**

## Assessment Steps to Complete

### STEP 1 - Prepare (5 minutes)

Briefly read through the rest of this assignment to better understand what is required before starting to code. Follow the [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) article as your guide.

### STEP 2 - Set Up the App (10 minutes)

Be sure to follow best practices when setting up the project:

- Outside of all repos in your unit3 folder, run `create-react-app project-3-assessment` to make the directory for this project.
- `cd` into the `project-3-assessment` directory.
- Open the whole directory up in your editor.
- Clean out and rename `App.js` to `App.jsx`.

### STEP 3 - Implement the App's Requirements (60 minutes)

#### Upon Loading

When the application initially loads, user ID 1 is preselected and the app retrieves all of user 1's posts *right away*. You will need an AJAX library to make this happen (axios is recommended.)

(Hint: What is the lifecycle hook we use when we want something to happen "immediately" in a component?)

Here is the API endpoint you will be querying:

```
https://jsonplaceholder.typicode.com/posts?userId=3
```

Note the query string at the end. Passing that key-value pair in will get you all the posts for user number 3. You can modify that value to get the posts for any user. Valid user IDs are 1 through 10.

#### When the ">" Button is Clicked

When the ">" button is clicked, we increment the user ID we are using and then get that new user's posts. The new posts are automatically rendered to the page whenever we click this button. (This will require another API call.)

If the user ID is already at the max of 10, you need to cycle it back to 1.

#### When the "<" Button is Clicked

When the "<" button is clicked, we decrement the user ID we are using and then get that new user's posts. The new posts are automatically rendered to the page whenever we click this button. (This will require another API call.)

If the user Id is already at the min of 1, you need to cycle it forward to 10.

Congrats, that's all there is to it!

### Thinking In React

Remember, when planning and writing a React app you can follow the [Thinking In React](https://reactjs.org/docs/thinking-in-react.html) webpage:

1. Mockup the website as a diagram or wireframe
1. Break up the wireframes into a React component hierarchy
1. Build the static version in React
1. Identify the minimal but complete representation of state
1. Identify where state should live
1. Add the functions that lift data up to the component holding state

### STEP 4 - Push to GitHub (2 minutes)

Please follow these steps to push your app to GitHub:

1. In Terminal, you should already have a local git repo created by `create-react-app`
1. Make a commit: `git add -A && git commit -m "Initial commit"`
1. In your GitHub account, create a new repository named `project-3-assessment`.
1. Back in Terminal, add the `origin` remote:

```bash
git remote add origin https://github.com/<your github username>/project-3-assessment.git
```

> Be sure to replace **\<your github username\>** with your GitHub username!

1. Now run the command `git push origin master` push everything up to Github.

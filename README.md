# WDCC React Workshop - Starter project

In addition to the source code in this starter project, we'll also be using [gists](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) to share code during the session.

## Steps

We'll be going through the following steps in this demo. It's likely that not all of these steps will be completed during the demo itself, but you can find the "end-point" for each of these steps on a particular branch in this repository.

### Step 01 - Basic HTML & CSS

In this step, we'll build out the basic HTML and CSS of our app, currently with all hardcoded values.

- [Gist link](https://gist.github.com/andrew-meads/b3a9b590a801a51f0b58e6ee1a5ca7ef)
- Completed branch name: `steps/01-html-css`

### Step 02 - Props

In this step, instead of hardcoding all values, we'll supply some data to our components, as *props*. We'll also show how we can iterate through a JavaScript array, and display a list of HTML elements based on the objects in that array.

- [Gist link](https://gist.github.com/andrew-meads/284dbf2e5e6cb0f463985399ff9865da)
- Completed branch name: `steps/02-props`

### Step 03 - State & Event handling

In this step, we'll add functionality so that when we click on a contact in the sidebar, the main contact view will update to match the selected contact. To do this we'll need to keep track of which contact is currently selected (*application state*), and also respond to the user clicking on our list items (*event handling*).

- [Gist link](https://gist.github.com/andrew-meads/8801b7357d44e1252ad6745edab4b8e9)
- Completed branch name: `steps/03-state-events`

### Step 04 - Context API

Already in the last step, it became obvious that for any non-trivial "global" state, we need to pass that state down to child components, and pass events back up to parents where they can be handled. This can get tedious / messy for complex component hierarchies, so we'll introduce an alternative approach: React's Context API. This will allow us to properly centralize our state management, which will make it a lot easier to add additional functionality later on such as the ability to add, edit, and delete contacts.

- [Gist link](https://gist.github.com/andrew-meads/2587a96d18860cfe8ab897f10f36cf2c)
- Completed branch name: `steps/04-context`

### Step 05 - "Edit" form

In this step, we'll add a modal (popup) dialog, containing an HTML form allowing users to edit a contact's details. In doing so, we will show how
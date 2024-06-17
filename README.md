# Command-line Inventory Application Project
## Rex Begonias Galore!

## Welcome
Welcome to Rex Begonias Galore!

This is a back-end application built using Node.js and developed using Microsoft Terminal and VS Code on Windows.

Technologies: Node.js, JavaScript

A command-line inventory application helps store employees manage inventory through a text-based interface. Users can add new items, update existing ones, view lists of items, check details of specific items, and remove items from the inventory. It's a handy tool for managing store inventory via command-line commands.


## Features

1. Create a New Rex Begonia:
   - User Action: Add a new rex begonia plant to the inventory.
   - Implementation: Capture user input for the new begonia's details (e.g., variety, size, price, quantity) and add this information to the inventory data.

2. List All Rex Begonias:
   - User Action: View a list of all available rex begonias in the inventory.
   - Implementation: Display the list of begonias along with their details (e.g., variety, size, price, quantity) in a readable format on the command line.

3. View Details of a Rex Begonia:
   - User Action: View detailed information about a specific rex begonia plant.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to view and display its details.

4. Delete a Rex Begonia:
   - User Action: Delete a rex begonia plant from the inventory.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to delete and remove it from the inventory data.

5. Update a Rex Begonia:
   - User Action: Update information about an existing rex begonia plant.
   - Implementation: Prompt the user to enter the ID or unique identifier of the begonia they want to update and allow them to modify its details (e.g., variety, size, price, quantity).

6. Data File Integrity:
   - User Action: Ensure user actions like creating or deleting items update the data file correctly.
   - Implementation: Implement logic to handle data operations securely and accurately to prevent data corruption.

7. Unique ID Assignment:
   - User Action: Assign a unique ID when the user creates a new begonia.
   - Implementation: Generate a unique ID for each new begonia added to the inventory to ensure it can be easily tracked and managed.

8. Cart Functionality:
   - User Action: Add rex begonia plants to a shopping cart and see the total price and quantity.
   - Implementation: Implement a cart feature where the user can add begonias, calculate the total price, and display the cart contents.

9. Cancel Cart Function:
   - User Action: Empty the shopping cart.
   - Implementation: Implement a function to clear the shopping cart and remove all items from it.



## Getting Started

Clone this project:

` git clone https://github.com/incognito1025/project-command-line-inventory-app.git`


After cloning this project, run the following commands:

```
cd project-command-line-inventory-app
mkdir src
touch src/helpers.js
npm init -y

```

Add the following to the package.json file:
```
{
  "name": "rex-begonias-galore",
  "version": "1.0.0",
  "description": "Command-line inventory application for managing Rex Begonias",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Cam Howe",
  "license": "ISC"
}


```

### Application entry point
Create the entry point for the application:
`touch index.js`

Open index.js and write a simple console log:
`console.log("Hello, Node.js!");`


To run this program, type:
`node index.js`



## Implementing Features
### Scripts
Based on the user stories, create scripts in package.json to run the following commands:

Based on the user stories above, create scripts that would run the following (Rsl_ represents a unique id for an example animal):
```
"scripts": {
  "index": "node index.js",
  "create": "node index.js create",
  "show": "node index.js show",
  "update": "node index.js update",
  "destroy": "node index.js destroy",
  "total": "node index.js total"
}

```

### Directory Structure
Create the necessary directories and files:
```
mkdir data
touch data/begonias.json

```

### Adding Unique ID
Install the nanoid package to generate unique IDs:

` npm install nanoid@3 `


Create the controller file:

` touch src/begoniaController.js `


## Back-end Commands

### Show
`npm run show Rsl_`


### Destroy
`npm run destroy Rsl_`


### Update
`npm run update Rsl_ "rex begonia cosmos"`


### Total 
The total command will sum the begonia points.


### Testing
This app uses Jest for testing.

Jest Supertest testing on the backend:

`app.test.js` - integration testing

Project Structure:
```
.
├── __tests__
│   ├── helpers
│   │   ├── authentication.test.js
│   │   └── validation.test.js
│   └── products.test.js
├── package-lock.json
├── package.json
├── readme.md
└── src
    ├── helpers
    │   ├── authentication.js
    │   └── validation.js
    └── products.js

```


# Notes

Jest: JavaScript Testing Framework
This app includes Jest testing capabilities.

To run the tests, use:
`npm test`


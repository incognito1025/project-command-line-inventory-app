# Command-line Inventory Application Project
Back end development practice


A command-line inventory application is a computer program that helps store employees manage what they have in stock. It's a digital helper that works through typing commands into a text-based interface on the computer. It lets users do things like adding new items, updating existing ones, seeing lists of items, checking details of specific items, and removing items from the inventory. So, it's a handy tool for keeping track of what's in the store, all done through typing commands on the computer.


#Features


1. Create a New Rex Begonia: 
   - User Action: The user can add a new rex begonia plant to the inventory.
   - Implementation: This will involve capturing user input for the new begonia's details (e.g., variety, size, price, quantity) and adding this information to the inventory data.

2. List All Rex Begonias: 
   - User Action: The user can see a list of all available rex begonias in the inventory.
   - Implementation: This will involve displaying the list of begonias along with their details (e.g., variety, size, price, quantity) in a readable format on the command line.

3. View Details of a Rex Begonia: 
   - User Action: The user can view detailed information about a specific rex begonia plant.
   - Implementation: This will involve prompting the user to enter the ID or some unique identifier of the begonia they want to view, and then displaying its details.

4. Delete a Rex Begonia: 
   - User Action: The user can delete a rex begonia plant from the inventory.
   - Implementation: This will involve prompting the user to enter the ID or some unique identifier of the begonia they want to delete, and then removing it from the inventory data.

5. Update a Rex Begonia: 
   - User Action: The user can update information about an existing rex begonia plant.
   - Implementation: This will involve prompting the user to enter the ID or some unique identifier of the begonia they want to update, and then allowing them to modify its details (e.g., variety, size, price, quantity).

6. Data File Integrity: 
   - User Action: The user's actions like creating or deleting items should update the data file correctly.
   - Implementation: This will involve implementing logic to handle data operations securely and accurately to prevent data corruption.

7. Unique ID Assignment: 
   - User Action: When the user creates a new begonia, a unique ID is assigned to it.
   - Implementation: This will involve generating a unique ID for each new begonia added to the inventory to ensure it can be easily tracked and managed.

8. Cart Functionality: 
   - User Action: The user can add rex begonia plants to a shopping cart and see the total price and quantity.
   - Implementation: This will involve implementing a cart feature where the user can add begonias, calculate the total price, and display the cart contents.

9. Cancel Cart Function: 
   - User Action: The user can empty the shopping cart.
   - Implementation: This will involve implementing a function to clear the shopping cart and remove all items from it.



### Getting Started

Clone this project:

https://github.com/incognito1025/project-command-line-inventory-app.git



After cloning this project, run the following commands on the backend:

cd project-command-line-inventory-app

touch index.js

touch .gitignore (and add appropriate files and folders like node_modules
.DS_Store)

mkdir src

touch src/helpers.js

npm init -y (will create package.json)

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Cam Howe",
  "license": "ISC"
}

Application entry point
Within an application, there has to be a starting point for the application to run. The package.json file defines this filename with the key main. According to the default package.json file, the entry point into the application is a file called index.js. You can create it by running the following command:

touch index.js
Open this file and write a simple console log:
console.log("Hello, Node.js!");


To run this program, type:
node index.js


Based on the user stories above, create scripts that would run the following (Rsl_ represents a unique id for an example animal):

npm run index
npm run create rex begonia taconite
npm run show Rsl_
npm run update Rsl_ "rex begonia cosmos"
npm run destroy Rsl_
npm run total


package.json:
 "scripts":{
 "index": "node index.js index",
 "create": "node index.js create",
 "show": "node index.js show",
 "update": "node index.js update",
 "destroy": "node index.js destroy",
 "score": "node index.js score"
}


Index
mkdir data
mkdir data/begonias.json


To add an id, you need to add an npm package to generate a unique id. Limit the id to be 4 characters long, so that there is less for the user to type.

npm install nanoid@3



To add id

touch src/begoniaController.js


Create the following to import into begoniaController.js

touch data/begoniaPoints.json


Here are the following commands

Show

npm run show Rsl_


Destroy

npm run destroy Rsl_


Update

npm run update Rsl_ "red fox"


Total will be the sum of the begonia points.

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



# Notes

### Jest: JavaScript Testing Framework

This app has Jest testing.

Jest Supertest testing on backend:

app.test.js - integration testing
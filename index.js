const { nanoid } = require("nanoid")
const { readJSONFile, writeJSONFile } = require("./helpers");
import

const inform = console.log;

function run() {
let begonias = readJSONFile("./data", "begonias.json");
  const action = process.argv[2];
  const begonia = process.argv[3];
  switch (action) {
    case "index":
      inform(action, begonias);
      break;
    case "create":
      inform(action, begonia);
      break;
    case "show":
      inform(action, begonia);
      break;
    case "update":
      inform(action, begonia);
      break;
    case "destroy":
      inform(action, begonia);
      break;
    case "score":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }
}
run();
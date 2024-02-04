// JSON.stringify() => Converts JS Object to JSON String.
// JSON.parse()     => Converst JSON String to JS Object.

// const jsonNames = `["Immanuel", "Roseanne", "Park", "Prasad"]`;

// const jsonPerson = `{"name": "Immanuel", "age": 26, "isEmployed": true, "hobbies": ["Games", "Sports", "Music"]}`;

// const jsonPeople = `[{"name": "Immanuel", "age": 26, "isEmployed": false},
//                      {"name": "Roseanne", "age": 26, "isEmployed": true},
//                      {"name": "Park", "age": 26, "isEmployed": true},
//                      {"name": "Prasad", "age": 26, "isEmployed": false}]`;
// const parsedData = JSON.parse(jsonNames);

// fetch("people.json").then(response => response.json())
//                    .then(value => console.log(value));

fetch("people.json").then(response => response.json())
                    .then(values => values.forEach(value => console.log(value.name)));

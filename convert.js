//Convert Objects to JSON
var objects = require('./object');
var convertedObjects = JSON.stringify(objects);
console.log(convertedObjects);

//Convert JSON back to Objects
objects = JSON.parse(convertedObjects);
console.log(objects.nodeBook1);

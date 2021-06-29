function exampleConstructor() {
};
console.log('prototype property: ', exampleConstructor.prototype);
console.log('typeof: ', typeof exampleConstructor);

var newExampleConstructor = new exampleConstructor();
console.log('new exampleConstructor: ', newExampleConstructor);
var instance = newExampleConstructor instanceof exampleConstructor;
console.log('instance of new exampleConstructor: ', instance);

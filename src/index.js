import externalFunction from './externalScript';

function someFunction() {
  console.log('Text of someFunction');
}

class someClass {
  constructor() {
    this.property = 'Property of someClass';
  }

  getProperty() {
    return this.property
  }
}

const classInstance = new someClass();
console.log(classInstance.getProperty());

externalFunction();

someFunction();

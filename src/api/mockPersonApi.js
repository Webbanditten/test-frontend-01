import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const person = 
{ 
  val1: '1',
  val2: '2'
};

class PersonApi {
  static get(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minLength = 1;
        const maxLength = 10;
        if (input.length > maxLength || input.length < minLength) {
          reject(`Input must be between ${minLength} and ${maxLength} charracters.`);
        }
        resolve(Object.assign({}, person));
      }, delay);
    });
  }
}

export default PersonApi;
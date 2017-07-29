import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const facility = 
{ 
  val3: '3',
  val4: '4'
};

class FacilityApi {
  static get(val1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, facility));
      }, delay);
    });
  }
}

export default FacilityApi;
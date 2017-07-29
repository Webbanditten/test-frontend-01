import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const exposure = 
{ 
	val5: '5'
};

class ExposureApi {
  static get(val2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, exposure));
      }, delay);
    });
  }
}

export default ExposureApi;
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
  // if we were to add any other parameter to cb then we would get an error because we only specified one parameter in the cb function parameter.
};

addAndHandle(10, 20, (result) => {
  console.log(result);
});
// we don't have to specify types here because we already did above in the addAndHandle function when using the cb(callback), we already specified that it would take in a number.


function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});

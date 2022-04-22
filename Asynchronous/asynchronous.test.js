const sum = require('./asynchronous');

// Asynchronous =  When you have code that runs asynchronously,
// Jest needs to know when the code it is testing has completed, before it can move on to another test.

// Promises
test('Promise syntax', () => {
  return fetchData().then(data => {   // you wait until fetchData is done to run the task, and check the result.
    expect(data).toBe('Expect result');
  })
})

//  Async/Await
test('Async await syntax, success', async () => {
  const data = await fetchData();
  expect(data).toBe('Expect result');
});

test('Async await syntax, failed', async () => {
  expect.assertions(1);
  try {
    await fetchData()
  } catch (e) {
    expect(e).toMatch('error');
  };
});
// simple version, using .resolves & .rejects
test('Async await syntax, success', async () => {
  await expect(fetchData()).resolves.toBe('Expect Result');
});

test('Async await syntax, failed', async () => {
  await expect(fetchData()).rejects.toMatch('error');
});


// Callback
test('the data is peanut butter', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

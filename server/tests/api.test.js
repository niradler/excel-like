const rp = require('request-promise');

test('get sheet', async () => {
  const options = {
    uri: 'http://localhost:8080/api/sheet/get',
    json: true
  };
  const response = await rp(options);
  expect(response).toBeDefined();
});

test('save sheet', async () => {
  const options = {
    uri: 'http://localhost:8080/api/sheet/save',
    method:'POST',
    body:{
      "row": 4,
      "col": "d",
      "text": "nir"
    },
    json: true
  };
  const response = await rp(options);
  expect(response).toBeDefined();
  expect(response).toBe('Saved!');

});

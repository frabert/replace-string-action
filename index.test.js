const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('parses input and replaces it', () => {
  process.env.INPUT_PATTERN = 'foo';
  process.env.INPUT_STRING = 'foobar';
  process.env.INPUT_REPLACEWITH = '$1!';
  const newLineToOuput = path.join(__dirname, 'index.js');
  const actionLog = cp.execSync(`node ${newLineToOuput}`, { env: process.env }).toString();
  expect(actionLog).toBe(`::set-output name=replaced,::bar
`);
});

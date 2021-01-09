const core = require('@actions/core');

try {
  const pattern = core.getInput('pattern');
  const string = core.getInput('string');
  const replaceWith = core.getInput('replace-with');
  const flags = core.getInput('flags');

  const regex = new RegExp(pattern, flags);

  core.setOutput('replaced', string.replace(regex, replaceWith));

  console.log(`pattern: "${pattern}"`);
  console.log(`string: "${string}"`);
  console.log(`replaceWith: "${replaceWith}"`);
  console.log(`flags: "${flags}"`);
} catch (error) {
  core.setFailed(error.message);
}
const core = require('@actions/core');

try {
  const pattern = core.getInput('pattern');
  const string = core.getInput('string');
  let replaceWith = core.getInput('replace-with');
  const flags = core.getInput('flags');
  const json = core.getInput('json');

  if(json) {
    replaceWith = JSON.parse(replaceWith);
  }

  const regex = new RegExp(pattern, flags);

  core.setOutput('replaced', string.replace(regex, replaceWith));
} catch (error) {
  core.setFailed(error.message);
}
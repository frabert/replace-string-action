# `replace-string` GitHub Action

Replaces strings with regular expressions.

## Inputs

### `pattern`

**Required** Regular expression to match.

### `string`

**Required** Input string.

### `replace-with`

**Required** String to use for replacement.

## Outputs

### `replaced`

The replaced string.

## Example usage

uses: frabert/replace-string@master
with:
  pattern: 'Hello, (\w+)!'
  string: 'Hello, world!'
  replace-with: 'I greet you, $1!'

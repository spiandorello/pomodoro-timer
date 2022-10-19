# GitHub Workflows

## Tests

```sh
act \
  -P ubuntu-18.04=shivammathur/node:1804 \
  -j tests \
  -W ./.github/workflows/tests.yml \
  -v
```

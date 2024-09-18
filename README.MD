# Running openapi-generator-cli

From the root of the repo, run:

```bash
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i /local/emma-openapi-1.0.1.json -g typescript-node -o /local/
```

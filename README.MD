# Running openapi-generator-cli

To update to a newer version of the emma api, update the `emma-openapi-1.0.1.json` file and run the following command:

```bash
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i /local/emma-openapi-1.0.1.json -g typescript-node -o /local/
```

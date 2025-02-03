#!/bin/sh
set -e

# Replace env variable placeholders with real values
printenv | grep REPLACE_SERVER_ENV_ | while read -r line ; do
  key=$(echo $line | cut -d "=" -f1)
  value=$(echo $line | cut -d "=" -f2)

  find /app -type f -exec sed -i "s|$key|$value|g" {} \;
done

# Execute the container's main process (CMD in Dockerfile)
exec "$@"
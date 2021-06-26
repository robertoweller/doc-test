#!/bin/bash

# TESTE

echo "Apagando versão $1..."
rm -r "versioned_docs/version-$1"
rm -r "versioned_sidebars/version-$1-sidebars.json"

#!/bin/bash

# sh apaga.sh "0.0.1" # vai apagar a versao 0.0.1

if [ -e "versioned_docs/version-$1" ] ; then
	echo "Apagando versão $1..."
	rm -r "versioned_docs/version-$1"
	rm -r "versioned_sidebars/version-$1-sidebars.json"
	vim versions.json
else
	echo "Essa versão não existe, ou já apada."
fi

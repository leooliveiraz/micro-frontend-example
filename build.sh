#!/bin/bash
echo "ENV" $1
echo "UTILIZE ./build.sh NOME_DO_ENV para mudar o ambiente de build, ex: ./build.sh prod, utilize um server de sua escolha para disponibilizar os arquivos"
env=$1
echo "---------------"
rm packs/components/*/*
rm packs/*
for dir in $(ls -d */); 
    do 
        if ! dir = "packs"; then
            echo "Building "${dir%%/} ${env}; 
            cd ${dir}; yarn install;
            REACT_APP_NODE_ENV=$env yarn build; 
            cp -r dist/* ../packs/; 
            cd ..; 
            echo "---------------"
        else
            echo "dir packs has no builds to do."
        fi
done

#!/bin/bash

echo "ENV" $1
echo "UTILIZE ./build.sh NOME_DO_ENV para mudar o ambiente de build, ex: ./build.sh prod, utilize um server de sua escolha para disponibilizar os arquivos"
echo ""
echo ""
env=$1
echo ""
rm packs/components/*/*
rm packs/*
for dir in $(ls -d */); 
    do 
        echo $dir
        if [  "$dir" == "packs/" ]; then
            echo "DIR packs has no builds to execute."    
            echo ""
            echo ""        
        else
            echo "Building "${dir%%/} ${env}; 
            cd ${dir}; 
            #yarn install;
            REACT_APP_NODE_ENV=$env yarn build; 
            #cp -r dist/* ../packs/$dir; 
            if [ "$dir" == "main-container/" ]; then
                echo "copiando $dir para packs"
                cp -r dist/* ./../packs;
            else 
                echo "copiando $dir para packs/$dir"
                mkdir -p ./../packs/components/$dir
                cp -rp dist/* ./../packs/components/$dir;
            fi
            cd ..; 
            
            echo ""
            echo ""
        fi
done

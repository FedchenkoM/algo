#!/bin/bash
cd "src/leetCode/${1}"

for file in *
do
if [ -d "$file" ]
then
cd $file
mv *.js ../ 
cd ../
rm -rf "$file"
fi
done

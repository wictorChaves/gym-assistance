const pathFilesVersion = [
    './angular.json',
    './package.json',
    './src/assets/configs.json'
];

var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Qual é a versão?\n", (version) => {
    console.log("\nSua resposta '" + version + "' foi grava com sucesso numa variável inútil");

    pathFilesVersion.forEach(path => {
        const jsonFile = require(path);
        jsonFile.version = version;
        const jsonFormatted = JSON.stringify(jsonFile, null, 2);
        require('fs').writeFile(path, jsonFormatted, error => { if (error) return console.error(error); });
    });

    reader.close();
});
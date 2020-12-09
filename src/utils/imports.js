const fs = require('fs')
var path = require('path');

const baseDir = './'
const importsSet = new Set()

const readFileForImports = (fileFullPath, currDir) => {
    try {
        const data = fs.readFileSync(fileFullPath, 'utf-8')
        let importsFromFile = data.split('\n').filter(line => line.match(/import*/))        
        return prepareImports(importsFromFile, currDir)        
    } catch (err) {
        console.error("Could not read the file.\n", err);
        process.exit(1);
    }
}

const mapImports = (importsArray, currDir) => {
    const imports = importsArray.map(i => {
        const splitImport = i.replace(/"/g,'\'').split('\'')
        // console.log(splitImport[1]);
        return {
            path: splitImport[1].match(/[@]/) ? 
                    path.join('', splitImport[1].replace('@','.').trim()).replace(/\\/g, '/') : 
                    path.join(currDir, splitImport[1]).replace(/\\/g, '/'),
            name: splitImport[0].split('import').join('').split('from').join('').trim()
        }
    })
    return imports
}

const prepareImports = (importsArray, currDir = './') => {
    const imports = []
    mapImports(importsArray, currDir).forEach(imp => {
        imports.push(imp)
    })
    return imports
}

const readImports = (currDir = baseDir) => {
    // Loop through all the files in the directory
    try {        
        const files = fs.readdirSync(currDir)
        files.forEach(file => {
            var fromPath = path.join(currDir, file)

            try {
                const stat = fs.statSync(fromPath)                

                if (stat.isFile() && fromPath.match(/.[vue]$/)) {                    
                    const res = readFileForImports(fromPath, currDir)
                    // if there's a result, add it into the set
                    res && res.forEach(element => {
                        importsSet.add(element)    
                    })
                    
                } else if (stat.isDirectory()){
                    if ( fromPath === 'node_modules' ) { return } //TODO: Change this to an ignroe file or .girignore
                    return readImports(baseDir + '\\' + fromPath) | []
                }

            } catch (error) {
                console.error("Error stating file.", error)
                return;                
            }

        })
    } catch (err) {
        console.error("Could not list the directory.\n", err);
        process.exit(1);        
    }
    return importsSet
}

module.exports = readImports
const fs = require('fs')
var path = require('path');

const basePath = './plugins'

const createPluginDir = () => {    
    try {
        fs.mkdirSync(basePath)
        console.log('Created plugins directory');
    } catch (error) {
        if (error.message.match(/[exists]/)) {
            console.log('Directory \'plugin\' already exists in root directory, creating plugins...')
        } else {
            console.log(error)
            process.exit(1)
        }
    }
}

const createPluginFileData = (name, relativePath) => {
    let fileData = 'import Vue from \'vue\'\n' // Import Vue first
    fileData += 'import ' + name + ' from \'' + relativePath + '\'\n'
    fileData += 'Vue.use(' + name + ')'
    return fileData
}

const createPluginCollectiveFile = (pluginsDataSet) => {
    console.log('Creating a single import file')
    
    let fileData = 'import Vue from \'vue\'\n';
    
    [...pluginsDataSet].forEach(p => {
        fileData += 'import ' + p.name + ' from \'' + p.path + '\'\n'
    });

    [...pluginsDataSet].forEach(p => {
        fileData += 'Vue.use(' + p.name + ')\n'
    })
    
    const filePath = path.join(basePath ,'collective-plugins.js')
    
    try {

        fs.writeFileSync(filePath, fileData)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

const createPluginFiles = (pluginsDataSet) => {
    console.log('Creating multiple import files');
    
    [...pluginsDataSet].forEach(p => {
        const fileData = createPluginFileData(p.name, p.path)
        const filePath = path.join(basePath ,p.name + '.js')
        
        try {
            fs.writeFileSync(filePath, fileData)
        } catch (error) {
            console.log(error)
            process.exit(1)            
        }
    })

}

module.exports = {
    createPluginDir,
    createPluginCollectiveFile,
    createPluginFiles
}
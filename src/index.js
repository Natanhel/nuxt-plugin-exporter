const readImports = require('./utils/imports')
const {createPluginDir, createPluginCollectiveFile, createPluginFiles} = require('./utils/plugin')

const buildPlugins = (basicVueComponentsFolder = './components',single, editConfig) => {
    // Ready the imports set
    console.log('Grabbing your imports');
    let importsSet = readImports(basicVueComponentsFolder)
    // filter undefiend items
    importsSet = new Set([...importsSet].map(e => JSON.parse(e)))
    // Imports are ready to work with
    console.log('Found imports:', importsSet)
    // Create the plugin dir
    createPluginDir()
    // Create the plugin files
    !single && createPluginFiles(importsSet)
    // Create a single collective file
    single && createPluginCollectiveFile(importsSet)
    console.log('Process has finished successfully!');
}

module.exports = buildPlugins
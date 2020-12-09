const readImports = require('./utils/imports')
const {createPluginDir, createPluginCollectiveFile, createPluginFiles} = require('./utils/plugin')

const buildPlugins = () => {
    // Ready the imports set
    console.log('Grabbing your imports');
    const importsSet = readImports()
    // Imports are ready to work with
    console.log('Found imports:', [...importsSet])
    // Create the plugin dir
    createPluginDir()
    // Create the plugin files
    createPluginFiles(importsSet)
    // Create a single collective file
    createPluginCollectiveFile(importsSet)
    console.log('Process has finished successfully!');
}

module.exports = buildPlugins
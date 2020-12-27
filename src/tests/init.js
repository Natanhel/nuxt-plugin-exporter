const fs = require('fs')
var path = require('path');
var pluginBuilder = require('../../src/index')

// const baseDir = './components'

const cmd = async (command, cb = () => {}) => {
    var execSync = require('child_process').execSync,child;
    const { err,out } = await execSync(command)
    out && console.log(out); 
    err && console.log(err);
    cb()
}

const clearComponentsDirectory = () => {
    console.log('deleting components directory')
    cmd('rmdir /S /Q "components"')
    console.log('deleted components directory')
}

const runBuilder = (single) => {
    console.log('Running builder...')
    pluginBuilder('./components', single)
    console.log('Built plugins files successfully');
}

const createNewComponentsDir = () => {
    console.log('Creating new components directory')
    cmd('mkdir "components"')
    cmd('Xcopy /E /I /H /C "components_tests" "components"')
    console.log('New components directory created')
}

const runTestMultiple = () => {
    runBuilder(false)
}

const runProgramBuild = () => {    
    console.log('Building app')
    cmd('npm run build')
    console.log('Built app successfully.')
}

const runTestSingle = () => {
    runBuilder(true)
}

const countTime = (buildOperation = () => {},cb = () => {}) => {
    console.log('Measuring time');
    const startTime = new Date().getTime()
    buildOperation()
    const delta = new Date().getTime() - startTime
    cb(delta)
}

let noOptimizationBuildTime = 0

const displayTime = (totalTime, cb = () => {}) => {
    console.log('Total time app built', totalTime, 'ms')
    cb(totalTime)
}
const saveTime = totalTime => noOptimizationBuildTime = totalTime
const printDifferential = totalTime => console.log('Difference in running times is', totalTime - noOptimizationBuildTime);

clearComponentsDirectory()
createNewComponentsDir()
// - build without optimization -
countTime(runProgramBuild, totalTime => displayTime(totalTime, saveTime))
// - restart components library -
clearComponentsDirectory()
createNewComponentsDir()
// - run optimization -
runTestSingle()
// runTestMultiple()
// - build after optimization -
countTime(runProgramBuild, totalTime => displayTime(totalTime, printDifferential))
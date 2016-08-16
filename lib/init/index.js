const {log, Registry} = require('ai-core');
const jsonfile = require('jsonfile')
const aureliaConfigFilePath = './aurelia_project/aurelia.json'; 
const inquirer = require('inquirer');

module.exports = class InitProject {
  constructor(settings) {
    this.settings = settings;
    this.registry = new Registry();
  }

  initialize() {
    this.questions = require('./questions');

    // prompt for Webpack or Jspm preference 
    // http://ilikekillnerds.com/2016/03/ditching-jspmsystem-js-webpack/

    inquirer.prompt(this.questions.init).then(answers => {
      try {
        // load aurelia.json and add a packageManager entry
        // let aureliaConfig = jsonfile.readFileSync(aureliaConfigFilePath);
        // aureliaConfig.packageManager = answers.packageManager;
        // jsonfile.writeFileSync(aureliaConfigFilePath, aureliaConfig, {spaces: 2});

        this.registry.write({
          gitAccount: answers.gitAccount,
          gitWorkflow: answers.gitWorkflow,
          componentsPath: answers.componentsPath,
          packageManager: answers.packageManager,
          appBundler: answers.appBundler,
          autoBundling: answers.autoBundling
        });
      } catch (err) {
        console.error(`Error: Could not access ${aureliaConfigFilePath} in your project`);
      }
    });
  }
}


'use strict'

module.exports = {
  proxy: 'docker',
  runDocker: false,
  tail: true,
  restartOnError: true,
  exclude: [
    '**/node_modules',
    '**/data',
    '**/.git',
    '**/CURRENT',
    '**/LOG*',
    '**/MANIFEST*',
    '**/*.ldb',
    '**/*.log'
  ],
  overrides: {
   msgstats: {
     run: 'node ./system/msgstats.js'
   },
   mesh: {
     run: 'node ./system/base-node.js'
   }
 }
};

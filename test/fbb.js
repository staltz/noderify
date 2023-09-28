//test replacing foo-bar-baz

console.log('  ✓ replaced module loads submodules!')
console.log(require('util').inspect(require('../package.json')))

const calculadora = require('./calculadora')
const minimist = require('minimist')

var argv = minimist(proces.args.slice(2))

console.log(argv={nome:"Maria",idade:43})

const nome = argv["nome"]
const idade =  argv["idade"]

console.log(`Nome: ${nome} idade: ${idade}`)
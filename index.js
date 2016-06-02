#! /usr/bin/env node
'use strict'

const argv = require('minimist')(process.argv.slice(2))

let delay = parseInt(argv.delay || argv._.pop(), 10)
if (isNaN(delay)) {
  delay = 1000
}

const knexfile = argv.knexfile || 'knexfile'
const knex = require('knex')(
  require(
    require('path').join(process.cwd(), knexfile)
  )
)

function wait () {
  knex
    .raw('SELECT 1 + 1')
    .then(() => void process.exit())
    .catch(err => {
      console.error(err)
      console.error(`Connection failed, waiting ${delay}...`)
      setTimeout(wait, delay)
    })
}

wait()

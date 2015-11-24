#! /usr/bin/env node
'use strict'

let delay = parseInt(process.argv.pop(), 10)
if (isNaN(delay)) {
  delay = 1000
}

const knex = require('knex')(require('./knexfile'))

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

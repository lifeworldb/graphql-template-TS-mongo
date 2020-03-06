const { connectToMongo } = require('@config/connection')
const fs = require('fs')
const emoji = require('node-emoji')
const BLOCKS = require('cli-block')
const clear = require('clear')
const Listr = require('listr')

clear()
BLOCKS.BLOCK_START("Let's go");
BLOCKS.BLOCK_LINE();
BLOCKS.BLOCK_LINE("So, this is CLI Blocks");
BLOCKS.BLOCK_LINE();
BLOCKS.BLOCK_LINE("A package to easily create good looking blocks in your CLI");
BLOCKS.BLOCK_END();

const setupServer = new Listr([
  {
    title: 'Checking Environment',
    task: () => {
      try {
        if(fs.existsSync(`${process.cwd()}/.envs`))
          return new Error('The environment file is not found, so the server cannot run.')
      } catch (e) {
        throw new Error('The environment file is not found, so the server cannot run.')
      }
    }
  },
  {
    title: `${emoji.get('sunglasses')} Verifying the connection to the database`,
    task: async () => {
      await connectToMongo()
        .catch(() => {
          throw new Error('Could not validate connection to database.')
        })
    }
  }
])

module.exports = {
  setup: setupServer
}

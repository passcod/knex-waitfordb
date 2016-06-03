# knex-waitfordb

Does what it says on the tin. Reads your knexfile.js, tries to run

    SELECT 1 + 1;

on your database, if it fails it waits 1000ms, tries again, and returns
when it can run it. You can optionally pass a custom delay as last argv or via
the `--delay [delay]` argument. If your `knexfile.js` is not located in the
current working directory you can use the
`--knexfile [path/to/your/knexfile.js]` argument.

## What?

It's for use in your npm scripts. You might have something like this:

    "scripts": {
      "migrate": "knex migrate:latest"
    }

but you need to make sure the database is up to run this, right? So do:

    "scripts": {
      "premigrate": "knex-waitfordb",
      "migrate": "knex migrate:latest"
    }

and `npm install --save-dev knex-waitfordb`. Now `npm run migrate` waits
for your database to be up. No hassle!

## Err...

It's really useful in Docker containers. You'll see.

## Okay?

And it's [MIT](http://passcod.mit-license.org).

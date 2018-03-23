'use strict'
import 'babel-polyfill'
import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'

import routes from './routes'
import config from '../config'

const app = express( feathers() )
app.use( express.json() )
app.use( express.urlencoded({extended: true}) )
app.configure( express.rest() )
app.use( express.errorHandler() )

routes( app )

app.listen( config.port ).on( 'listening', () =>
	console.log( `${config.serverPortMessage} ${config.appURL}:${config.port}` ) )

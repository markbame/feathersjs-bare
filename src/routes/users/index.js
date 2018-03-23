import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'
import {disallow} from 'feathers-hooks-common'
const app = express( feathers() )

import Users from '../../models/users'

app.use( 'users-crud', new Users() )
app.service( 'users-crud' ).hooks({
	before: disallow( 'rest' )
})

app.service( 'users-crud' ).hooks({
	before: {
		find: async context => {
			console.log( 'before' )
			return context
		}
	}
})

app.get( '/add/:userID', async ( req, res ) => {
	let ser = await app.service( 'users-crud' ).find({
		text: 'users added bla bla'
	})
	res.status( 500 )
	res.json({
		message: 'user hello', ser
	})
})

export default app

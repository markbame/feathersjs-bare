'use strict'

import users from './users'

const index = ( app ) => {

	app.use( '/users', users )
}

export default index

require('dotenv').config()
var config = require('12factor-config')

var cfg = config({
    logfile : {
        env      : 'APPNAME_LOG_FILE',
        type     : 'string',
        default  : '/var/log/appname.log',
        required : true,
    },
    port : {
        env      : 'APPNAME_PORT',
        type     : 'integer',
        default  : '8000',
        required : true,
    },
    debugMode : {
        env      : 'APP_DEBUG',
        type     : 'boolean',
        default  : true,
        required : true,
    },
    appURL : {
        env      : 'APP_URL',
        type     : 'string',
        default  : 'http://localhost',
        required : true,
    },
    serverPortMessage : {
        env      : 'SERVER_PORT_MESSAGE',
        type     : 'string',
        default  : 'Ducatus API server Listening @',
        required : true,
    },
    secret : {
        env      : 'SECRET',
        type     : 'string',
        default  : '99294186737032fedad37dc2e847912e1',
        required : true,
    },
    env : {
        env      : 'NODE_ENV',
        type     : 'enum',
        default  : 'development',
        values   : ['development', 'production'],
    }
})

module.exports = cfg

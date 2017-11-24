var mysql = require('mysql');

var source = {
	
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Grandcru12!',
		database: 'burger_db'
	},
	jawsDB: {
		port: 3306,
		host: 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'sdgd0e9fk0pvks0t',
		password: 'm792hops0bg6fco4',
		database: 'dxg6v1kdtyvizsel'
	}

}

var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/nodejs');
// sequelize.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully');
// 	})
// 	.catch(err => {
// 		console.log('Unable to connect to the database: ', err);
// 	})

const MockModel = sequelize.define('mock', {
	// id: {
	// 	type: Sequelize.INTEGER,
	// 	primaryKey: true
	// },
	email: {
		type: Sequelize.STRING
	},
	title: {
		type: Sequelize.STRING
	},
	summary: {
		type: Sequelize.TEXT
	}
}, {
	tableName: 'mock',
	createdAt: false,
	updatedAt: false,
});

// MockModel.findAll().then(mocks=>{
// 	console.log(mocks);
// });


// mock
var Mock = require('mockjs');
var Random = Mock.Random;
Random.email();
Random.cparagraph();
Random.csentence();

var data = Mock.mock({
	'list|100': [{
		// 'id|+1': 1,
		'email': '@email',
		'title': '@csentence',
		'summary': '@cparagraph',
	}],
});


// bulkcreate
// http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-bulkCreate
MockModel.bulkCreate(data.list)
.then(result=>{
	// console.log(result)
}).catch(error=>{
	// console.log(error)
});
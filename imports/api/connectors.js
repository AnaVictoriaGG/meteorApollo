import Sequelize from 'sequelize';
// import Mongoose from 'mongoose';

// create the connection for mssql
// create the connection
const sqlDb = new Sequelize('TestAna', "sa", "xxxxx", {
    host: 'xxxx',
    dialect: 'mssql'
});


// define the model
const PostModel = sqlDb.define('post', {
	content: { type: Sequelize.STRING },
	views: { type: Sequelize.INTEGER }
},{
	timestamps: false
});

// create the table if it doesn't exist yet
sqlDb.sync();

// export Post
const Post = sqlDb.models.post;
export { Post };

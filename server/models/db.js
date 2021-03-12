
const configureDatabase = () =>{
    mongoose.connect(
        process.env.DATABASE_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
	.then(() => console.log('DB connected.'));

    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
    mongoose.connection.on('error', (err) => {
        console.error(err.message);
    });
}

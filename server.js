const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

require('dotenv').config();
//require('./config/passport')(passport);

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
//Sets up database connection configuration
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
//Establishes connection to the database with the use of mongoose
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
});

//Establishes a session
app.use(session({
    secret: 's3cr3t',
    saveUninitialized: true,
    resave: true,
}));

//Passport Middleware

//app.use(passport.initialize());
//app.use(passport.session());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}), );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server successfully started on port ${PORT}`));
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const db = require('./controller/db.js');
const passport = require('passport');
const usersAPI = require('./routes/usersAPI');

require('colors');

require('./controller/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use("/api/users", usersAPI);

app.listen(PORT, (err) => {
    if (err) {
        console.log('💥  something went wrong 💥'.red);
    } else {
        mongoose.connect(process.env.MONGODB_URI || db.url, function (error) {
            if (error) {
                return console.log('💥  the connection broke 💥'.red);
            } else {
                console.log('✨  mongoose connection successful ✨'.america.bold);
            }
        });
        console.log(`✨  app listening on port ${PORT} ✨`.rainbow.bold);
    }
});
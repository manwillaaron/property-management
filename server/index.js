require("dotenv").config({ path: __dirname + "/../.env" });
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const ac = require("./controllers/adminController.js");
const pc = require("./controllers/propertyController");
const rc = require('./controllers/renterController')
const sc = require('./controllers/stripeController')
const sockc = require('./controllers/socketController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCheck = require("./middleware/authCheck");
const initSession = require("./middleware/initSession");
const bodyParser = require('body-parser')
// const pino = require('express-pino-logger')();
// const client = require('twilio')(
//   process.env.TWILIO_ACCOUT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

//////////////////////////////////////
const server = require('http').Server(app);
const io = require('socket.io')(server)


//////////////////////////////////////
app.use(express.json());

app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 36
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  console.log("db is all good");
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
  app.set("db", db);
  
});

app.use(initSession);

//admin
app.post("/api/login", ac.login);
app.post("/api/register", ac.register);
app.delete("/api/signout", ac.signout);
app.get("/api/admin", authCheck, ac.getAdmin);
app.get("/api/renterCheck", ac.renterCheck)

//property
app.get("/api/properties/:adminId", pc.getProperties);
app.put("/api/properties/:propertyId", pc.editProperty);
app.delete("/api/properties/:propertyId", pc.deleteProperty);
app.post("/api/properties/:adminId", pc.addProperty);

//renters
app.get('/api/renters/:propertyId', rc.getRenters)
app.post('/api/renter/add', rc.addRenter)
app.put('/api/renter/edit/:admin_id', rc.editRenter)
app.delete('/api/renter/delete/:admin_id/:propertyId', rc.deleteRenter)
app.get('/api/all/renters/:adminId', rc.getAllRenters )

//Socket
app.get('/api/messages/:admin_id', sockc.getMessages)
app.get('/api/chatrooms/:admin_id', sockc.getAllChatrooms)
app.post('/api/newmessage', sockc.saveMessage)
io.on('connection', socket => {
    // When a client connects run this function
    console.log('A connection happened', socket.id);

    // When the client sends 'needy' and a roomid add them to the room
    socket.on('needy', roomid => sockc.joinRoom(roomid, socket, io));

    // When the client sends a message to the server send it to everyone
    socket.on('message to server', payload =>
    sockc.sendMessageToRoom(payload, io)
    );
});

server.listen(4000, () => console.log('Best LESSON EVER! Sockets are cool'));

//stripe
app.post('/api/payment',sc.pay)

// twillio
// app.post('/api/messages', (req, res) => {
//   res.header('Content-Type', 'application/json');
//     client.messages
//     .create({
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: `+1${req.body.to}`,
//       body: req.body.body
//     })
//     .then(() => {
//       res.send(JSON.stringify({ success: true }));
//     })
//     .catch(err => {
//       console.log('?????????????????', err);
//       res.send(JSON.stringify({ success: false }));
//     });
// })























// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });



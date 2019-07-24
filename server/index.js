require("dotenv").config({ path: __dirname + "/../.env" });
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const ac = require("./controllers/adminController.js");
const pc = require("./controllers/propertyController");
const rc = require('./controllers/renterController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCheck = require("./middleware/authCheck");
const initSession = require("./middleware/initSession");

const app = express();

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
  app.set("db", db);
});

app.use(initSession);

//admin
app.post("/api/login", ac.login);
app.post("/api/register", ac.register);
app.delete("/api/signout", ac.signout);
app.get("/api/admin", authCheck, ac.getAdmin);

//property
app.get("/api/properties/:adminId", pc.getProperties);
app.put("/api/properties/:propertyId", pc.editProperty);
app.delete("/api/properties/:propertyId", pc.deleteProperty);
app.post("/api/properties/", pc.addProperty);

//renters
app.get('/api/renters/:propertyId', rc.getRenters)
app.post('/api/renter/add', rc.addRenter)
app.put('/api/renter/edit/:renterId', rc.editRenter)
app.delete('/api/renter/delete/:renterId', rc.deleteRenter)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));

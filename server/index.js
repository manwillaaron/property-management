require("dotenv").config({ path: __dirname + "/../.env" });
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const ac = require("./controllers/adminController.js");
const pc = require("./controllers/propertyController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

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
  app.set("db,db");
});

//admin
app.post("/api/login", ac.login);
app.post("/api/register", ac.register);
app.delete("/api/signout", ac.signout);
app.get("/api/admin", ac.getAdmin);

//property
app.get("/api/properties/:adminId", pc.getProperties);
app.put("/properties/:propertyId", pc.editProperty);
app.delete("/api/properties/:propertyId", pc.deleteProperty);
app.post("/api/properties/", pc.addProperty);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));

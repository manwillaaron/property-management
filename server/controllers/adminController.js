const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = {
  async login(req, res) {
    let { username, password } = req.body;
    const db = req.app.get("db");
    let [existingAdmin] = await db.get_admin_by_username(username);
    if (!existingAdmin) return res.status(401).send("Invalid username");
    let result = await bcrypt.compare(password, existingAdmin.password);
    if (result) {
      req.session.admin = {
        username: existingAdmin.username,
        id: existingAdmin.adminId,
        loggedIn: true
      };
      res.send(req.sesson.admin);
    } else res.status(401).send("username or password incorrect");
  },
  async register(req, res) {
    let { username, password } = req.body;
    const db = req.app.get("db");
    let [existingAdmin] = await db.get_admin_by_username(username);
    if (!existingAdmin) return res.status(401).send("Username already exists");
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(password, salt);
    let [admin] = await db.create_admin([username, hash]);
    req.session.admin = {
      username: admin.username,
      id: admin.adminId,
      loggedIn: true
    };
    res.send(req.session.admin);
  },
  async signout(req, res) {
    res.session.destroy();
    res.sendstatus(200);
  },
  async getAdmin(req, res) {
    res.send(req.session.admin);
  }
};

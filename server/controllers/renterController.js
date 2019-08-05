const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = {
  async getAllRenters(req, res) {
    const db = req.app.get("db");
    let { id } = req.session.admin;
    let renters = await db.get_all_renters(id);
    res.send(renters);
  },

  async getRenters(req, res) {
    const db = req.app.get("db");
    let { propertyId } = req.params;
    let admin = await db.get_renters(+propertyId);
    res.send(admin);
  },

  async addRenter(req, res) {
    const db = req.app.get("db");

    let {
      first_name,
      last_name,
      phone_number,
      email,
      propertyId
    } = req.body;
    let { id } = req.session.admin;

    let username = email
    let [existingAdmin] = await db.get_admin_by_username(email);
    if (existingAdmin) return res.status(401).send("Username already exists");
    let salt = await bcrypt.genSalt(saltRounds);
    let password = await bcrypt.hash(phone_number, salt);

    let admin = await db.add_renter([
      username,
      password,
      first_name,
      last_name,
      phone_number,
      email,
      +propertyId,
      +id
    ]);
    res.send(admin);
  },
  async editRenter(req, res) {
    let {
      first_name,
      last_name,
      phone_number,
      email,
      property_manager_renter
    } = req.body;
    let { prop_id } = req.params;
    const db = req.app.get("db");
    let admin = await db.edit_renter([
      prop_id,
      first_name,
      last_name,
      phone_number,
      email,
      property_manager_renter
    ]);
    res.send(admin);
  },

  async deleteRenter(req, res) {
    let { admin_id, propertyId } = req.params;
    const db = req.app.get("db");
    let admin = await db.delete_renter([+admin_id, +propertyId]);
    res.send(admin);
  }
};

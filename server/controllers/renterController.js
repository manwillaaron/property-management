module.exports = {
  async getAllRenters(req, res) {
    const db = req.app.get("db");
    let { adminId} = req.params
    let renters = await db.get_all_renters(+adminId);
    res.send(renters);
  },
  
  async getRenters(req, res) {
    const db = req.app.get("db");
    let { propertyId } = req.params;
    let renters = await db.get_renters(+propertyId);
    res.send(renters);
  },


  async addRenter(req, res) {
    let { first_name, last_name, phone_number, email, prop_id } = req.body;
    const db = req.app.get("db");
    let renters = await db.add_renter([
      first_name,
      last_name,
      phone_number,
      email,
      prop_id
    ]);
    res.send(renters);
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
    let renters = await db.edit_renter([
      prop_id,
      first_name,
      last_name,
      phone_number,
      email,
      property_manager_renter
    ]);
    res.send(renters);
  },

  async deleteRenter(req, res) {
    let { renterId } = req.params;
    const db = req.app.get("db");
    let renters = await db.delete_renter(renterId);
    res.send(renters);
  }
};

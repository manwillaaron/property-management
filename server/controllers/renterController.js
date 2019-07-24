
module.exports = {
    async getRenters(req, res) {
        let {prop_id} = req.query
      const db = req.app.get("db");
      let renters = await db.get_renters(prop_id);
      res.send(renters);
    },

    async addRenter(req,res) {
        let {first_name,last_name, phone_number, email,prop_id} = req.body
        const db = req.app.get('db')
        let renters = await db.add_renter([
            first_name,
            last_name, 
            phone_number, 
            email,
            prop_id
        ])
        res.send(renters)
    },
    async editRenter(req,res) {
        let {first_name,last_name, phone_number, email, property_manager_renter} = req.body
        let {prop_id} = req.params
        const db = req.app.get('db')
        let renters = await db.edit_renter([
            prop_id,
            first_name,
            last_name, 
            phone_number, 
            email, 
            property_manager_renter
        ])
        res.send(renters)
    },

    async deleteRenter(req,res) {
        let {renter_id} = req.params
        let {prop_id} = req.query
        const  db = req.app.get('db')
        let renters = await db.delete_renter([renter_id, prop_id])
        res.send(renters)
    }
}
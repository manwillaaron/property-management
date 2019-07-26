
module.exports = {
    async getRenters(req, res) {
        const db = req.app.get("db");
        let {propertyId} = req.params
        console.log('hit get renters function ctrl', req.params)
      let renters = await db.get_renters(+propertyId);
      console.log(renters)
      res.send(renters);
    },

    async addRenter(req,res) {
        let {first_name,last_name, phone_number, email,prop_id} = req.body
        // console.log('hit add renters function ctrl', req.body)
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
        let {renterId} = req.params


        console.log('delete req.params', req.params)
        console.log('delete req.body', req.body.renters)
        console.log('delete req.query', req.query)


        const  db = req.app.get('db')
        let renters = await db.delete_renter(renterId)
        res.send(renters)
    }
}
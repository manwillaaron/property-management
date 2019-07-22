module.exports = {
    async getProperties(req,res){
        let {adminId} = req.params
        const db = req.app.get('db')
        let properties = await db.get_properties_by_admin(+adminId)
        res.send(properties)
    },

    async editProperty(req,res){
        let{propertyId} = req.params
        let {
            propertyName,
            address,
            beds,
            baths,
            squareFootage,
            acreage,
            rent,
            gasProvider,
            electricProvider,
            hasRenter,
            hasFridge,
            hasDishwasher,
            hasWasherDryer,
            mortgage,
            taxes,
            imgUrl,
            imgUrl2,
            imgUrl3,
            imgUrl4,
            imgUrl5
            
        } = req.body
        const db = req.app.get('db')
        let properties = await db.edit_property([
            +propertyId,
            propertyName,
            address,
            beds,
            baths,
            squareFootage,
            acreage,
            rent,
            gasProvider,
            electricProvider,
            hasRenter,
            hasFridge,
            hasDishwasher,
            hasWasherDryer,
            mortgage,
            taxes,
            imgUrl,
            imgUrl2,
            imgUrl3,
            imgUrl4,
            imgUrl5
        ])
        res.send(properties)
    },
    
    async deleteProperty(req,res) {
        const {propertyId} = req.params
        const db = req.app.get('db')
        let properties = await db.delete_property([+propertyId, req.session.admin.adminId])
        res.send(properties)
    },

    async addProperty(req,res){
        const db = req.app.get('db')
        let {
            propertyName,
            address,
            beds,
            baths,
            squareFootage,
            acreage,
            rent,
            gasProvider,
            electricProvider,
            hasRenter,
            hasFridge,
            hasDishwasher,
            hasWasherDryer,
            mortgage,
            taxes
        } = req.body
        let properties = await db.add_property([
             propertyName,
            address,
            beds,
            baths,
            squareFootage,
            acreage,
            rent,
            gasProvider,
            electricProvider,
            hasRenter,
            hasFridge,
            hasDishwasher,
            hasWasherDryer,
            mortgage,
            taxes
        ])
        res.send(properties)
    }
}
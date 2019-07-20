update properties 
set   address = $2,
            num_beds = $3,
            num_baths = $4,
            square_footage = $5,
            acreage = $6,
            rent = $7,
            gas_company = $8,
            electric_company = $9,
            has_renter = 10
            fridge_included = $11,
            dishwasher_included = $12,
            washer_dryer_included = $13,
            mortgage = $14,
            taxes = $15,
            img_url = $16,
            img_url2 = $17,
            img_url3 = $18,
            img_url4 = $19,
            img_url5 = $20,
            
where prop_id = $1;

select * from properties
where id = 21;
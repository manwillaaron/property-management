select renter_id, first_name, last_name, phone_number from renters r
join properties_admin pa
on pa.prop_id = r.prop_id
where r.prop_id in (select prop_id from properties_admin pa
where pa.admin_id = $1);
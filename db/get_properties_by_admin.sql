select * from properties_admin pa
join  properties p
on p.prop_id = pa.prop_id
join admin a 
on a.admin_id = pa.admin_id
where pa.admin_id = $1;
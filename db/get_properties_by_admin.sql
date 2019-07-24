select * from properties p
join  properties_admin pa
on p.prop_id = pa.prop_id
join admin a 
on a.admin_id = pa.admin_id
where pa.admin_id = $1;

delete from properties_admin pa
where admin_id = $1
and prop_id = $2;

delete from admin
where admin_id = $1;

select * from admin 
where admin_id = $1;


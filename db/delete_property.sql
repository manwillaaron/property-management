delete from properties 
where prop_id = $1;

select * from properties 
where admin_id = $2;
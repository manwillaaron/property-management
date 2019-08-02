INSERT into admin (
 username, 
 password,
 first_name, 
 last_name, 
 phone_number, 
 email, 
 is_renter, 
 property_manager)
values ($1,$2,$3,$4,$5,$6,'true','false');

update admin
set username = $6
where username = '123456789';

insert into properties_admin ( prop_id, admin_id)
values($7,( select max(admin_id) from admin )
);

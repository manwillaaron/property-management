insert into chat_junction (admin_id_pm)
values ($8);

INSERT into admin (
 username, 
 password,
 first_name, 
 last_name, 
 phone_number, 
 email, 
 is_renter, 
 property_manager,
 chatroom_id)
values ('123456789',$2,$3,$4,$5,$6,'true','false',(
    select max(chatroom_id) from chat_junction
    ));

update admin
set username = $6
where username = '123456789';

insert into properties_admin ( prop_id, admin_id)
values($7,( select max(admin_id) from admin )
);

update admin 
set chatroom_id = (
    select max(chatroom_id) from chat_junction
    )
    where admin_id = $8

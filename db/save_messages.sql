insert into messages (message_content,  admin_id_messages, admin_id_reciver, first_name, chatroom_id)
values ($1,$2,$3,(
select DISTINCT(chatroom_id)  from admin 
where admin.chatroom_id is not null
and (admin_id = $2
or admin_id in ( select admin.admin_id from admin
join properties_admin 
on properties_admin.admin_id = admin.admin_id
where properties_admin.prop_id in (select properties_admin.prop_id from properties_admin
where admin_id = $2)))
));





 
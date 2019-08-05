select * from messages m
join chat_junction cj
on cj.chatroom_id = m.chatroom_id
join admin a 
on a.chatroom_id = cj.chatroom_id
where a.admin_id = $1
-- and a.chatroom_id = cj.chatroom_id;
insert into admin (username,password,first_name,last_name,email)
values ($1,$2,$3,$4,$5)
 returning *;
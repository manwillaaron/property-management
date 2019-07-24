delete from renters
where renter_id = $1;

select * from renetrs r 
join properties p
on p.prop_id = r.prop_id
where prop_id = $2;
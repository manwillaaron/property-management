
-- select * from renters r
-- join properties p 
-- on p.prop_id = r.prop_id
-- where p.prop_id = $1;

SELECT * from renters
where prop_id = $1;
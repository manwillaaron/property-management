delete from renters
where renter_id = $1
;

SELECT * from renters
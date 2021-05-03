UPDATE likes
SET 
 user_id = $2,
profile_id = $3
WHERE like_id = $1;
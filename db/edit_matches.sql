UPDATE matches
SET 
 user_id = $2,
profile_id = $3
WHERE match_id = $1;
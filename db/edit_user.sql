UPDATE users
SET 
email = $2,
hash = $3
WHERE user_id = $1
RETURNING *;



SELECT * FROM likes
WHERE user_id = $1 AND profile_id = $2;
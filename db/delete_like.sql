DELETE FROM likes
WHERE like_id = $1 AND profile_id=$2;
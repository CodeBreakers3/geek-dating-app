DELETE FROM likes
WHERE profile_id_1 = $1 AND profile_id_2=$2;
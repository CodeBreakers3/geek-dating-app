SELECT * FROM profiles p
JOIN likes l ON p.profile_id = l.profile_id_1 OR p.profile_id = l.profile_id_2
WHERE p.user_id = $1;
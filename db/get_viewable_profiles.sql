SELECT * FROM profiles
WHERE profile_id != $1 AND
profile_id NOT IN (
  SELECT profile_id_2 FROM likes
  WHERE profile_id_1 = $1
);
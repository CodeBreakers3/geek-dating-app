INSERT INTO likes(profile_id_1,profile_id_2)
VALUES((SELECT profile_id from profiles where profile_id=$1),(SELECT profile_id from profiles where profile_id=$2))
returning *;
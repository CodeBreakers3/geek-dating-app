INSERT INTO matches(profile_id_2,profile_id_1)
VALUES((SELECT profile_id from profiles where profile_id=$1),(SELECT profile_id from profiles where profile_id=$2))
returning *;
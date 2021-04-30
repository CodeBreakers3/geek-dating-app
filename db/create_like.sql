INSERT INTO likes(user_id,profile_id)
VALUES((SELECT user_id from users where user_id=$1),(SELECT profile_id from profiles where profile_id=$2));
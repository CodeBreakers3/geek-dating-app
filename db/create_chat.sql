INSERT INTO chats(match_id,chat_content,user_id, time_stamp)
VALUES((SELECT match_id from matches where match_id=$1),$2,(SELECT user_id from users where user_id=$3), $4)
returning *;
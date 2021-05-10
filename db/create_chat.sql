INSERT INTO chats(match_id,chat_content, profile_id)
VALUES((SELECT match_id from matches where match_id=$1),$2,(SELECT profile_id from profiles where profile_id=$3))
returning *;
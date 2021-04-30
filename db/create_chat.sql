INSERT INTO chats(match_id,chat_content,user_id,timestamp)
VALUES((SELECT match_id from matches where match_id=$1),(SELECT profile_id from profiles where profile_id=$2));
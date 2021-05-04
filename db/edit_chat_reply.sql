UPDATE chats
SET 
chat_content = $2
WHERE chat_id = $1
returning *;
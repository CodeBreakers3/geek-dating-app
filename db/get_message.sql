select chat_content as message from chats
where match_id = $1
order by chat_id desc
limit 1;
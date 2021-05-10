SELECT ch.chat_id, ch.profile_id as replying_profile_Id, ch.chat_content as message, pr.profile_id as profile_id,pr.current_game as game, pr.gamer_tag as gamertag, pr.first_name as first_name, pr.last_name as last_name,pr.photo_one as photo,ch.match_id FROM chats ch
inner JOIN profiles pr on ch.profile_id = pr.profile_id
where ch.match_id = $1
order by ch.chat_id;
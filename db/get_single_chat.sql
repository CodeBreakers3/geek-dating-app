SELECT ch.chat_id, ch.profile_id as replying_profile_Id, ch.chat_content as message, pr1.profile_id as profile_id_1, pr1.first_name as firstName1, pr1.last_name as lastName1, pr2.profile_id as profile_id_2,pr2.first_name as firstName2, pr2.last_name as lastName2,ma.match_id as matchID FROM matches ma
inner JOIN chats ch on ch.match_id = ma.match_id
inner JOIN profiles pr2 on ma.profile_id_2 =pr2.profile_id
inner join profiles pr1 on ma.profile_id_1 = pr1.profile_id
where ma.match_id = $1;
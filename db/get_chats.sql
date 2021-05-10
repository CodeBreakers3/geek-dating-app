SELECT ma.match_id, pr1.profile_id as profile1, pr1.gamer_tag as gamerTag1, pr1.first_name as firstName1, pr1.last_name as lastName1, pr1.photo_one as photo1, pr2.profile_id as profile2,pr2.first_name as firstName2, pr2.last_name as lastName2,pr2.gamer_tag as gamerTag2,pr2.photo_one as photo2 FROM matches ma
inner join chats ch on ch.match_id = ma.match_id
inner JOIN profiles pr2 on ma.profile_id_2 =pr2.profile_id
inner join profiles pr1 on ma.profile_id_1 = pr1.profile_id
where profile_id_1 = $1 or profile_id_2 = $1
group by ma.match_id,ch.match_id,pr1.profile_id,pr2.profile_id
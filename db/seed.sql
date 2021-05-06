DROP TABLE IF EXISTS chats;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email varchar(255) NOT NULL,
	hash TEXT NOT NULL
);

CREATE TABLE profiles (
	profile_id SERIAL PRIMARY KEY,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	gamer_tag varchar(255) UNIQUE,
	location varchar(255) NOT NULL,
	about_me varchar(255),
	sexual_orientation varchar(255) NOT NULL,
	sex varchar(255) NOT NULL,
	preferred_pronoun text,
	height varchar(255),
	activity_level varchar(255),
	religion varchar(255),
	education varchar(255),
	occupation varchar(100),
	kids varchar(255),
	alcohol varchar(255),
	smoking varchar(255),
	cannabis varchar(255),
	recreational_drugs varchar(255),
	favorite_food varchar(255),
	current_game varchar(255),
	photo_one text DEFAULT 'https://bit.ly/2RpyDE0',
	photo_two text DEFAULT 'https://bit.ly/2RpyDE0',
	photo_three text DEFAULT 'https://bit.ly/2RpyDE0',
	photo_four text DEFAULT 'https://bit.ly/2RpyDE0',
	photo_five text DEFAULT 'https://bit.ly/2RpyDE0',
	user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE likes (
	like_id SERIAL PRIMARY KEY,
	profile_id_1 INT,
  FOREIGN KEY (profile_id_1) REFERENCES profiles(profile_id),
profile_id_2 INT,
  FOREIGN KEY (profile_id_2) REFERENCES profiles(profile_id)
);

CREATE TABLE matches (
	match_id SERIAL PRIMARY KEY,
	profile_id_1 INT,
  FOREIGN KEY (profile_id_1) REFERENCES profiles(profile_id),
	profile_id_2 INT,
	FOREIGN key (profile_id_2) REFERENCES profiles(profile_id)
);

CREATE TABLE chats (
	chat_id serial primary key NOT NULL,
	match_id int,
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
	chat_content varchar(255) NOT NULL,
	profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES profiles(profile_id),
	time_stamp TEXT NOT NULL
);

INSERT INTO users(email, hash)
VALUES ('Tanner.Francis11@gmail.com', '$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'), --user_id 1
('thejaredandersen@gmail.com','$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'),--user_id 2
('sn3541@gmail.com','$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'),--user_id 3
('lisa@gmail.com','$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'),--user_id 4
('moe@gmail.com', '$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'),-->5
('curlina@gmail.com', '$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'),-->6
('sophie@gmail.com', '$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm'),-->7
('jessica@gmail.com', '$2y$10$o.agZGzQMbecrkt13OOsI.yod6bG0Uz7tXccL9P61h6BrdpyeLMpm');-->8

INSERT INTO profiles (first_name, last_name, gamer_tag, location, about_me, sexual_orientation, sex, preferred_pronoun, height, activity_level, religion, education, occupation, kids, alcohol, smoking, cannabis, recreational_drugs, favorite_food, current_game, photo_one, photo_two, photo_three, photo_four, photo_five, user_id)
VALUES ('Tanner','Francis','Financ3', 'Austin, TX', 'This is a super short intro to who I am. Hi everyone!','Straight', 'Male', 'He/Him', '5 ft 10 in', 'Active', 'Agnostic','BYU','Web Developer','No Kids', 'Socially','Never','Sometimes','Never','','Valheim','https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16462954_10154716244105865_4173466093140820629_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8CgKs38cNHcAX_wUty9&_nc_ht=scontent-hou1-1.xx&oh=44a47bcb7c41c2ad73f2c1b7e261bae9&oe=60B2DFC4', 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/15895377_10154637553195865_5109707149084553030_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=DwnINbOj9a8AX8A2bn_&_nc_ht=scontent-hou1-1.xx&oh=6fd5a9b463b2cc43fdd6cca0cb4a1f5f&oe=60B1F280', 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/13254402_10153966928410865_3994538279770474787_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=O7kcJqhDUQ0AX_2n1z7&_nc_ht=scontent-hou1-1.xx&oh=abf206ae916b6aed909d06a1a7d2f1e5&oe=60B0009B','https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/10405430_10152724053705865_5503561984453623128_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=IRZPE2aO5cEAX8DSxoE&_nc_ht=scontent-hou1-1.xx&oh=aa7fafefc88b97fc61030094ffd56c46&oe=60B32447','',1),--profile_id 1
('Jared','Andersen','Glassinthegrass', 'Chandler, AZ', 'Im super cool and Im a dope programmer.','Straight', 'Male', 'Dude','5 ft 10 in','wannabe', 'Iwanttoknowwhatloveis','some college','Web Developer','No Kids','never','never','UACOP?','RUACOP?','Pizza','HADES','https://www.clipartmax.com/png/middle/200-2009323_the-legend-of-zelda-link-from-wind-waker.png', 'https://www.pikpng.com/pngl/m/2-22486_samus-nes-remastered-8-bit-samus-sprite-clipart.png', 'https://i.pinimg.com/originals/6e/45/f8/6e45f874ba6f11d8ae1f0974be496f76.jpg','','',2),--profile_id 2
('Steven','Nersesian','SNersesian', 'SLC, UT', 'Im Steven and I like to party.','straight', 'male', 'fella', 'ok height', '50', 'huh','obsDEVMTN','Web Developer Extraordinaire','no', 'solution','significant other','lookatmyhands','r u a cop','ru a cop','AmongUs','https://i.pinimg.com/originals/6e/45/f8/6e45f874ba6f11d8ae1f0974be496f76.jpg', '', '','','',3),--profile_id 3
('Lisa','Andersen','normie', 'Chandler, AZ', 'im a boss bitch.','Straight','Female','norm','5ft 6in', 'meh', 'agnostic','ASU','Director of Marketing','buninoven','socially','never','never','never','cheese','scamming amazon','https://www.pikpng.com/pngl/m/2-22486_samus-nes-remastered-8-bit-samus-sprite-clipart.png', 'https://www.pikpng.com/pngl/m/2-22486_samus-nes-remastered-8-bit-samus-sprite-clipart.png', 'https://www.pikpng.com/pngl/m/2-22486_samus-nes-remastered-8-bit-samus-sprite-clipart.png','','',4),--profile_id 4
('Moe','Horwitz','stooge1', 'Brooklyn, NY', 'im the leader of little known group of stooges','Straight','Male','','5ft 4in', 'somewhat', 'christian','self-taught','stooge leader','yes','yes','yes','maybe','maybe','pizza','craps','https://images.bookstore.ipgbook.com/images/author_image_1/large/271015.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEErfXrDN6aXu-TuSuK33yAmME3IBj609cA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVE5kqHprRlQSb46uZniCay4Y44R7YIQPUA&usqp=CAU','','',5),--profile_id 5
('Curlina', 'Horwitz', 'stooge2', 'Brooklyn, NY', 'im the genderbender version of the brother of the leader of the stooges', 'guess', 'female', 'curly', 'short', 'slapstic', 'comedy', 'hard knox', 'jack of all trades', 'yes', 'duh', 'probs', 'hippy','youd have to' , 'knuckle sandwich', 'running from moe', 'https://i.pinimg.com/originals/94/c0/80/94c080e8fc9e630050fc7ce777080598.jpg', 'https://mediad.publicbroadcasting.net/p/wmky/files/styles/x_large/public/201810/curly.jpg', 'https://i.pinimg.com/236x/cc/d9/13/ccd913abfbfc0ea39fc9c115d1b496c0--the-stooges-the-three-stooges.jpg', '', '', 6),
('Sophie', 'Choice', 'gottaChoose', 'Sophies Island', 'im sophie and im really indecisive', 'straight', 'female', 'decide', '4 ft 6in', 'anxiety', 'baptist', 'Harvard of illinois', 'piano player', 'maybe', 'hell yeah', 'no', 'hate it', 'no-deal breaker', 'dont make me choose', 'sorry', 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c37edd28e66dff18ab42b53e51e03f5a76884d90d962f25fc915920de213752c._RI_V_TTW_.jpg', 'https://i.pinimg.com/originals/44/06/92/440692aab21c79e832ee7fe94e0c8b31.jpg', 'https://i.pinimg.com/originals/d4/a5/ee/d4a5eeee1811fffae0b0f3bd652b4a01.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Sophie%27s_Choice1.jpg/220px-Sophie%27s_Choice1.jpg', '', 7),
('Jessica', 'Alba', 'humina-humina', 'LA', 'pretty homely girl next door that loves nerdy things','straight', 'female','not-a-bot', '5ft 5in', 'active', 'worshiped', 'acting school', 'actress', 'yes', 'no', 'no', 'no', 'no', 'anything', 'WoW', 'https://resizing.flixster.com/AS5tIdPt_e19aV5aekYnNCqKJtM=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/165531/165531_v9_bb.jpg', 'https://hips.hearstapps.com/cosmouk.cdnds.net/16/08/1456486010-jessica-alba.jpg', 'https://media4.s-nbcnews.com/j/newscms/2019_46/1506211/jessica-alba-dress-today-main-tease-191112_01f9439a3d1938768ad3e9847a3f941b.fit-760w.jpg', 'https://deadline.com/wp-content/uploads/2021/02/Jessica-Alba-2-Photo-Credit-Nino-Munoz-e1613676696826.jpg','https://imgix.bustle.com/uploads/image/2021/3/18/092a2111-ec12-4171-ac13-05c024d22272-jessicaalba_article_header.jpg?w=2000&h=1090&fit=crop&crop=faces&auto=format%2Ccompress', 8);

INSERT INTO likes (profile_id_1, profile_id_2)
VALUES (1,2),
(1,4),
(1,6),
(1,5),
(1,8),
(2,4),
(2,1),
(2,3),
(2,5),
(2,7),
(3,1),
(3,2),
(3,4),
(3,5),
(3,6),
(3,7),
(3,8),
(4,2),
(4,1),
(4,5),
(4,3),
(4,6),
(4,7),
(5,2),
(5,3),
(8,1),
(8,2),
(8,3),
(1,8),
(2,8),
(3,8);

INSERT INTO matches (profile_id_1, profile_id_2)
VALUES 
(1,2),-->1
(1,4),-->2
(1,8),-->3
(2,3),-->4
(4,2),-->5
(5,2),-->6
(2,8),-->7
(4,3),-->8
(5,3),-->9
(8,3);-->10

INSERT INTO chats (match_id, chat_content, profile_id, time_stamp)
VALUES (1, 'hi!', 2, '2021-04-30T23:22:31+00:00'),
 (1, 'well hi to you too!', 1, '2021-04-30T23:23:00+00:00'),
 (1, 'i just met you', 2, '2021-04-30T23:22:31+00:00'),
 (1, 'oh no', 1, '2021-04-30T23:23:00+00:00'),
 (1, 'and this is crazy', 2, '2021-04-30T23:22:31+00:00'),
 (1, 'please dont', 1, '2021-04-30T23:23:00+00:00'),
 (1, 'but heres my...', 2, '2021-04-30T23:22:31+00:00'),
 (1, 'i thought i didnt want you to say number but now im just praying its just a number', 1, '2021-04-30T23:23:00+00:00'),
 (1, 'number #########', 2, '2021-04-30T23:22:31+00:00'),
 (1, 'yeah not gonna happen', 1, '2021-04-30T23:23:00+00:00'),
 (1, 'please love me maybe', 2, '2021-04-30T23:22:31+00:00'),
 (1, 'no thanks', 1, '2021-04-30T23:23:00+00:00'),
 (1, 'ok bye', 2, '2021-04-30T23:22:31+00:00'),
 (2, 'hi!', 1, '2021-04-30T23:22:31+00:00'),
 (2, 'well hi to you too!', 4, '2021-04-30T23:23:00+00:00'),
 (2, 'i just met you', 1, '2021-04-30T23:22:31+00:00'),
 (2, 'oh no', 4, '2021-04-30T23:23:00+00:00'),
 (2, 'and this is crazy', 1, '2021-04-30T23:22:31+00:00'),
 (2, 'please dont', 4, '2021-04-30T23:23:00+00:00'),
 (2, 'but heres my...', 1, '2021-04-30T23:22:31+00:00'),
 (2, 'i thought i didnt want you to say number but now im just praying its just a number', 4, '2021-04-30T23:23:00+00:00'),
 (2, 'number #########', 1, '2021-04-30T23:22:31+00:00'),
 (2, 'yeah not gonna happen', 4, '2021-04-30T23:23:00+00:00'),
 (2, 'please love me maybe',1, '2021-04-30T23:22:31+00:00'),
 (2, 'no thanks', 4, '2021-04-30T23:23:00+00:00'),
 (2, 'ok bye', 1, '2021-04-30T23:22:31+00:00'),
 (3, 'hi!', 8, '2021-04-30T23:22:31+00:00'),
 (3, 'well hi to you too!', 1, '2021-04-30T23:23:00+00:00'),
 (3, 'i just met you', 8, '2021-04-30T23:22:31+00:00'),
 (3, 'oh no', 1, '2021-04-30T23:23:00+00:00'),
 (3, 'and this is crazy', 8, '2021-04-30T23:22:31+00:00'),
 (3, 'please dont', 1, '2021-04-30T23:23:00+00:00'),
 (3, 'but heres my...', 8, '2021-04-30T23:22:31+00:00'),
 (3, 'i thought i didnt want you to say number but now im just praying its just a number', 1, '2021-04-30T23:23:00+00:00'),
 (3, 'number #########', 8, '2021-04-30T23:22:31+00:00'),
 (3, 'yeah not gonna happen', 1, '2021-04-30T23:23:00+00:00'),
 (3, 'please love me maybe', 8, '2021-04-30T23:22:31+00:00'),
 (3, 'no thanks', 1, '2021-04-30T23:23:00+00:00'),
 (3, 'ok bye', 8, '2021-04-30T23:22:31+00:00'),
 (4, 'hi!', 2, '2021-04-30T23:22:31+00:00'),
 (4, 'well hi to you too!', 3, '2021-04-30T23:23:00+00:00'),
 (4, 'i just met you', 2, '2021-04-30T23:22:31+00:00'),
 (4, 'oh no', 3, '2021-04-30T23:23:00+00:00'),
 (4, 'and this is crazy', 2, '2021-04-30T23:22:31+00:00'),
 (4, 'please dont', 3, '2021-04-30T23:23:00+00:00'),
 (4, 'but heres my...', 2, '2021-04-30T23:22:31+00:00'),
 (4, 'i thought i didnt want you to say number but now im just praying its just a number', 3, '2021-04-30T23:23:00+00:00'),
 (4, 'number #########', 2, '2021-04-30T23:22:31+00:00'),
 (4, 'yeah not gonna happen', 3, '2021-04-30T23:23:00+00:00'),
 (4, 'please love me maybe', 2, '2021-04-30T23:22:31+00:00'),
 (4, 'no thanks', 3, '2021-04-30T23:23:00+00:00'),
 (4, 'ok bye', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'hi!', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'well hi to you too!', 4, '2021-04-30T23:23:00+00:00'),
 (5, 'i just met you', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'oh no', 4, '2021-04-30T23:23:00+00:00'),
 (5, 'and this is crazy', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'please dont', 4, '2021-04-30T23:23:00+00:00'),
 (5, 'but heres my...', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'i thought i didnt want you to say number but now im just praying its just a number', 4, '2021-04-30T23:23:00+00:00'),
 (5, 'number #########', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'yeah not gonna happen', 4, '2021-04-30T23:23:00+00:00'),
 (5, 'please love me maybe', 2, '2021-04-30T23:22:31+00:00'),
 (5, 'no thanks', 4, '2021-04-30T23:23:00+00:00'),
 (5, 'ok bye', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'hi!', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'well hi to you too!', 5, '2021-04-30T23:23:00+00:00'),
 (6, 'i just met you', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'oh no', 5, '2021-04-30T23:23:00+00:00'),
 (6, 'and this is crazy', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'please dont', 5, '2021-04-30T23:23:00+00:00'),
 (6, 'but heres my...', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'i thought i didnt want you to say number but now im just praying its just a number', 5, '2021-04-30T23:23:00+00:00'),
 (6, 'number #########', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'yeah not gonna happen', 5, '2021-04-30T23:23:00+00:00'),
 (6, 'please love me maybe', 2, '2021-04-30T23:22:31+00:00'),
 (6, 'no thanks', 5, '2021-04-30T23:23:00+00:00'),
 (6, 'ok bye', 2, '2021-04-30T23:22:31+00:00'), 
 (7, 'hi!', 2, '2021-04-30T23:22:31+00:00'),
 (7, 'well hi to you too!', 8, '2021-04-30T23:23:00+00:00'),
 (7, 'i just met you', 2, '2021-04-30T23:22:31+00:00'),
 (7, 'oh no', 8, '2021-04-30T23:23:00+00:00'),
 (7, 'and this is crazy', 2, '2021-04-30T23:22:31+00:00'),
 (7, 'please dont', 8, '2021-04-30T23:23:00+00:00'),
 (7, 'but heres my...', 2, '2021-04-30T23:22:31+00:00'),
 (7, 'i thought i didnt want you to say number but now im just praying its just a number', 8, '2021-04-30T23:23:00+00:00'),
 (7, 'number #########', 2, '2021-04-30T23:22:31+00:00'),
 (7, 'yeah not gonna happen', 8, '2021-04-30T23:23:00+00:00'),
 (7, 'please love me maybe', 2, '2021-04-30T23:22:31+00:00'),
 (7, 'no thanks', 8, '2021-04-30T23:23:00+00:00'),
 (7, 'ok bye', 2, '2021-04-30T23:22:31+00:00'),
 (8, 'hi!', 4, '2021-04-30T23:22:31+00:00'),
 (8, 'well hi to you too!', 3, '2021-04-30T23:23:00+00:00'),
 (8, 'i just met you', 4, '2021-04-30T23:22:31+00:00'),
 (8, 'oh no', 3, '2021-04-30T23:23:00+00:00'),
 (8, 'and this is crazy', 4, '2021-04-30T23:22:31+00:00'),
 (8, 'please dont', 3, '2021-04-30T23:23:00+00:00'),
 (8, 'but heres my...', 4, '2021-04-30T23:22:31+00:00'),
 (8, 'i thought i didnt want you to say number but now im just praying its just a number', 3, '2021-04-30T23:23:00+00:00'),
 (8, 'number #########', 3, '2021-04-30T23:22:31+00:00'),
 (8, 'yeah not gonna happen', 4, '2021-04-30T23:23:00+00:00'),
 (8, 'please love me maybe', 3, '2021-04-30T23:22:31+00:00'),
 (8, 'no thanks', 4, '2021-04-30T23:23:00+00:00'),
 (8, 'ok bye', 3, '2021-04-30T23:22:31+00:00'),
 (9, 'hi!', 5, '2021-04-30T23:22:31+00:00'),
 (9, 'well hi to you too!', 3, '2021-04-30T23:23:00+00:00'),
 (9, 'i just met you', 5, '2021-04-30T23:22:31+00:00'),
 (9, 'oh no', 3, '2021-04-30T23:23:00+00:00'),
 (9, 'and this is crazy', 5, '2021-04-30T23:22:31+00:00'),
 (9, 'please dont', 3, '2021-04-30T23:23:00+00:00'),
 (9, 'but heres my...', 5, '2021-04-30T23:22:31+00:00'),
 (9, 'i thought i didnt want you to say number but now im just praying its just a number', 3, '2021-04-30T23:23:00+00:00'),
 (9, 'number #########', 5, '2021-04-30T23:22:31+00:00'),
 (9, 'yeah not gonna happen', 3, '2021-04-30T23:23:00+00:00'),
 (9, 'please love me maybe', 5, '2021-04-30T23:22:31+00:00'),
 (9, 'no thanks', 3, '2021-04-30T23:23:00+00:00'),
 (9, 'ok bye', 5, '2021-04-30T23:22:31+00:00'),
 (10, 'hi!', 8, '2021-04-30T23:22:31+00:00'),
 (10, 'well hi to you too!', 3, '2021-04-30T23:23:00+00:00'),
 (10, 'i just met you', 8, '2021-04-30T23:22:31+00:00'),
 (10, 'oh no', 3, '2021-04-30T23:23:00+00:00'),
 (10, 'and this is crazy', 8, '2021-04-30T23:22:31+00:00'),
 (10, 'please dont', 3, '2021-04-30T23:23:00+00:00'),
 (10, 'but heres my...', 8, '2021-04-30T23:22:31+00:00'),
 (10, 'i thought i didnt want you to say number but now im just praying its just a number', 3, '2021-04-30T23:23:00+00:00'),
 (10, 'number #########', 8, '2021-04-30T23:22:31+00:00'),
 (10, 'yeah not gonna happen', 3, '2021-04-30T23:23:00+00:00'),
 (10, 'please love me maybe', 8, '2021-04-30T23:22:31+00:00'),
 (10, 'no thanks', 3, '2021-04-30T23:23:00+00:00'),
 (10, 'ok bye', 8, '2021-04-30T23:22:31+00:00');
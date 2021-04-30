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
	sexual_orientation varchar(100) NOT NULL,
	sex varchar(50) NOT NULL,
	prefered_pronount text,
	height varchar(10),
	activity_level varchar(50),
	religion varchar(255),
	education varchar(255),
	occupation varchar(100),
	kids varchar(50),
	alcohol varchar(25),
	smoking varchar(25),
	cannabis varchar(25),
	recreational_drugs varchar(10),
	favorite_food varchar(50),
	current_game varchar(100),
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
	user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
profile_id INT,
  FOREIGN KEY (profile_id) REFERENCES users(user_id)
);

CREATE TABLE matches (
	match_id SERIAL PRIMARY KEY,
	user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
	profile_id INT,
	FOREIGN key (profile_id) REFERENCES profiles(profile_id)
);

CREATE TABLE chats (
	chat_id serial primary key NOT NULL,
	match_id int,
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
	chat_content varchar(255) NOT NULL,
	user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
	timestamp TIME NOT NULL
);

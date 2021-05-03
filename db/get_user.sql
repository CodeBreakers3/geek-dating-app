SELECT * FROM users us
JOIN profiles pr ON pr.user_id = us.user_id
WHERE email = $1;
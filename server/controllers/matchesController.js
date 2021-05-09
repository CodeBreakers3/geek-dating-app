module.exports = {
//LIKE: add to the like table, check for match on like table, if matched, add match in the match table. 
//The front end should send the liking users ID as a parameter in the URL. The liked users profile ID will be in the query string variables ?profile_id=X.  

//endpoint will return "true" if there was a match, "false" if there was no match. Either way the like will be logged in the database.
    like: async function(req, res) {
    //get the database instance
        const db = req.app.get('db');

    //get the ID for the liked and the liking user from the parameters
        //user_id for the liking user
        const {profile_id_1,profile_id_2} = req.params;
        //profile id for the liked user


    //add this like to the like table
        try {
            await db.create_like(profile_id_1, profile_id_2);
        } catch (err) {
            console.log("Unable to add this like to the database - " + err);
            res.status(500).send("Unable to add this like to the database - " + err);
        }
        
    //check for a match on the like table
        let matchCheck;
        try {
            //check the likes table to see if the liked profile has already liked the liker.
            [matchCheck] = await db.check_for_match(profile_id_1, profile_id_2);

            if(matchCheck) {
                //If there's a matching like on the like table, then add a match to the match table.
                try {
                    const match = await db.create_match(profile_id_2, profile_id_1);
                    //return a successful status with the match object to indicate there was a match
                    console.log(match);
                    res.status(200).send(match)
                } catch (err) {
                    console.log("Error adding match to the match table in the database - " + err);
                    res.status(500).send("Error adding match to the match table in the database - " + err);
                }
            }
            //If there was not a match, then send a successful status with a false indicating there was NOT a match. 
            else {
                res.status(200).send(false);
            }
            
        } catch (err) {
            console.log("Error checking for a match in the database - " + err);
            res.status(500).send("Error checking for a match in the database - " + err);
        }

        //if there was a matching like then matchCheck will have data, otherwise it will be an empty array. 
     
    },
    dislike: async function(req, res) {
    //THIS IS CURRENTLY NOT BEING USED - THE DB UPDATE DID NOT FUNCTION LIKE WE EXPECTED. Instead we will just have dislikes do nothing in the DB. 
    //DISLIKE: Create a bogus update for the unliked profile on the profile table*
    //The front end should send the unliked profile in the body. 

    //get the database instance
        const db = req.app.get('db');

    //get the disliked profile ID off the req.body
        const {profile_id} = req.params;

    //update the disliked profile with itself, just to get it to move to the end of the arrays to be displayed to users.
        //get the profile from the datbase
        let profile;
        try {
            profile = await db.get_single_profile(profile_id);
        } catch (err) {
            console.log("Error retrieving the disliked profile from the database - " + err);
            res.status(500).send("Error retrieving the disliked profile from the database - " + err);
        }
        //update the profile with its own data.
        try {
            await db.edit_profile(profile.profile_id, profile.first_name, profile.last_name, profile.gamer_tag, profile.location, profile.about_me, profile.sexual_orientation, profile.sex, profile.preferred_pronoun, profile.height, profile.activity_level, profile.religion, profile.education, profile.occupation, profile.kids, profile.alcohol, profile.smoking, profile.cannabis, profile.recreational_drugs, profile.favorite_food, profile.current_game, profile.photo_one, profile.photo_two, profile.photo_three, profile.photo_four, profile.photo_five, profile.user_id);
            console.log('hit');
        } catch (err) {
            console.log("Error making the update to the disliked profile - " + err);
            res.status(500).send("Error making the update to the disliked profile - " + err)
        }
        res.sendStatus(200);
    },
    unmatch: async function(req, res) {
    //UNMATCH: *Remove chats from chat table. Remove match from matches table, remove like from likes table, Create a bogus update for the unmatch profile on the profile table**

    //get the database instance
        const db = req.app.get('db');

    //get the match ID for the match off the URL params
        const {match_id} = req.params;
    //get the user_id (the one who is unmatching) and the profile_id (the one who is being unmatched) from the query string parameters
        const {user_id, profile_id} = req.query;

    //delete all chats for this match from the chats table first (must delete chats before you delete the match)
        try {
            await db.delete_match_chats(match_id);
        } catch (err) {
            console.log("Error deleting chats for the match - " + err)
        }


    //remove the match from the matches table in the database
        try {
            await db.delete_match(match_id);
        } catch (err) {
            console.log("Error removing the match from the database - " + err);
            res.status(500).send("Error removing the match from the database - " + err);
        }

    //remove the like from likes table
        try {
            await db.delete_like(user_id, profile_id)
        } catch (err) {
            console.log("Error removing the like from the database - " + err);
            res.status(500).send("Error removing the like from the database - " + err);
        }
        res.sendStatus(200);
    }
}

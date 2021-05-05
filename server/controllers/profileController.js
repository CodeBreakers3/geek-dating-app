//profileController
module.exports = {
    //*Take object provided in body and update profile table* Object in body should look like this:
    // {
    //     "first_name": "Tanner",
    //     "last_name": "Francis",
    //     "gamer_tag": "Financ3",
    //     "location": "Austin, TX",
    //     "about_me": "This is a super short intro to who I am. Hi everyone!",
    //     "sexual_orientation": "Straight",
    //     "sex": "Male",
    //     "preferred_pronoun": "he/him",
    //     "height": "5' 11\"",
    //     "activity_level": "Active",
    //     "religion": "Agnostic",
    //     "education": "BYU",
    //     "occupation": "Web Developer",
    //     "kids": "No Kids",
    //     "alcohol": "Socially",
    //     "smoking": "Never",
    //     "cannabis": "Sometimes",
    //     "recreational_drugs": "Never",
    //     "favorite_food": "",
    //     "current_game": "Valheim",
    //     "photo_one": "https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16462954_10154716244105865_4173466093140820629_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8CgKs38cNHcAX_wUty9&_nc_ht=scontent-hou1-1.xx&oh=44a47bcb7c41c2ad73f2c1b7e261bae9&oe=60B2DFC4",
    //     "photo_two": "https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/15895377_10154637553195865_5109707149084553030_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=DwnINbOj9a8AX8A2bn_&_nc_ht=scontent-hou1-1.xx&oh=6fd5a9b463b2cc43fdd6cca0cb4a1f5f&oe=60B1F280",
    //     "photo_three": "https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/13254402_10153966928410865_3994538279770474787_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=O7kcJqhDUQ0AX_2n1z7&_nc_ht=scontent-hou1-1.xx&oh=abf206ae916b6aed909d06a1a7d2f1e5&oe=60B0009B",
    //     "photo_four": "https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/10405430_10152724053705865_5503561984453623128_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=IRZPE2aO5cEAX8DSxoE&_nc_ht=scontent-hou1-1.xx&oh=aa7fafefc88b97fc61030094ffd56c46&oe=60B32447",
    //     "photo_five": "",
    //     "user_id": 1
    // }



    createProfile: async function(req, res) {
        //get the database instance
        const db = req.app.get('db');
        const {profile_id,first_name, last_name, gamer_tag, location, about_me, sexual_orientation, sex,preferred_pronoun, height, activity_level, religion, education, occupation, kids, alcohol, cannabis, recreational_drugs, favorite_food, current_game, photo_one, photo_two, photo_three, photo_four, photo_five, user_id} = req.body;
        try {
            let newProfile = await db.create_profile(profile_id,first_name, last_name, gamer_tag, location, about_me, sexual_orientation, sex,preferred_pronoun, height, activity_level, religion, education, occupation, kids, alcohol, cannabis, recreational_drugs, favorite_food, current_game, photo_one, photo_two, photo_three, photo_four, photo_five, user_id);
            //send the updated profile back to the front end. 
            res.status(200).send(newProfile);
        } catch (err) {
            console.log("Error updating profile - " + err);
            res.status(500).send("Error updating profile - " + err);
        }
    },
    updateProfile: async function(req, res) {
        //get the database instance
        const db = req.app.get('db');

        //get the new profile object from req.body. 
        const newProfile = {...req.body};
        console.log(newProfile);

        //send the updated profile to the DB using the DB SQL function
        try {
            let updatedProfile = await db.edit_profile(newProfile.profile_id, newProfile.first_name, newProfile.last_name, newProfile.gamer_tag, newProfile.location, newProfile.about_me, newProfile.sexual_orientation, newProfile.sex, newProfile.preferred_pronoun, newProfile.height, newProfile.activity_level, newProfile.religion, newProfile.education, newProfile.occupation, newProfile.kids, newProfile.alcohol, newProfile.smoking, newProfile.cannabis, newProfile.recreational_drugs, newProfile.favorite_food, newProfile.current_game, newProfile.photo_one, newProfile.photo_two, newProfile.photo_three, newProfile.photo_four, newProfile.photo_five, newProfile.user_id);
            //send the updated profile back to the front end. 
            res.status(200).send(updatedProfile);
        } catch (err) {
            console.log("Error updating profile - " + err);
            res.status(500).send("Error updating profile - " + err);
        }
    }
}
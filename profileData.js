var allProfiles = [];
var id = -1;

function Woman(name, imgName, bio){
    this.id = id++;
    this.name = name;
    this.image = "<img src=img/" + imgName + ".jpg>";
    this.bio = bio;
}

allProfiles.push(new Woman('Isabel Gerrard', "isabel", "Isabel is homeless and would really appreciate some snacks right now. Thank you."));


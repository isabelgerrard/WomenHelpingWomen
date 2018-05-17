// function findProfileById(profileId){
//     for(var i=0; i < allSections.length; i++){
//         if(allSections[i].id == sectionId){
//             return allSections[i];
//         }
//     }
// }

//No need for user to add image to profile
// function addImageToProfile(id, imgName){
//     var img = "<img src=img/" + imgName + ".jpg>";
//     var profileSelected = allProfiles[id];
//     profileSelected.image = img;
// }

function showProfiles(){

    var result = "<table id='profilesDisplayTable' cellpadding=15>";
    for(var i = 0; i<allProfiles.length; i++){
        result += "<tr>";
        result+= "<td>" + allProfiles[i].name + "</td>";
        result+= "<td>" + allProfiles[i].image + "</td>";
        result+= "<td>" + allProfiles[i].bio + "</td>";
    }
    result += "</table>";
    document.getElementById("profilesDisplay").innerHTML = result;
}

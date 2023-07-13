function to_about(){
    
    document.getElementsByClassName("data_area")[0].style.display = "none";
    document.getElementsByClassName("data_area")[1].style.display = "none";
    document.getElementById("about_body").style.display = "grid";
    document.getElementById("skills").style.display = "none";
    document.getElementById("experience").style.display = "none";   
    
    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "0.5fr 2.6fr 0.6fr 0.3fr";
    document.getElementsByTagName("body")[0].style.gridTemplateAreas = '"return return . . "". about_body . side_bar"". . . side_bar"". links . ."';
}
function to_skills(){
    
    document.getElementsByClassName("data_area")[0].style.display = "block";
    document.getElementsByClassName("data_area")[1].style.display = "none";   
    document.getElementById("about_body").style.display = "none";
    document.getElementById("skills").style.display = "grid";
    document.getElementById("experience").style.display = "none";   

    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "0.5fr 1.7fr 1.5fr 0.3fr";
    document.getElementsByTagName("body")[0].style.gridTemplateAreas = '"return return . ."". about_body data_area side_bar"". . . side_bar"". links . ."';
}
function to_experience(){
    
    document.getElementsByClassName("data_area")[0].style.display = "none";
    document.getElementsByClassName("data_area")[1].style.display = "block";   
    document.getElementById("about_body").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("experience").style.display = "grid";   

    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "0.5fr 1.7fr 1.5fr 0.3fr";
    document.getElementsByTagName("body")[0].style.gridTemplateAreas = '"return return . ."". about_body data_area side_bar"". . . side_bar"". links . ."';
}


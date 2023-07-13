function to_about(){
    
    document.getElementById("data_area").style.display = "none";
    document.getElementById("about_body").style.display = "grid";
    document.getElementById("skills").style.display = "none";
    try{
        document.getElementById("experience").style.display = "none";   
    }
    catch(error){
        console.log(error)
    }
    
    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "0.5fr 2.6fr 0.6fr 0.3fr";
    document.getElementsByTagName("body")[0].style.gridTemplateAreas = '"return return . . "". about_body . side_bar"". . . side_bar"". links . ."';
}
function to_skills(){
    
    document.getElementById("data_area").style.display = "block";
    document.getElementById("about_body").style.display = "none";
    document.getElementById("skills").style.display = "grid";
    try{
        document.getElementById("experience").style.display = "none";   
    }
    catch(error){
        console.log(error)
    }
    
    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "0.5fr 1.7fr 1.5fr 0.3fr";
    document.getElementsByTagName("body")[0].style.gridTemplateAreas = '"return return . ."". about_body data_area side_bar"". . . side_bar"". links . ."';
}


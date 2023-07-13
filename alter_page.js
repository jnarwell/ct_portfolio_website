function to_about(){
    document.getElementById("data_area").style.display = "none";
    document.getElementById("about_body").style.display = "grid";
    document.getElementById("skills").style.display = "none";
    document.getElementById("experience").style.display = "none";

    document.getElementsByClassName("container").style.gridTemplateRows = "0.5fr 2.6fr 0.6fr 0.3fr";
}

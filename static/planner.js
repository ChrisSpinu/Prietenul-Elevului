timeText = document.getElementById("time");
timeText.innerHTML = String(new Date().getHours()) + ":" + ("0"+String(new Date().getMinutes())).slice(-2);

astazi = document.getElementById("astazi");
maine = document.getElementById("maine");

ora1 = document.getElementById("ora1");
ora2 = document.getElementById("ora2");
ora3 = document.getElementById("ora3");
ora4 = document.getElementById("ora4");
ora5 = document.getElementById("ora5");
ora6 = document.getElementById("ora6");

ora1_2 = document.getElementById("ora1-2");
ora2_2 = document.getElementById("ora2-2");
ora3_2 = document.getElementById("ora3-2");
ora4_2 = document.getElementById("ora4-2");
ora5_2 = document.getElementById("ora5-2");
ora6_2 = document.getElementById("ora6-2");

tema1 = document.getElementById("tema1");
tema2 = document.getElementById("tema2");
tema3 = document.getElementById("tema3");
tema4 = document.getElementById("tema4");
tema5 = document.getElementById("tema5");
tema6 = document.getElementById("tema6");

tema1.innerHTML = "";
tema2.innerHTML = "";
tema3.innerHTML = "";
tema4.innerHTML = "";
tema5.innerHTML = "";
tema6.innerHTML = "";

announcements = document.getElementById("announcementsCell");

luni = ["Religie", "Matematica", "Romana", "Engleza", "Franceza", ""];
marti = ["Romana", "Matematica", "Istorie", "Info si TIC", "Muzica", ""];
miercuri = ["Matematica", "Sport", "Engleza", "Romana", "Istorie", "Desen"];
joi = ["Romana", "Desen", "Franceza", "Matematica", "Biologie", "Tecnologie"];
vineri = ["Geografie", "Ed. Sociala", "Dirigintie", "Sport", "",""];

date = new Date().getDay();

if(date == 0){
    astazi.innerHTML = "Duminica";
    maine.innerHTML = "Luni";

    ora1.innerHTML = "";
    ora2.innerHTML = "";
    ora3.innerHTML = "";
    ora4.innerHTML = "";
    ora5.innerHTML = "";
    ora6.innerHTML = "";

    ora1_2.innerHTML = luni[0];
    ora2_2.innerHTML = luni[1];
    ora3_2.innerHTML = luni[2];
    ora4_2.innerHTML = luni[3];
    ora5_2.innerHTML = luni[4];
    ora6_2.innerHTML = luni[5];
}
else if(date == 1){
    astazi.innerHTML = "Luni";
    maine.innerHTML = "Marti";

    ora1.innerHTML = luni[0];
    ora2.innerHTML = luni[1];
    ora3.innerHTML = luni[2];
    ora4.innerHTML = luni[3];
    ora5.innerHTML = luni[4];
    ora6.innerHTML = luni[5];

    ora1_2.innerHTML = marti[0];
    ora2_2.innerHTML = marti[1];
    ora3_2.innerHTML = marti[2];
    ora4_2.innerHTML = marti[3];
    ora5_2.innerHTML = marti[4];
    ora6_2.innerHTML = marti[5];
}
else if(date == 2){
    astazi.innerHTML = "Marti";
    maine.innerHTML = "Miercuri";
    
    ora1.innerHTML = marti[0];
    ora2.innerHTML = marti[1];
    ora3.innerHTML = marti[2];
    ora4.innerHTML = marti[3];
    ora5.innerHTML = marti[4];
    ora6.innerHTML = marti[5];

    ora1_2.innerHTML = miercuri[0];
    ora2_2.innerHTML = miercuri[1];
    ora3_2.innerHTML = miercuri[2];
    ora4_2.innerHTML = miercuri[3];
    ora5_2.innerHTML = miercuri[4];
    ora6_2.innerHTML = miercuri[5];
}
else if(date == 3){
    astazi.innerHTML = "Miercuri";
    maine.innerHTML = "Joi";

    ora1.innerHTML = miercuri[0];
    ora2.innerHTML = miercuri[1];
    ora3.innerHTML = miercuri[2];
    ora4.innerHTML = miercuri[3];
    ora5.innerHTML = miercuri[4];
    ora6.innerHTML = miercuri[5];

    ora1_2.innerHTML = joi[0];
    ora2_2.innerHTML = joi[1];
    ora3_2.innerHTML = joi[2];
    ora4_2.innerHTML = joi[3];
    ora5_2.innerHTML = joi[4];
    ora6_2.innerHTML = joi[5];
}
else if(date == 4){
    astazi.innerHTML = "Joi";
    maine.innerHTML = "Vineri";
    
    ora1.innerHTML = joi[0];
    ora2.innerHTML = joi[1];
    ora3.innerHTML = joi[2];
    ora4.innerHTML = joi[3];
    ora5.innerHTML = joi[4];
    ora6.innerHTML = joi[5];

    ora1_2.innerHTML = vineri[0];
    ora2_2.innerHTML = vineri[1];
    ora3_2.innerHTML = vineri[2];
    ora4_2.innerHTML = vineri[3];
    ora5_2.innerHTML = vineri[4];
    ora6_2.innerHTML = vineri[5];
}
else if(date == 5){
    astazi.innerHTML = "Vineri";
    maine.innerHTML = "Luni";

    ora1.innerHTML = vineri[0];
    ora2.innerHTML = vineri[1];
    ora3.innerHTML = vineri[2];
    ora4.innerHTML = vineri[3];
    ora5.innerHTML = vineri[4];
    ora6.innerHTML = vineri[5];

    ora1_2.innerHTML = luni[0];
    ora2_2.innerHTML = luni[1];
    ora3_2.innerHTML = luni[2];
    ora4_2.innerHTML = luni[3];
    ora5_2.innerHTML = luni[4];
    ora6_2.innerHTML = luni[5];
}
else if(date == 6){
    astazi.innerHTML = "Sambata";
    maine.innerHTML = "Luni";

    ora1.innerHTML = "";
    ora2.innerHTML = "";
    ora3.innerHTML = "";
    ora4.innerHTML = "";
    ora5.innerHTML = "";
    ora6.innerHTML = "";

    ora1_2.innerHTML = luni[0];
    ora2_2.innerHTML = luni[1];
    ora3_2.innerHTML = luni[2];
    ora4_2.innerHTML = luni[3];
    ora5_2.innerHTML = luni[4];
    ora6_2.innerHTML = luni[5];
}

let indexTeme = 0;
fetch("/static/resource.json")
    .then(Response => Response.text())
    .then(data => {
        const dataP = JSON.parse(data);
        if(new Date().getDate() == parseInt(dataP.modify) || (new Date().getDate() == parseInt(dataP.modify)+1 && new Date().getHours() <= 12)){
            tema1.innerHTML = dataP.hw1;
            tema2.innerHTML = dataP.hw2;
            tema3.innerHTML = dataP.hw3;
            tema4.innerHTML = dataP.hw4;
            tema5.innerHTML = dataP.hw5;
            tema6.innerHTML = dataP.hw6;
            announcements.innerHTML = dataP.inf;
        }else{
            announcements.innerHTML = "<h2>Temele inca nu</h2> <h2>au fost actualizate!</h2>";
        }
    });
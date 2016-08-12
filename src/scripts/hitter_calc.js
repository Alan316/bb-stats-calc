var $ = function (id) {
    return document.getElementById (id);
};

function calculate_stats () 
{
    G = $("games").value;
    AB = $("atBats").value;
    H = $("hits").value;
    R = $("runs").value;
    DB = $("doubles").value;
    TB = $("triples").value;
    HR = $("homeruns").value;
    RBI = $("rbi").value;
    K = $("strikeouts").value;
    BB = $("walks").value; 
    HBP = $("hbp").value; 
    SF = $("sf").value; 

    var BA_raw = H / AB;
    var BA = Math.ceil(BA_raw *1000) / 1000;

    var OBP_raw = (H + BB + HBP) / (AB + BB + HBP + SF);
    var OBP = Math.ceil(OBP_raw *1000) / 1000;

    alert(BA, OBP);
   
    
}


window.onload = function ()
{
    $("calculate").onclick = calculate_stats;
};
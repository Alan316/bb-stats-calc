var $ = function (id) {
    return document.getElementById (id);
};

function calculate_stats () 
{
    G = $("games").value;
    AB =$("atBats").value;
     H = $("hits").value;
     R = $("runs").value;
     DB = $("doubles").value;
     TB = $("triples").value;
     HR = $("homeruns").value;
     RBI = $("rbi").value;
     SB = $("sb").value;
     K = $("strikeouts").value;
     BB = $("walks").value; 
     HBP = $("hbp").value; 
     SF = $("sf").value; 

    //Calculate Batting Average
    var BA_raw = parseInt(H) / parseInt(AB);
    var BA = Math.ceil(BA_raw *1000) / 1000;

    //Calculate On Base Percentage
    var OBP_raw = (parseInt(H) + parseInt(BB) + parseInt(HBP)) / (parseInt(AB) + parseInt(BB) + parseInt(HBP) + parseInt(SF));
    var OBP = Math.ceil(OBP_raw *1000) / 1000;

    //Calculate Slugging Percentage
    var S = (parseint(H) - parseInt(DB) - parseInt(TB) - parseInt(HR));
    var TOTB = S + (2 * parseInt(DB)) + (3 * parseInt(TB)) + (4 * parseInt(HR));
    var SLG_raw = paraeInt(TOTB) / parseInt(AB);
    var SLG = Math.ceil(SLG_raw *1000) / 1000;

    //Calculate OPS
    var OPS = parseInt(OBP) + parseInt(SLG);

    alert(OBP);
   
    
}


window.onload = function ()
{
    $("calculate").onclick = calculate_stats;
};
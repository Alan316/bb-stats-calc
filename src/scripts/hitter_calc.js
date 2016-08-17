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
    BA_raw = parseInt(H) / parseInt(AB);
    BA = Math.ceil(BA_raw *1000) / 1000;

    //Calculate On Base Percentage
    var OBP_raw = (parseInt(H) + parseInt(BB) + parseInt(HBP)) / (parseInt(AB) + parseInt(BB) + parseInt(HBP) + parseInt(SF));
    var OBP = Math.ceil(OBP_raw *1000) / 1000;

    //Calculate Slugging Percentage
    var S = (parseInt(H) - parseInt(DB) - parseInt(TB) - parseInt(HR));
    var TOTB = S + (2 * parseInt(DB)) + (3 * parseInt(TB)) + (4 * parseInt(HR));
    var SLG_raw = parseInt(TOTB) / parseInt(AB);
    var SLG = Math.ceil(SLG_raw *1000) / 1000;

    //Calculate OPS
    var OPS = OBP + SLG;

    $("G_Out").innerHTML = G;
    $("AB_Out").innerHTML = AB;
    $("H_Out").innerHTML = H;
    $("R_Out").innerHTML = R;
    $("DB_Out").innerHTML = DB;
    $("TB_Out").innerHTML = TB;
    $("HR_Out").innerHTML = HR;
    $("RBI_Out").innerHTML = RBI;
    $("SB_Out").innerHTML = SB;
    $("K_Out").innerHTML = K;
    $("BB_Out").innerHTML = BB;
    $("HBP_Out").innerHTML = HBP;
    $("SF_Out").innerHTML = SF;
    $("BA_Out").innerHTML = BA;
    $("OBP_Out").innerHTML = OBP;
    $("SLG_Out").innerHTML = SLG;
    $("OPS_Out").innerHTML = OPS;

}


window.onload = function ()
{
    $("calculate").onclick = calculate_stats;
};
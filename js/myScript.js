function NotifikasiSubs(){
    var Nama=document.getElementById("form1").Nama.value;
    var Email=document.getElementById("form1").Email.value;
    if (!Nama || !Email) {
        var a =alert("Mohon lengkapi form");
        return false;
    }
    else if(Nama !== 'null' && Email !=='null'){
        var b= alert("Terimakasih sudah subscribe Warung Korea")
    }
}
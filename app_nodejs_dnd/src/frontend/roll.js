function luckyroll() {

    var modifier=document.getElementById('inputmodifier').value;
    var multiplier=document.getElementById('inputmultiplier').value;
    var dnumber=document.getElementById('inputdnumber').value;
    var i;
    var array1 = [], array2 = [];
    var roll = 0, finalroll = 0;

    for (i = 0; i < multiplier; i++) {
      roll = Math.floor((Math.random() * dnumber) + 1);
      finalroll += roll;
      array1[i] = roll;
      array2[i] = finalroll;
    }

   document.getElementById("rolldice").innerHTML = array1;
   document.getElementById("rolls").innerHTML = array2;
   finalroll += Number(modifier);
   document.getElementById("modifiernumber").innerHTML = "Modifier: +" + modifier;
   document.getElementById("finalresult").innerHTML = "Roll Result: " + finalroll;
}

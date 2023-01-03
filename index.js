if ($(window).width() < 767 ) {
    $("#input1").attr("placeholder","Your name");
    $("#input2").attr("placeholder","Their name");
}
 
 //ispis 
const testButton = $("#test");
testButton.on("click",function(){
    var randomNumber = Math.floor(Math.random()*101);
    var ispis = "Your love score is: "+ randomNumber+ "% ";
    if(randomNumber<30){
        $("#output").text(ispis + "😭");
    } else if(randomNumber>=30 && randomNumber <=50){
        $("#output").text(ispis + "🙁");
    } else if(randomNumber>50 && randomNumber <=70){
        $("#output").text(ispis + "😐");
    } else if(randomNumber>70 && randomNumber <=90){
        $("#output").text(ispis + "😀");
    } else if(randomNumber>90){
        $("#output").text(ispis + "😍");
    }
})

//ne dozvoljava praznu formu 
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitButton = document.getElementById('test');

input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);

function checkInputs() {
    if (input1.value !== '' && input2.value !== '') {
        submitButton.disabled = false;
    } 
    else {
      submitButton.disabled = true; 
    }
}

submitButton.addEventListener("click", function(){
    if($("#output") !== ''){
        submitButton.disabled = true;
    }
    $("input").prop("disabled", true); //onemogucava promjenu sadrzaja inputa
});

 //reset button
 const resetButton = $("#reset");
 resetButton.on("click", function(){
     const form = $("#forma");
     form.trigger("reset");
     $("#output").text(" ");
     $("input").prop("disabled", false); //ponovo omogucava promjenu sadrzaja inputa
 });


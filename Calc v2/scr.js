const calc = document.querySelector(".calc");

calc.addEventListener('click', function (event){

    if(!event.target.classList.contains("calc_btn")) return;

    let value = event.target.innerText;

    switch (value) {
        case "C":
            result.innerText = " ";
            break;
        case "=":
            if(result.innerText.search(/[^0-9*/+.-]/mi) != -1) return;
            
            result.innerText = eval(result.innerText).toFixed(2);
            break;
        default:
            result.innerText += value;
        
    }    
} )

var checkBox = document.getElementById("mute_button");

function muteButton()
{
    work:
    if (checkBox.checked)
    {
       if ( confirm ("Вы уверены?"))
       {

        var mB = document.getElementById("threeHundredBucks");
        mB.volume = 0;
        var mBT = document.getElementById("uwuSound");
        mBT.volume = 0;
       }
       else 
       {
       checkBox.checked = false;
       }
    }
    else {
        alert ("Правильный выбор");
        var mB = document.getElementById("threeHundredBucks");
        mB.volume = 1;
        var mBT = document.getElementById("uwuSound");
        mBT.volume = 1;
    }
}


     function threeHundredBucks() {

     document.getElementById("threeHundredBucks").play();

     }

    function uwu() {

     document.getElementById("uwuSound").play();
    
     }
     
    


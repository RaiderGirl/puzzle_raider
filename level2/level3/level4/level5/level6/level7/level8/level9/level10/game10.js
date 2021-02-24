
function start_game() {
     var tab_position = new Array();
     while(tab_position.length <9) {
         var numero = Math.round(Math.random() * 100);
         if(
                (numero == 11) || (numero == 12) || (numero == 13) ||
                (numero == 21) || (numero == 22) || (numero == 23) ||
                (numero == 31) || (numero == 32) || (numero == 33)) {
            if(!tab_position.includes(numero)) {


                tab_position[tab_position.length] = numero;
            }  
        }
     }

    document.getElementById('p11').textContent = tab_position[0];
    document.getElementById('p11').style.background = 'url('+tab_position[0]+'.jpg)'; 

    document.getElementById('p12').textContent = tab_position[1];
    document.getElementById('p12').style.background = 'url('+tab_position[1]+'.jpg)'; 

    document.getElementById('p13').textContent = tab_position[2];
    document.getElementById('p13').style.background = 'url('+tab_position[2]+'.jpg)'; 

    document.getElementById('p21').textContent = tab_position[3];
    document.getElementById('p21').style.background = 'url('+tab_position[3]+'.jpg)'; 

    document.getElementById('p22').textContent = tab_position[4];
    document.getElementById('p22').style.background = 'url('+tab_position[4]+'.jpg)'; 

    document.getElementById('p23').textContent = tab_position[5];
    document.getElementById('p23').style.background = 'url('+tab_position[5]+'.jpg)'; 

    document.getElementById('p31').textContent = tab_position[6];
    document.getElementById('p31').style.background = 'url('+tab_position[6]+'.jpg)'; 

    document.getElementById('p32').textContent = tab_position[7];
    document.getElementById('p32').style.background = 'url('+tab_position[7]+'.jpg)'; 

    document.getElementById('p33').textContent = tab_position[8];
    document.getElementById('p33').style.background = 'url('+tab_position[8]+'.jpg)'; 

} 

var secret = new Audio('enough.mp3');

function check_win(){
    var cell1 = document.getElementById('p11').textContent;
    var cell2 = document.getElementById('p12').textContent;
    var cell3 = document.getElementById('p13').textContent;
    var cell4 = document.getElementById('p21').textContent;
    var cell5 = document.getElementById('p22').textContent;
    var cell6 = document.getElementById('p23').textContent;
    var cell7 = document.getElementById('p31').textContent;
    var cell8 = document.getElementById('p32').textContent;
    var cell9 = document.getElementById('p33').textContent;

    if((cell1 == '11') 
    && (cell2 == '12') 
    && (cell3 == '13') 
    && (cell4 == '21')
    && (cell5 == '22')
    && (cell6 == '23')
    && (cell7 == '31')
    && (cell8 == '32')
    && (cell9 == '33')){

    return true; 
    }
    else{
        return false;
    }

   
}  



function swapper(blankCell, clickedCell) {
    var temp_val = document.getElementById(blankCell).textContent;
    document.getElementById(blankCell).textContent = document.getElementById(clickedCell).textContent;
    document.getElementById(clickedCell).textContent = temp_val;
    document.getElementById(clickedCell).style.background = 'url('+document.getElementById(clickedCell).textContent+'.jpg)';  //make your background equal to your value (become the blank)
    document.getElementById(blankCell).style.background = 'url('+document.getElementById(blankCell).textContent+'.jpg)';  //make your background equal to your value (corresponding image)
}

function switching(cell) {
    if(document.getElementById(cell).textContent != '33') { 
        switch (cell){
            case 'p11':
                        if(document.getElementById('p12').textContent == '33') {  
                            swapper('p12', cell);
                        }

                        if(document.getElementById('p21').textContent == '33') {
                            swapper('p21', cell);
                        }


            break;
            case 'p12':
                        if(document.getElementById('p11').textContent == '33') {
                            swapper('p11', cell); 
                        }       

                        if(document.getElementById('p22').textContent == '33') {
                            swapper('p22', cell); 
                        }   

                        if(document.getElementById('p13').textContent == '33') {
                            swapper('p13', cell); 
                        }   


            break;
            case 'p13':
                        if(document.getElementById('p12').textContent == '33') {
                            swapper('p12', cell);  
                        } 

                        if(document.getElementById('p23').textContent == '33') {
                            swapper('p23', cell);  
                        } 


            break;
            case 'p21': 
                        if(document.getElementById('p11').textContent == '33') {   
                            swapper('p11', cell);
                        }
                        
                        if(document.getElementById('p22').textContent == '33') {   
                            swapper('p22', cell);
                        }  

                        if(document.getElementById('p31').textContent == '33') {   
                            swapper('p31', cell);
                        }  


            break;
            case 'p22': 
                        if(document.getElementById('p12').textContent == '33') {  
                            swapper('p12', cell);
                        }

                        if(document.getElementById('p23').textContent == '33') {   
                            swapper('p23', cell);
                        }

                        if(document.getElementById('p32').textContent == '33') {   
                            swapper('p32', cell);
                        }

                        if(document.getElementById('p21').textContent == '33') {  
                            swapper('p21', cell);
                        }


            break;
            case 'p23': 
                        if(document.getElementById('p13').textContent == '33') {   
                            swapper('p13', cell);
                        }

                        if(document.getElementById('p33').textContent == '33') {  
                            swapper('p33', cell);
                        }

                        if(document.getElementById('p22').textContent == '33') {   
                            swapper('p22', cell);
                        }

 
            break;
            case 'p31':
                        if(document.getElementById('p21').textContent == '33') {   
                            swapper('p21', cell);
                        }
        
                        if(document.getElementById('p32').textContent == '33') {   
                            swapper('p32', cell);
                        }
            


            break;
            case 'p32': 
                        if(document.getElementById('p22').textContent == '33') {  
                            swapper('p22', cell);
                        }

                        if(document.getElementById('p33').textContent == '33') {   
                            swapper('p33', cell);
                        }

                        if(document.getElementById('p31').textContent == '33') {  
                            swapper('p31', cell);
                        }


            break;
            case 'p33': 
                        if(document.getElementById('p23').textContent == '33') {   
                            swapper('p23', cell);
                        }

                        if(document.getElementById('p32').textContent == '33') {   
                            swapper('p32', cell);
                        }

                        if(check_win()){
                            secret.play();
                        }

                    }
                }
            }

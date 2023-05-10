 
const input =  window.document.getElementById("tamanho")
const passwordSize = window.document.getElementById("valor")
const capitalLetters = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const smallLetters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
const numbers = [0,1,2,3,4,5,6,7,8,9] 
const characters = ['!','@','#','$','%','&','*','(',')','-','+'] 

const optCapitalLetters = window.document.getElementById("capitalLetters")


input.addEventListener("input",updateValue)

function updateValue(e){
passwordSize.textContent = e.target.value
}
 function generatePassword(){
         var sizeKey = passwordSize.textContent 
         var newkey = window.document.getElementById("newPassword")

           var optionUppercase = window.document.getElementById("capitalLetters").checked
                              var optionSmallLetters = window.document.getElementById("smallLetters").checked
                              var optionNumber = window.document.getElementById("number").checked
                              var optionCharacters = window.document.getElementById("characters").checked

                               
                              var newkey = " "  
                               

                              if (optionUppercase == true){                            
                                   var newkey = capitalLetters 
                                                                 
                              } if ( optionSmallLetters == true ){
                                   var newkey = newkey + smallLetters
                                   
                                   
                              } if ( optionNumber == true){
                                   var newkey = newkey + numbers
                                   
                              }if (optionCharacters == true){
                                   var newkey = newkey + characters
     
                              } if ( optionCharacters == false && optionNumber == false  && optionSmallLetters == false  && optionUppercase == false) {
                                   alert("Esolha uma opção para criar a sua senha.")
                              }
                                    
                              //Buidl new password.
                              var myPassword = newkey
                              var newPasswordGenerat = []

                              //const randomMyPassword = myPassword[Math.floor(Math.random() * myPassword.length)]
                              for ( let i = 0 ;  i < sizeKey ; i ++ ){
                                   
                                   const randomMyPassword = myPassword[Math.floor(Math.random() * myPassword.length)]
                                   var newPasswordGenerat = newPasswordGenerat + randomMyPassword

                              }
 
                             // alert("resultado: " + myPassword)
                               
                              // Showing generated password  
                             //  var newPasswordGenerat = newPasswordGenerat.toString()    
                                 
                            //  newkey.innerHTML = `Sua senha: ${senha}` 
                           // var newPasswordGenerat = newPasswordGenerat
                             console.log( typeof newPasswordGenerat)
                              
                             

                              window.document.getElementById("newPassword").innerHTML = newPasswordGenerat

                 }

      
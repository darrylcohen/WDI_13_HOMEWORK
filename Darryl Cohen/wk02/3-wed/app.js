var savBal = document.querySelector('#savBal');
var savAmount = document.querySelector('#savAmount')
var savWithBtn = document.querySelector('#savWithBtn')
var savDepBtn = document.querySelector('#savDepBtn')
var savMessage = document.querySelector('#savMessage')

var chqBal = document.querySelector('#chqBal');
var chqAmount = document.querySelector('#chqAmount')
var chqWithBtn = document.querySelector('#chqWithBtn')
var chqDepBtn = document.querySelector('#chqDepBtn')
var chqMessage = document.querySelector('#chqMessage')

var aaa = function(event){
  debugger
  var atm = event.target.closest('.atm');
  if (Number(savBal.textContent) - Number(savAmount.value) < 0) {
    if (Number(chqBal.textContent) - Number(savAmount.value) < 0) {
      savMessage.textContent = 'You are Bankrupt';
      chqMessage.textContent = 'You are Bankrupt';
    } else  {
      chqBal.textContent = Number(chqBal.textContent) - Number(savAmount.value)
    }
  } else {
    savBal.textContent = Number(savBal.textContent) - Number(savAmount.value)
    savMessage.textContent = 'Succesful'
  }

}

savWithBtn.addEventListener('click', aaa)

savDepBtn.addEventListener('click', function(){
  savBal.textContent = Number(savBal.textContent) + Number(savAmount.value)
  savMessage.textContent = 'Succesful'

})

chqWithBtn.addEventListener('click', function(){
  if (Number(chqBal.textContent) - Number(chqAmount.value) < 0) {
    if (Number(savBal.textContent) - Number(chqAmount.value) < 0) {
      chqMessage.textContent = 'You are Bankrupt';
      savMessage.textContent = 'You are Bankrupt';
    } else  {
      savBal.textContent = Number(savBal.textContent) - Number(chqAmount.value)
    }
  } else {
    chqBal.textContent = Number(chqBal.textContent) - Number(chqAmount.value)
    chqMessage.textContent = 'Succesful'
  }
})

chqDepBtn.addEventListener('click', function(){
  chqBal.textContent = Number(chqBal.textContent) + Number(chqAmount.value)
  chqMessage.textContent = 'Succesful'

})

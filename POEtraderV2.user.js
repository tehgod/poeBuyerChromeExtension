// ==UserScript==
// @name     POEtraderV2
// @version  1
// @grant    none
// @include  https://www.pathofexile.com/trade/search/Affliction/*
// ==/UserScript==

setTimeout(function(){
  console.log('making button')
  var insert_location = document.getElementsByClassName('controls-left')[0];

  var new_checkbox_title = document.createElement('p');
  new_checkbox_title.textContent=' Saturate Market'
  insert_location.insertAdjacentElement('afterbegin',new_checkbox_title);

  var new_checkbox = document.createElement('INPUT');
  new_checkbox.setAttribute("type", "checkbox");
  new_checkbox.setAttribute("id", "SaturateMarketCheckbox");
  new_checkbox_title.insertAdjacentElement('afterbegin',new_checkbox);
}, 3000)

setTimeout(function(){
  const trade_ids = []
  console.log('starting checks');
  setInterval(function(){
    if (document.getElementById("SaturateMarketCheckbox").checked==true){
      if (document.getElementsByClassName('results nosort').length != 0){
        var result_elements = document.getElementsByClassName('results nosort')[0];
        var trades = result_elements.getElementsByClassName('row');
        if (trades.length > trade_ids.length){
          for (let i = 0; i < trades.length; i++){
            if (trade_ids.includes(trades[i].getAttribute('data-id'))==false){
              setTimeout(function(){
                trades[i].getElementsByClassName('direct-btn')[0].click();
              }, 2000);
              trade_ids.push(trades[i].getAttribute('data-id'));
              console.log('Sent trade request');
            }
            else{
              console.log('No new GUIDs');
          	}
          }
        }
        
        
      }
      else{
      	console.log(document.getElementsByClassName('resultset exchange'));
    	}
    }
  }, 1000)
}, 3500)
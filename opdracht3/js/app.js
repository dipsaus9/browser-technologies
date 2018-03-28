var printS = "print" in window;
var element = document.createElement('_');
var classList = "classList" in element;
var querySelector = "querySelector" in element;
var eventListener = "addEventListener" in element;
var support = false;
var canSvg = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);
supportTest();

function supportTest(){
  if(printS && classList && querySelector && canSvg && eventListener){
    support = true;
  }
}


if(support){
  document.body.classList.add('enhanched');
  var allUrl = document.querySelectorAll('a');
  for(var i = 0; i < allUrl.length; i++){
    allUrl[i].classList.add('disabled');
    allUrl[i].addEventListener('click', function(e){
      e.preventDefault();
    });
  }

  createSVG();
  var textInput = document.querySelector('input[type="text"]');
  textInput.addEventListener('keyup', function(e){
    createSVG(e.target.value);
  });
  var radioButtonText = document.querySelectorAll('#colorPicker-border input');
  for(var o = 0; o < radioButtonText.length; o++){
    radioButtonText[o].addEventListener('change', function(e){
      for(var p = 0; p < radioButtonText.length; p++){
        if(radioButtonText[p].checked){
          var textObjects = document.querySelectorAll('text');
          for(var i = 0; i < textObjects.length; i++){
            textObjects[i].setAttribute('class', '');
            textObjects[i].classList.add(radioButtonText[p].value);
          }
        }
      }
    });
  }
  var radioButtonHat = document.querySelectorAll('#colorPicker-base input');
  for(var o = 0; o < radioButtonHat.length; o++){
    radioButtonHat[o].addEventListener('change', function(e){
      for(var p = 0; p < radioButtonHat.length; p++){
        if(radioButtonHat[p].checked){
          var hatObject = document.querySelectorAll('path');
          for(var i = 0; i < hatObject.length; i++){
            hatObject[i].setAttribute('class', '');
            hatObject[i].classList.add(radioButtonHat[p].value);
          }
        }
      }
    });
  }
  function createSVG(text){
    if(text){

    }
    else{
      var text = 'Your awesome text';
    }
    var resultElement = document.createElement('div');
    resultElement.className = 'svg';
    var main = document.querySelector('main');
    var splitted = text.split(' ');
    var letters = -1;
    var firstString = [];
    var lastString = [];
    var offset1X = 115;
    var offset2X = 135;
    for(var r = 0; r < splitted.length; r++){
      letters += (splitted[r].length + 1) ;
      if(letters < 13){
        firstString.push(splitted[r]);
        if(letters > 11){
          offset1X = 105;
        }
      }
      else{
        if(letters > 22){
          offset2X = 95;
        }
        lastString.push(splitted[r]);
      }
    }
    firstString = firstString.join(" ");
    lastString = lastString.join(" ");
    if(!document.querySelector('svg')){
      var svg = document.createElement('svg');
      var title = document.createElement('title');
      var titleText = document.createTextNode("Voorbeeld pet");
      title.appendChild(titleText);
      var svg = `<svg id="Layer_1" viewBox="0 0 350.36 217.91">
        <title>Voorbeeld pet</title>
        <path id="path3359" class="cls-1" d="M330.64,292.84c-23.4-17.33-33-37.76-58.77-52.82,38.87-7.44,46.12-5.46,70.52,8S378.25,317.39,330.64,292.84Z" transform="translate(-14.71 -82.6)"/>
        <path id="path3355" class="cls-2" d="M289.68,210c-74.13-35.59-161.21-13-233.61,26.48-14.13,7.72-27.71,16.08-40.52,24.77,1.93-.46,2.53-26.93,3.58-32.84-2.2-65.33,20.3-112.81,83.17-136,32-3.4,69.18-13.3,100.94-5.19,22.4,10.49,27.45,16.71,52.34,41.75,4.34,9.11,33.14,80.9,34.1,81Z" transform="translate(-14.71 -82.6)"/>
        <path id="path3357" class="cls-2" d="M347,251.25c-37.38-25.68-70.49-59.09-109.56-62.06-57.43-3.93-125.3,15.95-185.14,48.74,28.56,38.17,39,71.52,97.15,51.51C208.4,269.14,290,210,347,251.25Z" transform="translate(-14.71 -82.6)"/><path id="path3361" class="cls-1" d="M290.23,208.5c-72.33-34.44-144-7.7-218.56,20.22C80.9,114.63,76.46,83.56,195,84.79c23.54,3,37.32,17.28,62.2,42.32,4.35,9.12,28.51,63.9,33.07,81.39Z" transform="translate(-14.71 -82.6)"/>
        <text class="text1" transform="translate(105 57)"></text>
        <text class="text2" transform="translate(135 77)"></text>
      </svg>`;
      resultElement.innerHTML = svg;
      main.appendChild(resultElement);
    }
    var text1 = document.querySelector('.text1');
    text1.setAttribute('transform', 'translate('+ offset1X +  ' 57)');
    text1.innerHTML = firstString;
    var text2 = document.querySelector('.text2');
    text2.setAttribute('transform', 'translate('+ offset2X +  ' 77)');
    text2.innerHTML = lastString;
  }

  var inputS = document.querySelector('input[type="submit"]');
  inputS.addEventListener('click', function(e){
    e.preventDefault();
  });
}
if(printS){
  document.body.classList.add('print');
  var printB = document.querySelector('.printButton');
  window.addEventListener('load', function(){
    printB.addEventListener('click', function(e){
      e.preventDefault();
      window.print();
    });
  });
}

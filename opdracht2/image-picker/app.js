var classListSupport = 'classList' in document.createElement('_');
var querySelectorSupport = 'querySelector' in document.createElement('_');
var eventListenerSupport = 'addEventListener' in document.createElement('_');
var support = false;
var number = 4
checkSupport();
start();
function checkSupport(){
  if(classListSupport){
    if(querySelectorSupport){
      if(eventListenerSupport){
        if(window.XMLHttpRequest){
          if(window.FileReader){
            support = true;

          }
        }
      }
    }
  }
}

function start(){
  if(support){
    var uploadFile = document.querySelector('input[type="file"]');
    uploadFile.classList.add('enhanced');
    uploadFile.addEventListener('change', function(e){
      if(e.target.value !== undefined){
        var fileName = e.target.value.split( '\\' ).pop();
        var label = document.querySelector('label[for="upload"]');
        label.innerHTML = fileName;
        var urlTo = e;
        var reader = new FileReader();
        number++;
        reader.onload = function(el){
          var elementCreated = createImageUpload(reader.result);
          elementAfter.appendChild(elementCreated);
          // var test = document.querySelector('input#' + number);
          // test.checked = true;
        }
        reader.readAsDataURL(event.target.files[0]);
        var elementAfter = document.querySelector('.image-picker_select');
      }
    })
  }
}

function createImageUpload(src){
  var element = document.createElement('label');
  var input = document.createElement('input');
  element.setAttribute('for', number);
  input.setAttribute('id', number);
  input.setAttribute('type', 'radio');
  input.setAttribute('value', number);
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'containing');
  var div2 = document.createElement('div');
  div2.setAttribute('class', 'test');
  var img = document.createElement('img');
  img.setAttribute('src', src);
  var text = document.createElement('p');
  var textnode = document.createTextNode('Titel');

  div2.appendChild(img);
  div1.appendChild(div2);
  text.appendChild(textnode);
  div1.appendChild(text);
  element.appendChild(input);
  element.appendChild(div1);
  return element;
}

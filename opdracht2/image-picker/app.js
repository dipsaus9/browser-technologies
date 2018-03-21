var classListSupport = 'classList' in document.createElement('_');
var querySelectorSupport = 'querySelector' in document.createElement('_');
var eventListenerSupport = 'addEventListener' in document.createElement('_');
var support = false;
checkSupport();
start();
function checkSupport(){
  if(classListSupport){
    if(querySelectorSupport){
      if(eventListenerSupport){
        if(window.XMLHttpRequest){
          support = true;
        }
      }
    }
  }
}

function start(){
  if(support){
    var uploadFile = document.querySelector('input[type="file"]');
    uploadFile.classList.add('enhanched');
    uploadFile.addEventListener('change', function(e){
      if(e.target.value !== undefined){
        var fileName = e.target.value.split( '\\' ).pop();
        console.log(fileName);
        var label = document.querySelector('label[for="upload"]');
        label.innerHTML = fileName;
        var urlTo = e.target.value;
        get(urlTo);
      }
    })
  }
}
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        console.log(req.response);
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.send();
  });
}

var classListSupport = 'classList' in document.createElement('_');
var querySelectorSupport = 'querySelector' in document.createElement('_');
var support = false;
checkSupport();
start();
function checkSupport(){
  if(classListSupport){
    if(querySelectorSupport){
      support = true;
    }
  }
}

function start(){
  if(support){
    console.log('test');
  }
}

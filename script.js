function clearoutput(){
    document.getElementById('output').innerHTML = ''
}
document.getElementById('clearButton').onclick = function(){
    let outputBox = document.getElementById('output').innerHTML
    if(!outputBox.length){
        showNotification('It is Already Empty!', 'error')
}else{
    clearoutput()
    showNotification('Output box has been cleared','success')

}
}
// output function

function showOutput(output){
document.getElementById('output').innerHTML = output
}

// --------------------------------------------------------------------------
console.log(window.location.href);
console.log(window.location.host)
console.log(window.location.hostname)
console.log(window.location.pathname)
console.log(window.location.port)

button1.onclick = function(){
    output.innerHTML = window.location.href;
}

button2.onclick = function(){
    window.location.href = "http://seerat.com";
}

button3.onclick = function(){
    window.location.replace("http://google.com");
}

let popupWindow;

button4.onclick = function(){
    popupWindow = window.open('http://4assignmant.surge.sh','myWindow', 'width=420,height=380,left=500,right=500')
}

button5.onclick = function(){
    popupWindow.document.write("<h1>Hellow World</h1>")
}

button6.onclick = function(){
    popupWindow.location.assign("http://4assignmant.surge.sh")
    setTimeout(()=> {
      popupWindow.close()
    },5000)
}

button7.onclick = function(){
    popupWindow.close()
}



function showNotification(msg, type){

let bgColor;

switch(type){
    case 'success':
        bgColor = 'green';
        break;
    case 'error':
        bgColor = 'red';
        break;
    default:
        bgColor = '#000';
        break;

}










// tostify

Toastify({
    text: msg,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
    },
    
  }).showToast();
}
// function addingEventListener() {
//     document.querySelector('#input').addEvenetListener('click', clickAlert)
// }

// const clickAlert = () => alert("I was clicked")

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
}

addingEventListener();
// function clickAlert(){
//     return alert('Hi I was clicked!')
// };
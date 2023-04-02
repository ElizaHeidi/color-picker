// Button cycles through array of hex codes, randomly selects one
// Button grabs body element, adds an event listener and changes body backgroundColor 
// to stored hex code 
let button = document.querySelector('button');
let body = document.body


function getValue()
{
    let myarray= new Array('#FFB6C1', '#f08080', '#FF69B4', "#FAA0A0", '#E0BFB8', '#E37383', '#F3CFC6');
    let random = myarray[Math.floor(Math.random() * myarray.length)];
    button.textContent = random;
    document.body.style.backgroundColor = random;
    //alert(random);
}

 button.addEventListener('click', (e) => {
   if (button) {
    getValue();
   } 
    
})
console.log('Funguju');

const h1Elm = document.querySelector('h1');
const kamenElm = document.querySelectorAll('.kamen');

const style = document.createElement('style');
style.innerHTML = `
.zatreseni {
    animation: zatres 70ms;
}
`;
document.getElementsByTagName('head')[0].appendChild(style);

const changeText = (event) => {
    const character = event.target.textContent;
    h1Elm.innerHTML = character;
    const zvuk = new Audio('tony/' + character + '.mp3');
    zvuk.play();
}

kamenElm.forEach(kamen => {
    kamen.addEventListener('click', changeText);
});

kamenElm.forEach(kamen => {
    kamen.addEventListener('animationend', (event) => 
    {
        event.target.classList.remove('zatreseni');
   })
});

const keyboard = (event) => {
    //console.log(event);
    const number = event.code;
    console.log('Event.code: ' + event.code);
    console.log('Number.slice: ' + number.slice(7));
    console.log('Number.slice 0-6: ' + number.slice(0,6));

    if(number.slice(0,6) === 'Numpad') {
        const index = Number(number.slice(6)) - 1;
        console.log('Index: ' + index);
        
        if (index >= 0 && index < kamenElm.length) {
            const kamen = kamenElm[index];
            console.log('Kamen');
            console.log(kamen);
            kamen.click();
            kamen.classList.add('zatreseni');
        }
    } else {
        kamenElm.forEach(kamen => {
            kamen.click();
            kamen.classList.add('zatreseni');
        });
    }

    /*
    if (event.code === 'Numpad' + number.slice(6)) {
        const zvuk = new Audio('tony/' + character + '.mp3');
        zvuk.play();
    }
    */

    /*if (event.code === 'Numpad' + number.slice(6)) {
        const zvuk = new Audio('tony/D.mp3');
        zvuk.play();
    }
    */
}

document.addEventListener('keydown', keyboard);
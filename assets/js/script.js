var btnApri = document.getElementById('bottone');
//MENU
btnApri.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menuopen');
})

var over = document.querySelectorAll('a');
for(let i = 0; i < over.length; i++) {
    over[i].addEventListener('mouseover', function() {
        this.classList.add('link');
    });

    over[i].addEventListener('mouseout', function() {
        this.classList.remove('link');
    });
}

btnApri.addEventListener('focusin', function() {
    btnApri.style.backgroundColor = 'red';
})

btnApri.addEventListener('focusout', function() {
    btnApri.style.backgroundColor = 'blue';
})


//BOTTONI
function grande() {
    document.getElementById('ciao').style.fontSize = '6rem';
}

function colore() {
    document.getElementById('ciao').style.color = 'red';
}

function maiuscolo() {
    document.getElementById('ciao').style.textTransform = 'uppercase';
}

function nascondi() {
    document.getElementById('ciao').style.visibility = 'hidden';
}

function mostra() {
    document.getElementById('ciao').style.visibility = 'visible';
}

//LISTA
var listItem = document.querySelectorAll('li');

for(let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('mouseover', function() {
        this.classList.add('rosso');
    });

    listItem[i].addEventListener('mouseout', function() {
        this.classList.remove('rosso');
    });

    listItem[i].addEventListener('click', function() {
        this.classList.toggle('sbarrato');
    });
}
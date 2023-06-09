let input = document.querySelector('#input');
let btn = document.querySelector('#check');
let monitor = document.querySelector('#random-number');
let guess = document.querySelector('#guess');
let refresh = document.querySelector('#refresh');
let total = document.querySelector('#total');
let body = document.body;

let random = Math.trunc(Math.random()*20)+1;
console.log("Random raqam:\t" + random);

total.innerText = 3;

btn.addEventListener('click', function(){

    if (input.value > 20) {
        alert('Siz kiritgan raqam 20 dan katta')
        input.value = ''
    } else {
        
        if (input.value == random) {
    
            monitor.innerText = random;
            guess.innerText = 'Tabriklaymiz!!!';
    
            body.classList.add('bg-green-500');
    
            body.classList.remove('bg-red-300');
            body.classList.remove('bg-slate-300');
    
    
        } else {
            
            monitor.innerText = 'Afsus...';

            if (input.value < random) {
                guess.innerText = "Siz kiritgan raqam kichik"
            } else if (input.value > random) {
                guess.innerText = "Siz kiritgan raqam katta"
            }
            
            if (total.innerText == 1) {
    
                monitor.innerText = random;
                guess.innerText = 'Siz yutqazdingiz';
                total.innerText = 0;
                
                body.classList.add('bg-red-300');
                        
                body.classList.remove('bg-green-500');
                body.classList.remove('bg-slate-300');
    
            } else {
    
                if (total.innerText <= 0) {
                    total.innerText = 0;
                    btn.disabled = true;
                } else {
                    total.innerText--;
                };
                
            };
    
        };
        
    };

});

refresh.addEventListener('click', function(){
    random = Math.trunc(Math.random()*20)+1;
    total.textContent = 3;
    input.value = '';
    monitor.innerText = '?';
    guess.innerText = "Hali son kiritilgani yo'q";
    body.classList.remove('bg-red-300');
    body.classList.remove('bg-green-500');
    body.classList.add('bg-slate-300');
})
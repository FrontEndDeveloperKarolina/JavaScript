const countdown = document.querySelector('.countdown');

const launchDate = new Date('Feb 1, 2019 10:00:00').getTime();

const intvl = setInterval(()=>{
    const now = new Date().getTime();
    const distance = launchDate - now;
    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) /(1000*60*60));
    const mins = Math.floor((distance % (1000*60*60)) /(1000*60));
    const seconds = Math.floor((distance % (1000*60)) /1000);
    
    countdown.innerHTML = `
    <div>${days}<span>Dni<span></div>
    <div>${hours}<span>Godziny<span></div>
    <div>${mins}<span>Minuty<span></div>
    <div>${seconds}<span>Sekundy<span></div>
    `;

    if(distance < 0 ){
        clearInterval(intvl);
        countdown.style.color = 'red';
        countdown.innerHTML = 'Mistrzostwa się odbyły'

    }
},1000);

let endDate = new Date("01/01/2023 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);


    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
    }
}, 1000);

// youtube lun dev

// begin ms
// 1s = 1000 ms
// 1p = 60s = 60*1000 ms
// 1h = 60p = 60*60 s = 60* 60* 1000 ms
// 1d = 24h = 24*60p = 24*60*60s = 24*60*60*1000 ms 

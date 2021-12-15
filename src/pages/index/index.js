import './index.scss';
import '../../js/script.js';
import '../../js/jquery-3.6.0.min.js';
import AirDatepicker from 'air-datepicker';





let airdatepicker = new AirDatepicker('#calendar', {
    position: 'bottom center',
    range: true,
    buttons: ['clear'],
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',    
    },
    prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>'
});

console.log('hello');
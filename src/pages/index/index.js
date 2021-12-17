import './index.scss';
import '../../js/script.js';
import '../../js/jquery-3.6.0.min.js';
import AirDatepicker from 'air-datepicker';

let arr = []

let adpArrival = new AirDatepicker('#input-arrival', {
    position: 'bottom center',
    range: true,
    buttons: ['clear'],
    multipleDates: true,
    navTitles: {
        days: '<p style="color: #1F2041; font-size: 19px; font-weight: bold;">MMMM yyyy</p>',    
    },
    //prevHtml: "<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>",
    onSelect({date, formattedDate, datepicker}) {
        if(formattedDate.length > 0)
            document.getElementById('input-arrival').value = formattedDate[0];
        if(formattedDate.length > 1)
            document.getElementById('input-departure').value = formattedDate[1];
        else
            document.getElementById('input-departure').value = "";
        arr = datepicker.selectedDates
    },
    onShow() {
        apdArrival.clear();
        adpArrival.selectDate(arr);
    }
});

let adpDeparture = new AirDatepicker('#input-departure', {
    position: 'bottom center',
    range: true,
    buttons: ['clear'],
    multipleDates: true,
    navTitles: {
        days: '<p style="color: #1F2041; font-size: 19px; font-weight: bold;">MMMM yyyy</p>',    
    },
    //prevHtml: "<svg width="17" height="18" viewBox="0 0 17 18" fill="none"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>",
    onSelect({date, formattedDate, datepicker}) {
        if(formattedDate.length > 0)
            document.getElementById('input-arrival').value = formattedDate[0];
        if(formattedDate.length > 1)
            document.getElementById('input-departure').value = formattedDate[1];
        else
            document.getElementById('input-departure').value = "";
        arr = datepicker.selectedDates
    },
    onShow() {
        adpDeparture.clear();
        adpDeparture.selectDate(arr);
    }
});


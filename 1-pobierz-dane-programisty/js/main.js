//function ajax(method, url) {
'use strict';
//    'use strict';
//    let httpReq = new XMLHttpRequest();
//
//
//    httpReq.open(method, url);
//
//
//    httpReq.onreadystatechange = function () {
//
//        if (httpReq.readyState == 4) {
//
//            if (httpReq.status == 200) {
//
//                let returnData = httpReq.responseText;
//
//                httpReq.onsuccess(returnData);
//
//                httpReq = null;
//
//            }
//        }
//
//    }
//    httpReq.onsuccess = function () {
////        let jsonObj = JSON.parse(response);
////        console.log(jsonObj.userId);

$(document).ready(function () {
    $('#btn').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (dane) {
            console.log(dane);
            var daneProgramisty = $('<div>');
            daneProgramisty.text(function(){
                return 'Imię i nazwisko: ' + dane.imie + ' '+ dane.nazwisko+ ', ' + 'zawód: ' + dane.zawod + ', '+ 'firma: ' + dane.firma;
            });
            $('body').append(daneProgramisty);
            console.log('dziala');

        })
    })
})
//    }
//    httpReq.send();
//}

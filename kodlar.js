if(screen.width < 380){
    document.getElementById("tarih").style.fontSize = "30px";
    document.getElementById("Saat").style.fontSize = "60px";
    document.getElementById("remainingMin").style.fontSize = "60px";
    document.getElementById("remainingMin").style.marginBottom = "30px";
    document.getElementById("oncekiDers").style.fontSize = "30px";
    document.getElementById("oncekiDers").style.marginTop = "-10px";
    document.getElementById("oncekiDers").style.marginBottom = "20px";
    document.getElementById("sonrakiDers").style.fontSize = "30px";
    document.getElementById("sonrakiDers").style.marginTop = "-10px";
    document.getElementById("sonrakiDers").style.marginBottom = "20px";
    document.getElementById("dersButton").style.marginTop = "5px";
    document.getElementById("dersButton").style.marginBottom = "200px";
    document.getElementById("startSaat").style.fontSize = "30px";
    document.getElementById("startSaat").style.marginBottom = "-20px";
    document.getElementById("finishSaat").style.fontSize = "30px";  
    document.getElementById("finishSaat").style.marginBottom = "-20px";
    document.getElementById("g1").style.marginTop = "-270px";
    document.getElementById("tarih").style.marginBottom = "30px"; 
    document.getElementById("Saat").style.marginTop = "30px";

    document.getElementById("yer").style.fontSize = "30px";
    document.getElementById("yer").style.marginTop = "35px";
    
  
  }

var g1 = new JustGage({
    id: 'g1',
    value: 0,
    min: 0,
    max: 15000,
    symbol: ' sec',
    noGradient: true,
    gaugeColor: '#f3f3f3',
    pointer: true,
    displayRemaining: true,
    pointerOptions: {
      toplength: -20,
      bottomlength: 10,
      bottomwidth: 5,
      color: '#8e8e93',
      stroke: '#ffffff',
      stroke_width: 0,
      stroke_linecap: 'round'
    },
    gaugeWidthScale: 0.6,
    counter: true,
    relativeGaugeSize: true,
    //donut: true,
    hideValue: true,
    hideMinMax: true,
    customSectors: {
        percents: true, // lo and hi values are in %
        ranges: [{
          color : "#75f090",
          lo : 0,
          hi : 100
        }]
      }
      
  });

/* var g2 = new JustGage({
    id: 'g2',
    value: 0,
    min: 0,
    max: 59,
    symbol: ' sec',
    noGradient: false,
    pointer: true,
    gaugeColor: '#f3f3f3',
    valueFontColor: '#f3f3f3',
    displayRemaining: true,
    hideValue: true,
    hideMinMax: true,
    pointerOptions: {
      toplength: -20,
      bottomlength: 10,
      bottomwidth: 5,
      color: '#8e8e93',
      stroke: '#ffffff',
      stroke_width: 0,
      stroke_linecap: 'round'
    },
    gaugeWidthScale: 0.6,
    counter: true,
    relativeGaugeSize: true,
    //donut: true,
    customSectors: {
        percents: true, // lo and hi values are in %
        ranges: [{
          color : "#75f090",
          lo : 0,
          hi : 100
        }]
      }
    
    
  }); */

  var dersler = [["Atatatürkçülük", "Math and Geo", "AP Calc BC J", "Türkçe", "Boş Ders", "Computer Sci K", "English", "English"],
                 ["Türkçe", "APC E&M L", "Computer Sci K", "Teknik Çizim", "Teknik Çizim", "Boş Ders", "AP Calc BC J", "English"],
                 ["Math and Geo", "English", "Türkçe", "Din", "Computer Sci K", "APC E&M L", "Math and Geo", "Rehberlik"],
                 ["Atatatürkçülük", "Math and Geo", "AP Calc BC J", "Türkçe", "Türkçe", "APC E&M L", "Beden E", "Boş Beden E"],
                 ["AP Calc BC J", "APC E&M L", "English", "Math and Geo", "Computer Sci K", "Ders Yok", "Ders Yok", "Ders Yok"]];

    var yerler = [["Auditorium", "Auditorium", "Auditorium", "Auditorium", "Auditorium", "Table Tennis", "Auditorium", "Auditorium"],
                 ["Auditorium", "Auditorium", "Table Tennis", "MA 202/203", "MA 202/203", "Auditorium", "Auditorium", "Auditorium"]];

    var linkler = [["https://connected.uaa.k12.tr/ultra/courses/_5868_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5870_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_6038_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5872_1/outline", "https://connected.uaa.k12.tr/ultra/course", "https://connected.uaa.k12.tr/ultra/courses/_5863_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5869_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5869_1/outline"],
                   ["https://connected.uaa.k12.tr/ultra/courses/_5872_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5855_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5863_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_6280_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_6280_1/outline", "https://connected.uaa.k12.tr/ultra/course", "https://connected.uaa.k12.tr/ultra/courses/_6038_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5869_1/outline"],
                   ["https://connected.uaa.k12.tr/ultra/courses/_5870_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5869_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5872_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5867_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5863_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5855_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5870_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5871_1/outline"],
                   ["https://connected.uaa.k12.tr/ultra/courses/_5868_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5870_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_6038_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5872_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5872_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5855_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5873_1/outline", "https://connected.uaa.k12.tr/ultra/course"],
                   ["https://connected.uaa.k12.tr/ultra/courses/_6038_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5855_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5869_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5870_1/outline", "https://connected.uaa.k12.tr/ultra/courses/_5863_1/outline", "https://mail.google.com/mail/u/1/?ogbl#inbox", "https://mail.google.com/mail/u/1/?ogbl#inbox", "https://mail.google.com/mail/u/1/?ogbl#inbox"]];
  
    var saatler = [[8, 0], [8,30], [8,40], [9, 10], [9, 20], [9, 50], [10, 0], [10, 30], [10, 40], [11, 10], [12, 0], [12, 30], [12, 40], [13, 10], [13, 20], [13, 50]];
    
   
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function dersAyarla(dersIndex, min, max, saat, gun, dak, sec, saatArray){
        document.getElementById("dersNTeneffüs").innerHTML = dersler[gun][dersIndex];
        //document.getElementById("startSaat").innerHTML = saatler[saat][0] + ":" + saatler[saat][1];
        document.getElementById("startSaat").innerHTML = saatAyarla(saatArray[saat][0], saatArray[saat][1]);
        //document.getElementById("finishSaat").innerHTML = saatler[saat+1][0] + ":" + saatler[saat+1][1];
        document.getElementById("finishSaat").innerHTML = saatAyarla(saatArray[saat+1][0], saatArray[saat+1][1]);
        document.getElementById("oncekiDers").innerHTML = dersler[gun][dersIndex-1];
        document.getElementById("sonrakiDers").innerHTML = dersler[gun][dersIndex+1];

        if(gun == 0 || gun == 1){
            document.getElementById("yer").innerHTML = yerler[gun][dersIndex];
        }

        var g = dak-min;
        var r = g*60+sec;
        g1.refresh(r*15000/((max-min)*60));

        var kalanMin = max - dak;
        var kalanSec = 59 - sec;

        //document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
        document.getElementById("remainingMin").innerHTML = saatAyarla(kalanMin, kalanSec);
    }


    function teneffusAyarla(oncekiDers, min, max, saat, gun, dak, sec, saatArray){
        document.getElementById("dersNTeneffüs").innerHTML = "Teneffüs";
        //document.getElementById("startSaat").innerHTML = saatler[saat][0] + ":" + saatler[saat][1];
        document.getElementById("startSaat").innerHTML = saatAyarla(saatArray[saat][0], saatArray[saat][1]);
        //document.getElementById("finishSaat").innerHTML = saatler[saat+1][0] + ":" + saatler[saat+1][1];
        document.getElementById("finishSaat").innerHTML = saatAyarla(saatArray[saat+1][0], saatArray[saat+1][1]);
        document.getElementById("oncekiDers").innerHTML = dersler[gun][oncekiDers];
        document.getElementById("sonrakiDers").innerHTML = dersler[gun][oncekiDers+1];

        if(gun == 0 || gun == 1){
            document.getElementById("yer").innerHTML = yerler[gun][oncekiDers+1];
        }

        var g = dak-min;
        var r = g*60+sec;
        g1.refresh(r*15000/((max-min)*60));

        var kalanMin = max - dak;
        var kalanSec = 59 - sec;

        //document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
        document.getElementById("remainingMin").innerHTML = saatAyarla(kalanMin, kalanSec);
    }

    function saatAyarla(ilk, son){
        if(ilk<10 && son<10){
            return "0" + ilk + ":" + "0" + son;
        }else if(ilk<10){
            return "0" + ilk + ":" + son;
        } else if(son<10){
            return ilk + ":" + "0" + son;
        } else{
            return ilk + ":" + son;
        }
    }

    function timePoint(saat, dak){
        return (saat * 60) + dak;
    }


  var wow = setInterval(function() {
    
    var now = new Date();

    document.getElementById("tarih").innerHTML = days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
    document.getElementById("Saat").innerHTML = saatAyarla(now.getHours(), now.getMinutes());
    /* if(now.getHours()<10 && now.getMinutes()<10){
        document.getElementById("Saat").innerHTML = "0" + now.getHours() + ":" + "0" + now.getMinutes();
    }else if(now.getHours()<10){
        document.getElementById("Saat").innerHTML = "0" + now.getHours() + ":" + now.getMinutes();
    } else if(now.getMinutes()<10){
        document.getElementById("Saat").innerHTML = now.getHours() + ":" + "0" + now.getMinutes();
    } else{
        document.getElementById("Saat").innerHTML = now.getHours() + ":" + now.getMinutes();
    } */
    
    

    
    
    

    var dayZa = now.getDay()-1;
    var hourZa = now.getHours();
    var minuteZa = now.getMinutes();
    var secondZa = now.getSeconds();
    

    //minuteZa = (hourZa - 8) * 60 + minuteZa;
    if (dayZa==-1){dayZa=6;}

    var x = timePoint(hourZa, minuteZa);
    
    

    //dersAyarla(1, 65, 90, 2, dayZa, x, secondZa);
    //teneffusAyarla(1, 90, 100, 3, dayZa, x, secondZa);

    function compareZa(index1, index2){
        return x>=timePoint(saatler[index1][0], saatler[index1][1]) && x<timePoint(saatler[index2][0], saatler[index2][1])
    }

    function timePShort(index){
        return timePoint(saatler[index][0], saatler[index][1]);
    }

    if(x>=timePoint(saatler[0][0], saatler[0][1]) && x< timePoint(saatler[1][0], saatler[1][1])){
        //ders 0
        
        /* document.getElementById("dersNTeneffüs").innerHTML = dersler[dayZa][0];
        document.getElementById("startSaat").innerHTML = saatler[0][0] + ":" + saatler[0][1];
        document.getElementById("finishSaat").innerHTML = saatler[1][0] + ":" + saatler[1][1];
        document.getElementById("oncekiDers").innerHTML = "-"
        document.getElementById("sonrakiDers").innerHTML = dersler[dayZa][1];

        var g = x-30;
        g1.refresh(g*10);

        var kalanMin = 55 - x;
        var kalanSec = 59 - second;

        document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec; */
        
        dersAyarla(0, timePShort(0), timePShort(1)-1, 0, dayZa, x, secondZa, saatler);
        document.getElementById("oncekiDers").innerHTML = ":";

    } else if(compareZa(1, 2)){
        //teneffusAyarla(0, 55, 65, 1);
        teneffusAyarla(0, timePShort(1), timePShort(2)-1, 1, dayZa, x, secondZa, saatler);
    } else if(compareZa(2, 3)){
        //ders 1

       //dersAyarla(1, 65, 90, 2);
       dersAyarla(1, timePShort(2), timePShort(3)-1, 2, dayZa, x, secondZa, saatler);
    } else if(compareZa(3, 4)){
        //teneffusAyarla(1, 90, 100, 3);
        teneffusAyarla(1, timePShort(3), timePShort(4)-1, 3, dayZa, x, secondZa, saatler);
    } else if(compareZa(4, 5)){
        //ders 2

        //dersAyarla(2, 100, 125, 4);
        dersAyarla(2, timePShort(4), timePShort(5)-1, 4, dayZa, x, secondZa, saatler);
    } else if(compareZa(5, 6)){
        //teneffusAyarla(2, 125, 135, 5);
        teneffusAyarla(2, timePShort(5), timePShort(6)-1, 5, dayZa, x, secondZa, saatler);
    } else if(compareZa(6, 7)){
        //ders 3

        //dersAyarla(3, 135, 160, 6);
        dersAyarla(3, timePShort(6), timePShort(7)-1, 6, dayZa, x, secondZa, saatler);
    } else if(compareZa(7, 8)){
        //teneffusAyarla(3, 160, 170, 7);
        teneffusAyarla(3, timePShort(7), timePShort(8)-1, 7, dayZa, x, secondZa, saatler);
    } else if (compareZa(8, 9)){
        // ders 4

        //dersAyarla(4, 170, 195, 8);
        dersAyarla(4, timePShort(8), timePShort(9)-1, 8, dayZa, x, secondZa, saatler);
    } else if (compareZa(9, 10)){
        document.getElementById("dersNTeneffüs").innerHTML = "Büyük Teneffüs";
        document.getElementById("startSaat").innerHTML =  saatAyarla(saatler[9][0], saatler[9][1]);
        document.getElementById("finishSaat").innerHTML = saatAyarla(saatler[9+1][0] ,saatler[9+1][1]);
        document.getElementById("oncekiDers").innerHTML = dersler[dayZa][4];
        document.getElementById("sonrakiDers").innerHTML = dersler[dayZa][4+1];

        var g = x-timePShort(9);

        var r = g*60 + secondZa;

        g1.refresh(r*15000/((timePShort(10)-timePShort(9))*60));

        var kalanMin = timePShort(10) - x;
        var kalanSec = 59 - secondZa;

        //document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
        document.getElementById("remainingMin").innerHTML = saatAyarla(kalanMin, kalanSec);
    } else if(compareZa(10, 11)){
        //ders 5

        //dersAyarla(5, 250, 275, 10);
        dersAyarla(5, timePShort(10), timePShort(11)-1, 10, dayZa, x, secondZa, saatler);
    } else if(compareZa(11, 12)){
        //teneffusAyarla(5, 275, 285, 11);
        teneffusAyarla(5, timePShort(11), timePShort(12)-1, 11, dayZa, x, secondZa, saatler);
    } else if(compareZa(12, 13)){
        //ders 6

        //dersAyarla(6, 285, 310, 12);
        dersAyarla(6, timePShort(12), timePShort(13)-1, 12, dayZa, x, secondZa, saatler);
    } else if(compareZa(13, 14)){
        //teneffusAyarla(5, 310, 320, 13);
        teneffusAyarla(6, timePShort(13), timePShort(14)-1, 13, dayZa, x, secondZa, saatler);
    } else if(compareZa(14, 15)){
        //ders 7

        //dersAyarla(7, 320, 330, 14);
        
        dersAyarla(7, timePShort(14), timePShort(15)-1, 14, dayZa, x, secondZa, saatler);
        document.getElementById("sonrakiDers").innerHTML = ":";
    } else{
        document.getElementById("dersNTeneffüs").innerHTML = "Ders Yok";
        document.getElementById("startSaat").innerHTML = "00:00";
        document.getElementById("finishSaat").innerHTML = "00:00";
        document.getElementById("oncekiDers").innerHTML = "Ders Yok";
        document.getElementById("sonrakiDers").innerHTML = "Ders Yok";

        g1.refresh(15000/2);

        document.getElementById("remainingMin").innerHTML = "00:00";
    }
    
    
    
  }, 1000);

  document.getElementById('dersButton').addEventListener('click', function () {
    // var t = new Date();
    // var d = t.getDay()-1;
    // var h = t.getHours();
    // var m = t.getMinutes();
    
    // currentTimePoint = timePoint(h, m);



    // if (d==-1){d=6;}

    // function lesson(x) {
    //     if (d >= 5 ) {
    //         return "https://connected.uaa.k12.tr/ultra/course";
    //     } else if (x >= 0 && x <= 55) {
    //         return linkler[d][0];
    //     } else if (x >= 55 && x <= 90) {
    //         return linkler[d][1];
    //     } else if (x >= 90 && x <= 125) {
    //         return linkler[d][2];
    //     } else if (x >= 125 && x <= 160) {
    //         return linkler[d][3];
    //     } else if (x >= 160 && x <= 195) {
    //         return linkler[d][4];
    //     } else if (x >= 195 && x <= 275) {
    //         return linkler[d][5];
    //     } else if (x >= 275 && x <= 300) {
    //         return linkler[d][6];
    //     } else if (x >= 300 && x <= 335) {
    //         return linkler[d][7];
    //     } else {
    //         return "https://connected.uaa.k12.tr/ultra/course";
    //     }
    // }

    // var a = lesson(currentTimePoint);


























    var now = new Date();

    var dayZa = now.getDay()-1;
    var hourZa = now.getHours();
    var minuteZa = now.getMinutes();
    var secondZa = now.getSeconds();

    
    

    //minuteZa = (hourZa - 8) * 60 + minuteZa;
    if (dayZa==-1){dayZa=6;}

    var currentTimePoint = timePoint(hourZa, minuteZa);


    function lesson(x){
        
        
        
    
        
    
        function compareZa(index1, index2){
            return x>=timePoint(saatler[index1][0], saatler[index1][1]) && x<timePoint(saatler[index2][0], saatler[index2][1])
        }
    
        function timePShort(index){
            return timePoint(saatler[index][0], saatler[index][1]);
        }
    
        if(dayZa>=5){
            return "https://connected.uaa.k12.tr/ultra/course";
        } else if(x>=timePoint(saatler[0][0], saatler[0][1]) && x< timePoint(saatler[1][0], saatler[1][1])){ 
            return linkler[dayZa][0];
        } else if(compareZa(1, 2)){
            return linkler[dayZa][1];
        } else if(compareZa(2, 3)){
            return linkler[dayZa][1];
        } else if(compareZa(3, 4)){
            return linkler[dayZa][2];
        } else if(compareZa(4, 5)){
            return linkler[dayZa][2];
        } else if(compareZa(5, 6)){
            return linkler[dayZa][3];
        } else if(compareZa(6, 7)){
            return linkler[dayZa][3];
        } else if(compareZa(7, 8)){
            return linkler[dayZa][4];
        } else if (compareZa(8, 9)){
            return linkler[dayZa][4];
        } else if (compareZa(9, 10)){
            return linkler[dayZa][5];
        } else if(compareZa(10, 11)){
            return linkler[dayZa][5];
        } else if(compareZa(11, 12)){
            return linkler[dayZa][6];
        } else if(compareZa(12, 13)){
            return linkler[dayZa][6];
        } else if(compareZa(13, 14)){
            return linkler[dayZa][7];
        } else if(compareZa(14, 15)){
            return linkler[dayZa][7];
        } else{
            return "https://connected.uaa.k12.tr/ultra/course";
        }
    }

    var a = lesson(currentTimePoint);

    window.open(a);
  });

  
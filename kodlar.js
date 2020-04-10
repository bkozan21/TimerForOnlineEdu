var g1 = new JustGage({
    id: 'g1',
    value: 0,
    min: 0,
    max: 250,
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

  var dersler = [["APC Mechanics", "AP Statistics", "English", "Tarih", "Chemistry", "Türkçe", "Geometri", "AP Calculus AB"],
                 ["Advanced Programming", "Advanced Programming", "APC Mechanics", "APC Mechanics", "Türkçe", "Tarih", "Beden Eğitimi", "Beden Eğitimi"],
                 ["Chemistry", "Chemistry", "Türkçe", "Türkçe", "AP Calculus AB", "Felsefe", "English", "English"],
                 ["Geometri", "Boş Ders", "AP Statistics", "AP Statistics", "AP Calculus AB", "English", "Chemistry", "Rehberlik"],
                 ["English", "Din", "AP Calculus AB", "Geometri", "Türkçe", "AP Statistics", "APC Mechanics", "Felsefe"]];

    var linkler = [["https://zoom.us/j/525359216", "https://zoom.us/j/857974639?pwd=MU1BbnE4Y0phVU11bVgyOHo3cERjdz09", "https://zoom.us/j/501476976?pwd=TUt6QjRHSHFNa3FMWk9PbDB6RkV6dz09", "https://zoom.us/j/695293345", "https://zoom.us/j/957249287", "https://zoom.us/j/429623403", "https://zoom.us/j/609408896?pwd=N05mREJ5RTgzVjdqMUsyd012QUhDUT09", "https://zoom.us/j/337523852?pwd=em5Xanp6cFJ3d0RaRWxTMXh5R2hUQT09"],
                   ["https://zoom.us/j/275754948", "https://zoom.us/j/275754948", "https://zoom.us/j/525359216", "https://zoom.us/j/525359216", "https://zoom.us/j/429623403", "https://zoom.us/j/695293345", "https://zoom.us/j/780739692?pwd=Vy90ZU5hNUNDazdqVWVtZUdrTXl0Zz09", "https://zoom.us/j/780739692?pwd=Vy90ZU5hNUNDazdqVWVtZUdrTXl0Zz09"],
                   ["https://zoom.us/j/957249287", "https://zoom.us/j/957249287", "https://zoom.us/j/429623403", "https://zoom.us/j/429623403", "https://zoom.us/j/337523852?pwd=em5Xanp6cFJ3d0RaRWxTMXh5R2hUQT09", "https://zoom.us/j/864147735", "https://zoom.us/j/501476976?pwd=TUt6QjRHSHFNa3FMWk9PbDB6RkV6dz09", "https://zoom.us/j/501476976?pwd=TUt6QjRHSHFNa3FMWk9PbDB6RkV6dz09"],
                   ["https://zoom.us/j/609408896?pwd=N05mREJ5RTgzVjdqMUsyd012QUhDUT09", "https://apstudents.collegeboard.org/", "https://zoom.us/j/857974639?pwd=MU1BbnE4Y0phVU11bVgyOHo3cERjdz09", "https://zoom.us/j/857974639?pwd=MU1BbnE4Y0phVU11bVgyOHo3cERjdz09", "https://zoom.us/j/337523852?pwd=em5Xanp6cFJ3d0RaRWxTMXh5R2hUQT09", "https://zoom.us/j/501476976?pwd=TUt6QjRHSHFNa3FMWk9PbDB6RkV6dz09", "https://zoom.us/j/957249287", "https://zoom.us/j/326567651"],
                   ["https://zoom.us/j/501476976?pwd=TUt6QjRHSHFNa3FMWk9PbDB6RkV6dz09", "https://zoom.us/j/279578369", "https://zoom.us/j/337523852?pwd=em5Xanp6cFJ3d0RaRWxTMXh5R2hUQT09", "https://zoom.us/j/609408896?pwd=N05mREJ5RTgzVjdqMUsyd012QUhDUT09", "https://zoom.us/j/429623403", "https://zoom.us/j/857974639?pwd=MU1BbnE4Y0phVU11bVgyOHo3cERjdz09", "https://zoom.us/j/525359216", "https://zoom.us/j/864147735"]];
  
    var saatler = [[8, 30], [8,55], [9, 5], [9, 30], [9, 40], [10, 5], [10, 15], [10, 40], [10, 50], [11, 15], [12, 10], [12, 35], [12, 45], [13, 10], [13, 20], [13, 45]];
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function dersAyarla(dersIndex, min, max, saat, gun, dak, sec){
        document.getElementById("dersNTeneffüs").innerHTML = dersler[gun][dersIndex];
        document.getElementById("startSaat").innerHTML = saatler[saat][0] + ":" + saatler[saat][1];
        document.getElementById("finishSaat").innerHTML = saatler[saat+1][0] + ":" + saatler[saat+1][1];
        document.getElementById("oncekiDers").innerHTML = dersler[gun][dersIndex-1];
        document.getElementById("sonrakiDers").innerHTML = dersler[gun][dersIndex+1];

        var g = dak-min;
        g1.refresh(g*10);

        var kalanMin = max - dak;
        var kalanSec = 59 - sec;

        document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
    }


    function teneffusAyarla(oncekiDers, min, max, saat, gun, dak, sec){
        document.getElementById("dersNTeneffüs").innerHTML = "Teneffüs";
        document.getElementById("startSaat").innerHTML = saatler[saat][0] + ":" + saatler[saat][1];
        document.getElementById("finishSaat").innerHTML = saatler[saat+1][0] + ":" + saatler[saat+1][1];
        document.getElementById("oncekiDers").innerHTML = dersler[gun][oncekiDers];
        document.getElementById("sonrakiDers").innerHTML = dersler[gun][oncekiDers+1];

        var g = dak-min;
        g1.refresh(g*25);

        var kalanMin = max - dak;
        var kalanSec = 59 - sec;

        document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
    }


  var wow = setInterval(function() {
    
    var now = new Date();

    document.getElementById("tarih").innerHTML = days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
    document.getElementById("Saat").innerHTML = now.getHours() + ":" + now.getMinutes();

    
    
    

    var dayZa = now.getDay()-1;
    var hourZa = now.getHours();
    var minuteZa = now.getMinutes();
    var secondZa = now.getSeconds();
    

    minuteZa = (hourZa - 8) * 60 + minuteZa;
    if (dayZa==-1){dayZa=6;}

    var x = minuteZa;

    
    
    

    //dersAyarla(1, 65, 90, 2, dayZa, x, secondZa);
    //teneffusAyarla(1, 90, 100, 3, dayZa, x, secondZa);

    

    if(x>=30 && x<= 55){
        //ders 0
        
        document.getElementById("dersNTeneffüs").innerHTML = dersler[dayZa][0];
        document.getElementById("startSaat").innerHTML = saatler[0][0] + ":" + saatler[0][1];
        document.getElementById("finishSaat").innerHTML = saatler[1][0] + ":" + saatler[1][1];
        document.getElementById("oncekiDers").innerHTML = "-"
        document.getElementById("sonrakiDers").innerHTML = dersler[dayZa][1];

        var g = x-30;
        g1.refresh(g*10);

        var kalanMin = 55 - x;
        var kalanSec = 59 - second;

        document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
    } else if(x>55 && x<65){
        //teneffusAyarla(0, 55, 65, 1);
        teneffusAyarla(0, 55, 65, 1, dayZa, x, secondZa);
    } else if(x>=65 && x<= 90){
        //ders 1

       //dersAyarla(1, 65, 90, 2);
       dersAyarla(1, 65, 90, 2, dayZa, x, secondZa);
    } else if(x>90 && x<100){
        //teneffusAyarla(1, 90, 100, 3);
        teneffusAyarla(1, 90, 100, 3, dayZa, x, secondZa);
    } else if(x>=100 && x<= 125){
        //ders 2

        //dersAyarla(2, 100, 125, 4);
        dersAyarla(2, 100, 125, 5, dayZa, x, secondZa);
    } else if(x>125 && x<135){
        //teneffusAyarla(2, 125, 135, 5);
        teneffusAyarla(2, 125, 135, 5, dayZa, x, secondZa);
    } else if(x>=135 && x<= 160){
        //ders 3

        //dersAyarla(3, 135, 160, 6);
        dersAyarla(3, 135, 160, 6, dayZa, x, secondZa);
    } else if(x>160 && x<170){
        //teneffusAyarla(3, 160, 170, 7);
        teneffusAyarla(3, 160, 170, 7, dayZa, x, secondZa);
    } else if (x>=170 && x<=195){
        // ders 4

        //dersAyarla(4, 170, 195, 8);
        dersAyarla(4, 170, 195, 8, dayZa, x, secondZa);
    } else if (x>195 && x<250){
        document.getElementById("dersNTeneffüs").innerHTML = "Büyük Teneffüs";
        document.getElementById("startSaat").innerHTML = saatler[9][0] + ":" + saatler[9][1];
        document.getElementById("finishSaat").innerHTML = saatler[9+1][0] + ":" + saatler[9+1][1];
        document.getElementById("oncekiDers").innerHTML = dersler[dayZa][4];
        document.getElementById("sonrakiDers").innerHTML = dersler[dayZa][4+1];

        var g = x-195;
        g1.refresh(g*250/55);

        var kalanMin = 250 - x;
        var kalanSec = 59 - second;

        document.getElementById("remainingMin").innerHTML = kalanMin + ":" + kalanSec;
    } else if(x>=250 && x<= 275){
        //ders 5

        //dersAyarla(5, 250, 275, 10);
        dersAyarla(5, 250, 275, 10, dayZa, x, secondZa);
    } else if(x>275 && x<285){
        //teneffusAyarla(5, 275, 285, 11);
        teneffusAyarla(5, 275, 285, 11, dayZa, x, secondZa);
    } else if(x>=285 && x<= 310){
        //ders 6

        //dersAyarla(6, 285, 310, 12);
        dersAyarla(6, 285, 310, 12, dayZa, x, secondZa);
    } else if(x>310 && x<320){
        //teneffusAyarla(5, 310, 320, 13);
        teneffusAyarla(6, 310, 320, 13, dayZa, x, secondZa);
    } else if(x>=320 && x<= 345){
        //ders 7

        //dersAyarla(7, 320, 330, 14);
        dersAyarla(7, 320, 345, 14, dayZa, x, secondZa);
    } else{
        document.getElementById("dersNTeneffüs").innerHTML = "Ders Yok";
        document.getElementById("startSaat").innerHTML = "00:00";
        document.getElementById("finishSaat").innerHTML = "00:00";
        document.getElementById("oncekiDers").innerHTML = "Ders Yok";
        document.getElementById("sonrakiDers").innerHTML = "Ders Yok";

        g1.refresh(250/2);

        document.getElementById("remainingMin").innerHTML = "00:00";
    }
    
    
    
  }, 1000);

  document.getElementById('dersButton').addEventListener('click', function () {
    var t = new Date();
    var d = t.getDay()-1;
    var h = t.getHours();
    var m = t.getMinutes();
    m = (h - 8) * 60 + m
    if (d==-1){d=6;}

    function lesson(x) {
        if (d >= 5 ) {
            return "https://classroom.google.com/u/0/h";
        } else if (x >= 0 && x <= 55) {
            return linkler[d][0];
        } else if (x >= 55 && x <= 90) {
            return linkler[d][1];
        } else if (x >= 90 && x <= 125) {
            return linkler[d][2];
        } else if (x >= 125 && x <= 160) {
            return linkler[d][3];
        } else if (x >= 160 && x <= 195) {
            return linkler[d][4];
        } else if (x >= 195 && x <= 275) {
            return linkler[d][5];
        } else if (x >= 275 && x <= 300) {
            return linkler[d][6];
        } else if (x >= 300 && x <= 335) {
            return linkler[d][7];
        } else {
            return "https://classroom.google.com/u/0/h";
        }
    }

    var a = lesson(m);
    window.open(a);
  });

  
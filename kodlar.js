var g1 = new JustGage({
    id: 'g1',
    value: 0,
    min: 0,
    max: 59,
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

  
  setInterval(function() {
    var now = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    g1.refresh(now.getSeconds())
/*     g2.refresh(now.getSeconds());
 */
    document.getElementById("tarih").innerHTML = days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
    document.getElementById("Saat").innerHTML = now.getHours() + ":" + now.getMinutes();
    
  }, 1000);
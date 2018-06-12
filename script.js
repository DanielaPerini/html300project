google.charts.load('current', {'packages':['corechart', 'line', 'bar']});

      google.charts.setOnLoadCallback(getData);
      google.charts.setOnLoadCallback(getData2);
google.charts.setOnLoadCallback(drawComparingChart);


function drawBasic2(freshData) {
        console.log("freshData", freshData)
        freshData.unshift(["Year", "Billion BTUs"])

        var data = google.visualization.arrayToDataTable(freshData);

        var options = {
          title: 'Electricity total consumption (i.e. sold) Florida',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#000000'}},
          vAxis: {minValue: 0},
          colors: ['#CC0000']
        };

        var chart = new google.visualization.AreaChart(document.getElementById('consumption_chart'));

        chart.draw(data, options);
      }


function getData2(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.TETCB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          let theActualData = JSON.parse(request.response).series[0].data

          drawBasic2(theActualData)
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }





function drawBasic(freshData) {
        console.log("freshData", freshData)
        freshData.unshift(["Year", "Billion BTUs"])

        var data = google.visualization.arrayToDataTable(freshData);

        var options = {
            width: 800,
            legend: { position: 'none' },
            chart: {
              title: 'Renewable energy production Florida',
              subtitle: 'Billion Btu' },
            axes: {
              x: {
                0: { side: 'top'}
              }
            },
            bar: { groupWidth: "80%" },
            colors: ['#009900']
        };

        var chart = new google.charts.Bar(document.getElementById('production_chart'));

        chart.draw(data, options);
      }


function getData(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.REPRB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          let theActualData = JSON.parse(request.response).series[0].data

          drawBasic(theActualData)
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }

function drawComparingChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Consumption');
      data.addColumn('number', 'Production');

      data.addRows([
        ['1960', 57344, 35680],  ['1961', 62705, 34417],   ['1962', 71216, 35826],  ['1963', 78258, 38613],   ['1964', 87016, 39016],  ['1965', 95878, 39916],
        ['1966', 108610, 42760],   ['1967', 119314, 44550],  ['1968', 135509, 49556],  ['1969', 153032, 51489],  ['1970', 171346, 51035], ['1971', 188564, 49968],
        ['1972', 209665, 54389], ['1973', 237104, 56250], ['1974', 235482, 52429], ['1975', 242096, 50007], ['1976', 252408, 56507], ['1977', 270767, 59953],
        ['1978', 289031, 65357], ['1979', 295551, 69419], ['1980', 309694, 90049], ['1981', 317921, 83117], ['1982', 315744, 104674], ['1983', 329216, 91705],
        ['1984', 353246, 108740], ['1985', 379307, 110698], ['1986', 398095, 116356], ['1987', 417862, 107606], ['1988', 444382, 113802], ['1989', 472473, 232261],
        ['1990', 489741, 198986], ['1991', 499299, 212955], ['1992', 501598, 230779], ['1993', 521176, 217028], ['1994', 544365, 215563], ['1995', 571483, 220211],
        ['1996', 586291, 240343], ['1997', 597240, 231308], ['1998', 639254, 205485], ['1999', 638966, 204114], ['2000', 668216, 194952], ['2001', 684966, 158038],
        ['2002', 718136, 174327], ['2003', 741696, 188473], ['2004', 745810, 179462], ['2005', 767622, 183175], ['2006', 778685, 185564], ['2007', 788461, 190489],
        ['2008', 771702, 195232], ['2009', 766848, 213642], ['2010', 788887, 223518], ['2011', 768009, 222956], ['2012', 752941, 220020], ['2013', 757189, 229666],
        ['2014', 771379, 226863], ['2015', 803865, 234192]
      ]);

      var options = {
        hAxis: {
          title: 'Years'
        },
        vAxis: {
          title: 'Billion Btu'
        },
        colors: ['#CC0000', '#009900']
      };

      var chart = new google.visualization.LineChart(document.getElementById('comparing_chart'));
      chart.draw(data, options);
    }
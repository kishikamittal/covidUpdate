$(document).ready(function(){

    var url = "https://api.covid19india.org/data.json"
    $.getJSON(url,function(data)
    {
        console.log(data)
        var total_active,total_recovered,total_deaths,total_confirmed
        var state =[]
        var confirmed= []
        var recovered =[]
        var deaths=[]
        var active=[]
        $.each(data.statewise,function(id,obj)
        {
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
            active.push(obj.active)
        })
        //console.log(state)
        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        active.shift()
       // console.log(state)
        total_active= data.statewise[0].active
        total_confirmed=data.statewise[0].confirmed
        total_deaths=data.statewise[0].deaths
        total_recovered=data.statewise[0].recovered
        $("#deaths").append(total_deaths)
        $("#Active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#Recovered").append(total_recovered)
        var myChart = document.getElementById("myChart").getContext('2d')
        var chart = new Chart(myChart, {
            type:'line',
            data:{
                labels:state,
                datasets:[
                    {
                        label: "Confirmed Cases",
                        data: confirmed,
                        backgroundColor: "#f1c40f",
                        minBarLength: 100
                    },
                    {
                        label: "Recovered Cases",
                        data: recovered,
                        backgroundColor: "#2ecc71",
                        minBarLength: 100
                    },
                    {
                        label: "Deceased",
                        data: deaths,
                        backgroundColor: "#e74c3c",
                        minBarLength: 100
                    },
                    {
                        label: "Active Cases",
                        data: active,
                        backgroundColor: "#ff00ff",
                        minBarLength: 100

                    },
                ]
            },
            
            options:{

            }
        })
    })
})

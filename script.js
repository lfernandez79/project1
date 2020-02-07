var theCity;

// BUTTON GRAB VALUE FROM INPUT #CITYNAME
$("#airportBtn").on("click", function (event) {
    // event.preventDefault();
    $("ul").empty();
    theCity = $("#cityName").val();

    // AJAX CALL ==========================================
    var settings = {
        async: true,
        crossDomain: true,
        url:
            "https://cors-anywhere.herokuapp.com/https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=" +
            theCity,
        method: "GET",
        headers: {
            "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
            "x-rapidapi-key":
                "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);

        // CREATE A UL TO APPEND LIs UNDER, LATER
        var $newUl = $("<ul>");

        response.forEach(airport => {
            // CREATE LIs TO GRAB INFO FROM ARRAY AND APPENTO UL
            var $newLi = $(
                `<li class="text-info">${airport.name} / ${airport.code}</li>`
            );

            $newLi.appendTo($newUl);
        });
        $newUl.appendTo("#airportNames");

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});

// ======================================== Currency converter API ============================================-=

function setTimezoneSettings(clockCountry, clockCity) {
    return {
        async: true,
        crossDomain: true,
        url:
            "https://world-time2.p.rapidapi.com/timezone/" +
            clockCountry +
            "/" +
            clockCity,
        method: "GET",
        headers: {
            "x-rapidapi-host": "world-time2.p.rapidapi.com",
            "x-rapidapi-key":
                "d8e913d88bmsha569ef019d6165fp17314bjsnebbde91b52f7"
        }
    };
}


$("#clockSearchBtn").on("click", function (e) {
    event.preventDefault();
    var clockCountry = $("#clock-country").val();
    var clockCity = $("#clock-city").val();
    var timezoneSettings = setTimezoneSettings(clockCountry, clockCity);

    console.log(timezoneSettings.url);

    $.ajax(timezoneSettings).done(function (response) {
        console.log("full response:", response.datetime);
        moment(response.datetime, "HH:mm:ss").format("hh:mm A");

        var $clockUl = $("<ul>");
        var $clockLi = $(
            `<li class="text-info">${
            response.timezone
            }</li><li class="text-info">${
            (moment(response.datetime.substring(0, response.datetime.length - 13)).format('MMMM Do YYYY, h:mm:ss a'))
            }</li>`
        );
        // console.log(
        //     moment(response.datetime, "HH:mm:ss").format("hh:mm A")
        // );

        $clockLi.appendTo($clockUl);
        $clockUl.appendTo("#clockZones");
    });
});


// ======================================== Currency converter API ============================================-=
var cur1 = $("#first-currency").val();
var cur2 = $("#second-currency").val();
var amount = $("currency-amount").val();
var settings = {
    async: true,
    crossDomain: true,
    url:
        "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=" +
        cur1 +
        "&to=" +
        cur2 +
        "&amount=" +
        amount,
    method: "GET",
    headers: {
        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
        "x-rapidapi-key": "d8e913d88bmsha569ef019d6165fp17314bjsnebbde91b52f7"
    }
};

$("#convertBtn").on("click", function () { });

$.ajax(settings).done(function (response) {
    console.log(response);
});
var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

    var results = '';

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c4ec2ed35e7e49109bded3c42d469767");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }
            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });
}

$('#searchBtn').click(function () {
    console.log('starting search')
    apiSearch();
});

$('#timeBtn').click(function () {
    console.log('getting time')
    var now = new Date(); // get the current date and time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM'; // determine AM or PM

    // convert from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // handle midnight

    // add leading zero to minutes if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return formatted time string
    formatTime = hours + ':' + minutes + ' ' + ampm;
    $('#time').html(formatTime).show().dialog();
});


var images = ['url("/images/journey1.jpg")', 'url("/images/journey1.jpg")'];
var currentIndex = 0;

var count = 0;
$(document).ready(function () {
    var image1 = "url('/images/journey1.jpg')"; // First image
    var image2 = "url('/images/journey2.jpg')"; // Second image

    // set initial background image
    $("body").css("background-image", image1);

    // click event handler for the search engine name
    $("#journeyHeader").click(function () {
        console.log('header clicked')
        count = count + 1;
        // Toggle between two images
        if (count%2==0) {
            console.log('true')
            $("body").css("background-image", image1);
        } else {
            console.log('false')
            $("body").css("background-image", image2);

        }
    });
});

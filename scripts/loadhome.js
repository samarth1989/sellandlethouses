$(document).ready(function () {
        var jsonData = '';
        // FETCHING jsonData FROM JSON FILE 
        $.getJSON("Property_Complete.json",
            function (jsonData) {
                //debugger;
                //console.log(jsonjsonData);

    for (var i = 0; i < jsonData.length; i++) {

        console.log(jsonData[i].id);
        var alt = 'Address: ' + jsonData[i].data.address + "<br />" + ' County: ' + jsonData[i].data.county + ' Area: ' + jsonData[i].data.area + "<br />";
        var alt1 = jsonData[i].data.numBedroom + 'BHK' + ' For ' + 'type' + 'Price: ' + jsonData[i].data.maxPrice;
        var mhtml = "";

        mhtml += '<div class=""><a href="housedetails.html?id=' + jsonData[i].id + '"><img src="' + jsonData[i].data.photo[0] + '" href="HouseDetails.html?id=' + jsonData[i].id + '" width="300" height="300"/></a></div>';
        mhtml += '<a href="HouseDetails.html?id=' + jsonData[i].id + '" style="color:blue;font-weight:15pt;">' + alt + '</a>';
        mhtml += '<a href="HouseDetails.html?id=' + jsonData[i].id + '">' + alt1 + '</a>';

        //console.log(mhtml)
        $('#mydiv').append(mhtml);
    }
})
});



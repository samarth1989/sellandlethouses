$(document).ready(function () {
    var jsonData = '';
    // FETCHING jsonData FROM JSON FILE 
    $.getJSON("Property_Complete.json",
        function (jsonData) {
            //debugger;
            //console.log(jsonjsonData);
            arrangeProps(jsonData)
        })
});

function ddlSelFunction() {

    $.getJSON("Property_Complete.json",
        function (jsonData) {
            debugger;
            //console.log(jsonjsonData);
            input = document.getElementById("filter");
            valF = input.options[input.selectedIndex].text.toLowerCase();
            console.log(valF);
            filteredJson = jsonData.filter(item => !(item.data.type.toLowerCase() == valF));
            // ar = [1, 2, 3, 4];
            // ar = ar.filter(item => !(item > 3));
            //console.log(filteredJson) ;// [1, 2, 3]
            $("#mydiv").html("");
            arrangeProps(filteredJson);
        })
}

function arrangeProps(jsonData) {

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
}


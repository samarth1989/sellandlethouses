$(document).ready(function () {
    var jsonData = '';
    // FETCHING jsonData FROM JSON FILE 
    $.getJSON("Property_Complete.json",
        function (jsonData) {
            arrangeProps(jsonData)
        })
});

//Filtering the houses from json based on the type filter selected and setting the values in price dropdown
function ddlTypeFunction() {
    var prices = {
        'select': ['Select'],
        'rent': ['Select', '< \u20ac500', '< \u20ac1000', '< \u20ac1500', '< \u20ac2000', '> \u20ac2000'],
        'buy': ['Select', '< \u20ac50000', '< \u20ac100000', '< \u20ac150000', '< \u20ac200000', '> \u20ac200000']
    }

    // just grab references to the two drop-downs
    inputType = document.getElementById("filterType");
    inputPrice = document.getElementById("filterPrice");

    valF = inputType.options[inputType.selectedIndex].text.toLowerCase();


    // populate the prices drop-down 
    setOptions(inputPrice, prices[valF]);

    $.getJSON("Property_Complete.json",
        function (jsonData) {
            //console.log(valF);
            if (valF != 'select')
                filteredJson = jsonData.filter(item => (item.data.type.toLowerCase() == valF));
            //console.log(filteredJson.length)
            $("#mydiv").html("");
            arrangeProps(filteredJson);
        })
}


//Filtering the houses from json based on the type and prices filter selected by retaining the values in price dropdown
function ddlPricesFunction() {

    // just grab references to the two drop-downs
    inputType = document.getElementById("filterType");
    inputPrice = document.getElementById("filterPrice");

    valF = inputType.options[inputType.selectedIndex].text.toLowerCase();
    valPr = inputPrice.options[inputPrice.selectedIndex].text.toLowerCase();

    //console.log(valPr.slice(3));

    $.getJSON("Property_Complete.json",
        function (jsonData) {
            //console.log(valF);
            filteredJson = jsonData.filter(item => (item.data.type.toLowerCase() == valF));
            //console.log(valPr.slice(3));
            if (valPr.toLowerCase() != 'select')
                filteredJson = filteredJson.filter(item => (parseInt(item.data.maxPrice) < valPr.slice(3)));
            console.log(filteredJson.length);
            $("#mydiv").html("");
            arrangeProps(filteredJson);
        })
}


//Making dynamic html code using the json data

function arrangeProps(jsonData) {
    for (var i = 0; i < jsonData.length; i++) {

        //console.log(jsonData[i].id);
        var alt = 'Address: ' + jsonData[i].data.address + "<br />" + ' County: ' + jsonData[i].data.county + ' Area: ' + jsonData[i].data.area + "<br />";
        var alt1 = jsonData[i].data.numBedroom + 'BHK' + ' For ' + 'type' + 'Price: ' + jsonData[i].data.maxPrice;
        var mhtml = "";

        mhtml += '<div class=""><a href="housedetails.html?id=' + jsonData[i].id + '"><img src="' + jsonData[i].data.photo[0] + '" href="HouseDetails.html?id=' + jsonData[i].id + '" width="300" height="300"/></a></div>';
        mhtml += '<a href="HouseDetails.html?id=' + jsonData[i].id + '" style="color:blue;font-weight:15pt;">' + alt + '</a>';
        mhtml += '<a href="HouseDetails.html?id=' + jsonData[i].id + '">' + alt1 + '</a>';

        $('#mydiv').append(mhtml);
    }
}

//This sets the prices dropdown values based on type dropdown
function setOptions(dropDown, options) {
    // clear out any existing values
    dropDown.innerHTML = '';
    // insert the new options into the drop-down
    options.forEach(function (value) {
        dropDown.innerHTML += '<option name="' + value + '">' + value + '</option>';
    });
}


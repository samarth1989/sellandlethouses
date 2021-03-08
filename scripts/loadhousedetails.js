

        var propId = getParameterByName('id');
        //console.log(propId);

        $(document).ready(function () {

            var dataJson = '';
            // FETCHING DATA FROM JSON FILE 
            $.getJSON("property_complete.json",
                function (data) {
                    dataJson = data[propId].data;
                    //console.log(dataJson);
                    
                    //displayPropDetail(dataJson);
                    var alt = dataJson.listingName + "<br />" + ' County: ' + dataJson.county + ' Area: ' + dataJson.area + "<br />";
                    var alt1 = dataJson.numBedroom + 'BHK' + ' For ' + 'Price: ' + dataJson.maxPrice;
                    var mhtml = "";

                    for (var i = 0; i < dataJson.photo.length; i++) {		
                        mhtml += '<div class=""><img src="' + dataJson.photo[i] + '" width="auto" height="auto"/></div>';
                    }

                    mhtml += '<p>' + dataJson.description + '</p>';

                    var mhtml1 = '<p>' + alt + '</p>';
                    mhtml1 += '<p>' + alt1 + '</p>';
                    mhtml1 += '<p>' + dataJson.address + '</p>';
                    
                    //console.log(mhtml)
                    $('#c123').append(mhtml);
                    $('#c1234').append(mhtml1);



                })
        });
        function getParameterByName(name, url = window.location.href) {

            //capture the query string params
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return (decodeURIComponent(results[2].replace(/\+/g, ' ')));
        }
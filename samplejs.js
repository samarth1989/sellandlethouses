// Code goes here

var data=[{
"id":1,
    "address": "Adelaide Road, 333",
        "country": "Ireland",
        "county": "Dublin",
        "city": "Dublin",
        "area": "Dublin 2",
        "dateAdded": "2021-06-06T18:09:28Z",
        "listingName": "Adelaide Road, 7, Dublin",
        "lotSize": "0.16",
        "lotSizeUnit": "Acres",
        "numBathroom": "2",
        "numBedroom": "4",
        "eirCode": "21228",
        "maxPrice": "199900",
        "minPrice": "199900",
        "currency": "Euro",
        "isAvailable": "FALSE",
        "propertyType": "Single Family Dwelling",
        "isUnderContract": "FALSE",
        "minLeaseMonths": "6",
        "type": "For Sale",
        "latitude": "12.34",
        "longitude": "45.67",
    "images": [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/background.jpg"
    ],
	"features": [
            "Air Conditioning",
            "Heating"
        ],
        "description": "Grayling Property Management are delighted to present this beautiful, bright, spacious studio apartment in the heart of the ever popular Rathmines. This apartment comprises a modern kitchen, living/dining area and separate bedroom. The modern bathroom is fitted with a power shower. The apartment features built in wardrobes to ensure ample storage. Rathmines is a vibrant and energetic village just 15 minutes walk from the city centre of Dublin. Within the village there are a wide variety of shopping, dining and entertainment conveniences including Tesco, Lidl, Swan Leisure, Blackbird and Copan to name but a few. Numerous bus routes servicing all parts of the city pass the front door while the nearest LUAS (Ranelagh) is just 12 minutes walk away.Viewing is essential to appreciate this fine property."
    

},{
"id":2,
    "address": "Adelaide Road, 7",
        "country": "Ireland",
        "county": "Dublin",
        "city": "Dublin",
        "area": "Dublin 2",
        "dateAdded": "2021-06-06T18:09:28Z",
        "listingName": "Adelaide Road, 7, Dublin",
        "lotSize": "0.16",
        "lotSizeUnit": "Acres",
        "numBathroom": "2",
        "numBedroom": "4",
        "eirCode": "21228",
        "maxPrice": "199900",
        "minPrice": "199900",
        "currency": "Euro",
        "isAvailable": "FALSE",
        "propertyType": "Single Family Dwelling",
        "isUnderContract": "FALSE",
        "minLeaseMonths": "6",
        "type": "For Sale",
        "latitude": "12.34",
        "longitude": "45.67",
    "images": [
        "images/2.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/background.jpg"
    ],
	"features": [
            "Air Conditioning",
            "Heating"
        ],
        "description": "Grayling Property Management are delighted to present this beautiful, bright, spacious studio apartment in the heart of the ever popular Rathmines. This apartment comprises a modern kitchen, living/dining area and separate bedroom. The modern bathroom is fitted with a power shower. The apartment features built in wardrobes to ensure ample storage. Rathmines is a vibrant and energetic village just 15 minutes walk from the city centre of Dublin. Within the village there are a wide variety of shopping, dining and entertainment conveniences including Tesco, Lidl, Swan Leisure, Blackbird and Copan to name but a few. Numerous bus routes servicing all parts of the city pass the front door while the nearest LUAS (Ranelagh) is just 12 minutes walk away.Viewing is essential to appreciate this fine property."
}]

 $(document).ready(function(){
 for (var i = 0; i < data.length; i++)
 {
  console.log(data[i].images[0]);
  var alt = 'Address: ' + data[i].address + ' County: ' + data[i].county + ' Area: ' + data[i].area + "<br />" + data[i].dateAdded;
  var mhtml="";

      mhtml += '<li><div class=""><img src="'+data[i].images[0]+'" width="300" height="300"/></div>';
    mhtml += '<h1 class="title">'+alt+'</h1>';
    mhtml += '</li>';
    
  
 console.log(mhtml)
$('#mydiv').append(mhtml);}
});
function initMap() {
    
    var element = document.querySelector('.map__wrap');
    var options = {
        zoom: 5,
        center: {lat: 55.751244, lng: 37.618423}
    };

    var myMap = new google.maps.Map(element, options);

    addMarker({lat: 55.751244, lng: 37.618423}); 
    addMarker({lat: 59.9342802, lng: 30.3350986});

    function addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: '../images/logo/1.png'
        });
    }
};
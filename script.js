const imgWidth = 8192; 
    const imgHeight = 8192;
    const imgUrl = 'Mapa_Gra.webp'; 

    
    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2,
        scrollWheelZoom: true, 
        interpolation: 'lanczos' 
    });


    const southWest = map.unproject([0, imgHeight], map.getMaxZoom());
    const northEast = map.unproject([imgWidth, 0], map.getMaxZoom());
    const bounds = new L.LatLngBounds(southWest, northEast);

  
    const overlay = L.imageOverlay(imgUrl, bounds, {
        interactive: true
    }).addTo(map);


    map.setMaxBounds(bounds);
    map.fitBounds(bounds);


    map.on('drag', function() {
        map.panInsideBounds(bounds, { animate: false });
    });


const mojaIkona = L.icon({
    iconUrl: 'Pinezka.png',  
    iconSize: [38, 38],       
    iconAnchor: [19, 38],    
    popupAnchor: [0, -35]    
});
function dodajPinezke(x, y, urlZdjeciaWDymku, linkDocelowy) {
    const marker = L.marker([y, x], { icon: mojaIkona }).addTo(map);
    const popupContent = `
        <div style="text-align: center;">
            <p>Kliknij w zdjęcie!</p>
            <a href="${linkDocelowy}" target="_blank">
                <img src="${urlZdjeciaWDymku}" alt="Podgląd" style="width: 150px; height: auto; border-radius: 5px; cursor: pointer;">
            </a>
        </div>
    `;

    marker.bindPopup(popupContent);
}

dodajPinezke(100, -100, 'miniaturka1.jpg', 'https://google.com');
dodajPinezke(250, -4000, 'miniaturka2.jpg', 'https://wikipedia.org');
dodajPinezke(-1594, 1646, 'miniaturka3.jpg', 'https://wikipedia.org');

map.on('click', function(e) {
    console.log("Współrzędne kliknięcia: " + e.latlng.lat + ", " + e.latlng.lng);
});

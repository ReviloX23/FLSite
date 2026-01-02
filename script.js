const imgWidth = 8192; 
    const imgHeight = 8192;
    const imgUrl = 'Mapa_Gra.webp'; 

    
    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2,
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
function dodajPinezke(x, y, urlZdjeciaWDymku, linkDocelowy, tekstdopojawienia) {
    const marker = L.marker([y, x], { icon: mojaIkona }).addTo(map);
    const popupContent = `
        <div style="text-align: center;">
            <p>${tekstdopojawienia}</p>
            <a href="${linkDocelowy}" target="_blank">
                <img src="${urlZdjeciaWDymku}" alt="Podgląd" style="width: 150px; height: auto; border-radius: 5px; cursor: pointer;">
            </a>
        </div>
    `;

    marker.bindPopup(popupContent);
}

dodajPinezke(862.5, -1535, 'diler_budowa.png', 'diler_budowa.png', "D? Budowa"); // diler numero uno
dodajPinezke(1324.25, -868.25, 'diler_zlomsamoloty.png', 'diler_zlomsamoloty.png', "D? Złom Samoloty"); //diler numero 2
dodajPinezke(1102.5, -1005, 'diler_redwood.png', 'diler_redwood.png', "D? Redwood"); // 3
dodajPinezke(1090, -855.25, 'diler_most.png', 'diler_most.png', "D? Most"); // 4
dodajPinezke(1191.75, -791.25, 'diler_motel.png', 'diler_motel.png', "D? Motel"); // 5
dodajPinezke(1419.75, -618.75, 'diler_tory.png', 'diler_tory.png', "D? Tory"); // 6
dodajPinezke(1338.75, -565.5, 'diler_bracia_oneil.png', 'diler_bracia_oneil.png', "D? Bracia O`Neil"); // 7
dodajPinezke(901.25, -780, 'diler_silosy.png', 'diler_silosy.png', "D? Silosy"); //8
dodajPinezke(890.5, -963.75, 'diler_domek.png', 'diler_domek.png', "D? Domek"); //9
dodajPinezke(427.75, -1258, 'diler_lewa_autostrada.png', 'diler_lewa_autostrada.png', "D? Lewa Autrostrada"); //10
dodajPinezke(878.75, -588.5, 'diler_tunel.png', 'diler_tunel.png', "D? Tunel"); //11
dodajPinezke(890.5, -345.5, 'diler_paletogaraz.png', 'diler_paletogaraz.png', "D? Garaż w Paleto"); //12
dodajPinezke(1189.75, -1100.5, 'diler_szopa.png', 'diler_szopa.png', "D? Szopa"); //13
dodajPinezke(925, -1316.75, 'diler_machcin.png', 'diler_machcin.png', "D? Machcin"); //14
dodajPinezke(902.5, -1425.75, 'diler_flotto.png', 'diler_flotto.png', "D? FLotto"); //15
dodajPinezke(1132.25, -1445.5, 'diler_mirror.png', 'diler_mirror.png', "D? Mirror"); //16
dodajPinezke(1199.9999017084094, -1664.7498279897163, 'diler_rafineria.png', 'diler_rafineria.png', "D? Rafineria"); //17
dodajPinezke(1141.5, -1870.5, 'diler_statek.png', 'diler_statek.png', "D? Statek"); //18
dodajPinezke(750.25, -1619, 'diler_sad.png', 'diler_sad.png', "D? Sadownik"); //19
dodajPinezke(560, -1553.75, 'diler_jacht.png', 'diler_jacht.png', "D? Jacht"); //20
dodajPinezke(836, -1668.75, 'diler_wysypisko.png', 'diler_wysypisko.png', "D? Zlomowisko"); //21
dodajPinezke(888.25, -1807.75, 'diler_kurier.png', 'diler_kurier.png', "D? Kurier LS"); //22
dodajPinezke(1064.25, -1583.75, 'diler_skate.png', 'diler_skate.png', "D? Skate"); //23
dodajPinezke(1392, -1126.5, 'diler_elektrownia.png', 'diler_elektrownia.png', "D? Elektrownia"); //24
dodajPinezke(948.75, -345.25, 'diler_paletofabryka.png', 'diler_paletofabryka.png', "D? Fabryka w Paleto"); //25
dodajPinezke(983.75, -264.5, 'diler_paletokamper.png', 'diler_paletokamper.png', "D? Kamper w Paleto"); //26
dodajPinezke(1354.5, -952, 'diler_dinus.png', 'diler_dinus.png', "D? Dinuś"); //27
dodajPinezke(1110, -946, 'diler_hamownia.png', 'diler_hamownia.png', "D? Hamownia"); //28
dodajPinezke(1013.5, -466.25, 'diler_chilliad.png', 'diler_chilliad.png', "D? Chilliad"); //29
dodajPinezke(1346.9765144928954, -769.6305656308546, 'diler_hipisi.png', 'diler_hipisi.png', "D? Hipisi"); //30

// map.on('click', function(e) {
//     console.log("Klikadełko: " + e.latlng.lng + ", " + e.latlng.lat);
// });

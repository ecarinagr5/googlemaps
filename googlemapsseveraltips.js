var map;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  parking: {
    icon: iconBase + 'parking_lot_maps.png'
  },
  library: {
    icon: iconBase + 'library_maps.png'
  },
  info: {
    icon: iconBase + 'info-i_maps.png'
  }
};
var features = [
  {
    position: new google.maps.LatLng(19.3760213,-99.16181030000001),
    type: 'library',
    nombre: 'EMILIANO ZAPATA',
    direccion:'Emiliano Zapata (Eje 7-A Sur) No. 125, Colonia Portales Norte, Delegación Benito Juárez, C.P. 03300.',
    telefono:5521090837,
    url:'https://www.google.com/maps/place/Av.+Universidad+691,+Col+del+Valle+Sur,+03100+Ciudad+de+M%C3%A9xico,+CDMX/@19.3760213,-99.163999,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffa47df81ee7:0x572a109d9ff0effe!8m2!3d19.3760213!4d-99.1618103'
  }
];

var alvaro_obregon = [
  {
    position: new google.maps.LatLng(19.3943466,-99.14211290000003),
    type: 'library',
    nombre: 'XOLA',
    direccion:'Eje 4 Sur Xola <br /> No. 113  Col. Alamos, <br /> Benito Juarez  C.P.  03400',
    telefono:5578452192,
    url:'https://www.google.com/maps/place/Xola+113,+%C3%81lamos,+03400+Ciudad+de+M%C3%A9xico,+CDMX/@19.3943466,-99.1443016,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fefc59e4ee93:0x9e5525cd17cb20fc!8m2!3d19.3943466!4d-99.1421129'
  }, {
    position: new google.maps.LatLng(19.3684188,-99.18882359999998),
    type: 'library',
    nombre: 'REVOLUCION',
    direccion:'Av. Revolución No. 1057 Col. Mixcoac C.P. 03910 Benito Juárez',
    telefono:5529725670,
    url:'https://www.google.com/maps/place/Av.+Revoluci%C3%B3n+1057,+Mixcoac,+03910+Ciudad+de+M%C3%A9xico,+CDMX/@19.3684188,-99.1910123,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff89cc3f7faf:0xe1cea70667a5d452!8m2!3d19.3684188!4d-99.1888236'
  }, 
  {
    position: new google.maps.LatLng(19.3684188,-99.18882359999998),
    type: 'library',
    nombre: 'MIXCOAC',
    direccion:'Av. Rio Mixcoac No. 140 Col. Acacias C.P. 03240 Benito Juárez',
    telefono:5529725674,
    url:'https://www.google.com/maps/place/Av.+Revoluci%C3%B3n+1057,+Mixcoac,+03910+Ciudad+de+M%C3%A9xico,+CDMX/@19.3684188,-99.1910123,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff89cc3f7faf:0xe1cea70667a5d452!8m2!3d19.3684188!4d-99.1888236'
  },{
    position: new google.maps.LatLng(19.3650467,-99.17722989999999),
    type: 'library',
    nombre: 'SCOP',
    direccion:'Av. Universidad No. 233 Col. Vertiz Narvarte C.P. 03020 Benito Juárez',
    telefono:5529725674,
    url:'https://www.google.com/maps/place/Av.+R%C3%ADo+Mixcoac+140,+Acacias,+03240+Ciudad+de+M%C3%A9xico,+CDMX/@19.3650467,-99.1794186,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff923f1abe73:0xc64f86dc811b32ef!8m2!3d19.3650467!4d-99.1772299'
  }, {
    position: new google.maps.LatLng(19.3907893,-99.15240419999998),
    type: 'library',
    nombre: 'BEISTEGUI',
    direccion:'Av. Cuauhtémoc No. 863 Col. Narvarte Poniente C.P. 03020 Benito Juárez',
    telefono:5529726143,
    url:'https://www.google.com/maps/place/Av.+Universidad+233,+Narvarte+Oriente,+03020+Ciudad+de+M%C3%A9xico,+CDMX/@19.3907893,-99.1545929,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff06a227b7d7:0x9f9c238391badb1e!8m2!3d19.3907893!4d-99.1524042'
  }, {
    position: new google.maps.LatLng(19.3874189,-99.15716120000002),
    type: 'library',
    nombre: 'PATRIOTISMO',
    direccion:'Av. Patriotismo No. 480, Col. San Pedro de los Pinos, C.P.03800 Benito Juárez',
    telefono:5527027005,
    url:'https://www.google.com/maps/place/Avenida+Cuauht%C3%A9moc+863,+Narvarte+Poniente,+03020+Ciudad+de+M%C3%A9xico,+CDMX/@19.3874189,-99.1593499,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff087071d2ab:0x338d2243d5429459!8m2!3d19.3874189!4d-99.1571612'
  }, {
    position: new google.maps.LatLng(19.3872447,-99.1829184),
    type: 'library',
    nombre: 'VERTIZ',
    direccion:'Dr. Vertiz No. 1148, Col. Independencia, C.P. 03630 Benito Juárez',
    telefono:5539999937,
    url:'https://www.google.com/maps/place/Avenida+Patriotismo+480,+San+Pedro+de+los+Pinos,+03800+Ciudad+de+M%C3%A9xico,+CDMX/@19.3872447,-99.1851071,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff7918fa9813:0x6c78ce6b998056e!8m2!3d19.3872447!4d-99.1829184'
  }, {
    position: new google.maps.LatLng(19.379715,-99.15292310000001),
    type: 'library',
    nombre: 'EUGENIA',
    direccion:'Eugenia (Eje 5 sur) No. 714, Col. Del Valle Centro, C.P. 03100 Benito Juárez',
    telefono:5543909458,
    url:'https://www.google.com/maps/place/Dr+Jos%C3%A9+Mar%C3%ADa+Vertiz+1148,+Independencia,+03630+Ciudad+de+M%C3%A9xico,+CDMX/@19.379715,-99.1551118,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffa933fc8b9d:0x18e8406b20b4676b!8m2!3d19.379715!4d-99.1529231'
  }, {
    position: new google.maps.LatLng(19.3874688,-99.16642719999999),
    type: 'library',
    nombre: 'PESTALOZZI',
    direccion:'Av. Universidad No. 691, Col. Del Valle Sur, C.P.03100 Benito Juárez',
    telefono:5545159997,
    url:'https://www.google.com/maps/place/Eje+5+Sur+714,+Col+del+Valle+Centro,+03100+Ciudad+de+M%C3%A9xico,+CDMX/@19.3874688,-99.1686159,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff0adfe652c7:0x5371d7d60e3623b6!8m2!3d19.3874688!4d-99.1664272'
  },
  {
    position: new google.maps.LatLng(19.3760213,-99.16181030000001),
    type: 'library',
    nombre: 'EMILIANO ZAPATA',
    direccion:'Emiliano Zapata (Eje 7-A Sur) No. 125, Colonia Portales Norte, Delegación Benito Juárez, C.P. 03300.',
    telefono:5521090837,
    url:'https://www.google.com/maps/place/Av.+Universidad+691,+Col+del+Valle+Sur,+03100+Ciudad+de+M%C3%A9xico,+CDMX/@19.3760213,-99.163999,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffa47df81ee7:0x572a109d9ff0effe!8m2!3d19.3760213!4d-99.1618103'
  }
];


function initMap() {
  map = new google.maps.Map(document.getElementById('map_lima'), {
    zoom: 14,
    center: new google.maps.LatLng(19.3943466,-99.14211290000003),
    mapTypeId: 'roadmap'
  });


  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      url:feature.url,
      map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
      window.location.href = this.url;
  });
  });

}


google.maps.event.addDomListener(window, 'load', initMap);

function newlocation(value) {
var objeto =  eval(value);
objeto.forEach(function(feature) {
var marker = new google.maps.Marker({
  position: feature.position,
  icon: icons[feature.type].icon,
  url:feature.url,
  nombre: feature.nombre,
  direccion: feature.direccion,
  telefono: feature.telefono,
  map: map
});

google.maps.event.addListener(marker, 'click', function() {
  /*window.location.href = this.url;*/
  document.getElementById('titledata').innerHTML =  this.nombre;
  document.getElementById('direcdata').innerHTML =  this.direccion;
  document.getElementById('teldata').innerHTML =  this.telefono;
  document.getElementById('linkdata').href =  this.url;
});

});
   
}
//Variable que almacena las coordenadas
var direccion_mexico = new google.maps.LatLng(19.3862106,-99.26364039999999);

var direccion = [
    {
    nombre: 'LAS AGUILAS',
    coordenada: new google.maps.LatLng(19.3862106,-99.26364039999999),
    direccion:'Calz. De las Águilas No. 837 y 835 <br> Col. Ampliación de las Águilas <br> C.P.01759 Álvaro Obregón',
    delegacion: 'Álvaro Obregón',
    celular: 5529725682,
    url:'https://www.google.com/maps/place/Farmacia+San+Pablo/@19.3526135,-99.2186565,17z/data=!4m12!1m6!3m5!1s0x85d2006c0bc31849:0x960275a971846310!2sFarmacia+San+Pablo!8m2!3d19.3526135!4d-99.2164678!3m4!1s0x85d2006c0bc31849:0x960275a971846310!8m2!3d19.3526135!4d-99.2164678',
    icono: 'http://previewsandbox.com/vitaminaD3/wp-content/uploads/2018/12/07_Arterial.png'
    },
    {
    nombre: 'CENTENARIO',
    coordenada: new google.maps.LatLng(19.3862106,-99.26364039999999),
    direccion:'Av. Centenario no. 909, Fracc. 1, Col. Canutillo 2da. Sección, Del. Álvaro Obregón, C.P. 01430. ',
    delegacion: 'Álvaro Obregón',
    celular: 5545556907,
    url:'https://www.google.com/maps/place/Farmacia+San+Pablo/@19.3612099,-99.229336,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f89904e2ecd9:0x6321d1b67b2a6ba2!8m2!3d19.3612099!4d-99.2271473',
    icono: 'http://previewsandbox.com/vitaminaD3/wp-content/uploads/2018/12/09_SistemavNervioso.png'
    },

]
// Función para inicializar el mapa
function initialize()
{
var mapProp = {
  //Muestra las coordenadas al centro del mapa
  center:direccion_mexico,
  //Zoom del mapa 
  zoom:12,
 // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

// Creamos un mapa en el contenedor con id map_lima,  usando los parámetros de la variable mapProp
var map = new google.maps.Map(document.getElementById("map_lima"),mapProp);

var myCity = new google.maps.Circle({
  //Muestra las coordenadas al centro del mapa
  center:direccion_mexico,
  //Especifica el radio del círculo, en metros
  radius:2000,
  //Especifica un color hexadecimal para la línea alrededor del círculo (formato: "#FFFFFF")
  strokeColor:"#0080FF",
  //Especifica la opacidad del color del trazo (un valor entre 0,0 y 1,0)
  strokeOpacity:0.8,
  //Especifica el grosor del trazo de la línea en píxeles
  strokeWeight:2,
  //Especifica un color hexadecimal para el área dentro del círculo (formato: "#FFFFFF")
  fillColor:"#0080FF",
  //Especifica la opacidad del color de relleno (un valor entre 0,0 y 1,0)
  fillOpacity:0.4,
  //Define si el círculo es editable por los usuarios (verdadero / falso)
  editable: false
  });

//Mostramos el circulo en el mapa utilizando el método setMap()
myCity.setMap(map);

//Mostramos el marcador en las coordenadas almacenada en la variable direccion_lima
var marker=new google.maps.Marker({
  position:direccion_mexico,
});

//Añadimos el marcador para el mapa utilizando el método setMap()
marker.setMap(map);

// Mostramos nuestro texto
var infowindow = new google.maps.InfoWindow({
  content:"Ejemplo 1"
  });

//infowindow muestra el contenido (generalmente texto o imágenes) en una ventana emergente por encima del mapa
infowindow.open(map,marker);
}

//Mostramos el mapa una vez que cargue el navegador, con el evento addDomListener de Google Maps API
google.maps.event.addDomListener(window, 'load', initialize);


//Funcion para cambiar coordenada
function nuevacoordenada(value) {

    console.log("direcc", direccion.length);
for (var x = 0 ; x < direccion.length; x++) {
    var mapProp = {
        //Muestra las coordenadas al centro del mapa
        center:direccion[x].coordenada,
        //Zoom del mapa 
        zoom:12,
       // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
        mapTypeId:google.maps.MapTypeId.ROADMAP
        };
      
      // Creamos un mapa en el contenedor con id map_lima,  usando los parámetros de la variable mapProp
      var map = new google.maps.Map(document.getElementById("map_lima"),mapProp);
      
      //Mostramos el marcador en las coordenadas almacenada en la variable direccion_lima
      var marker=new google.maps.Marker({
        position:direccion[x].coordenada,
      });
      
      //Añadimos el marcador para el mapa utilizando el método setMap()
      marker.setMap(map);

      var contentString = 
      '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<p>'+ direccion[x].nombre + 
      '<br>'+ direccion[x].direccion +
      '<br>'+ direccion[x].celular +
      '<br><a href='+ direccion[x].url + ' target="_blank">ir a la ubicación</a></p>'+
      '</div>'+
      '</div>'
      
      // Mostramos nuestro texto
      var infowindow = new google.maps.InfoWindow({
        content:contentString
        });
      
      //infowindow muestra el contenido (generalmente texto o imágenes) en una ventana emergente por encima del mapa
      infowindow.open(map,marker);
}
}
//Declaracion de variables
var map;
var marker = [];
var delegacion_a_consulta;
var objeto = [];
var positionfinal=[];
var changeposition;
var media_length;
var iconBase = 'http://previewsandbox.com/vitaminaD3/wp-content/uploads/2018/12/';
var icons = {
  parking: {
    icon: iconBase + '06_esqueletico.png'
  },
  library: {
    icon: iconBase + 'library_maps.png'
  },
  info: {
    icon: iconBase + 'info-i_maps.png'
  }
};

/*google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
  var map = new google.maps.Map(document.getElementById('map_lima'), {
  zoom: 14,
  center: new google.maps.LatLng(19.3943466,-99.14211290000003),
  mapTypeId: 'roadmap'
  });
}*/




function newlocation(value) {
    var delerecibida =  value;
    //Concatena ' ' para que se transforme a string
    delegacion_a_consulta = "'" + delerecibida + "'";
    marker=[];
    //Ajax al servicio para traer la informacion
   $.ajax({
            url: 'http://previewsandbox.com/vitaminaD3/service/?delegacion='+ delegacion_a_consulta,
            dataType: 'json',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: $(this).serialize(),
            success: function( data ){
                objeto = data;
                for(var i=0; i < objeto.length; i++) {
                    if (objeto.length === 1) {
                    var center= eval(objeto[0].position);
                    }
                    else {
                        media_length = Math.round(objeto.length / 2);
                        console.log("media_length",media_length)
                        center= eval(objeto[media_length].position); 
                    }
                }
                map = new google.maps.Map(document.getElementById('map_lima'), {
                    zoom: 14,
                    center: center,
                    mapTypeId: 'roadmap'
                });
                document.getElementById('titledata').innerHTML='';
                document.getElementById('direcdata').innerHTML='';
                document.getElementById('teldata').innerHTML='';
                document.getElementById('dir').innerHTML='';
                newposition(objeto);


            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
}


function newposition(value) {
    objeto =  eval(value);
    //Markers
    objeto.forEach(function(feature) {
    //Transforma feauture.positin STRING to JSON con eval
    positionfinal  = eval(feature.position);    
    marker = new google.maps.Marker({
        id:feature.id,
        title: 'Click to zoom',
        position: positionfinal,
        icon: icons[feature.tipo].icon,
        url:feature.url,
        nombre: feature.nombre,
        direccion: feature.direccion,
        telefono: feature.telefono,
        animation: google.maps.Animation.DROP,
        map: map
    });
    /*Click cada marker */
    google.maps.event.addListener(marker, 'click', function() {
    /*window.location.href = this.url;*/
    document.getElementById('titledata').innerHTML =  this.nombre;
    document.getElementById('direcdata').innerHTML =  this.direccion;
    document.getElementById('teldata').innerHTML =  this.telefono;
    });
    //Genera un div por cada marker en el recuadro info
    var iDiv = document.createElement("div");
    iDiv.id = 'marker'+feature.id;
    iDiv.className = 'divdir';
    document.getElementById("dir").appendChild(iDiv);
    //title
    var div2 = document.createElement('h2'); 
    div2.className = 'titilemedixdos';
    div2.innerHTML = feature.nombre;
    iDiv.appendChild(div2);
    //direccion
    var div3 = document.createElement('p'); 
    div3.className = 'direccionmedix';
    div3.innerHTML = feature.direccion;
    iDiv.appendChild(div3);
    //direccion
    var div4 = document.createElement('p'); 
    div4.className = 'direccionmedix';
    div4.innerHTML = feature.telefono;
    iDiv.appendChild(div4);
    //ver
    var div5 = document.createElement('BUTTON'); 
    div5.className = 'btnvermap';
    div5.innerHTML = 'Ver';
    div5.onclick = function(){
        changeposition = eval(feature.position);
        map = new google.maps.Map(document.getElementById('map_lima'), {
            zoom: 18,
            center: changeposition,
            mapTypeId: 'roadmap'
        });
        marker = new google.maps.Marker({
            id:feature.id,
            title: 'Click to zoom',
            position: changeposition,
            icon: icons[feature.tipo].icon,
            url:feature.url,
            nombre: feature.nombre,
            direccion: feature.direccion,
            telefono: feature.telefono,
            animation: google.maps.Animation.DROP,
            map: map
            });
    
    };
    iDiv.appendChild(div5);
});

}

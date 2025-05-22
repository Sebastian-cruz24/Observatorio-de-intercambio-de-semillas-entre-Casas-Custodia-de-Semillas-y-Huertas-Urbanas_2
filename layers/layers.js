var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_IntercambioentreCasasCustodiayHuertasUrbanas_1 = new ol.format.GeoJSON();
var features_IntercambioentreCasasCustodiayHuertasUrbanas_1 = format_IntercambioentreCasasCustodiayHuertasUrbanas_1.readFeatures(json_IntercambioentreCasasCustodiayHuertasUrbanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntercambioentreCasasCustodiayHuertasUrbanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntercambioentreCasasCustodiayHuertasUrbanas_1.addFeatures(features_IntercambioentreCasasCustodiayHuertasUrbanas_1);
var lyr_IntercambioentreCasasCustodiayHuertasUrbanas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntercambioentreCasasCustodiayHuertasUrbanas_1, 
                style: style_IntercambioentreCasasCustodiayHuertasUrbanas_1,
                popuplayertitle: 'Intercambio entre Casas Custodia y Huertas Urbanas',
                interactive: true,
    title: 'Intercambio entre Casas Custodia y Huertas Urbanas<br />\
    <img src="styles/legend/IntercambioentreCasasCustodiayHuertasUrbanas_1_0.png" /> 1 - 23<br />\
    <img src="styles/legend/IntercambioentreCasasCustodiayHuertasUrbanas_1_1.png" /> 23 - 44<br />\
    <img src="styles/legend/IntercambioentreCasasCustodiayHuertasUrbanas_1_2.png" /> 44 - 69<br />\
    <img src="styles/legend/IntercambioentreCasasCustodiayHuertasUrbanas_1_3.png" /> 69 - 81<br />\
    <img src="styles/legend/IntercambioentreCasasCustodiayHuertasUrbanas_1_4.png" /> 81 - 100<br />' });
var format_CPRElCharquito_2 = new ol.format.GeoJSON();
var features_CPRElCharquito_2 = format_CPRElCharquito_2.readFeatures(json_CPRElCharquito_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPRElCharquito_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPRElCharquito_2.addFeatures(features_CPRElCharquito_2);
var lyr_CPRElCharquito_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPRElCharquito_2, 
                style: style_CPRElCharquito_2,
                popuplayertitle: 'CPR - El Charquito',
                interactive: true,
                title: '<img src="styles/legend/CPRElCharquito_2.png" /> CPR - El Charquito'
            });
var format_TeatroElCharquito_3 = new ol.format.GeoJSON();
var features_TeatroElCharquito_3 = format_TeatroElCharquito_3.readFeatures(json_TeatroElCharquito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeatroElCharquito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeatroElCharquito_3.addFeatures(features_TeatroElCharquito_3);
var lyr_TeatroElCharquito_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeatroElCharquito_3, 
                style: style_TeatroElCharquito_3,
                popuplayertitle: 'Teatro El Charquito',
                interactive: true,
                title: '<img src="styles/legend/TeatroElCharquito_3.png" /> Teatro El Charquito'
            });
var format_HumedalElCharquito_4 = new ol.format.GeoJSON();
var features_HumedalElCharquito_4 = format_HumedalElCharquito_4.readFeatures(json_HumedalElCharquito_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HumedalElCharquito_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumedalElCharquito_4.addFeatures(features_HumedalElCharquito_4);
var lyr_HumedalElCharquito_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumedalElCharquito_4, 
                style: style_HumedalElCharquito_4,
                popuplayertitle: 'Humedal El Charquito',
                interactive: true,
                title: '<img src="styles/legend/HumedalElCharquito_4.png" /> Humedal El Charquito'
            });
var format_IntercambiosLocales_5 = new ol.format.GeoJSON();
var features_IntercambiosLocales_5 = format_IntercambiosLocales_5.readFeatures(json_IntercambiosLocales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntercambiosLocales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntercambiosLocales_5.addFeatures(features_IntercambiosLocales_5);
var lyr_IntercambiosLocales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntercambiosLocales_5, 
                style: style_IntercambiosLocales_5,
                popuplayertitle: 'Intercambios Locales',
                interactive: true,
    title: 'Intercambios Locales<br />\
    <img src="styles/legend/IntercambiosLocales_5_0.png" /> 1 - 23<br />\
    <img src="styles/legend/IntercambiosLocales_5_1.png" /> 23 - 44<br />\
    <img src="styles/legend/IntercambiosLocales_5_2.png" /> 44 - 69<br />\
    <img src="styles/legend/IntercambiosLocales_5_3.png" /> 69 - 81<br />\
    <img src="styles/legend/IntercambiosLocales_5_4.png" /> 81 - 100<br />' });

lyr_Positron_0.setVisible(true);lyr_IntercambioentreCasasCustodiayHuertasUrbanas_1.setVisible(true);lyr_CPRElCharquito_2.setVisible(true);lyr_TeatroElCharquito_3.setVisible(true);lyr_HumedalElCharquito_4.setVisible(true);lyr_IntercambiosLocales_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_IntercambioentreCasasCustodiayHuertasUrbanas_1,lyr_CPRElCharquito_2,lyr_TeatroElCharquito_3,lyr_HumedalElCharquito_4,lyr_IntercambiosLocales_5];
lyr_IntercambioentreCasasCustodiayHuertasUrbanas_1.set('fieldAliases', {'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'País': 'País', 'Localidad': 'Localidad', 'Direcci_1': 'Direcci_1', 'Huerta': 'Huerta', 'Intercambi': 'Intercambi', 'ID': 'ID', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_CPRElCharquito_2.set('fieldAliases', {'id': 'id', 'CHARQUITO': 'CHARQUITO', });
lyr_TeatroElCharquito_3.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_HumedalElCharquito_4.set('fieldAliases', {'id': 'id', 'ÁREA': 'ÁREA', });
lyr_IntercambiosLocales_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBREFINC': 'NOMBREFINC', 'ÁREAFINCA': 'ÁREAFINCA', 'SEMILLASIN': 'SEMILLASIN', 'DIRECCIÓN': 'DIRECCIÓN', 'ACTIVIDADP': 'ACTIVIDADP', 'Intercam': 'Intercam', });
lyr_IntercambioentreCasasCustodiayHuertasUrbanas_1.set('fieldImages', {'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'País': 'TextEdit', 'Localidad': 'TextEdit', 'Direcci_1': 'TextEdit', 'Huerta': 'TextEdit', 'Intercambi': 'TextEdit', 'ID': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_CPRElCharquito_2.set('fieldImages', {'id': 'TextEdit', 'CHARQUITO': 'TextEdit', });
lyr_TeatroElCharquito_3.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_HumedalElCharquito_4.set('fieldImages', {'id': 'TextEdit', 'ÁREA': 'TextEdit', });
lyr_IntercambiosLocales_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBREFINC': 'TextEdit', 'ÁREAFINCA': 'TextEdit', 'SEMILLASIN': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'ACTIVIDADP': 'TextEdit', 'Intercam': 'TextEdit', });
lyr_IntercambioentreCasasCustodiayHuertasUrbanas_1.set('fieldLabels', {'Dirección': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'País': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Direcci_1': 'inline label - visible with data', 'Huerta': 'inline label - visible with data', 'Intercambi': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_CPRElCharquito_2.set('fieldLabels', {'id': 'no label', 'CHARQUITO': 'no label', });
lyr_TeatroElCharquito_3.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_HumedalElCharquito_4.set('fieldLabels', {'id': 'no label', 'ÁREA': 'no label', });
lyr_IntercambiosLocales_5.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBREFINC': 'no label', 'ÁREAFINCA': 'no label', 'SEMILLASIN': 'no label', 'DIRECCIÓN': 'no label', 'ACTIVIDADP': 'no label', 'Intercam': 'no label', });
lyr_IntercambiosLocales_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dziaki_1 = new ol.format.GeoJSON();
var features_dziaki_1 = format_dziaki_1.readFeatures(json_dziaki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dziaki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dziaki_1.addFeatures(features_dziaki_1);
var lyr_dziaki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dziaki_1, 
                style: style_dziaki_1,
                popuplayertitle: "działki",
                interactive: true,
                title: '<img src="styles/legend/dziaki_1.png" /> działki'
            });
var format_powierzchniaefektywna_2 = new ol.format.GeoJSON();
var features_powierzchniaefektywna_2 = format_powierzchniaefektywna_2.readFeatures(json_powierzchniaefektywna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_powierzchniaefektywna_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_powierzchniaefektywna_2.addFeatures(features_powierzchniaefektywna_2);
var lyr_powierzchniaefektywna_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_powierzchniaefektywna_2, 
                style: style_powierzchniaefektywna_2,
                popuplayertitle: "powierzchnia efektywna",
                interactive: true,
                title: '<img src="styles/legend/powierzchniaefektywna_2.png" /> powierzchnia efektywna'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_dziaki_1.setVisible(true);lyr_powierzchniaefektywna_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_dziaki_1,lyr_powierzchniaefektywna_2];
lyr_dziaki_1.set('fieldAliases', {'wojewodztw': 'wojewodztw', 'powiat': 'powiat', 'gmina': 'gmina', 'obreb': 'obreb', 'arkusz': 'arkusz', 'nr_dzialki': 'nr_dzialki', 'teryt': 'teryt', 'pow_m2': 'pow_m2', });
lyr_powierzchniaefektywna_2.set('fieldAliases', {'id': 'id', 'ha': 'ha', });
lyr_dziaki_1.set('fieldImages', {'wojewodztw': 'TextEdit', 'powiat': 'TextEdit', 'gmina': 'TextEdit', 'obreb': 'TextEdit', 'arkusz': 'TextEdit', 'nr_dzialki': 'TextEdit', 'teryt': 'TextEdit', 'pow_m2': 'TextEdit', });
lyr_powierzchniaefektywna_2.set('fieldImages', {'id': 'TextEdit', 'ha': 'TextEdit', });
lyr_dziaki_1.set('fieldLabels', {'wojewodztw': 'no label', 'powiat': 'no label', 'gmina': 'no label', 'obreb': 'no label', 'arkusz': 'no label', 'nr_dzialki': 'inline label - always visible', 'teryt': 'no label', 'pow_m2': 'inline label - always visible', });
lyr_powierzchniaefektywna_2.set('fieldLabels', {'id': 'no label', 'ha': 'inline label - always visible', });
lyr_powierzchniaefektywna_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
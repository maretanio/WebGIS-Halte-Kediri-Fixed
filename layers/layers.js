var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: false,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_Jaringan_Transportasi_2 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_2 = format_Jaringan_Transportasi_2.readFeatures(json_Jaringan_Transportasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_2.addFeatures(features_Jaringan_Transportasi_2);
var lyr_Jaringan_Transportasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_2, 
                style: style_Jaringan_Transportasi_2,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: false,
                title: '<img src="styles/legend/Jaringan_Transportasi_2.png" /> Jaringan_Transportasi'
            });
var format_AreaKomersial_3 = new ol.format.GeoJSON();
var features_AreaKomersial_3 = format_AreaKomersial_3.readFeatures(json_AreaKomersial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersial_3.addFeatures(features_AreaKomersial_3);
var lyr_AreaKomersial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersial_3, 
                style: style_AreaKomersial_3,
                popuplayertitle: 'AreaKomersial',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersial_3.png" /> AreaKomersial'
            });
var format_AreaPerumahan2_4 = new ol.format.GeoJSON();
var features_AreaPerumahan2_4 = format_AreaPerumahan2_4.readFeatures(json_AreaPerumahan2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahan2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahan2_4.addFeatures(features_AreaPerumahan2_4);
var lyr_AreaPerumahan2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahan2_4, 
                style: style_AreaPerumahan2_4,
                popuplayertitle: 'AreaPerumahan2',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahan2_4.png" /> AreaPerumahan2'
            });
var format_Clipped_AreaPerumahan_5 = new ol.format.GeoJSON();
var features_Clipped_AreaPerumahan_5 = format_Clipped_AreaPerumahan_5.readFeatures(json_Clipped_AreaPerumahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_AreaPerumahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_AreaPerumahan_5.addFeatures(features_Clipped_AreaPerumahan_5);
var lyr_Clipped_AreaPerumahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_AreaPerumahan_5, 
                style: style_Clipped_AreaPerumahan_5,
                popuplayertitle: 'Clipped_AreaPerumahan',
                interactive: true,
                title: '<img src="styles/legend/Clipped_AreaPerumahan_5.png" /> Clipped_AreaPerumahan'
            });
var format_AreaPublik_6 = new ol.format.GeoJSON();
var features_AreaPublik_6 = format_AreaPublik_6.readFeatures(json_AreaPublik_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublik_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublik_6.addFeatures(features_AreaPublik_6);
var lyr_AreaPublik_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublik_6, 
                style: style_AreaPublik_6,
                popuplayertitle: 'AreaPublik',
                interactive: true,
                title: '<img src="styles/legend/AreaPublik_6.png" /> AreaPublik'
            });
var format_Clipped_AreaPublik_7 = new ol.format.GeoJSON();
var features_Clipped_AreaPublik_7 = format_Clipped_AreaPublik_7.readFeatures(json_Clipped_AreaPublik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_AreaPublik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_AreaPublik_7.addFeatures(features_Clipped_AreaPublik_7);
var lyr_Clipped_AreaPublik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_AreaPublik_7, 
                style: style_Clipped_AreaPublik_7,
                popuplayertitle: 'Clipped_AreaPublik',
                interactive: true,
                title: '<img src="styles/legend/Clipped_AreaPublik_7.png" /> Clipped_AreaPublik'
            });
var format_Clipped_AreaKomersial_8 = new ol.format.GeoJSON();
var features_Clipped_AreaKomersial_8 = format_Clipped_AreaKomersial_8.readFeatures(json_Clipped_AreaKomersial_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_AreaKomersial_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_AreaKomersial_8.addFeatures(features_Clipped_AreaKomersial_8);
var lyr_Clipped_AreaKomersial_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_AreaKomersial_8, 
                style: style_Clipped_AreaKomersial_8,
                popuplayertitle: 'Clipped_AreaKomersial',
                interactive: true,
                title: '<img src="styles/legend/Clipped_AreaKomersial_8.png" /> Clipped_AreaKomersial'
            });
var format_ServiceArea_400_9 = new ol.format.GeoJSON();
var features_ServiceArea_400_9 = format_ServiceArea_400_9.readFeatures(json_ServiceArea_400_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_400_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_400_9.addFeatures(features_ServiceArea_400_9);
var lyr_ServiceArea_400_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_400_9, 
                style: style_ServiceArea_400_9,
                popuplayertitle: 'Service Area_400',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea_400_9.png" /> Service Area_400'
            });
var format_ServiceArea_800_10 = new ol.format.GeoJSON();
var features_ServiceArea_800_10 = format_ServiceArea_800_10.readFeatures(json_ServiceArea_800_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_800_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_800_10.addFeatures(features_ServiceArea_800_10);
var lyr_ServiceArea_800_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_800_10, 
                style: style_ServiceArea_800_10,
                popuplayertitle: 'Service Area_800',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea_800_10.png" /> Service Area_800'
            });
var format_Halte_11 = new ol.format.GeoJSON();
var features_Halte_11 = format_Halte_11.readFeatures(json_Halte_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_11.addFeatures(features_Halte_11);
var lyr_Halte_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_11, 
                style: style_Halte_11,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_11.png" /> Halte'
            });

lyr_Positron_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_Jaringan_Transportasi_2.setVisible(true);lyr_AreaKomersial_3.setVisible(true);lyr_AreaPerumahan2_4.setVisible(true);lyr_Clipped_AreaPerumahan_5.setVisible(true);lyr_AreaPublik_6.setVisible(true);lyr_Clipped_AreaPublik_7.setVisible(true);lyr_Clipped_AreaKomersial_8.setVisible(true);lyr_ServiceArea_400_9.setVisible(true);lyr_ServiceArea_800_10.setVisible(true);lyr_Halte_11.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Batas_Administrasi_1,lyr_Jaringan_Transportasi_2,lyr_AreaKomersial_3,lyr_AreaPerumahan2_4,lyr_Clipped_AreaPerumahan_5,lyr_AreaPublik_6,lyr_Clipped_AreaPublik_7,lyr_Clipped_AreaKomersial_8,lyr_ServiceArea_400_9,lyr_ServiceArea_800_10,lyr_Halte_11];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_Jaringan_Transportasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_AreaKomersial_3.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_AreaPerumahan2_4.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_Clipped_AreaPerumahan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'LUAS': 'LUAS', 'PERSENTASE': 'PERSENTASE', });
lyr_AreaPublik_6.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_Clipped_AreaPublik_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'LUAS': 'LUAS', 'PERSENTASE': 'PERSENTASE', });
lyr_Clipped_AreaKomersial_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Persen': 'Persen', });
lyr_ServiceArea_400_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_ServiceArea_800_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_Halte_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'FOTO': 'FOTO', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jaringan_Transportasi_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_AreaKomersial_3.set('fieldImages', {'NAMZON': '', });
lyr_AreaPerumahan2_4.set('fieldImages', {'NAMZON': '', });
lyr_Clipped_AreaPerumahan_5.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'LUAS': '', 'PERSENTASE': '', });
lyr_AreaPublik_6.set('fieldImages', {'NAMZON': '', });
lyr_Clipped_AreaPublik_7.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'LUAS': '', 'PERSENTASE': '', });
lyr_Clipped_AreaKomersial_8.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'Luas': '', 'Persen': '', });
lyr_ServiceArea_400_9.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', });
lyr_ServiceArea_800_10.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', });
lyr_Halte_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas': 'no label', });
lyr_Jaringan_Transportasi_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_AreaKomersial_3.set('fieldLabels', {'NAMZON': 'no label', });
lyr_AreaPerumahan2_4.set('fieldLabels', {'NAMZON': 'no label', });
lyr_Clipped_AreaPerumahan_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'LUAS': 'no label', 'PERSENTASE': 'no label', });
lyr_AreaPublik_6.set('fieldLabels', {'NAMZON': 'no label', });
lyr_Clipped_AreaPublik_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'LUAS': 'no label', 'PERSENTASE': 'no label', });
lyr_Clipped_AreaKomersial_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'no label', 'Persen': 'no label', });
lyr_ServiceArea_400_9.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_ServiceArea_800_10.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Halte_11.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', });
lyr_Halte_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
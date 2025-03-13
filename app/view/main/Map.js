Ext.define("MyGeoExtApp.view.main.Map",{
    // extend: "Ext.panel.Panel",
    extend: "GeoExt.component.Map",
    xtype: 'mappanel',
    requires: [
        "MyGeoExtApp.view.main.MapController",
        "MyGeoExtApp.view.main.MapModel"
    ],
    controller: "main-map",
    viewModel: {
        type: "main-map"
    },
    // html: "Hello, World!!"
    map: new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.StadiaMaps({
                    layer: 'stamen_watercolor'
                })
            }),
            new ol.layer.Tile({
                source: new ol.source.StadiaMaps({
                    layer: 'stamen_terrain_labels'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat( [-7.29, -48.19] ),
            zoom: 12
        })
    })
});
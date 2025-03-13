/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyGeoExtApp.Application',

    name: 'MyGeoExtApp',

    requires: [
        // This will automatically load all classes in the MyGeoExtApp namespace
        // so that application classes do not need to require each other.
        'MyGeoExtApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyGeoExtApp.view.main.Main'
});

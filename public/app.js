/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'MyApp',
    extend: 'MyApp.Application',  // <<== added

    requires: [
        'MyApp.*'   // tell Cmd to include all app classes  // <<== added
        // 'Ext.MessageBox'
    ],

    launch: function () {
        Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    }
});


Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyApp',   // <<== added
    mainView: 'MyApp.view.main.Main',

    stores: [   // <<== added
        'Users', // TODO: add global / shared stores here
    ],

    launch: function () {   // <<== added
        // TODO - Launch the application
    },

    onAppUpdate: function () {   // <<== added
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

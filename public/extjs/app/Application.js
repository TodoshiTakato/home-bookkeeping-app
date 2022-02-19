Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyApp',   // <<== added
    mainView: 'MyApp.view.main.Main',

    models: ['Notification', 'Personnel', 'User'],
    stores: [   // <<== added
        'Notifications', 'Personnel', 'Users',
        // TODO: add global / shared stores here
    ],

    // scrollable: true,
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

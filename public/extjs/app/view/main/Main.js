Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    fullscreen: true,
    tabBarPosition: 'top',
    cls: 'main',   // <<== added

    controller: 'main',   // <<== added

    store: {
        type: 'notifications'
    },

    requires: [
        'Ext.Button',
        'Ext.field.Text',

        'MyApp.view.main.MainController',  // <<== added
        'MyApp.view.notify.Notifications',  // <<== added
    ],

    viewModel: {   // <<== added
        data: {
            userName: ''
        }
    },

    items: [{
        title: 'Home',
        cls: 'home',   // <<== added
        html: '<h1 class="banner">Hello World!</h1><hr>',
        style: {
            'align-items': 'center',
            'background': '#94D2BD',
        },
        items: [{
            xtype: 'textfield',  // <<== added
            label: 'User name',
            bind: '{userName}',

            listeners: {   // <<== added
                action: 'onGo'
            }
        }, {
            xtype: 'button',
            text: 'Go',
            handler: 'onGo',  // <<== added
            bind: {             // <<== added
                disabled: '{!userName}',
                text: '{userName ? "Save: " + userName : "Save"}'
            }
        }]
    }, {
        title: 'Notifications',
        xtype: 'notifications',  // <<== add to main view

        // items: [{
        //     xtype: 'button',
        //     text: 'Hehe boy',
        //     handler: 'onItemSelected'  // <<== added
        // }]
    }, {
        title: 'Settings',
        cls: 'settings',   // <<== added
        html: '<h1 class="settings-banner">Hello World!</h1>',
        style: {
            'align-items': 'center',
            'background': '#BB3E03',
        },
        items: [{
            xtype: 'button',
            text: 'Hehe boy',
            handler: 'onGo'  // <<== added
        }]
    }]
});

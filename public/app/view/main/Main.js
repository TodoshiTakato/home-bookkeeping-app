Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.Button'
    ],

    items: [{
        title: 'Home',
        html: '<h1 class="main-banner">Hello World!</h1>',
        items: [{
            xtype: 'button',
            text: 'Go'
        }]
    }, {
        title: 'Notifications'
    }, {
        title: 'Settings'
    }]
});

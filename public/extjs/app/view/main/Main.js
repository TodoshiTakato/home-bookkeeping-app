Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    fullscreen: false,
    tabBarPosition: 'top',
    // scrollable: "horizontal",
    // .applyScrollable(true)
    // layout: 'fit',
    layout: {
        type: 'card',
        animation: {
            type: 'slide'
        },
        overflow: 'scroller'
    },
    // cls: 'main',   // <<== added

    controller: 'main',   // <<== added
    viewModel: 'main',   // <<== added
    // viewModel: {   // <<== added
    //     data: {
    //         userName: ''
    //     }
    // },

    store: {
        type: 'notifications'
    },

    requires: [
        'Ext.Button',
        'Ext.field.Text',

        'MyApp.view.main.List',  // <<== added
        'MyApp.view.main.MainModel',  // <<== added
        'MyApp.view.main.MainController',  // <<== added
        'MyApp.view.notify.Notifications',  // <<== added
    ],

    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            // type: 'hbox',
            // align: 'middle',
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{appName}',
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        cls: 'home',   // <<== added
        iconCls: 'x-fa fa-home',
        // layout: "vbox",
        // scrollable: "horizontal",
        html: '<h1 class="banner">Hello World!</h1><hr>',
        style: {
            'align-items': 'center',
            'background': '#94D2BD',
        },
        items: [{
            xtype: 'textfield',  // <<== added
            label: 'User name',
            bind: '{userName}',
            // scrollable: false,
            // layout: {
            //     overflow: 'scroller'
            // },
            listeners: {   // <<== added
                action: 'onGo'
            },
        }, {
            xtype: 'button',
            text: 'Go',
            handler: 'onGo',  // <<== added
            bind: {             // <<== added
                disabled: '{!userName}',
                text: "Save",
                // text: '{userName ? "Save: " + userName : "Save"}'
            },
            // scrollable: true,
        }, {
            xtype: 'button',
            text: 'Hehe boy',
            handler: 'onGo',  // <<== added
            scrollable: true,
        }, {
            xtype: 'mainlist'
        }]
    }, {
        title: 'Notifications',
        iconCls: 'x-fa fa-bell',
        xtype: 'notifications',  // <<== add to main view

        // items: [{
        //     xtype: 'button',
        //     text: 'Hehe boy',
        //     handler: 'onItemSelected'  // <<== added
        // }]
    }, {
        title: 'Settings',
        cls: 'settings',   // <<== added
        iconCls: 'x-fa fa-cog',
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
// console.log({userName});

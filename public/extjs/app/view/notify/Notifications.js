Ext.define('MyApp.view.notify.Notifications', {
    extend: 'Ext.Panel',
    xtype: 'notifications', // #1

    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit'
    ],

    layout: 'fit', // #2

    items: [{
        xtype: 'grid',

        store: {
            type: 'notifications' // we'll define this next
        },
        style: {
            // 'align-items': 'center',
            'background': '#0A9396',
        },
        columns: [{
            xtype: 'datecolumn',
            // width: "50%",
            text: 'Date',
            dataIndex: 'date'
        }, {
            // width: "50%",
            text: 'Description',
            dataIndex: 'description',
            flex: 1
        }]
    }]
});

Ext.define('MyApp.store.Notifications', {
    extend: 'Ext.data.Store',
    alias: 'store.notifications',

    model: 'MyApp.model.Notification',

    data: [
        {
            date: '2017-05-20T10:20:30Z',
            description: 'The first notification'
        }
    ]
});

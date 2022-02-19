Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',
    data : [
        {name: 'Seth', age: '34'},
        {name: 'Scott', age: '72'},
        {name: 'Gary', age: '19'},
        {name: 'Capybara', age: '208'}
    ]
});

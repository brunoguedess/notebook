module.exports = {
    rules: {
        'angular/function-type': [1, 'named'],
        'angular/file-name': [1, {
             'typeSeparator': 'dot',
             'ignoreTypeSuffix': true,
             'nameStyle': 'dash'
        }],
        'angular/service-name': [1, {
            'oldBehavior': false
        }]
    }
};

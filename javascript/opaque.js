
require(['core/first'], function() {
    //require(['jquery', 'theme_opaque/bootstrap', 'core/log'], function($, bootstrap, log) {
    require(['jquery', 'core/log'], function($, log) {
        log.debug('Opaque JavaScript initialised');
    });
});

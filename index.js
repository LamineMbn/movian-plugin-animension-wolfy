var page = require('movian/page');
var service = require('movian/service');
var settings = require('movian/settings');
var plugin = JSON.parse(Plugin.manifest);
var logo = Plugin.path + "logo.png";

function setPageHeader(page, title) {
    page.loading = true;
    if (page.metadata) {
        page.metadata.title = title;
        page.metadata.logo = logo;
    }
    page.type = "directory";
    page.contents = "items";
}

service.create(plugin.title, plugin.id + ":start", "video", true, logo);

settings.createString('baseURL', "Animension base URL without '/' at the end", 'https://animension.to', function (v) {
    service.baseURL = v;
});

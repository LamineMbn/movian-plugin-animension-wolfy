var service = require('movian/service');
var api = require('common-api');

var SEARCH_ENDPOINT = "/search"

function retrievePopularAnimeUrl(page) {
    return {
        url : service.baseURL + SEARCH_ENDPOINT,
        args: {
            dub: "0",
            page: page.toString()
        }
    }
}

exports.retrievePopularAnime = function (page) {
    var params = retrievePopularAnimeUrl(page)
    var response = api.callService(params.url, params.args)
    return JSON.parse(response)
}

function renderEngine() {
        this.renderTemplate = function(str, obj) {
        var res = str.replace(/{{\w*}}/g, function(match) {
            return obj[match.match(/\w+/g)];
        });
        return res;
    };
}
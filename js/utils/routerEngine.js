function  routerEngine() {
    var pageArray = [];

    var defaultPage = "viewPatientsList";

    this.init = function () {
        history.back();
        var pageName = getURLName();

        if(pageName==""){
            routeEng.Go(defaultPage,null);
        }

        window.onpopstate = function(event) {
            routeEng.Go(event.state);
        }
    }

    this.Go = function(statename,pid) {

        var page = getPageByName(statename);

        $(".content").empty().load(page.url,function () {
            var gid = pid ;
            page.obj.init(gid);
        });

        pushPage(page);


    }

    this.state = function (pageInfo) {
        pageArray.push(pageInfo);
    }

    var getPageByName = function (name) {

        for(i=0 ; i<pageArray.length ;i++ ){

            if(pageArray[i]["name"]===name){

                var page = pageArray[i];
                return page;

                break;
            }
        }

    }

    var getURLName = function () {
        var urlname = document.location.hash.slice (1);
        return urlname;
    }

    var pushPage = function(page){
        history.pushState(page.name, null, '#' + page.name);
    }
}
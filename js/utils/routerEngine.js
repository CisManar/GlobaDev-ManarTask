function  routerEngine() {
    var pageArray = [];
    var gid = null;

    this.init = function () {
        routeEng.Go("viewPatientsList",null);
    }

    this.Go = function(statename,pid) {

        for(i=0 ; i<pageArray.length ;i++ ){

            if(pageArray[i]["name"]===statename){

                var page = pageArray[i];

            }
        }

        $(".content").empty().load(page.url,function () {
            debugger;
            var gid = pid ;
            page.obj.init();
          //      console.log(pid)
                patientEdit.showForm( gid );
        });

    }

    this.state = function (pageInfo) {

        pageArray.push(pageInfo);
    }
}
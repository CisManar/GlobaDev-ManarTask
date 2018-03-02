$(document).ready(function() {
    
    nav.init();

    //nav.Go(".patients-list");


    routeEng.state({
        url:"pages/patientsList.html",
        obj: patientlist,
        name: "viewPatientsList"
    });

    routeEng.state({
        url:"pages/patientEdit.html",
        obj: patientEdit,
        name: "viewEditList"
    });

    routeEng.state({
        url:"pages/usersList.html",
        obj: patientlist,
        name: "viewUsersList"
    });

    routeEng.init();

  //  patientEdit.init();
    
  //  patientlist.init();
});

var nav=new navigator();

var patientlist=new patientList();

var patientEdit=new patientEdit();

var rendEngine=new renderEngine();

var dataservice=new dataService();

var validation=new valdationEngine();

var routeEng = new routerEngine();


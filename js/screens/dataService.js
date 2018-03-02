function dataService(){
    
    var gIndex=null;
    this.getAll=function() {

        return patientsData;
    }
    
    this.add=function(patient) {
     //   debugger;

        if (patientsData.length > 0) {

            var lastID = dataservice.getMaxID();
            var newID = lastID + 1;
        }
        else {
            var newID = 1;
        }
        var myObject = {
            ID: newID,
            fname: patient["fname"],
            mname: patient["mname"],
            lname: patient["lname"],
            status: patient["Status"],
            Active: patient["Active"],
            email: patient["email"],
            DOB: patient["birthDate"],
            lastCheck: Date.now(),
            gender: patient["Gender"],
            creationDate: Date.now()
        };

        patientsData.push(myObject);
        console.log(patient);
        routeEng.Go("viewPatientsList",null);

        patientlist.renderTable();

        toastr.success("The New Patient Was Added!")
    }
    
    this.update=function(ID, patient) {
      
        gIndex=dataservice.getPatientIndexById(ID);
        
        patientsData[gIndex].fname = patient["fname"];
        patientsData[gIndex].mname = patient["mname"];
        patientsData[gIndex].lname = patient["lname"];
        patientsData[gIndex].status = patient["Status"];
        patientsData[gIndex].Active = patient["Active"];
        patientsData[gIndex].email = patient["email"];
        patientsData[gIndex].DOB = patient["birthDate"];
        patientsData[gIndex].lastCheck = Date.now();
        patientsData[gIndex].gender = patient["Gender"];

        routeEng.Go("viewPatientsList",null);
        patientlist.renderTable();

        console.log(patient)
        toastr.success("The New Patient Was Updated!")
    }
    
    this.delete =function(ID) {
        
        var index=dataservice.getPatientIndexById(ID);
        
        patientsData.splice(index,1);
        
        nav.Go(".patients-list");
        toastr.success("The New Patient Was Deleted!")
    }

    this.getPatientById=function(id) {
        
        for (i = 0; i < patientsData.length; i++) {
            
            if (patientsData[i].ID == id) {
                return patientsData[i];
                break;
            }
        }
    }

    this.getPatientIndexById=function(id) {
        
        for (i = 0; i < patientsData.length; i++) {
            if (patientsData[i].ID == id) {
                return i;
                break;
            }
        }
    }
    
    this.getMaxID=function() {
            
        var max = 0;

        for (i = 0; i < patientsData.length; i++) {
            max = Math.max(max, patientsData[i].ID);
        }
        return max;
    }
}
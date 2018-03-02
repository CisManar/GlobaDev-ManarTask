function patientEdit() {


    //-------------------------------------------------------
    //------------- ( Variables ) -------------
    //-------------------------------------------------------
    this.gId = null;
    this.gMode="";
    this.gpatientObj=null;

    //-------------------------------------------------------
    //------------- ( Initial ) -------------
    //-------------------------------------------------------

    this.init = function() {
        
        $(".savePatient-btn").click(function() {

            getFormValues();
            var result=validation.validate();
        //    console.log(result);
            if(result==true){

                if(patientEdit.gMode=="add"){
                    dataservice.add(patientEdit.gpatientObj)
                }
                if(patientEdit.gMode=="edit"){
                    dataservice.update(patientEdit.gId,patientEdit.gpatientObj)
                }
            }

        });
        
        $(".deletePatient-btn").click(function(){
            
            dataservice.delete(patientEdit.gId); 
            //nav.Go(".patients-list");
            patientlist.renderTable();
        });

    }


    //-------------------------------------------------------
    //------------- ( Public methods ) -------------
    //-------------------------------------------------------

   this.showForm=function(ID) {
       
       patientEdit.gId=ID;
       ///nav.Go(".patient-edit");
       if(ID==null){
           
            patientEdit.gMode="add";
            $(".patient-title").text("Add New Patient");
            resetForm();
       }
       else{
            patientEdit.gId=ID;
            patientEdit.gMode="edit";
            $(".patient-title").text("Edit Patient");
            var patient = dataservice.getPatientById( ID );//object
            setFormValues( patient );
       }
   }



    //-------------------------------------------------------
    //------------- ( private functions ) -------------
    //-------------------------------------------------------

    function resetForm() {
        $(".patient-form").each(function() { //function
            this.reset();
        });
        $(".form-group").removeClass("has-error");
        $(".error-message").text("");
    }
    
    function setFormValues (obj) {

        //var id = obj.ID;
        var firstname = obj.fname;
        var middlename = obj.mname;
        var lastname = obj.lname;
        var Status = obj.status;
        var active = obj.Active;
        var Email = obj.email;
        var birthDate = obj.DOB;
        var lastcheck = obj.lastCheck;
        var Gender = obj.gender;


        $(".pfname").val(firstname);
        $(".pmname").val(middlename);
        $(".plname").val(lastname);
        $(".pstatus").val(Status);
        $(".pactive").attr("checked", "checked");
        $(".pemail").val(Email);
        
        var today = moment(birthDate).format('YYYY-MM-DD');
        $(".pbod").val(today);
        
        $(".plastcheck").val(lastcheck);
        $("input[name='gender'][value=" + Gender + "]").attr("checked", true);
    }
    //-------------------------------------------------------
    //------------- ( Utilities ) -------------
    //-------------------------------------------------------



    function getFormValues() {
        
        var firstname = $(".pfname").val();
        var middlename = $(".pmname").val();
        var lastname = $(".plname").val();
        var Status = $(".pstatus :selected").val();
        var active = $(".pactive").is(":checked");
        var Email = $(".pemail").val();
        var birthDate =new Date($(".pbod").val());
        var lastcheck = $(".plastcheck :selected").val();
        var Gender = $("input[name='gender']:checked").val();

        var valueObj = {
            fname: firstname,
            mname: middlename,
            lname: lastname,
            Status: Status,
            Active: active,
            email: Email,
            birthDate: birthDate,
            lastcheck: lastcheck,
            Gender: Gender
        };

        patientEdit.gpatientObj = valueObj;

    }

    
}

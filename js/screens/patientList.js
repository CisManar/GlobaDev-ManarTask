function patientList()
{
    var gid=null;
    var patientDataArray;

    this.init=function(gid) {
        
        patientDataArray=dataservice.getAll();

        patientlist.renderTable();
        
        $(".addNew-btn").click(function() {

            routeEng.Go("viewEditList",null);
            $(".deletePatient-btn").hide();

            
        });
        
           
        $("#patients-table .Patienttbody").on("click", "tr", function() {

            gid = $(this).data("patientid");

            routeEng.Go("viewEditList",gid);
            // patientEdit.showForm( gid );
            $(".deletePatient-btn").show();
        });

    }
    
    this.renderTable=function() {

        var template = $('#patientTableTemplate').text();
    
        $("#patients-table>tbody").empty();

        for (var i = 0; i < patientDataArray.length; i++)
        {

            var copyPatient=Object.assign({},patientDataArray[i]);
            copyPatient.gender==1?copyPatient.gender="Male":copyPatient.gender="Female";

            copyPatient.DOB = moment(copyPatient.DOB).format("MM-DD-YYYY");

            copyPatient.creationDate = moment(copyPatient.creationDate).format("MM-DD-YYYY");

            var appended=rendEngine.renderTemplate(template,copyPatient);

            $("#patients-table>tbody").append(appended);
        }
    }
}
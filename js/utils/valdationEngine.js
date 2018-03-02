function valdationEngine() {

    var gid = patientEdit.gId;

    var Emailexpr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g;



    this.validate = function () {
        var result = true;
        var msg = null;
        var validationResult = null;

        $("[data-validation]").each(function (index,component) {

            var validationStr = $(component).data("validation");

            var validationRules = validationStr.split(",");

            validationResult = validateComponent(component, validationRules);
            if(!validationResult.result){
                msg = validationResult.msg;
                showValidationError(component,msg);
                result = validationResult.result;
            }
            else{
                hideValidationError(component);
            }
        })
        return result;
    }

    var validateComponent = function (component,validationRules) {

        var result = true;
        var msg = '';
        var value = $(component).val();
        for(var i=0 ; i<validationRules.length ; i++)
        {

            switch(validationRules[i].toLowerCase()) {

                case ("required"):
                    if(value=="") {
                        result = false;
                        msg= msg +$(component).attr("input-name") + " is required !\n";
                    }

                    break;

                case ("email"):
                    var emailvalidate=Emailexpr.test(value);
                    if(!emailvalidate) {
                        result = false;
                        msg += "invalid email address !\n";
                    }
                    break;
                case ("date"):
                    if(!moment(value).isValid()) {
                        result = false;
                        msg +="invalid date !\n";
                    }
                    break;
            }

        }
        return {result:result,msg:msg};
    }

    var showValidationError = function (component,msg) {

        $(component).closest(".form-input").addClass("has-error");
        $(component).siblings(".error-message").text(toastr.error(msg));

    }

    var hideValidationError = function (component) {

        $(component).closest(".form-group").removeClass("has-error");
        $(component).siblings(".error-message").text("");
    }
}













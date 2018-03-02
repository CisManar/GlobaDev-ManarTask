function navigator()
{
    var gid = null;
    this.init=function() {
        
        $(".navigation").click(function() {
            var divVal = $(this).data("div");
           // nav.Go(divVal)
            routeEng.Go(divVal,gid);

        });
    }
    
    this.Go = function(divVal) {
        
        hideAll();
        showScreen(divVal);
    };
    
    var hideAll = function() {
        
        $(".screen").hide();
    };
    
    var showScreen = function(divVal) {
        
        $(divVal).show();
    };
    
}

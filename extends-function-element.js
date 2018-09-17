$(function(){
   
    jQuery.fn.extend({

        yourfunctionname: function (params) {

            var element = this;
            element.doSomething();
        },
        yourOtherfunctionname: function (params) {

            var element = this;
            element.doSomething();
        }
        
    });
    
    /*  To use it */
    
    $('selector').yourfunctionname(parms);
    
    
});
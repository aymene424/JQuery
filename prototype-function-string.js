$(function(){
    
    String.prototype.yourfunctionName = function (extension) {

        var myvariable = this.doSomething();
        return myvariable;    
    };
    
    /* To use it */
    
    var myString = "Hello World !";
    myString.yourfunctionName();
    
    
});
/*RFish 2014*/

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) {
        return false;
    }
	animating = true;
    
    current_fs = $(this).parent();
	next_fs = $(this).parent().next();
    
    /*Active the processBar*/
    $("#processBar li").eq($('#mutiStep fieldset').index(next_fs)).addClass('active');
    
    //Load the next fieldset & hide the current.
    current_fs.fadeOut(300);
    next_fs.fadeIn(300);
    
    animating = false; // renew the multi-click flag;
});

$(".pre").click(function(){
	if(animating) {
        return false;
    }
	animating = true;
    
    current_fs = $(this).parent();
	prev_fs = $(this).parent().prev();
    
    /*cancel the processBar*/
    $("#processBar li").eq($('#mutiStep fieldset').index(current_fs)).removeClass('active');
    
    //Load the next fieldset & hide the current.
    current_fs.fadeOut(300);
    prev_fs.fadeIn(300);
    
    animating = false; // renew the multi-click flag;
});
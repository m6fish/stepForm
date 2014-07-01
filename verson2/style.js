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
    
    //show the next fieldset
    next_fs.show(); 
    
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
			//1. scale current_fs down to 80%
			scale = 0.8+ now* 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
        duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false; // renew the multi-click flag;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
    });
    
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
    
    //show the next fieldset
    prev_fs.show(); 
    
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
			//1. scale prev_fs down from 80%
			scale = 1-(0.2*now);
			//2. bring current_fs to the right(50%)
			left = ((1-now) * 50 )+"%";
			//3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left });
			prev_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
        duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false; // renew the multi-click flag;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
    });
});
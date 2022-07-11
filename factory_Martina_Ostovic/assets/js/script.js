$(document).ready(function() {

	var item_width = $('#slides li').outerWidth(); 
	var left_value = item_width * (-1); 
        
	$('#slides li:first').before($('#slides li:last'));
	 
	$('#slides ul').css({'left' : left_value});
	

	$("#prev").css({
		"background": `url(${"./assets/img/arrow-gray-left.png"})`,
		"background-position": "center",
		"background-size": "20%",
		"background-repeat": "no-repeat"
	  });
	
    $('#prev').on("mouseover mouseleave", (event) => {
		if (event.type == "mouseover")
		    $("#prev").css({
				"background": `url(${"./assets/img/arrow-blue-left.png"})`,
			    "background-position": "center",
			    "background-size": "20%",
			    "background-repeat": "no-repeat"
		    });
		else if (event.type == "mouseleave")
		   $("#prev").css({
			   "background": `url(${"./assets/img/arrow-gray-left.png"})`,
			   "background-position": "center",
			   "background-size": "20%",
			   "background-repeat": "no-repeat"
			});
		
	});

	//if user clicked on prev button
	$('#prev').click(function() {
		
		var left_indent = parseInt($('#slides ul').css('left')) - item_width;
		
		//slide the item
		$('#slides ul').animate({'left' : left_indent}, 700, function () {
            
            //move the first item and put it as last item
			$('#slides li:last').after($('#slides li:first'));                 	
			
			$('#slides ul').css({'left' : left_value});
		
		});
		         
		return false;
		
	});

	
	
    //if user clicked on next button
	$('#next').click(function() {
            
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		//slide the item            
		$('#slides ul').animate({'left' : left_indent}, 700,function(){    

            //move the last item and put it as first item            	
			$('#slides li:first').before($('#slides li:last'));           

			$('#slides ul').css({'left' : left_value});
		
		});
            
		return false;
            
	});

	$("#next").css({
		"background": `url(${"./assets/img/arrow-gray-right.png"})`,
		"background-position": "center",
		"background-size": "20%",
		"background-repeat": "no-repeat"
	});

	$('#next').on("mouseover mouseleave", (event) => {
		if (event.type == "mouseover")
		    $("#next").css({
				"background": `url(${"./assets/img/arrow-blue-right.png"})`,
			    "background-position": "center",
			    "background-size": "20%",
			    "background-repeat": "no-repeat"
		    });
		else if (event.type == "mouseleave")
		   $("#next").css({
			   "background": `url(${"./assets/img/arrow-gray-right.png"})`,
			   "background-position": "center",
			   "background-size": "20%",
			   "background-repeat": "no-repeat"
			});
		
    });
 
});
    
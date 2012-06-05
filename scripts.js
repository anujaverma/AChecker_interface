$(document).ready(function(){
/*				$("#result").hide();*/
				$("#taba").addClass("active");
				$("#tabb").removeClass("active");
				$("#tabc").removeClass("active");
				//display selected division, hide others
				$("#tab1").show();
				$("#tab2").hide();
				$("#tab3").hide();
				/*$("div.tabb").css("display", "none");
				$("div.tabc").css("display", "none");*/
			
				$('#taba').click(function() {			
    			$("#taba").addClass("active");
				$("#tabb").removeClass("active");
				$("#tabc").removeClass("active");
				//display selected division, hide others
				$("#tab1").show();
				$("#tab2").hide();
				$("#tab3").hide();
			  });
				
				$('#tabb').click(function() {
 				$("#tabb").addClass("active");
				$("#taba").removeClass("active");
				$("#tabc").removeClass("active");
				
				$("#tab2").show();
				$("#tab1").hide();
				$("#tab3").hide();
    
			  });
			  
			  $('#tabc').click(function() {
			  $("#tabc").addClass("active");
				$("#tabb").removeClass("active");
				$("#taba").removeClass("active");
				//display selected division, hide others
				$("#tab3").show();
				$("#tab2").hide();
				$("#tab1").hide();
			  });
		
		
/*__________________________________*/
				$("#itaba").addClass("active");
				$("#itabb").removeClass("active");
				$("#itabc").removeClass("active");
				$("#itabd").removeClass("active");
				$("#itabe").removeClass("active");				
				//display selected division, hide others
				$("#itab1").show();
				$("#itab2").hide();
				$("#itab3").hide();				
				$("#itab4").hide();
				$("#itab5").hide();				
		$('#itaba').click(function() {			
    			$("#itaba").addClass("active");
				$("#itabb").removeClass("active");
				$("#itabc").removeClass("active");
				$("#itabd").removeClass("active");
				$("#itabe").removeClass("active");				
				//display selected division, hide others
				$("#itab1").show();
				$("#itab2").hide();
				$("#itab3").hide();				
				$("#itab4").hide();
				$("#itab5").hide();				
			  });
				
				$('#itabb').click(function() {
 				$("#itabb").addClass("active");
				$("#itaba").removeClass("active");
				$("#itabc").removeClass("active");
				$("#itabd").removeClass("active");
				$("#itabe").removeClass("active");
				$("#itab2").show();
				$("#itab1").hide();
				$("#itab3").hide();
    			$("#itab4").hide();
				$("#itab5").hide();
			  });
			  
			  $('#itabc').click(function() {
			  $("#itabc").addClass("active");
				$("#itabb").removeClass("active");
				$("#itaba").removeClass("active");
				$("#itabd").removeClass("active");
				$("#itabe").removeClass("active");
				//display selected division, hide others
				$("#itab3").show();
				$("#itab2").hide();
				$("#itab1").hide();
    			$("#itab4").hide();
				$("#itab5").hide();
			  });

			
				$('#itabd').click(function() {
			  $("#itabd").addClass("active");
				$("#itabb").removeClass("active");
				$("#itaba").removeClass("active");
				$("#itabc").removeClass("active");
				$("#itabe").removeClass("active");
				//display selected division, hide others
				$("#itab4").show();
				$("#itab2").hide();
				$("#itab1").hide();
    			$("#itab3").hide();
				$("#itab5").hide();
			  });

			  $('#itabe').click(function() {
			  $("#itabe").addClass("active");
				$("#itabb").removeClass("active");
				$("#itaba").removeClass("active");
				$("#itabd").removeClass("active");
				$("#itabc").removeClass("active");
				//display selected division, hide others
				$("#itab5").show();
				$("#itab2").hide();
				$("#itab1").hide();
    			$("#itab4").hide();
				$("#itab3").hide();
			  });

});



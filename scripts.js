$(document).ready(function(){
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
		});
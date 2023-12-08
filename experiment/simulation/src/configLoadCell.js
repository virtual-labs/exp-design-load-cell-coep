var areaSelect = 0 ,modSelelect = 0,poisonSelect;
var flgSec = 0;

function columnTypeConfig(){

    
    $("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText2").html('DIAGRAM');
      $("#centerText1").html('CONFIGURATION');
      var htm = '<img src="images/columnDraw.png" class="img-fluid" width = 90% height = 80% style="margin-left:50px;" >'
      $("#canvas-div").html(htm);
      var loadVal ='<div class="row"><div class="col-sm-6" id="loadValue" >'
                  +'<label class="labelstyle">Select Diameter (mm): </label>'   
                  +'</div>'
                  +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="diaSel"  style="height:auto;">'
	   +'<option value="0">--- Select the area --- </option>'
	   +'<option value="50" >50 </option>'
	   +'<option value="55">55</option>'
	   +'<option value="60">60</option>'
	   +'<option value="65">65</option>'
	   +'<option value="70">70</option>'
	   +'<option value="75">75</option>'
	   +'<option value="80">80</option>' 
	   +'<option value="85">85</option>'
	   +'<option value="90">90</option>'
	   +'<option value="100">100</option>'
	  
         +'</select>'          
            +'</div>' 
            +'</div>'  
            +'<br>'
         
          
            
            
        +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Modulus of elasticity (N/mm<sup>2</sup>): </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="modSel" " style="height:auto;">'
	   +'<option value="0">--- Select modulus --- </option>'
	   +'<option value="207000" > 2.07 &times 10 &#x2075 </option>'
	   
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'  
	    
	                   
	    
	     +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Poisons Ratio: </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="poisonSel" " style="height:auto;">'
	   +'<option value="0">--- Select Ratio --- </option>'
	   +'<option value="0.25" >0.25  </option>'
	   
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'    
	    
	    
       +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Area (sq mm): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="areaSel" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkArea" data-toggle="modal" data-target="#myModal" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	     +'<br>' 
        
        +'<div class="col-sm-12">'
        
//        +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" data-toggle="modal" data-target="#myModal" disabled><b>CONFIGURE </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevelForConfig"  hidden><b>NEXT LEVEL</b></button>'

	     +'<br>'  
	    
	      
	        
//	     + ' <!-- Modal -->'
//				+ '<div class="modal fade" id="selectCheck" role="dialog">'
//				+ ' <div class="modal-dialog modal-md">'
//				+ '    <div class="modal-content">'
//				+ '     <div class="modal-header">'
//				
//				+ '       <h4 class="modal-title">Message box</h4>'
//				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
//				+ '     </div>'
//				+ '     <div class="modal-body">'
//				+ '       <p id="modelMsg"></p>'
//				+ '     </div>'
//				+ '     <div class="modal-footer">'
//				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >OK</button>'
//				+ '     </div>'
//				+ '   </div>'
//				+ ' </div>'
//				+ '</div>'
//				+'</div>'
//				+ '</div>'
//				+ ' </div>'   
	             
	            
        $("#main-div-conf").html('');
      typeCell = $("#typeCell").val();
      
      
       
      if(typeCell == 15){
       
	 $("#main-div-conf").html(loadVal);
	 $("#diaSel").change(function(){
	   areaSelect = $("#diaSel").val();
	   console.log(" area "+diaSel);
	    });
	    $("#modSel").change(function(){
		   modSelelect = $("#modSel").val();
		   console.log(" modulus "+modSelelect);
	     });
	    $("#poisonSel").change(function(){
	   poisonSelect = $("#poisonSel").val();	   	   
	   console.log("poisonSel"+poisonSelect);
	   });
	   
      
      }else if(typeCell == 25){
	$("#main-div-conf").html('');
//	alert("Select value"+typeCell);
//	 $("#loadValue").html(typeCell);
      }else if(typeCell == 40){
	$("#main-div-conf").html('');
//	alert("Select value"+typeCell);
//	 $("#loadValue").html(typeCell);
      }
     
     var radius = 0;
     var areaVal = 0;
     var diam = 0;
     
     var id = 1; 
     var areaRound = 0;
     var mod = 0;
     
     var mathFun = 0;
     var mulPow = 0;
     var mulPower = 0;
     
      $("#checkArea").click(function() {
       
       areaSelect = parseFloat($("#areaSel").val());
	diam = parseInt($("#diaSel").val());
     modSelelect = parseInt($("#modSel").val());
	 poisonSelect = parseFloat($("#poisonSel").val());  
       mod = 2.07*Math.pow(10, 5);
        
      
	 if(diam == 0 || areaSelect==" " || modSelelect==0 || poisonSelect==0)
	  {
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values.");
		
//		$("#modelMsg").html("<b class='boldTextRed'>Select appropriate values.</b>");
//			$("#modelMsg").html("");

					 $("body").css("padding","0px 0px 0px 0px");
	}else{	
		 radius = diam/2;
	 console.log("radius"+radius);
//	 mathFun = Math.pow(10,-3);
//	 mulPow = mathFun*radius;
     mulPow = radius;
	 mulPower = mulPow*mulPow;
	  areaRound1 = mulPower*3.14;
//	  areaRound = areaRound1.toFixed(6); 
      areaRound = areaRound1; 
//	 areaRound = (3.14*radius*radius).toFixed(2);
	 areaVal = parseFloat(areaRound);
	 console.log("areaVal"+areaVal);
	 var areaSelValue = $("#areaSel").val();
	if(areaSelValue==""){
		 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
	}	else{
	 if (id <= 3) {
				
				if (areaSelect == areaVal) {
					checkAns = 0;
					$("#checkConfg").prop("disabled",false);
//					$("#nextLevelForConfig").prop("hidden",false);
                    
                    $("#checkArea").prop("disabled",true);
					$("#errorPanel").prop("hidden",true);
		
//		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		
		$("#diaSel").prop('disabled',true);
		$("#modSel").prop('disabled',true);
		$("#poisonSel").prop('disabled',true);
		$("#areaSel").prop('disabled',true);
		flgSec=1;	
	     $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Configured Successfully");
				} else if (areaSelect != areaVal) {
					
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
//				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id == 4) {
				
//				alert("formula :Axial Strain = P / AE");
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Formula : Area = &prod;&times; r <sup>2</sup> </b>");
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = (radius &times; 10<sup>-3</sup>)<sup>2</sup> &times; &prod;</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (areaSelect == areaVal) {
					checkAns = 0;
					
					$("#checkConfg").prop("disabled",false);
//					$("#nextLevelForConfig").prop("hidden",false);
                    
                    $("#checkArea").prop("disabled",true);
					$("#errorPanel").prop("hidden",true);
		
//		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		
		$("#diaSel").prop('disabled',true);
		$("#modSel").prop('disabled',true);
		$("#poisonSel").prop('disabled',true);
		$("#areaSel").prop('disabled',true);	
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Configured Successfully");		
////					correct_cnt++;
//		$("#errorPanel").prop("hidden",true);
////		$("#nextLevelForConfig").prop('hidden',false);
//		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		
//		$("#checkConfg").prop('disabled',false);
//		$("#diaSel").prop('disabled',true);
//		$("#modSel").prop('disabled',true);
//		$("#poisonSel").prop('disabled',true);	
//
					 flgSec=1; 
	
				} else {
					checkAns = 0;
//					alert("correct answer is " + axialCal );
					
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + areaVal);
					
//					 $("#modelMsg").html("<b class='boldTextGreen'>Correct answer is " + areaVal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
				
			}
			
	     
		 
	}
      id++; 
      }
     });
     
     $("#checkConfg").click(function() {
	
//	$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
	
	 areaSelect = parseFloat($("#areaSel").val());
	diam = parseInt($("#diaSel").val());
     modSelelect = parseInt($("#modSel").val());
	 poisonSelect = parseFloat($("#poisonSel").val());
	 
	 $("#checkConfg").prop('hidden',true);
	 $("#nextLevelForConfig").prop('hidden',false);
	 
	 
	 
	 
	 
	 
	 
	 
//	   if(diaSel == 0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Diameter</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else if(modSelelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Module</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else if(poisonSelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Poison</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else if(areaSelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Area</b>");
//	}
//	else if(diaSel==0 && areaSelect == 0 && modSelelect == 0 && poisonSelect == 0 ){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select appropriate values</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else{
//			
////		$("#nextLevelForConfig").prop('hidden',false);
//		
////		$("#checkConfg").prop("disabled",true);
////		$('#checkConfg').prop('disabled', false);
//        flgSec = 1;	
//	
//	}
	}); 
	
	$("#nextLevelForConfig").click(function() {
//		if(flgSec==1){
			columnType();
//		}else{
//			$("#modelMsg").html("<b class='boldTextRed'>Select appropriate values</b>");
//		}
	
	
	});



}

var lengthVal, widthVal, heightVal, modSelcantiVal;
var cantiFlg = 0;

function cantileverConfig(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText2").html('DIAGRAM');
      $("#centerText1").html('CONFIGURATION');
     

  var htm = '<video width="95%" height="95%" autoplay muted loop>'
            +'<source src="images/cantilevelVideo.mp4" type="video/mp4">'
            +'</video>'
            

      $("#canvas-div").html(htm);
      
      var loadVal ='<div class="row"><div class="col-sm-6" id="lengthVal" >'
                  +'<label class="labelstyle">Select Length (cm): </label>'   
                  +'</div>'
                  +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="lengthSel"  style="height:auto;">'
	   +'<option value="0">--- Select length --- </option>'
	   +'<option value="10" >10 </option>'
	   +'<option value="20">20</option>'
	  
	  
         +'</select>'          
            +'</div>' 
            +'</div>'  
            +'<br>'
         
      +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Width(cm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="widthSel" " style="height:auto;">'
	   +'<option value="0">--- Select Width --- </option>'
	   +'<option value="10" > 10 </option>'
	   +'<option value="20" > 20 </option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'  
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Height(cm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="heightSel" " style="height:auto;">'
	   +'<option value="0">--- Select Height --- </option>'
	   +'<option value="10" > 10 </option>'
	   +'<option value="20" > 20 </option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'   
          
           
            
        +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Select Modulus of elasticity (N/mm<sup>2</sup>): </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="modSelcanti" " style="height:auto;">'
	   +'<option value="0">--- Select modulus --- </option>'
	   +'<option value="207000" > 2.07 &times 10 &#x2075 </option>'
	   
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'  
	   
	   +'<div class="col-sm-12">'
        
//        +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfgCanti" data-toggle="modal" data-target="#myModal" ><b>CONFIGURE </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevelForConfigCanti" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT LEVEL</b></button>'

	    +'<br>'  
        + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage1" data-dismiss="modal" >OK</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'   
        
      $("#main-div-conf").html(loadVal);
      
//      lengthVal = parseInt($("#lengthSel").val());
//      widthVal = parseInt($("#widthSel").val());
//      heightVal =parseInt($("#heightSel").val());
      modSelcantiVal =parseInt($("#modSelcanti").val());
      
       $("#lengthSel").change(function(){
	   lengthVal = $("#lengthSel").val();
	   console.log(" length "+lengthVal);
	    });
	    
	     $("#widthSel").change(function(){
	   widthVal = $("#widthSel").val();
	   console.log(" width "+widthVal);
	    });
	    
	    $("#heightSel").change(function(){
	   heightVal = $("#heightSel").val();
	   console.log(" width "+heightVal);
	    });
	    
	    $("#modSelcanti").change(function(){
	   modSelcantiVal = $("#modSelcanti").val();
	   console.log(" width "+modSelcantiVal);
	    });
      
      $("#checkConfgCanti").click(function() {
//      if(lengthVal==0 || widthVal==0 || heightVal==0 || modSelcantiVal==0){
//	        $("#modelMsg").html("<b class='boldTextRed'>Select Appropriate Values</b>");
//			$("body").css("padding","0px 0px 0px 0px");
//        }else{
////	        $("#checkConfgCanti").prop("disabled",false);
//            $("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
//			$("body").css("padding","0px 0px 0px 0px");
//            $("#lengthSel").prop("disabled",true);
//            $("#widthSel").prop("disabled",true);
//            $("#heightSel").prop("disabled",true);
//            $("#modSelcanti").prop("disabled",true);
//	        cantiFlg = 1;
//       }

	
		if(lengthVal==0 || widthVal==0 || heightVal==0 || modSelcantiVal==0){
	        $(".modal-title").html("Error Message");
			$(".modal-header").css("background","#d9534f");
			$(".modal-body").html("Select Appropriate Values");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
        }else{
	        $(".modal-title").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$(".modal-body").html("Configured Successfully");
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
            $("#lengthSel").prop("disabled",true);
            $("#widthSel").prop("disabled",true);
            $("#heightSel").prop("disabled",true);
            $("#modSelcanti").prop("disabled",true);
            $("#checkConfgCanti").prop("hidden",true);	
	$("#nextLevelForConfigCanti").prop("hidden",false);
	        cantiFlg = 1;
       }
		
		
		
     }); 
     
      $("#nextPage1").click(function() {
	if(cantiFlg == 1){
	
	}
});

   $("#nextLevelForConfigCanti").click(function() {
	  cantilever();
	});
//	   if(diaSel == 0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Diameter</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else if(modSelelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Module</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else if(poisonSelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Poison</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else if(areaSelect==0){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select Area</b>");
//	}
//	else if(diaSel==0 && areaSelect == 0 && modSelelect == 0 && poisonSelect == 0 ){
//		$("#errorPanel").prop("hidden",false);
//		$("#modelMsg").html("<b class='boldTextRed'>Select appropriate values</b>");
////		$('#checkConfg').prop('disabled', true);
//	}else{
//			
////		$("#nextLevelForConfig").prop('hidden',false);
//		
////		$("#checkConfg").prop("disabled",true);
////		$('#checkConfg').prop('disabled', false);
//        flgSec = 1;	
//	
//	}
}



function ringCellConfig(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText2").html('DIAGRAM');
      $("#centerText1").html('CONFIGURATION');
              
     var htm = '<img src="images/ringExplain.png"   style="width:80%; height:100%;" >'
      $("#canvas-div").html(htm);
}
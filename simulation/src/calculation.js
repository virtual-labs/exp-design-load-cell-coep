 var arrayJson=[];
var masterJson={};
var arrayJson1 = [];
var labels1 = '';


  var ax1 = 0;
  var text1 = 0;
var id1 = 1;
var id2 = 1;
var itr = 1;
var num;
  var tensile, tx1;
var iterate = 1;

var wrongLoadCnt = 0;
var wrongAxialCnt = 0;
var wrongTransCnt = 0;

function columnType(){
	
	$("#delete-btn").prop("hidden",true);
	$("#validateCon").prop("hidden",true);
	
	var area = parseInt(areaSelect);
//	console.log("areaSelect"+areaSelect);
	var mod = parseInt(modSelelect);
//	console.log("modSelelect"+modSelelect);
	var pos = parseInt(poisonSelect);
//	console.log("poisonSelect"+poisonSelect);
	
	
	 $("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     resetDivSize();
     $("#centerText2").html('CALCULATION');
      $("#centerText1").html('COLUMN TYPE LOAD CELL');
      finalDiag();
      render();
      var ax = 0;
	  var mul = 0;
	  var axial = 0;
	
      
      function render(){
     labels1 = ''
                   + '<div class="row"  >'
                    + '<div class="col-sm-1">'
	               
	               +'</div>'
                   + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Area : '+areaSelect+' sq mm</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Modulus : 2.07 &times 10 &#x2075  (N/mm<sup>2</sup>)</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-3" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Poisson'+"'"+'s Ratio : '+poisonSelect+'</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'
	               
	               +'</div>'
	               +'</div>'
	               +'<div class="row" id="appliedLoad" >'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Enter load applied (N):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;margin-left: 55px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				 
				   +'<div class="row" id="axialCalculation" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Axial strain :  </label>'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'<input type="number" value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'<label  id=""  class="" style="font-size:18px;margin:15px 10px ;margin-left:-8px;"> &times;10<sup>-6</sup>  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load2" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
					+'</div>'
				   +'<div class="row" id="transverseCalculation" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Transverse strain :  </label>'
				   +'</div>'
				   +'<div class="col-sm-2">'
					+'<input type="number" value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'<label  id=""  class="" style="font-size:18px;margin:15px 10px ;margin-left:-8px;"> &times;10<sup>-6</sup> </label>'
				   +'</div>'
				    +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load3" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
	                +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextReading" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT READING </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevel" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT LEVEL</b></button>'
        +'</div>'
	     +'<br>'  
						
					 $("#canvas-div").html(labels1);
		 }	
		 var axialCal = 0;
		 var axial = 0;
		 var axialC = 0;
		 var arrWeight = [];
					 $("#submit_load1").click(function(){
						$("body").css("padding","0px 0px 0px 0px");
						id1 = 1;
                        id2 = 1;
                        axial=$("#text1").val();
						ax1 = parseFloat(axial);
						
						if(axial==""){
							 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value ");
						}else{	
						if(ax1 >=1000 && ax1<=10000)
						 {
						   if(Number.isInteger(ax1)){
                        const index = arrWeight.indexOf(ax1);
                   arrWeight.push(ax1);
					var hasDuplicate = arrWeight.some((ax1, i) => arrWeight.indexOf(ax1) !== i);
					
//					console.log("hasDuplicate"+hasDuplicate);
                         
					if(hasDuplicate == true){
						
						dupFlg = 0;
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Avoid Duplicates");
//					   alert("Avoid Duplicates");
					  arrWeight.splice(index,1);
					  $("#submit_load1").prop('disabled',false);
						$("#text1").prop('disabled',false);
					}else{
						$("#nextLevel").prop('hidden',true); 
						$("#nextReading").prop('hidden',true);
						$("#submit_load1").prop('disabled',true);
						$("#text1").prop('disabled',true);
						$("#axialCalculation").prop('hidden',false);
						$("#text2").prop('disabled',false);
					    $("#submit_load2").prop('disabled',false);
					    forceEnter();
					     }
					  }else{
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Integer Value");
			wrongLoadCnt++;
//							alert("Enter Integer Value");
						}
						}else{
							$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value between 1000N to 10000N");
			wrongLoadCnt++;
//							alert("Enter the value between 1000N to 10000N");
						}
						}
						});
						
						 
					       
						var axialCal1 = 0;
						var axConvert = 0;
						
						 $("#submit_load2").click(function(){
							$("body").css("padding","0px 0px 0px 0px");
							text2 = $("#text2").val();
							
					           if(text2==""){
						 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
					            mul = areaSelect*mod;
                             
					            axConvert = ax1/mul;
					          var  ax12 = axConvert*Math.pow(10,6);
					           var ax11 = ax12.toFixed(3);
					           ax = parseFloat(ax11);
//					      pointConv = ax.toFixed(3);
					axialCal1 = parseFloat(ax);
					axialCal = (ax)*Math.pow(10,-6);
//					var axialCalConvert = ax+" &times; 10<sup>-6</sup>";
//					axialCal = axialCal123.toFixed(3);
//					console.log("ax"+ax);
						$("#nextLevel").prop('hidden',true);	
  
								if (id1 <= 3) {
				
				if (text2 == ax) {
					checkAns = 0;

					 $("#transverseCalculation").prop('hidden',false);
							  $("#text2").prop('disabled',true);
							   $("#submit_load2").prop('disabled',true);
							    $("#text3").prop('disabled',false);
							   $("#submit_load3").prop('disabled',false);
	
				} else if (text2 != ax) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
			wrongAxialCnt++;
			
//				alert("Entered value is incorrect.Try it again.");
//				 $("#modalDialog").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id1 == 4) {
				
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Axial Strain = P / A &times; E where,<br> P = Applied load, A = area and E = Young's Modulus");
			wrongAxialCnt++;
//				alert("formula :Axial Strain = P / AE");
				
//				 $("#modalDialog").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text2 == ax) {
					checkAns = 0;
//					correct_cnt++;
					

					  $("#transverseCalculation").prop('hidden',false);
							  $("#text2").prop('disabled',true);
							   $("#submit_load2").prop('disabled',true);
							    $("#text3").prop('disabled',false);
							   $("#submit_load3").prop('disabled',false);
	
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + ax);
			wrongAxialCnt++;
//					alert("correct answer is " + ax );
					
//					 $("#modalDialog").html("<b class='boldTextRed'>Correct answer is " + axialCalConvert+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id1++;
			}				
						});
						
				
				var trans1 = 0;
				var transCal = 0;
				var transC = 0		
				var mulT = 0;
				
				var trans= 0;
				var transCal1 = 0;	          
				var transCal12 = 0;		
						 $("#submit_load3").click(function(){
							$("body").css("padding","0px 0px 0px 0px");
							pos = parseFloat(poisonSelect);
							trans=$("#text1").val();
							text3 = $("#text3").val();
							if(text3==""){
							$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");	
							}else{
								text3 = parseFloat($("#text3").val());
							
//							console.log("Value of axial cal"+axialCal);
						trans1 = parseFloat(trans);
					            
					            mulT = trans1*pos;
					            mul = areaSelect*mod;
//								mul = 0.001256*mod;
					            transCal1 = mulT/mul;
					            transCal12 = transCal1*Math.pow(10,6);
//					         var transCal123 = transCal12*Math.pow(10,6);
					         var transCal1 = -transCal12.toFixed(3);
					         transCal = parseFloat(transCal1);
//					            console.log("transCal"+transCal);
					            
							 if (id2 <= 3) {
				
				if (text3 == transCal) {
					checkAns = 0;
					
							
							
					$("#submit_load3").prop('disabled',true);
					$("#text3").prop('disabled',true);
							
							if(itr<5)
							      {
								 $("#nextReading").prop('hidden',false);
								 $("#nextLevel").prop('hidden',true);
								  }else{
									
									var tempCountJson ={};
						tempCountJson.inValidForce = wrongLoadCnt; 
						tempCountJson.axialCalculate = wrongAxialCnt;
						tempCountJson.transverseCal = wrongTransCnt;						
						counterMasterJson.stdCalculations = tempCountJson;
									
								$("#nextLevel").prop('hidden',false);
								$("#nextReading").prop('hidden',true);
								} 
								
							  itr++;
	                       
				} else if (text3 != transCal) {
					
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	
				wrongTransCnt++;	
//				alert("Entered value is incorrect.Try it again.");
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (id2 == 4) {
				
				$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Transverse Strain = (-P &times; &nu;) / (A &times; E) where, <br> &nu; = Poisson's Ratio</b>");
			wrongTransCnt++;
//				alert("formula : Transverse Strain = -P*Pos / AE");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (text3 == transCal) {
					checkAns = 0;
//					correct_cnt++;
					
							  
							  
							   $("#submit_load3").prop('disabled',true);
					             $("#text3").prop('disabled',true);
							  if(itr<5)
							      {
								 $("#nextReading").prop('hidden',false);
								 $("#nextLevel").prop('hidden',true);
								  }else{
									 
	                    var tempCountJson ={};
						tempCountJson.inValidForce = wrongLoadCnt; 
						tempCountJson.axialCalculate = wrongAxialCnt;
						tempCountJson.transverseCal = wrongTransCnt;						
						counterMasterJson.stdCalculations = tempCountJson;
						
								$("#nextLevel").prop('hidden',false);
								$("#nextReading").prop('hidden',true);
								} 
								
							  itr++;
							 
							 
	
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + transCal);
			wrongTransCnt++;
//					alert("correct answer is " + transCal );
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			id2++;					 
			}				 

							
						});
						
							$("#nextReading").click(function(){
								$("body").css("padding","0px 0px 0px 0px");
								 $("#nextReading").prop('hidden',true);
                             if(itr<=5){
	                           $("#text1").prop('disabled',false);
					           $("#submit_load1").prop('disabled',false);
					           $("#axialCalculation").prop('hidden',true);
               				   $("#transverseCalculation").prop('hidden',true);
               				  addFun();
               				 $("#text1").val('');
	                         $("#text2").val('');
	                         $("#text3").val('');
	                         finalDiag();
	                    
		               
	                         
                              }else{
	                         $("#nextReading").prop('hidden',true);
	                          $("#nextLevel").prop('hidden',false);
                              }
                              
				});			
						
			
				
				
			    
			function addFun(){
				
				             tempJson={};
							 tempJson.text1 = ax1;							 
							 tempJson.text2 = ax;
							 tempJson.text3 = transCal;
							   arrayJson.push(tempJson);
//							   console.log(arrayJson);
							   masterJson.demo=arrayJson;							    
							   tableReadingAdded();
//							   console.log(masterJson);
							   							   
			}
			
			
			
			
			
			
	
$("#nextLevel").click(function(){
	                 $("body").css("padding","0px 0px 0px 0px");
					addFun();
					tableReading(masterJson);
				  })	
				
}



function cantilever(){
	 $("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     resetDivSize();
     $("#centerText2").html('CALCULATION');
      $("#centerText1").html('CANTILEVER LOAD CELL');
      $("#delete-btn").prop("hidden",true);
	$("#validateCon").prop("hidden",true);
//      var htm = '<img src="images/cantiForCalculate.png" class="img-fluid"  width=95% height=100% ">'
//      $("#main-div-conf").html(htm);
      finalConfigCanti();
    var labels2 = ''
                   + '<div class="row"  >'
                   + '<div class="col-sm-1">'	               
	               +'</div>'
                   + '<div class="col-sm-2" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Length : '+lengthVal+' mm</center> </label>'
	               +'</div>'            
	               
	              
	               + '<div class="col-sm-2" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Width : '+widthVal+' mm </center> </label>'
	               +'</div>'
	               
	               + '<div class="col-sm-2" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Thickness : '+heightVal+'  mm</center> </label>'
	               +'</div>'
	               
	               + '<div class="col-sm-3" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Modulus : 2.07 &times 10 &#x2075 N/mm<sup>2</sup></center> </label>'
	               +'</div>'
	               
	                + '<div class="col-sm-1">'
	               
	               +'</div>'
	               +'</div>'
	               
	               +'<div class="row" id="appliedLoad" >'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Enter load applied (N):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-1" id="valueStep1">'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				 
				   +'<div class="row" id="axialCalculation" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Tensile Strain :  </label>'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'<input type="number" value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'<label  id=""  class="" style="font-size:18px;margin:15px 10px ;margin-left:-8px;"> &times;10<sup>-6</sup>  </label>'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load2"  style="width:100%;height:50%;margin-top: -6px;"  data-toggle="modal" data-target="#myModal">Submit</input>'
				   +'</div>'
					+'</div>'
				   +'<div class="row" id="transverseCalculation" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Compressive Strain :  </label>'
				   +'</div>'
				   +'<div class="col-sm-2">'
					+'<input type="number" value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'<label  id=""  class="" style="font-size:18px;margin:15px 10px ;margin-left:-8px;"> &times;10<sup>-6</sup> </label>'
				   +'</div>'
				    +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load3"  style="width:100%;height:50%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</input>'
				   +'</div>'
				   +'</div>'
	                +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextReading" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT READING </b></button>'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevel" data-toggle="modal" data-target="#selectCheck" hidden><b>NEXT LEVEL</b></button>'
        +'</div>'
	     +'<br>'  
				   
				   
      $("#canvas-div").html(labels2);
      
      var arrWeight = [];
    

      
      $("#submit_load1").click(function(){
	$("body").css("padding","0px 0px 0px 0px");
						id1 = 1;
                        id2 = 1;
                        tensile=$("#text1").val();
						tx1 = parseFloat(tensile);
						
						if(tensile==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
//            alert("Enter the value");
						}else{	
						if(tx1 >=10 && tx1<=100)
						 {
						    if(Number.isInteger(tx1)){
                        const index = arrWeight.indexOf(tx1);
                   arrWeight.push(tx1);
					var hasDuplicate = arrWeight.some((tx1, i) => arrWeight.indexOf(tx1) !== i);
					
//					console.log("hasDuplicate"+hasDuplicate);

					if(hasDuplicate == true){
						dupFlg = 0;
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Avoid Duplicates");
//					   alert("Avoid Duplicates");
					  arrWeight.splice(index,1);
					  $("#submit_load1").prop('disabled',false);
						$("#text1").prop('disabled',false);
					}else{
						forceAdd();
						$("#nextLevel").prop('hidden',true); 
						$("#nextReading").prop('hidden',true);
						$("#submit_load1").prop('disabled',true);
						$("#text1").prop('disabled',true);
						$("#axialCalculation").prop('hidden',false);
						$("#text2").prop('disabled',false);
					    $("#submit_load2").prop('disabled',false);
					    
					     }
					  }else{
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Integer Value");
			wrongLoadCnt++;
//							alert("Enter Integer Value");
						}
						}else{
							$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value between 10N to 100N");
			wrongLoadCnt++;
//							alert("Enter the value between 10N to 100N");
						}
						}
						});
      
      



var finalDiv,finalVal, finalAns;

$("#submit_load2").click(function(){
	$("body").css("padding","0px 0px 0px 0px");
  var tenStrain = $("#text2").val();
	
	if(tenStrain==""){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Value");
	}else{
	var numMul = 6*tx1*lengthVal;
	var denoMul = 207000*widthVal*heightVal*heightVal;
	finalDiv = numMul/denoMul;
	finalVal = finalDiv* Math.pow(10,6);
	var finalAns1 = finalVal.toFixed(3);
	finalAns = parseFloat(finalAns1);
	if (id1 <= 3) {
		if (tenStrain == finalAns) {
	 $("#transverseCalculation").prop('hidden',false);
	 $("#text2").prop('disabled',true);
	 $("#submit_load2").prop('disabled',true);
	 $("#text3").prop('disabled',false);
	 $("#submit_load3").prop('disabled',false);
	 }else if (tenStrain != finalAns){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
			wrongAxialCnt++;
	}
	 }else if (id1 == 4){
		    $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Tensile Strain = 6 &times; P<sub>x</sub> / Ewh<sup>2</sup><br>where, Px = Applied load, E = young's modulus, w = width and h = height.</b>");
			wrongAxialCnt++;
//	    alert("formula :Tensile Strain = 6.Px / Ewh*h");

	}else{
		if (tenStrain == finalAns) {
			$("#transverseCalculation").prop('hidden',false);
	 $("#text2").prop('disabled',true);
	 $("#submit_load2").prop('disabled',true);
	 $("#text3").prop('disabled',false);
	 $("#submit_load3").prop('disabled',false);
		}else{
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + finalAns);
			wrongAxialCnt++;
//			alert("Correct Answer is "+finalAns);
		}
	}
	id1++;
	 }
});
   
 
   
   var compresVal = 0, id2 =1;   
   var compresEnter;
   
$("#submit_load3").click(function(){
	$("body").css("padding","0px 0px 0px 0px");
	compresVal = -finalAns;
	compresEnter = $("#text3").val();
	
	if(compresEnter==""){
		
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Value");
		
//		alert("Enter the Value");
	}else{
		
			if (id2 <= 3) {
		if (compresEnter == compresVal) {
			 $("#text3").prop("disabled",true);
			 $("#submit_load3").prop("disabled",true);
	 	       if(iterate<=4){
		           
					$("#nextReading").prop('hidden',false);
					$("#nextLevel").prop('hidden',true); 	
					}else{
					
	                    var tempCountJson ={};
						tempCountJson.inValidForce = wrongLoadCnt; 
						tempCountJson.axialCalculate = wrongAxialCnt;
						tempCountJson.transverseCal = wrongTransCnt;						
						counterMasterJson.stdCalculations = tempCountJson;
							
						
					$("#nextReading").prop('hidden',true);
					$("#nextLevel").prop('hidden',false); 	
					}
	 }else if (compresEnter != compresVal){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
			wrongTransCnt++;
	}
	 }else if (id2 == 4){
		
		 $(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Comressive Strain = -6 &times; P<sub>x</sub> / Ewh<sup>2</sup>where, Px = Applied load, E = young's modulus, w = width and h = height. </b>");
			wrongTransCnt++;
//	    alert("formula :Tensile Strain = -6.Px / Ewh*h");

	}else{
		if (compresEnter == compresVal) {
			 $("#text3").prop("disabled",true);
			 $("#submit_load3").prop("disabled",true);
			if(iterate<=4){
					$("#nextReading").prop('hidden',false);
					$("#nextLevel").prop('hidden',true); 	
					}else{
						
	                    var tempCountJson ={};
						tempCountJson.inValidForce = wrongLoadCnt; 
						tempCountJson.axialCalculate = wrongAxialCnt;
						tempCountJson.transverseCal = wrongTransCnt;						
						counterMasterJson.stdCalculations = tempCountJson;
						 
					$("#nextReading").prop('hidden',true);
					$("#nextLevel").prop('hidden',false); 	
					}
		}else{
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + compresVal);
			wrongTransCnt++;
//			alert("Correct Answer is "+compresVal);
		}
	}
	id2++;
		
   }           				
});
     
   $("#nextReading").click(function(){ 
	$("body").css("padding","0px 0px 0px 0px");
	        id1 =1;
	        id2 = 1;
	        $("#text1").prop('disabled',false);
			$("#submit_load1").prop('disabled',false);
			$("#axialCalculation").prop('hidden',true);
            $("#transverseCalculation").prop('hidden',true);
            $("#nextReading").prop('hidden',true);
            addFun();
            finalConfigCanti();
            $("#text1").val('');
	        $("#text2").val('');
	        $("#text3").val('');
	        iterate++;
   }); 
   
   
   $("#nextLevel").click(function(){
	$("body").css("padding","0px 0px 0px 0px");
	addFun(); 
	tableWheatStone();
	   
	     
     }); 
     
   function addFun(){				
				             tempJson={};
							 tempJson.text1 = tx1;							 
							 tempJson.text2 = finalAns;
							 tempJson.text3 = compresEnter;
							   arrayJson.push(tempJson);
//							   console.log(arrayJson);
							   masterJson.demo=arrayJson;							    
							   tableReadingAdded1();
//							   console.log(masterJson);
							   							   
			}
     
}
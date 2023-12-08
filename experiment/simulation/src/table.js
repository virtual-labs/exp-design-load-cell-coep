var selLoad = 0;
var eb = 0;
var secondVal = 0;
var thirdVal = 0;
var idCal = 1;
var flg = 0;

function tableReading(masterJson)
{
	
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText2").html('CALCULATION');
      $("#centerText1").html('WHEATSTONE BRIDGE');
      
      let iterator = masterJson.demo.values();
      console.log(iterator.next().value);
      var htm = '<img src="images/wheatStoneBridgeE.png " class="img-fluid" width = 90% height = 90%>'
      $("#main-div-conf").html(htm);
      console.log("Value of ax1 : "+ax1);
      
      var firstLoad = 0, secondLoad = 0, thirdLoad = 0, forthLoad = 0, fifthLoad = 0 ;
      
      for(i=0,p=1;i<masterJson.demo.length;i++,p++)
						{
						tableMainDiv+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.demo[i].text1+'</td>'
							+'      <td>'+masterJson.demo[i].text2+"&times;10<sup>-6</sup>"+'</td>'
							+'      <td>'+masterJson.demo[i].text3+"&times;10<sup>-6</sup>"+'</td>'
				//			+'      <td>'+masterJson.weight[i].errorAdded+'</td>'
				//			+'      <td>'+p+'</td>'
				//		    +'      <td>'+masterJson.weight[i].totalWeight+'</td>'
							+'    </tr>'
							
							firstLoad = masterJson.demo[0].text1;
							secondLoad = masterJson.demo[1].text1;
							thirdLoad = masterJson.demo[2].text1;
							forthLoad = masterJson.demo[3].text1;
							fifthLoad = masterJson.demo[4].text1;
						}
      
      var tableMainDiv = '<div class="row ">'
					+'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Load Applied (N)</center></th>'
					+ '   <th><center>Axial </center></th>'
					+ '  <th><center>Transverse</center> </th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
					
					
					
	  var calculatePanel = '<div class="row" id="calVoltage" >'
									   +'<div class="col-sm-5">'
									   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select load(N):  </label>'
									   +'</div>'
									    +'<div class="col-sm-4">'
						   +'<select  class="form-control " id="text4" " style="height:auto;  margin-top: 9px;">'
						   +'<option value="0">--- Select load --- </option>'
						   +'<option value= "1">'+firstLoad+ '</option>'
						   +'<option value="2" >'+secondLoad+ ' </option>'
						   +'<option value="3" > '+thirdLoad+ ' </option>'
						   +'<option value="4" > '+forthLoad+ ' </option>'
						   +'<option value="5" > '+fifthLoad+ ' </option>'						  
						  
						   +'</select>'
						   +'</div>'
						   +'<div class="col-sm-3"  id="submitCal">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_selLoad" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 10px;" >Submit</input>'
				   
						   +'</div>'
				           +'</div>'
				   
				   +'<div class="row" id="guageFact" hidden>'
				   +'<div class="col-sm-12">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Guage factor (f) : 2  </label>'
				   +'</div>'
				   +'</div>'
//	               +'<div class="row" id="calVoltage" >'
//				   +'<div class="col-sm-5">'
//				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Enter load to calculate output voltage:  </label>'
//				   +'</div>'
//				   +'<div class="col-sm-3" id="valueStep1">'
//				   +'<input type="text"  value="" id="text4"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
//				   +'</div>'
//				   +'<div class="col-sm-3"  id="submitCal">'
//				   +'<br><button type="submit" class="btn btn-danger"  id="submit_selLoad" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
//				   +'</div>'
//				   +'</div>'	


                  +'<div class="row" id="ebVal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select the value of E<sub>b</sub>:  </label>'
				   +'</div>'
				    +'<div class="col-sm-4">'
	   +'<select  class="form-control " id="text5" " style="height:auto;  margin-top: 9px;">'
	   +'<option value="0">--- Select modulus --- </option>'
	   +'<option value="6" > 6 </option>'
	   +'<option value="7" > 7 </option>'
	   +'<option value="8" > 8 </option>'
	   +'<option value="9" > 9 </option>'
	   +'<option value="10" > 10 </option>'
	  
	  
	   +'</select>'
	   +'</div>'
				   +'<div class="col-sm-3"  id="submitCal">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_selLoad1" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 10px;" >Submit</input>'
				   
				   +'</div>'
				   +'</div>'
                   
//			       +'<div class="row" id="ebVal" hidden>'
//				   +'<div class="col-sm-5">'
//				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Enter the value of E<sub>b</sub>:  </label>'
//				   +'</div>'
//				   +'<div class="col-sm-3" id="valueStep2">'
//				   +'<input type="text"  value="" id="text5"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
//				   +'</div>'
//				   +'<div class="col-sm-3"  id="submitCal">'
//				   +'<br><button type="submit" class="btn btn-danger"  id="submit_selLoad1" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
//				   +'</div>'
//				   +'</div>'
				   
				    +'<div class="row" id="outVal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate output voltage (&micro;V):  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep2">'
				   +'<input type="text"  value="" id="text6"  style="height:auto;  margin-top: 15px;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitCal">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_selLoad2" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'				
			
				for(i=0,p=1;i<masterJson.demo.length;i++,p++)
						{
						tableMainDiv+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.demo[i].text1+'</td>'
							+'      <td>'+masterJson.demo[i].text2+"&times;10<sup>-6</sup>"+'</td>'
							+'      <td>'+masterJson.demo[i].text3+"&times;10<sup>-6</sup>"+'</td>'
				//			+'      <td>'+masterJson.weight[i].errorAdded+'</td>'
				//			+'      <td>'+p+'</td>'
				//		    +'      <td>'+masterJson.weight[i].totalWeight+'</td>'
							+'    </tr>'
						}
				console.log(masterJson.demo[0].text1);

				$("#canvas-div").html(tableMainDiv);
				$("#canvas-div").append(calculatePanel);
				var loadCheck=0;
				var loadCheck1=0;
				
				$("#text4").change(function(){
					   loadCheck1 = $("#text4").val();
					   loadCheck = parseFloat(loadCheck1);
					   console.log(" loadCheck "+loadCheck);
					    });
				
				$("#submit_selLoad").click(function(){
								
					 
				if(loadCheck!=0)	
					{
				for(i=0 ,flag=0; i<masterJson.demo.length;i++){
//					var temp=parseInt(masterJson.demo[i].text1);
					if(loadCheck ==1){
						flag = 1;
								secondVal = masterJson.demo[0].text2;
								thirdVal = masterJson.demo[0].text3;
								break;
					}else if(loadCheck==2)
					  {
						flag = 1;
								secondVal = masterJson.demo[1].text2;
								thirdVal = masterJson.demo[1].text3;
								break;
						
					}else if(loadCheck==3)
					 {
						flag = 1;
								secondVal = masterJson.demo[2].text2;
								thirdVal = masterJson.demo[2].text3;
								break;
					}else if(loadCheck==4){
						flag = 1;
								secondVal = masterJson.demo[3].text2;
								thirdVal = masterJson.demo[3].text3;
								break;
					}else if(loadCheck==5){
						flag = 1;
								secondVal = masterJson.demo[4].text2;
								thirdVal = masterJson.demo[4].text3;
								break;
					}
//							if(firstLoad ==temp || secondLoad==temp||thirdLoad==temp||forthLoad==temp||fifthLoad){
//								flag = 1;
//								secondVal = masterJson.demo[i].text2;
//								thirdVal = masterJson.demo[i].text3;
//								console.log("secondVal"+secondVal);
//								console.log("thirdVal"+thirdVal);
//								break;
//							}
					}
//					if(loadCheck!=0)
//					{
						flg = 1;
					bridgeCalculate();
						$("#ebVal").prop("hidden",false);
						$("#text4").prop("disabled",true);
						$("#submit_selLoad").prop("disabled",true);
						$("#guageFact").prop("hidden",false);
						selLoad = parseInt($("#text4").val());
						console.log("selLoad"+selLoad);
//					}
//					else{
//						alert("Select one of the calculated load value");
//					}
					}else{
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
//						alert("Select Appropriate Value");
					}
					
				});
			
			$("#submit_selLoad1").click(function(){	
				
				
				eb = parseInt($("#text5").val())
				
				  if(eb!=0){
					$("#outVal").prop("hidden",false);
					$("#submit_selLoad1").prop("disabled",true);
					$("#text5").prop("disabled",true);
					flg = 2;
					bridgeCalculate();
					
					
////					alert("Now based on selected values calculate the current and enter its appropriate value in the wheat stone bridge");
//                 
//					
					
				}else{
					$("#outVal").prop("hidden",true);
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
//					alert("Select the appropriate value.");
				}
				});
				
				
				$("#submit_selLoad2").click(function(){	
					corrOut = $("#text6").val();
					flg = 3;
				calculateOutput();
				bridgeCalculate();
				if(corrOut==""){
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
				}else{
					corrOut = parseFloat($("#text6").val());
				
				if (idCal <= 3) {
				
				if (corrOut == outVolt) {
					checkAns = 0;
                     
                     $("#submit_selLoad2").prop("disabled",true);
                     $("#text6").prop("disabled",true);
                     additionToJson();
                      $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html(" Experiment Completed Successfully!!" );
	
				} else if (corrOut != outVolt) {
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
	
	
			} else if (idCal == 4) {
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Output voltage = Eb*f[E2+E4-E1-E3]/4</b>");
//				alert("formula : Output voltage = Eb*f[E2+E4-E1-E3]/4");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (corrOut == outVolt) {
					checkAns = 0;
//					correct_cnt++;
					 additionToJson();
                     $("#submit_selLoad2").prop("disabled",true);
					 $("#text6").prop("disabled",true);
					 $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html(" Experiment Completed Successfully!!" );
	
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + outVolt);
//					alert("correct answer is " + outVolt );
					
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			idCal++;
			}	
				});
				
				function additionToJson(){
					tempJson = {};
	 tempJson.selectedLoad = selLoad ;
	 tempJson.ebValue = eb;
	 tempJson.outputVoltage = outVolt;
	 arrayJson.push(tempJson);
	 masterJson.demo=arrayJson;
	 console.log(masterJson);
				}
				
}			
function tableReadingAdded()
{
	
      $("#centerText1").html('OBSERVATIONS');
      
     
      
      var tableMainDiv = '<div class="row ">'
					+'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Load Applied (N)</center></th>'
					+ '   <th><center>Axial </center></th>'
					+ '  <th><center>Transverse</center> </th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
	  var calculatePanel = ''
	               +'<div class="row" id="calVoltage" >'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate output voltage:  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitCal">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load1" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'				
				for(i=0,p=1;i<masterJson.demo.length;i++,p++)
						{
						tableMainDiv+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.demo[i].text1+'</td>'
							+'      <td>'+masterJson.demo[i].text2+"&times;10<sup>-6</sup>"+'</td>'
							+'      <td>'+masterJson.demo[i].text3+"&times;10<sup>-6</sup>"+'</td>'
				//			+'      <td>'+masterJson.weight[i].errorAdded+'</td>'
				//			+'      <td>'+p+'</td>'
				//		    +'      <td>'+masterJson.weight[i].totalWeight+'</td>'
							+'    </tr>'
						}


					 
				$("#main-div-conf").html(tableMainDiv);
				//$("#canvas-div").append(calculatePanel);
}

var forMul = 0;
var addSub = 0;
var finalMul = 0;
var outVolt = 0;
var corrOut = 0;

function calculateOutput(){
	
	var axialConvert = secondVal*Math.pow(10,-6);
	var transConvert = thirdVal*Math.pow(10,-6);
		forMul=eb*2;

//	forMul=eb*selLoad;
	var forDiv = forMul/4;
	var forDivRound = forDiv; 
//	console.log("forMul"+forMul);
    addSub = (axialConvert+axialConvert-transConvert-transConvert);
//	addSub = (transConvert+transConvert-axialConvert-axialConvert);
//	console.log("addSub"+addSub);
//	finalMul = (forMul*addSub);
//	console.log("finalMul"+finalMul);
	var outVolt12 = addSub*forDivRound;
	var outVolt123 = outVolt12*Math.pow(10,6);
	var outVolt1234 = outVolt123.toFixed(2); 
	outVolt = parseFloat(outVolt1234);
//	outVolt = Math.exp(outVolt123);
//	console.log("outVolt"+outVolt);
	
}
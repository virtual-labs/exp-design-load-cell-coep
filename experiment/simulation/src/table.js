var selLoad = 0;
var eb = 0;
var secondVal = 0;
var thirdVal = 0;
var idCal = 1;
var flg = 0,loadCheck=0;
var p1,p2,p3,p4,p5,p11,p22,p33,p44;
var r1,r2,r3,txt;
var flgType = 0;
var selLoadOut = 0;
graphJson = {};
arrayJsong = [];

var rendValFlg = 0;
var firstLoad = 0, secondLoad = 0, thirdLoad = 0, forthLoad = 0, fifthLoad = 0 ;
var wrongOpCnt = 0;


function tableReading(masterJson)
{
	rendValFlg = 1;
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#canvas-div-sub").html('');
     
      $("#centerText2").html('CALCULATION');
      $("#centerText1").html('WHEATSTONE BRIDGE');
      flgType = 1;
      let iterator = masterJson.demo.values();
//      console.log(iterator.next().value);
//      var htm = '<img src="images/wheatStoneBridgeE.png " class="img-fluid" width = 90% height = 90%>'
//      $("#main-div-conf").html(htm);
//      bridgeCalculate();

//       onLoad();

//      console.log("Value of ax1 : "+ax1);
      
      
      
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
					+ '   <th><center>Tensile Strain </center></th>'
					+ '  <th><center>Compressive Strain</center> </th>'

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
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Gauge factor (f) : 2  </label>'
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
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select the value of supply voltage E<sub>b</sub> :  </label>'
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
				   +'<input type="number"  value="" id="text6"  style="height:auto;  margin-top: 15px;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitCal">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_selLoad2" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   
				   +'</div>'				   
				   +'<div class="row" >'
				   +'<div class="col-sm-12">'	
				   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="anotherReading" hidden><b>SELECT ANOTHER LOAD </b></button>'
		           +'</div>'	
			       +'</div>'
			       +'<br>'
			       +'</div>'				   
				   +'<div class="row" >'
				   +'<div class="col-sm-12">'	
				   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="finishReading" data-toggle="modal" data-target="#myModal" hidden><b>NEXT LEVEL </b></button>'
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
//				console.log(masterJson.demo[0].text1);

				$("#canvas-div").html(tableMainDiv);
               $("#canvas-div").append(calculatePanel);
               onLoad();
               
            function onLoad(){
	$("#main-div-conf").html('');
	 paper = new Raphael(document.getElementById('main-div-conf'));


var w = 600;
var h = 600;

var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var x=100;
	var y=82;
	
	 wheatStone = paper.image("images/wheatStoneBridgeE1.png",(x-40), (y-100),500, 400);
	 
	 var wheatBorder = paper.path('M' + (x -30) + ' ' + (y + 220 )  + 'l 400 0 l 0 -300 l -400 0 z')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182' }).toFront();
		
     columnType = paper.image("images/columnType1.png",(x), (y+270),250, 150);		
		
//	cantiBeam = paper.image("images/cantiBeamW.png",(x), (y+270),250, 150);
	
	 var beamBorder = paper.path('M' + (x -30) + ' ' + (y + 260 )  + 'l 400 0 l 0 170 l -400 0 z')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182' }).toFront();
		
    var linJoin = paper.path('M' + (x +60) + ' ' + (y + 260 )  + 'l 0 -40')
		.attr({  'stroke-width': '2', 'stroke':'#000' }).toFront();	
		
		var arr = paper.path('M' + (x +60) + ' ' + (y + 230 )  + 'l 8 0 l -8 -8 l -8 8 z')
		.attr({  'stroke-width': '2', 'stroke':'#000','fill':'#decac8' }).toFront();
		
		 p5 =  paper.text(x-10,y+75,"V").attr({'stroke' : '#000' , "font-size":"16px","font-weight": "bold","fill":"red"});

	
		var linF = paper.path("M"+(x+100+31)+" "+(y+289)+" l 0 -22 ")
	 .attr({'stroke':'#000','stroke-width': 2});
 
	  var linAr = paper.path("M"+(x+100+31)+" "+(y+289)+"l 5 -5 l -10 0 l 5 5")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
	

	  ftxt =  paper.text((x+153),(y+272),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
	
	
}
				var loadCheck=0;
				var loadCheck1=0;
		
					$("#text4").change(function(){
					
					loadCheck1 = $("#text4").val();
			 loadCheck = parseInt(loadCheck1);	
			 	
					    });	
				
				
				$("#submit_selLoad").click(function(){
						$("body").css("padding","0px 0px 0px 0px");
//                loadCheck = $("#text4").val();
				if(loadCheck==0)	
					{
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
					}else{
						
				 pressureValue =$("#text4").children(":selected").attr("value");			 
			 $("#text4").children('option[value="' + pressureValue + '"]').attr('disabled', true);
				
						
//				for(i=0 ,flag=0; i<masterJson.demo.length;i++){
//					var temp=parseInt(masterJson.demo[i].text1);
					if(loadCheck ==1){
						flag = 1;
						selLoadOut = firstLoad;
								secondVal = masterJson.demo[0].text2;
								thirdVal = masterJson.demo[0].text3;
//								break;
					}else if(loadCheck==2)
					  {
						flag = 1;
						selLoadOut = secondLoad;
								secondVal = masterJson.demo[1].text2;
								thirdVal = masterJson.demo[1].text3;
//								break;
						
					}else if(loadCheck==3)
					 {
						flag = 1;
						selLoadOut = thirdLoad;
								secondVal = masterJson.demo[2].text2;
								thirdVal = masterJson.demo[2].text3;
//								break;
					}else if(loadCheck==4){
						flag = 1;
						selLoadOut = forthLoad;
								secondVal = masterJson.demo[3].text2;
								thirdVal = masterJson.demo[3].text3;
//								break;
					}else if(loadCheck==5){
						flag = 1;
						selLoadOut = fifthLoad;
								secondVal = masterJson.demo[4].text2;
								thirdVal = masterJson.demo[4].text3;
//								break;
					}
//							if(firstLoad ==temp || secondLoad==temp||thirdLoad==temp||forthLoad==temp||fifthLoad){
//								flag = 1;
//								secondVal = masterJson.demo[i].text2;
//								thirdVal = masterJson.demo[i].text3;
//								console.log("secondVal"+secondVal);
//								console.log("thirdVal"+thirdVal);
//								break;
//							}
//					}
//					if(loadCheck!=0)
//					{
	                  console.log("selLoadOut : "+selLoadOut);
						flg = 1;
					bridgeCalculate();
						$("#ebVal").prop("hidden",false);
						$("#text4").prop("disabled",true);
						$("#submit_selLoad").prop("disabled",true);
						$("#guageFact").prop("hidden",false);
						selLoad = parseInt($("#text4").val());
//						console.log("selLoad"+selLoad);
//					}
//					else{
//						alert("Select one of the calculated load value");
//					}
					}
					
				});
			
			$("#submit_selLoad1").click(function(){	
				
				$("body").css("padding","0px 0px 0px 0px");
				eb = parseInt($("#text5").val())
				
				  if(eb!=0){

    $('#text5').prop('disabled', true);    
    $("#submit_selLoad1").prop("disabled",true);
    $('#text5 option').prop('disabled', true);
    $('#text5 option[value="' + eb + '"]').prop('disabled', false);
					
					$("#outVal").prop("hidden",false);
					$("#submit_selLoad1").prop("disabled",true);
					$("#text5").prop("disabled",true);
					flg = 2;
					bridgeCalculate();
					
				
					
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
					$("body").css("padding","0px 0px 0px 0px");
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
                     if(iter1<4){
					 $("#anotherReading").prop("hidden",false);
                     $("#finishReading").prop("hidden",true);	
					}else{
						$("#anotherReading").prop("disabled",true);
                     $("#finishReading").prop("hidden",false);
					}
                     
                      
	
				} else if (corrOut != outVolt) {
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
            wrongOpCnt++;
//				alert("Entered value is incorrect.Try it again.");
				
				
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (idCal == 4) {
				$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Output voltage = Eb &times; f[&epsilon;<sub>2</sub>+&epsilon;<sub>4</sub>-&epsilon;<sub>1</sub>-&epsilon;<sub>3</sub>/4</b>");
			wrongOpCnt++;
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
					 if(iter1<4){
					 $("#anotherReading").prop("hidden",false);
                     $("#finishReading").prop("hidden",true);	
					}else{
						$("#anotherReading").prop("disabled",true);
                     $("#finishReading").prop("hidden",false);
					}
					  
//					 $("#btnModal").removeClass("btn-danger").addClass("btn-success");
//	        $(".modal-header").html("Success Message");
//            $(".modal-header").css("background","#5cb85c");
//			$("#MsgModal").html(" Experiment Completed Successfully!!" );
	
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + outVolt);
			wrongOpCnt++;
//					alert("correct answer is " + outVolt );
					
//					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + axialCal+"</b>");
//					 $("body").css("padding","0px 0px 0px 0px");
//					 wrong_cnt++;	
	
				}
			}
			idCal++;
			}	
				});
		
			$("#finishReading").click(function(){
				$("body").css("padding","0px 0px 0px 0px");
	         
	                    var tempCountJson ={};
						tempCountJson.outPut = wrongOpCnt; 						
						counterMasterJson.outputVoltage = tempCountJson;
	         
	         $("#anotherReading").prop("disabled",true);	
			$("#finishReading").prop("disabled",true);
//	
//				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
//	        $(".modal-header").html("Success Message");
//            $(".modal-header").css("background","#5cb85c");
//			$("#MsgModal").html("Correct Answer is " + ax);
//			
			
		    graphReading();
			
		});
			
			function complete(){
				
				alert("Experiment Completed Successfully!");
//				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
//	        $(".modal-header").html("Success Message");
//            $(".modal-header").css("background","#5cb85c");
//			$("#MsgModal").html("Experiment Completed Successfully!");
			}
			
			var iter1 = 0;
			$("#anotherReading").click(function(){
				$("body").css("padding","0px 0px 0px 0px");
				clear();
				onLoad();
				idCal = 1;
				loadCheck1 = 0;
				loadCheck = 0;
				$("#text4").val(0);
				$("#text4").prop("disabled",false);
				$("#submit_selLoad").prop("disabled",false);
				$("#guageFact").prop("hidden",true);
				$("#ebVal").prop("hidden",true);
				$("#outVal").prop("hidden",true);
//				$("#text5").val(eb);
				$("#text6").val('');
//				ftxt.remove();
//				 ftxt =  paper.text((x+130),(y+272),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
				$("#anotherReading").prop("hidden",true);
				$("#finishReading").prop("hidden",true);
				 $('#text5 option').prop('disabled', true);    
                 $('#text5 option[value="' + eb + '"]').prop('disabled', false);
//				$("#text5").prop("disabled",false);
				$("#submit_selLoad1").prop("disabled",false);
				$("#submit_selLoad2").prop("disabled",false);
				$("#text6").prop("disabled",false);
				iter1++;
			});
			
			
			function clear(){
				
//				p1.remove();
//				p2.remove();
//				p3.remove();
//				p4.remove();
				p5.remove();
//				p11.remove();
//				p22.remove();
//				p33.remove();
//				p44.remove();
				txt.remove();
				ftxt.remove();			
	  ftxt = paper.text((x+130),(y+272),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			

     r1.attr({"fill":"#fff"});
		
			}
				
				function additionToJson(){
	 tempJson = {};
	 tempJson.selectedLoad = selLoadOut ;
	 tempJson.ebValue = eb;
	 tempJson.outputVoltage = outVolt;
	 tempJson.ranOutput = ranOutput;
	 arrayJsong.push(tempJson);
	 graphJson.demo=arrayJsong;
	 
	 console.log(graphJson);
				}
				
}			
function tableReadingAdded()
{
	
      $("#centerText1").html('OBSERVATIONS');
      
      masterJson.demo.sort(function(a, b){
	  		  return a.text1 - b.text1;
			});
     
      
      var tableMainDiv = '<div class="row ">'
					+'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Load Applied (N)</center></th>'
					+ '   <th><center>Axial Strain </center></th>'
					+ '  <th><center>Transverse Strain</center> </th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
	  var calculatePanel = ''
	               +'<div class="row" id="calVoltage" >'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate output voltage:  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
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


					 
								$("#canvas-div-sub").html(tableMainDiv);

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
	
//	var percentageError = (Math.random() * 2 + 2) / 100; // This generates a random number between 0.03 and 0.05

     var percentageError = (Math.random() * 1 + 2) / 100;

    // Determine whether to add or subtract the error
    var isPositive = Math.random() < 0.5; // 50% chance to add or subtract

    // Calculate the error amount
    var errorAmount = outVolt * percentageError;

    // Apply the error
    var ranOutput1 = (isPositive ? outVolt + errorAmount : outVolt - errorAmount).toFixed(2);
      ranOutput = parseFloat(ranOutput1);
//      ranOutput = ranOutput.tofixed(2);
    // Log the final output voltage
//    console.log("Output Voltage with Error: " + outVolt.toFixed(2)); 
	
//	outVolt = Math.exp(outVolt123);
//	console.log("outVolt"+outVolt);
	
}

//var tableMainDiv1;

function tableReadingAdded1(){
	$("#centerText2").html('');
      $("#centerText1").html('');
      
      $("#centerText2").html('CALCULATION');
      $("#centerText1").html('OBSERVATIONS');
      
       masterJson.demo.sort(function(a, b){
	  		  return a.text1 - b.text1;
			});
      
      rendValFlg = 2;
	var tableMainDiv1 = '<div class="row ">'
					+'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Load Applied (N)</center></th>'
					+ '   <th><center>Tensile Strain </center></th>'
					+ '  <th><center>Compressive Strain</center> </th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
	
	for(i=0,p=1;i<masterJson.demo.length;i++,p++)
						{
						tableMainDiv1+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.demo[i].text1+'</td>'
							+'      <td>'+masterJson.demo[i].text2+"&times;10<sup>-6</sup>"+'</td>'
							+'      <td>'+masterJson.demo[i].text3+"&times;10<sup>-6</sup>"+'</td>'
			
							+'    </tr>'
						}


					 
				$("#canvas-div-sub").html(tableMainDiv1);
				
}

var oneLoad,twoLoad,threeLoad,fourLoad,fiveLoad;

function tableWheatStone(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#canvas-div-sub").html('');
     	
      $("#centerText2").html('CALCULATION');
      $("#centerText1").html('WHEATSTONE BRIDGE');
      flgType = 2;
      let iterator = masterJson.demo.values();
//      console.log(iterator.next().value);
//      var htm = '<img src="images/wheatStoneBridgeE.png " class="img-fluid" width = 90% height = 90%>'
//      $("#main-div-conf").html(htm);
       
//      wheatStone = paper.image("images/wheatStoneBridgeEraseR1.png",(x-40), (y-100),500, 400);
      
      var tableMainDiv1 = '<div class="row ">'
					+'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Load Applied (N)</center></th>'
					+ '   <th><center>Tensile Strain </center></th>'
					+ '  <th><center>Compressive Strain</center> </th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
					
					for(i=0,p=1;i<masterJson.demo.length;i++,p++)
						{
						tableMainDiv1+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.demo[i].text1+'</td>'
							+'      <td>'+masterJson.demo[i].text2+"&times;10<sup>-6</sup>"+'</td>'
							+'      <td>'+masterJson.demo[i].text3+"&times;10<sup>-6</sup>"+'</td>'
							+'    </tr>'
							
					
							oneLoad = masterJson.demo[0].text1;
							twoLoad = masterJson.demo[1].text1;
							threeLoad = masterJson.demo[2].text1;
							fourLoad = masterJson.demo[3].text1;
							fiveLoad = masterJson.demo[4].text1;
							
						}
					
	var calculatePanel = '<div class="row" id="calVoltage" >'
									   +'<div class="col-sm-5">'
									   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select load(N):  </label>'
									   +'</div>'
									    +'<div class="col-sm-4">'
						   +'<select  class="form-control " id="text4" " style="height:auto;  margin-top: 9px;">'
						   +'<option value="0">--- Select load --- </option>'
						   +'<option value= "1">'+oneLoad+ '</option>'
						   +'<option value="2" >'+twoLoad+ ' </option>'
						   +'<option value="3" > '+threeLoad+ ' </option>'
						   +'<option value="4" > '+fourLoad+ ' </option>'
						   +'<option value="5" > '+fiveLoad+ ' </option>'						  
						  
						   +'</select>'
						   +'</div>'
						   +'<div class="col-sm-3"  id="submitCal">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_selLoad" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 10px;" >Submit</input>'
				   
						   +'</div>'
				           +'</div>'
				   
				   +'<div class="row" id="guageFact" hidden>'
				   +'<div class="col-sm-12">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Gauge factor (f) : 2  </label>'
				   +'</div>'
				   +'</div>'				
					+'<div class="row" id="ebVal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select the value of supply voltage E<sub>b</sub>:  </label>'
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
				   
				    +'<div class="row" id="outVal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate output voltage (mV):  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep2">'
				   +'<input type="number"  value="" id="text6"  style="height:auto;  margin-top: 15px;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitCal">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_selLoad2"  data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   
				   +'</div>'				   
				   +'<div class="row" >'
				   +'<div class="col-sm-12">'	
				   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="anotherReading" hidden><b>SELECT ANOTHER LOAD </b></button>'
		           +'</div>'	
			       +'</div>'
			       +'<br>'
			       +'</div>'				   
				   +'<div class="row" >'
				   +'<div class="col-sm-12">'	
				   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="finishReading" data-toggle="modal" data-target="#myModal" hidden><b>NEXT LEVEL </b></button>'
		           +'</div>'	
			       +'</div>'
	
				$("#canvas-div").html(tableMainDiv1);
               $("#canvas-div").append(calculatePanel);
               onLoad();
               
            function onLoad(){
	$("#main-div-conf").html('');
	 paper = new Raphael(document.getElementById('main-div-conf'));


var w = 600;
var h = 600;

var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var x=100;
	var y=82;
	
	 wheatStone = paper.image("images/wheatStoneBridgeE1.png",(x-40), (y-100),500, 400);
	 
	 var wheatBorder = paper.path('M' + (x -30) + ' ' + (y + 220 )  + 'l 400 0 l 0 -300 l -400 0 z')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182' }).toFront();
		
	cantiBeam = paper.image("images/cantiBeamW1.png",(x), (y+270),250, 150);
	
	 var beamBorder = paper.path('M' + (x -30) + ' ' + (y + 260 )  + 'l 400 0 l 0 170 l -400 0 z')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182' }).toFront();
		
    var linJoin = paper.path('M' + (x +60) + ' ' + (y + 260 )  + 'l 0 -40')
		.attr({  'stroke-width': '2', 'stroke':'#000' }).toFront();	
		
	var arr = paper.path('M' + (x +60) + ' ' + (y + 230 )  + 'l 8 0 l -8 -8 l -8 8 z')
		.attr({  'stroke-width': '2', 'stroke':'#000','fill':'#decac8' }).toFront();
		
		 var linF = paper.path("M"+(x+210)+" "+(y+285)+" l 0 -18 ")
	 .attr({'stroke':'#000','stroke-width': 2});
	 
	  var linAr = paper.path("M"+(x+210)+" "+(y+285)+"l 5 -5 l -10 0 l 5 5")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
	 
	 		 p5 =  paper.text(x-10,y+75,"V").attr({'stroke' : '#000' , "font-size":"16px","font-weight": "bold","fill":"red"});

	 
//	 var arr = paper.path("M"+(x+50+lenVal-40)+" "+(y-21)+" l 10 -10 l -20 0 l 10 10 ")
//	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
	 
	  ftxt = paper.text((x+240),(y+272),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
	
	
}   

      $("#text4").change(function(){
					
					loadCheck1 = $("#text4").val();
			 loadCheck = parseInt(loadCheck1);	
			 		 
			 	
					    });	
      
    $("#submit_selLoad").click(function(){
						
$("body").css("padding","0px 0px 0px 0px");
				if(loadCheck1==0)	
					{
						$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
					}else{
						
					pressureValue =$("#text4").children(":selected").attr("value");			 
			 $("#text4").children('option[value="' + pressureValue + '"]').attr('disabled', true);
					

					if(loadCheck1 ==1){
						flag = 1;
						selLoadOut = oneLoad;
								secondVal = masterJson.demo[0].text2;
								thirdVal = masterJson.demo[0].text3;
//								break;
					}else if(loadCheck1==2)
					  {
						flag = 1;
						selLoadOut = twoLoad;
								secondVal = masterJson.demo[1].text2;
								thirdVal = masterJson.demo[1].text3;
//								break;
						
					}else if(loadCheck1==3)
					 {
						flag = 1;
						selLoadOut = threeLoad;
								secondVal = masterJson.demo[2].text2;
								thirdVal = masterJson.demo[2].text3;
//								break;
					}else if(loadCheck1==4){
						flag = 1;
						selLoadOut = fourLoad;
								secondVal = masterJson.demo[3].text2;
								thirdVal = masterJson.demo[3].text3;
//								break;
					}else if(loadCheck1==5){
						flag = 1;
						selLoadOut = fiveLoad;
								secondVal = masterJson.demo[4].text2;
								thirdVal = masterJson.demo[4].text3;
//								break;
					}

						flg = 1;
					bridgeCalculate();
						$("#ebVal").prop("hidden",false);
						$("#text4").prop("disabled",true);
						$("#submit_selLoad").prop("disabled",true);
						$("#guageFact").prop("hidden",false);
						selLoad = parseInt($("#text4").val());

					}
					
				});
			
			$("#submit_selLoad1").click(function(){	
				$("body").css("padding","0px 0px 0px 0px");
				
				eb = parseInt($("#text5").val())
				
				  if(eb!=0){
					
					$('#text5').prop('disabled', true);    
    $("#submit_selLoad1").prop("disabled",true);
    $('#text5 option').prop('disabled', true);
    $('#text5 option[value="' + eb + '"]').prop('disabled', false);
					
					$("#outVal").prop("hidden",false);
					$("#submit_selLoad1").prop("disabled",true);
					$("#text5").prop("disabled",true);
					flg = 2;
					bridgeCalculate();
					

					
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
					$("body").css("padding","0px 0px 0px 0px");
                corrOut = $("#text6").val();
					flg = 3;
				calculateOutput1();
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
                     additionToJson1();
                     if(iter1<4){
					 $("#anotherReading").prop("hidden",false);
                     $("#finishReading").prop("hidden",true);	
					}else{
						$("#anotherReading").prop("disabled",true);
                     $("#finishReading").prop("hidden",false);
					}
                     
                      
	
				} else if (corrOut != outVolt) {
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	
			wrongOpCnt++;
//				alert("Entered value is incorrect.Try it again.");
				
				
//				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again . </b>");
//				 $("body").css("padding","0px 0px 0px 0px");
//				console.log("wrong");
//				wrong_cnt++;
				}
	
	
			} else if (idCal == 4) {
				$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Output voltage = Eb &times; f[&epsilon;<sub>2</sub>+&epsilon;<sub>4</sub>-&epsilon;<sub>1</sub>-&epsilon;<sub>3</sub>]/4</b>");
			wrongOpCnt++;
//				alert("formula : Output voltage = Eb*f[E2+E4-E1-E3]/4");
				
//				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
//				 $("body").css("padding","0px 0px 0px 0px");
//				 wrong_cnt++;
				
			} else {
//				ax1 = $("#text2").val().trim();
	
				if (corrOut == outVolt) {
					checkAns = 0;
//					correct_cnt++;
					 additionToJson1();
                     $("#submit_selLoad2").prop("disabled",true);
					 $("#text6").prop("disabled",true);
					 if(iter1<4){
					 $("#anotherReading").prop("hidden",false);
                     $("#finishReading").prop("hidden",true);	
					}else{
						$("#anotherReading").prop("disabled",true);
                     $("#finishReading").prop("hidden",false);
					}
					  

	
				} else {
					checkAns = 0;
					$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + outVolt);
			wrongOpCnt++;
//					alert("correct answer is " + outVolt );
			
				}
			}
			idCal++;
       }
    
                });
      
      
      var ranOutput;
      function calculateOutput1(){
	var axialConvert = secondVal*Math.pow(10,-6);
	var transConvert = thirdVal*Math.pow(10,-6);
		forMul=eb*2;

//	forMul=eb*selLoad;
	var forDiv = forMul/4;
	var forDivRound = forDiv; 
//	console.log("forMul"+forMul);
    addSub = (axialConvert+axialConvert-transConvert-transConvert);

	var outVolt12 = addSub*forDivRound;
	var outVolt123 = outVolt12*Math.pow(10,6);
	var outVolt1234 = outVolt123.toFixed(2); 
	var outp12 = (outVolt1234/1000).toFixed(2);
	outVolt = parseFloat(outp12);
	
	var percentageError = (Math.random() * 2 + 3) / 100; // This generates a random number between 0.03 and 0.05

    // Determine whether to add or subtract the error
    var isPositive = Math.random() < 0.5; // 50% chance to add or subtract

    // Calculate the error amount
    var errorAmount = outVolt * percentageError;

    // Apply the error
   var ranOutput1 = (isPositive ? outVolt + errorAmount : outVolt - errorAmount).toFixed(2);
      ranOutput = parseFloat(ranOutput1);
//      ranOutput = ranOutput.tofixed(2);
    // Log the final output voltage
//    console.log("Output Voltage with Error: " + outVolt.toFixed(2)); 
	

}

	function additionToJson1(){
	 tempJson = {};
	 tempJson.selectedLoad = selLoadOut ;
	 tempJson.ebValue = eb;
	 tempJson.outputVoltage = outVolt;
	 tempJson.ranOutput=ranOutput;
	 arrayJsong.push(tempJson);
	 graphJson.demo=arrayJsong;
	 console.log(graphJson);
				}
      
      
      	$("#finishReading").click(function(){
	         $("body").css("padding","0px 0px 0px 0px");
	         $("#anotherReading").prop("disabled",true);	
			$("#finishReading").prop("disabled",true);
	
	                    var tempCountJson ={};
						tempCountJson.outPut = wrongOpCnt; 						
						counterMasterJson.outputVoltage = tempCountJson;
	
//				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
//	        $(".modal-header").html("Success Message");
//            $(".modal-header").css("background","#5cb85c");
//			$("#MsgModal").html("Correct Answer is " + ax);
//			
			
		    graphReading();
			
		});
			
//			function complete(){
//				
//				alert("Experiment Completed Successfully!");
////				$("#btnModal").removeClass("btn-danger").addClass("btn-success");
////	        $(".modal-header").html("Success Message");
////            $(".modal-header").css("background","#5cb85c");
////			$("#MsgModal").html("Experiment Completed Successfully!");
//			}
			
			var iter1 = 0;
			$("#anotherReading").click(function(){
				$("body").css("padding","0px 0px 0px 0px");
				clear();
				idCal = 1;
				loadCheck1 = 0;
				$("#text4").val(0);
				$("#text4").prop("disabled",false);
				$("#submit_selLoad").prop("disabled",false);
				$("#guageFact").prop("hidden",true);
				$("#ebVal").prop("hidden",true);
				$("#outVal").prop("hidden",true);
//				$("#text5").val(0);
				$("#text6").val('');
				
				 $('#text5 option').prop('disabled', true);    
                 $('#text5 option[value="' + eb + '"]').prop('disabled', false);
				
				$("#anotherReading").prop("hidden",true);
				$("#finishReading").prop("hidden",true);
//				$("#text5").prop("disabled",false);
				$("#submit_selLoad1").prop("disabled",false);
				$("#submit_selLoad2").prop("disabled",false);
				$("#text6").prop("disabled",false);
				iter1++;
			});
			
			
			function clear(){
//				p1.remove();
//				p2.remove();
//				p3.remove();
//				p4.remove();
				p5.remove();
//				p11.remove();
//				p22.remove();
//				p33.remove();
//				p44.remove();
				txt.remove();
				ftxt.remove();			
	  ftxt = paper.text((x+240),(y+255),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			

     r1.attr({"fill":"#fff"});
			}
      
}



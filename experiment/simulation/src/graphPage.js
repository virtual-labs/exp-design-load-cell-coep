
var errorCnt = 0;
var sensitivityCnt = 0;


function graphReading(){

$("#main-div-conf").html('');	
$("#canvas-div").html('');	
$("#canvas-div-sub").html('');

$("#centerText2").html('CHARACTERIZATION');
$("#centerText1").html('GRAPH');

var xdata = [];
var ydata = [];
var graphData1 = [];

var xdata1 = [];
var ydata1 = [];
var graphData2 = [];

for (var i = 0; i < graphJson.demo.length; i++) {
    xdata[i] = parseFloat(graphJson.demo[i].selectedLoad);
    ydata[i] = parseFloat(graphJson.demo[i].outputVoltage);
}

for (var j = 0; j < graphJson.demo.length; j++) {
    graphData1.push([xdata[j], ydata[j]]);
}

for (var i = 0; i < graphJson.demo.length; i++) {
//    xdata[i] = parseFloat(graphJson.demo[i].selectedLoad);
    ydata1[i] = parseFloat(graphJson.demo[i].ranOutput);
}

for (var j = 0; j < graphJson.demo.length; j++) {
    graphData2.push([xdata[j], ydata1[j]]);
}






// Finding the highest point for both Standard and Observed data
var maxStandard = Math.max.apply(null, ydata);
var maxStandardIndex = ydata.indexOf(maxStandard);
//var maxStandardPoint = [xdata[maxStandardIndex], maxStandard];

var maxObserved = Math.max.apply(null, ydata1);
var maxObservedIndex = ydata1.indexOf(maxObserved);
//var maxObservedPoint = [xdata1[maxObservedIndex], maxObserved];


const combinedData = xdata.map((x, index) => ({  
    x: x,  
    graphData1: graphData1[index],  
    graphData2: graphData2[index]  
}));  

// Sort the combined data based on x values  
combinedData.sort((a, b) => a.x - b.x);  

// Extract sorted values back into separate arrays  
const sortedXdata = combinedData.map(data => data.x);  
const sortedGraphData1 = combinedData.map(data => data.graphData1);  
const sortedGraphData2 = combinedData.map(data => data.graphData2);  


Highcharts.chart('main-div-conf', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Observations'
    },
    xAxis: {
        title: {
            text: 'Selected Load'
        },
    },
    yAxis: {
        title: {
            text: 'Output Voltage'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            marker: {
                enabled: false,
                radius: 4
            }
        }
    },
    tooltip: {
        enabled: true,
        shared: true,
        valueDecimals: 2
    },
    series: [{
        name: 'Standard',
        data: sortedGraphData1,  // First series data
        color: '#50c7d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        }
    }, {
        name: 'Observed',
        data: sortedGraphData2,  // Second series data
        color: '#8250d9',
        marker: {
            enabled: true,
            radius: 4,
            symbol: 'circle'
        },
        lineWidth: 0  // This removes the purple line
    }]
});



//Highcharts.chart('main-div-conf', {
//    chart: {
//        type: 'line'
//    },
//    title: {
//        text: 'Observations'
//    },
//    xAxis: {
//        title: {
//            text: 'Selected Load'
//        },
//        // No need to specify categories if using x and y objects
//    },
//    yAxis: {
//        title: {
//            text: 'Output Voltage'
//        }
//    },
//    plotOptions: {
//        line: {
//            dataLabels: {
//                enabled: true
//            },
//            enableMouseTracking: true,
//            marker: {
//                enabled: false,
//                radius: 4
//            }
//        }
//    },
//    tooltip: {
//        enabled: true,
//        shared: true,
//        valueDecimals: 2
//    },
//    series: [{
//        name: 'Standard',
//        data: sortedGraphData1,  // First series data
//        color: '#50c7d9',
//        marker: {
//            enabled: true,
//            radius: 4,
//            symbol: 'circle'
//        }
//    }, {
//        name: 'Observed',
//        data: sortedGraphData2,  // Second series data
//        color: '#8250d9',
//        marker: {
//            enabled: true,
//            radius: 4,
//            symbol: 'circle'
//        }
//    }]
//});



var sortedData = graphJson.demo.sort(function(a, b) {  
    return a.selectedLoad - b.selectedLoad; // Change this to the desired property for sorting  
});  



tableMainDiv =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>Load (N)</center></th>'
					+ '   <th><center>Calculated Output (mV)</center></th>'
					+ '  <th><center>Observed Output (mV)</center> </th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
				for(i=0,p=1;i<graphJson.demo.length;i++,p++)
						{
						tableMainDiv +='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+sortedData[i].selectedLoad+'</td>'
							+'      <td>'+sortedData[i].outputVoltage+'</td>'
							+'      <td>'+sortedData[i].ranOutput+'</td>'					
				
							+'    </tr>'
						}
        
        $("#canvas-div").html(tableMainDiv);

       
	    
	    var htm = '';
	     if(rendValFlg==1){
	      htm = '<div class="row"  >'
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	             
	             + '<div class="col-sm-6">'
	             +'<label class="text-primary" style="margin-left:10px;font-size: x-large;"><center> Load Cell Configuration  </center></label>'
 	               
	             +'</div>'
	            
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	            +'</div>'
	            
	               +'<div class="row"  >'
                   + '<div class="col-sm-1">'	               
	               +'</div>'
                   + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"><center> Selected Diameter :'+diam+' mm  </center></label>'
	               +'</div>'
	              
	               + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center>Cross Sectional area : '+areaSelect+' sq mm</center> </label>'
	               +'</div>'
	              
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               +'</div>'
	               
	               +'<div class="row"  >'
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Young'+"'"+'s Modulus : 2.07 &times 10 &#x2075 N/mm<sup>2</sup></center> </label>'
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Poisson'+"''"+' Ratio : '+poisonSelect+'</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'	               
	               +'</div>'	               
	               +'</div>'
	               
	                +'<div class="row"  >'
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Gauge Factor (f) : 2</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Supply Voltage : '+eb+' V</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'	               
	               +'</div>'	               
	               +'</div>'
	              
	             +  '<div class="row"  >'
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	             
	             + '<div class="col-sm-6">'
	             +'<label class="text-primary" style="margin-left:10px;font-size: x-large;"><center> Load Cell Performance  </center></label>'
 	               
	             +'</div>'
	            
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	            +'</div>'
	              
	              
	                +   '<div class="row" id="selLoadErr" >'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select Load (N) :  </label>'
				   +'</div>'
				   
				          +'<div class="col-sm-4">'
						   +'<select  class="form-control " id="loadErr" " style="height:auto;  margin-top: 9px;">'
						   +'<option value="0">--- Select load --- </option>'
						   +'<option value= "1">'+firstLoad+ '</option>'
						   +'<option value="2" >'+secondLoad+ ' </option>'
						   +'<option value="3" > '+thirdLoad+ ' </option>'
						   +'<option value="4" > '+forthLoad+ ' </option>'
						   +'<option value="5" > '+fifthLoad+ ' </option>'						  
						  
						   +'</select>'
						   +'</div>'
				   
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitLoadToErrorCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
	               
	              
	              
	               +'<div class="row" id="errCal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Error of selected load :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<input type="number" value="" id="errorCheck"  style="margin:10px;margin-left:1px;width:100%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitErrorCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="senCheck" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Sensitivity of load mV/N :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<input type="number" value="" id="sensitivity"  style="margin:10px;margin-left:1px;width:100%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitSensitivityCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
	              
	               
	               +'<div class="row" >'
				   +'<div class="col-sm-2">'
				   +'</div>'
				   +'<div class="col-sm-8">'
				   +'<br><button type="submit" class="btn btn-danger"  id="resultCheck"  style="width:100%;margin-top: -18px;margin-bottom:20px;"  data-toggle="modal" data-target="#myModalError" hidden>Result</input>'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'</div>'
				   +'</div>'
	               
	              
	              $("#canvas-div-sub").html(htm);
	        
	        var htm11 = '<img src="images/amplifier.png"  class="img-responsive">'
	        $("#main-div-conf11").append(htm11);
	        
	        
	        var loadErrVal=0;
	        var selValue = 0;
	        $("#loadErr").change(function(){
		loadErrVal = $("#loadErr").val();
	});
	        
	        $("#submitLoadToErrorCheck").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		          loadErrVal = parseInt($("#loadErr").val());
		          if(loadErrVal==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
		}else{
			
			if(loadErrVal==1){
				selValue = firstLoad;
			}else if(loadErrVal==2){
				selValue = secondLoad;
			}else if(loadErrVal==3){
				selValue = thirdLoad;
			}else if(loadErrVal==4){
				selValue = forthLoad;
			}else if(loadErrVal==5){
				selValue = fifthLoad;
			}
	
			
			$("#submitLoadToErrorCheck").prop("disabled",true);
			$("#loadErr").prop("disabled",true);
			$("#errCal").prop("hidden",false);
		}
	});
	       
	     var ranVal1 = 0;
	     var outVal1 = 0;  
	      var errCal = 0; 
	      var idd = 1;
	      
	      var foundObject;
	     $("#submitErrorCheck").click(function(){
		 $("body").css("padding","0px 0px 0px 0px");
		     if(errorCheck==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropriate Value");
		}else{ 
			
			
			let userSelectedLoad = selValue;
			let foundObject = graphJson.demo.find(item => item.selectedLoad === userSelectedLoad);
//			const outputVoltage = getOutputVoltage(selectedLoadValue);
//			console.log("outputVoltage : "+outputVoltage);
//			  for(var i=0;i<graphJson.demo.length;i++){
//			let selectedLoadValue = graphJson.demo[i].selectedLoad; // This sets selectedLoadValue to 10
//			console.log("selectedLoadValue : "+selectedLoadValue);
//             foundObject = graphJson.demo.find(item => item.selectedLoad === selectedLoadValue);
//             break;
//             }
//             console.log("foundObject : "+foundObject);
			 if(foundObject){
           
	           outVal1 = foundObject.outputVoltage;
	           ranVal1 = foundObject.ranOutput;  
         
             errCal = (outVal1 - ranVal1).toFixed(2);
//             errCal = errCal.toFixed(2);
             errCal = parseFloat(errCal);
             
             var errCheckEnter = $("#errorCheck").val();
                if(errCheckEnter==""){
						 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
						
		       errCheckEnter = parseFloat($("#errorCheck").val());
						if (idd <= 3) {
				
				if (errCheckEnter == errCal) {
					 $("#submitErrorCheck").prop("disabled",true);
					 $("#errorCheck").prop("disabled",true);
					 $("#senCheck").prop("hidden",false);
	                 
				} else if (errCheckEnter != errCal) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
            errorCnt++;
				}
	
	
			} else if (idd == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Formula : Error = Standard value - Observed value");
            errorCnt++;
				
			} else {

	
				if (errCal == errCheckEnter) {
				

					$("#submitErrorCheck").prop("disabled",true);
					 $("#errorCheck").prop("disabled",true);
					 $("#senCheck").prop("hidden",false);

					
	
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + errCal);
	        errorCnt++;
				}
			}
			idd++;
					}
				

			}
			 
		}
		 
	});
	    
	    
	    var sensitivityCal = 0;
	    var idd1=1;   
	 $("#submitSensitivityCheck").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
//		sensitivityCal = (ranVal1/selValue).toFixed(2);
//		sensitivityCal = sensitivityCal.toFixed(2);

        var sensitivityCal1 = (ranVal1/selValue).toFixed(4);
		var sensitivityCal2 = (sensitivityCal1*1000).toFixed(4);

		sensitivityCal = parseFloat(sensitivityCal2);
		
		var senseEnter = $("#sensitivity").val();
		
		
		 if(senseEnter==""){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
						
						 senseEnter = parseFloat($("#sensitivity").val());
						if (idd1 <= 3) {
				
				if (senseEnter == sensitivityCal) {
					 $("#submitSensitivityCheck").prop("disabled",true);
					 $("#sensitivity").prop("disabled",true);
					 $("#resultCheck").prop("hidden",false);
					 
					     var tempCountJson ={};
						tempCountJson.errorCount = errorCnt;
						tempCountJson.sensitivityCount = sensitivityCnt; 						
						counterMasterJson.charectarization = tempCountJson;					
	                 
				} else if (senseEnter != sensitivityCal) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
             sensitivityCnt++;
				}
	
	
			} else if (idd1 == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Formula : Sensitivity = Output/Input");
             sensitivityCnt++;
				
			} else {

	
				if (senseEnter == sensitivityCal) {
				 $("#submitSensitivityCheck").prop("disabled",true);
					 $("#sensitivity").prop("disabled",true);
					 $("#resultCheck").prop("hidden",false);
					  var tempCountJson ={};
						tempCountJson.errorCount = errorCnt;
						tempCountJson.sensitivityCount = sensitivityCnt; 						
						counterMasterJson.charectarization = tempCountJson;	
	
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + sensitivityCal);
	         sensitivityCnt++;
				}
			}
			idd1++;
						
					}
		
	});
	              
	    $("#resultCheck").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		result();
//		alert("clicked");
	});               
	   
	              
	            } if(rendValFlg==2){  
		          
		          htm = '<div class="row"  >'
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	             
	             + '<div class="col-sm-6">'
	             +'<label class="text-primary" style="margin-left:10px;font-size: x-large;"><center> Load Cell Configuration  </center></label>'
 	               
	             +'</div>'
	            
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	            +'</div>' 
		           +'<div class="row"  >'
                   + '<div class="col-sm-1">'	               
	               +'</div>'
                   + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"><center> Selected Length :'+lengthVal+' mm  </center></label>'
	               +'</div>'
	              
	               + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center> Selected Width :'+widthVal+' mm </center> </label>'
	               +'</div>' 
	               
	                
	              
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               +'</div>'
	               
	               +'<div class="row"  >'
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Young'+"'"+'s Modulus : 2.07 &times 10 &#x2075 N/mm<sup>2</sup></center> </label>'
	               +'</div>'
	              + '<div class="col-sm-5" id="labelSelected">'
	               +'<label class="labelstyle" style="margin-left:10px;"> <center> Selected Thickness : '+heightVal+' mm</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'	               
	               +'</div>'	               
	               +'</div>'
	               
	                +'<div class="row"  >'
	               + '<div class="col-sm-1">'	               
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Gauge Factor (f) : 2</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-5" id="labelSelected">'
	    	       +'<label class="labelstyle" style="margin-left:10px;"><center>Supply Voltage : '+eb+' V</center> </label>'
	               +'</div>'
	               + '<div class="col-sm-1">'	               
	               +'</div>'	               
	               +'</div>'
		          
		        +  '<div class="row"  >'
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	             
	             + '<div class="col-sm-6">'
	             +'<label class="text-primary" style="margin-left:10px;font-size: x-large;"><center> Load Cell Performance  </center></label>'
 	               
	             +'</div>'
	            
	             + '<div class="col-sm-3">'	               
	             +'</div>'
	            +'</div>'
		          
		            +   '<div class="row" id="selLoadErr" >'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Select Load (N) :  </label>'
				   +'</div>'
				   
				          +'<div class="col-sm-4">'
						   +'<select  class="form-control " id="loadErr" " style="height:auto;  margin-top: 9px;">'
						   +'<option value="0">--- Select load --- </option>'
						   +'<option value= "1">'+oneLoad+ '</option>'
						   +'<option value="2" >'+twoLoad+ ' </option>'
						   +'<option value="3" > '+threeLoad+ ' </option>'
						   +'<option value="4" > '+fourLoad+ ' </option>'
						   +'<option value="5" > '+fiveLoad+ ' </option>'						  
						  
						   +'</select>'
						   +'</div>'
				   
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitLoadToErrorCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
	               
	              
	              
	               +'<div class="row" id="errCal" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Error of selected load :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<input type="number" value="" id="errorCheck"  style="margin:10px;margin-left:1px;width:100%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitErrorCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="senCheck" hidden>'
				   +'<div class="col-sm-5">'
				   +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Sensitivity of load V/N :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4">'
				   +'<input type="number" value="" id="sensitivity"  style="margin:10px;margin-left:1px;width:100%;"  class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submitSensitivityCheck" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: -18px;"  data-toggle="modal" data-target="#myModalError">Submit</input>'
				   +'</div>'
				   +'</div>'
		           
		           
		           +'<div class="row" >'
				   +'<div class="col-sm-2">'
				   +'</div>'
				   +'<div class="col-sm-8">'
				   +'<br><button type="submit" class="btn btn-danger"  id="resultCheck"  style="width:100%;margin-top: -18px;margin-bottom:20px;"  data-toggle="modal" data-target="#myModalError" hidden>Result</input>'
				   +'</div>'
				   +'<div class="col-sm-2">'
				   +'</div>'
				   +'</div>'
		           
		      
		      $("#canvas-div-sub").html(htm);
	        
	         var htm11 = '<img src="images/amplifier.png"  class="img-responsive">'
	        $("#main-div-conf11").append(htm11);
	        
	        var loadErrVal=0;
	        var selValue = 0;
	        $("#loadErr").change(function(){
		loadErrVal = $("#loadErr").val();
	});
	        
	        $("#submitLoadToErrorCheck").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		          loadErrVal = parseInt($("#loadErr").val());
		          if(loadErrVal==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
		}else{
			
			
			if(loadErrVal==1){
				selValue = oneLoad;
			}else if(loadErrVal==2){
				selValue = twoLoad;
			}else if(loadErrVal==3){
				selValue = threeLoad;
			}else if(loadErrVal==4){
				selValue = fourLoad;
			}else if(loadErrVal==5){
				selValue = fiveLoad;
			}
			
			
			
			$("#submitLoadToErrorCheck").prop("disabled",true);
			$("#loadErr").prop("disabled",true);
			$("#errCal").prop("hidden",false);
		}
	});
	       
	     var ranVal1 = 0;
	     var outVal1 = 0;  
	      var errCal = 0; 
	      var idd = 1;
	      
	      
	     $("#submitErrorCheck").click(function(){
		 $("body").css("padding","0px 0px 0px 0px");
		     if(errorCheck==""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropriate Value");
		}else{
			
			let userSelectedLoad = selValue;
			let foundObject = graphJson.demo.find(item => item.selectedLoad === userSelectedLoad);
			
			
//			let selectedLoadValue = graphJson.demo[0].selectedLoad; // This sets selectedLoadValue to 10
//            let foundObject = graphJson.demo.find(item => item.selectedLoad === selectedLoadValue);
			 if(foundObject){
           
	           outVal1 = foundObject.outputVoltage;
	           ranVal1 = foundObject.ranOutput;  
         
             errCal = parseFloat(outVal1) - parseFloat(ranVal1);
             errCal = errCal.toFixed(2);
             errCal = parseFloat(errCal);
             
             var errCheckEnter = $("#errorCheck").val();
                if(errCheckEnter==""){
						 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
						
		       errCheckEnter = parseFloat($("#errorCheck").val());
						if (idd <= 3) {
				
				if (errCheckEnter == errCal) {
					 $("#submitErrorCheck").prop("disabled",true);
					 $("#errorCheck").prop("disabled",true);
					 $("#senCheck").prop("hidden",false);
	                 
				} else if (errCheckEnter != errCal) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
            errorCnt++;
				}
	
	
			} else if (idd == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Formula : Error = Standard value - Observed value");
          errorCnt++;
				
			} else {

	
				if (errCal == errCheckEnter) {
				

					$("#submitErrorCheck").prop("disabled",true);
					 $("#errorCheck").prop("disabled",true);
					 $("#senCheck").prop("hidden",false);

					
	
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + errCal);
	         errorCnt++;
				}
			}
			idd++;
					}
				

			}
			 
		}
		 
	});
	    
	    
	    var sensitivityCal = 0;
	    var idd1=1;   
	 $("#submitSensitivityCheck").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		var sensitivityCal1 = (ranVal1/selValue).toFixed(4);
		var sensitivityCal2 = (sensitivityCal1*1000).toFixed(4);
//		sensitivityCal = sensitivityCal.toFixed(2);
		sensitivityCal = parseFloat(sensitivityCal2);
		
		var senseEnter = $("#sensitivity").val();
		
		
		 if(senseEnter==""){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value");
					} else{
						
						 senseEnter = parseFloat($("#sensitivity").val());
						if (idd1 <= 3) {
				
				if (senseEnter == sensitivityCal) {
					 $("#submitSensitivityCheck").prop("disabled",true);
					 $("#sensitivity").prop("disabled",true);
					 $("#resultCheck").prop("hidden",false);	
					  var tempCountJson ={};
						tempCountJson.errorCount = errorCnt;
						tempCountJson.sensitivityCount = sensitivityCnt; 						
						counterMasterJson.charectarization = tempCountJson;					
	                 
				} else if (senseEnter != sensitivityCal) {
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");
              sensitivityCnt++;
				}
	
	
			} else if (idd1 == 4) {
				
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b> Formula : Sensitivity = Output/Input");
              sensitivityCnt++;
				
			} else {

	
				if (senseEnter == sensitivityCal) {
				 $("#submitSensitivityCheck").prop("disabled",true);
					 $("#sensitivity").prop("disabled",true);
					 $("#resultCheck").prop("hidden",false);
	                  
	                   var tempCountJson ={};
						tempCountJson.errorCount = errorCnt;
						tempCountJson.sensitivityCount = sensitivityCnt; 						
						counterMasterJson.charectarization = tempCountJson;	
	                  
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + sensitivityCal);
	        sensitivityCnt++;
				}
			}
			idd1++;
						
					}
		
	});
		      
//	    }
	             
				   
	    $("#resultCheck").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		result();
	});          
	        
	 
	        
        }
        
        
       
 
}
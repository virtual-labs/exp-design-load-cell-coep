function result(){

//$("#rowHide").prop("hidden",true);
$("#simDemo").prop("hidden",true);
$("#loadLabel").prop("hidden",true);
$("#btnForModal").prop("hidden",true);
$("#typeCell").prop("hidden",true);

	$("#pdfDownload").prop("hidden",false);
	
	
  function generatePDF() {
    // Select the div by its ID
    const element = document.querySelector("#main-div");

    // Use html2canvas to capture the element as a canvas
    html2canvas(element, {
        scale: 3,  // Increase the scale for better resolution (adjustable)
        useCORS: true // In case of cross-origin issues with external resources like images
    }).then(function (canvas) {
        // Convert the canvas to image data in PNG format
        const imgData = canvas.toDataURL("image/png", 1.0); // No compression

        // Initialize the PDF document in landscape mode ('l') and A4 size
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        
        // Define the width and height for the image to fit in the landscape A4 page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Keep aspect ratio

        // Define the top margin (in mm)
        const topMargin = 10;

        // Check if the image height exceeds the landscape page height minus the top margin
        if (pdfHeight > pdf.internal.pageSize.getHeight() - topMargin) {
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight() - topMargin;

            // Loop over the content to fit into multiple pages in landscape
            while (position < canvas.height) {
                const pageData = canvas.getContext('2d').getImageData(0, position, canvas.width, canvas.height - position);

                // Create a new image element from the slice
                const pageCanvas = document.createElement('canvas');
                pageCanvas.width = canvas.width;
                pageCanvas.height = canvas.height - position < pageHeight ? canvas.height - position : pageHeight;
                pageCanvas.getContext('2d').putImageData(pageData, 0, 0);

                const imgData = pageCanvas.toDataURL('image/png', 1.0);  // Avoid compression
                
                pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, (pdfWidth * pageCanvas.height) / pageCanvas.width);

                position += pageHeight;

                if (position < canvas.height) {
                    pdf.addPage();
                }
            }
        } else {
            // If it fits on one page, simply add the image to the PDF in landscape with the top margin
            pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, pdfHeight);
        }

        // Save the generated PDF
        pdf.save("load_cell_report.pdf");
    });
}

// Set up the button click event to generate the PDF
$("#pdfDownload").on("click", function(){
    generatePDF();
});
	
	
	
var quesPercent=0;
var config=0, wheatStone=0,loadCal=0,loadCellCal1=0,outputPer=0,character=0,characterVal=0;
if(typeCell==15){
	var correctVal = (counterMasterJson.questionary.correctAnswer/6).toFixed(2);
	 quesPercent = (correctVal*100).toFixed(1);
	quesPercent = parseFloat(quesPercent);
//    console.log(quesPercent);
    
   
    var config = ((1/(counterMasterJson.columnTypeConfig.wrongAreaConfig+1))*100).toFixed(1);
    config = parseFloat(config);
//    console.log(config);
    
    var wheatStone = ((1/(counterMasterJson.constLib.invalidCnt+1))*100).toFixed(1);
	wheatStone = parseFloat(wheatStone);
//	console.log(wheatStone);
	
	var loadCellCal1 = parseInt(counterMasterJson.stdCalculations.inValidForce)+parseInt(counterMasterJson.stdCalculations.axialCalculate)+parseInt(counterMasterJson.stdCalculations.transverseCal);
	var loadCal = ((15/(loadCellCal1+15))*100).toFixed(1);
	loadCal = parseFloat(loadCal);
//	console.log(loadCal);
	
	var outputPer = ((5/(counterMasterJson.outputVoltage.outPut+5))*100).toFixed(1);
	outputPer = parseFloat(outputPer);
//	console.log(outputPer);
	
	var character = parseInt(counterMasterJson.charectarization.errorCount)+parseInt(counterMasterJson.charectarization.sensitivityCount);
	var characterVal = ((2/(character+2))*100).toFixed(1);
	characterVal = parseFloat(characterVal);
//	console.log(characterVal);
}if(typeCell==25){
	
	var correctVal = (counterMasterJson.questionary.correctAnswer/6).toFixed(2);
	var quesPercent = (correctVal*100).toFixed(1);
	quesPercent = parseFloat(quesPercent);
//    console.log(quesPercent);
    
   
//    var config = ((1/(counterMasterJson.columnTypeConfig.wrongAreaConfig+1))*100).toFixed(1);
//    config = parseFloat(config);
//    console.log(config);
    
    var wheatStone = ((1/(counterMasterJson.constLib.invalidCnt+1))*100).toFixed(1);
	wheatStone = parseFloat(wheatStone);
//	console.log(wheatStone);
	
	var loadCellCal1 = parseInt(counterMasterJson.stdCalculations.inValidForce)+parseInt(counterMasterJson.stdCalculations.axialCalculate)+parseInt(counterMasterJson.stdCalculations.transverseCal);
	var loadCal = ((15/(loadCellCal1+15))*100).toFixed(1);
	loadCal = parseFloat(loadCal);
//	console.log(loadCal);
	
	var outputPer = ((5/(counterMasterJson.outputVoltage.outPut+5))*100).toFixed(1);
	outputPer = parseFloat(outputPer);
//	console.log(outputPer);
	
	var character = parseInt(counterMasterJson.charectarization.errorCount)+parseInt(counterMasterJson.charectarization.sensitivityCount);
	var characterVal = ((2/(character+2))*100).toFixed(1);
	characterVal = parseFloat(characterVal);
//	console.log(characterVal);
	
}	

var htm = ''
	+ '<div class="container-fluid">'

	+ '</div>'

	+ '<div class="col-md-12">'
	+ ' <div class="panel remarkBground" >'
	+ ' <div class="panel-body remark" style="font-size:18px;"><center> <b>Load cell experiment is completed successfully!!</b>'
//	+ '<br> <b>Satisfactory performance</b></center></div>'
	+ '</div>'
	+ '</div>'

//
    +'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY (LOAD CELL)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   
		   if(quesPercent>=60){
		   htm +='<td class=""><center class="attained"> Attained</center></td>'
		  }else{
			htm+= ' <td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		   htm+='  </tr>'
		    +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
           if(typeCell == 15){
			if(config>=60){
				 htm +='<td class=""><center class="attained"> Attained</center></td>'
			}else{
				htm+= ' <td class=""><center class="NotAttained"> Not Attained</center></td>'
			}
			}else{
				 htm +='<td class=""><center class="attained"> Attained</center></td>'
			}

		
		  htm  +=' </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Construct Wheatstone bridge circuit</center></td>'
		   if(wheatStone >= 60){ 
		  htm +='<td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm+= ' <td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		 htm  +=' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Standard Calculations</center></td>'
		  if(loadCal>=60){
		   htm +='<td class=""><center class="attained"> Attained</center></td>'
		  }else{
		   htm+= ' <td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		htm += '  </tr>'
		   +'  <tr>'
		   +'<td class=""><center>Calculation of Output Voltage using a Wheatstone Bridge</center></td>'
		   if(outputPer>=60){
			htm +='<td class=""><center class="attained"> Attained</center></td>'
		}else{
			htm+= ' <td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		  htm +='</tr>'
		   +'<tr>'
		   +' <td class=""><center>Observations and Characterization</center></td>'
		    if(characterVal>=60){
			htm +='<td class=""><center class="attained"> Attained</center></td>'
		}else{
			htm+= ' <td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		  htm +='</tr>'
		
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic Knowledge </b></span></center>'		
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">6</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Correct Answers</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox">'+counterMasterJson.questionary.correctAnswer+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		
		+'<div class="col-md-12">'
//		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Wheatstone Construction</b></span></center>'
		+'</div>'
		+'</div>'
		
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.constLib.invalidCnt+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		
		
		
		
		+'</div>'
		

		
		
		
		+' </div>'
		
		
		
		
		
		
		+' </div>'//closing of col 4

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Standard Calculations</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+loadCellCal1+'</b></span></center>'
		+'</div>'
		+'</div>'
      
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>15</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Output Voltage Calculations</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.outputVoltage.outPut+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		+' </div>'
		
		
		
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Charectarization</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+character+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>2</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		+' </div>'
		
		
		
		
		+' </div>'
		+' </div>'


$("#main-div").html(htm);


let initialData = [];

if(typeCell==15){
 initialData = [
    { name: 'Questionaries', y: quesPercent },
    { name: 'Configuration', y: config },
    { name: 'Construction of WheatStone Bridge', y: wheatStone },
    { name: 'Standard Calculations', y: loadCal },
    { name: 'Output Voltage', y: outputPer },
    { name: 'Characterization', y: characterVal } 
  
];
}else if(typeCell==25){
	initialData = [
	{ name: 'Questionaries', y: quesPercent },

    { name: 'Construction of WheatStone Bridge', y: wheatStone },
    { name: 'Standard Calculations', y: loadCal },
    { name: 'Output Voltage', y: outputPer },
    { name: 'Characterization', y: characterVal } 
    ];
}
//
//// Create the pie chart
let chart = Highcharts.chart('graph-div', {
	exporting: { enabled: false },
				credits: { enabled: false},
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    series: [{
        name: 'Observed',
        //colorByPoint: true,
        data: initialData
    }],
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.2f} %'
            }
        }
    }
});


	
}
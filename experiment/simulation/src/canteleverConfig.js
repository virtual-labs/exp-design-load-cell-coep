

function length(){

 $("#canvas-div").html("");
 var paper = new Raphael(document.getElementById('canvas-div'));


var w = 600;
var h = 450;

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
	var y=100;
	
    var lenVal;
     
    var lVal = lengthVal;
    
    if(lVal == 250){
	   lenVal = 250;
	    x=100;
	    y=100;
     } if(lVal == 300){
	   lenVal = 290;
	   x=100;
	    y=100;
     } if(lVal == 350){
	   lenVal = 320;
	   x=100;
	    y=100;
     }if(lVal == 400){
	   x=80;
	    y=80;
	   lenVal = 350;
     }if(lVal == 450){
	   lenVal = 390;
	   x=70;
	    y=70;
     }if(lVal == 500){
	   lenVal = 430;
	   x=80;
	    y=80;
     }
    
    
    
//    var lenVal = 420;
    var widVal = 10	;
    var htVal = 5;
    
    var widDiv = widVal/2;
    
    var top = paper.path("M"+(x+50)+" "+(y+250)+"l -40 -40 l 160 0 l 40 40 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
      
    
	 var baseHt = paper.path("M"+(x+50)+" "+(y+250)+"l 0 20 l 161 0 l 0 -20 z")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});	 
//     
     var baseBk = paper.path("M"+(x+50)+" "+(y+250)+" l 0 20 l -40 -40 l 0 -20 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'}); 
   
    
     var vRec = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv)+" l 0 -250 l "+widVal+" "+widVal+" l 0 250 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});

	 var lin = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+"l 20 0 l 0 250 l -20 0 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
	 
    var conti = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv-250)+" l "+lenVal+" 0 l "+widVal+" "+widVal+" l -"+lenVal+" 0  z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
//	 
//	 
	  var contis1 = paper.path("M"+(x+50-widDiv-20+widDiv+widDiv+20)+" "+(y+250-20-widDiv-250+widDiv-(widDiv/3)-1)+" l "+(lenVal/10)+" 0  l -"+(widDiv/5)
	                           +" -"+(widDiv/5)+" l -"+(lenVal/10)+" 0 z ")
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
	 var contis2 = paper.path("M"+(x+50-widDiv-20+(widVal-widDiv)+widDiv+25)+" "+(y+250-20-widDiv-250+widDiv+(widDiv/3)-1)+" l "+(lenVal/10)+" 0  "+
	         "l "+(widDiv/5)+" "+(widDiv/5)+" l -"+(lenVal/10)+" 0 z " )
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
     var cantiHt = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l "+lenVal+" 0 l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
	 
	 var bkBeam = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l -"+widVal+" -"+widVal+"l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
    
     var lin1L = paper.path("M"+(x+50-widDiv-20)+" "+(y-20-widDiv-12-8)+" l "+lenVal+" 0"+"M"+(x+50-widDiv-20)+" "+(y-20-widDiv-18-8)+" l 0 12"
	 +"M"+(x+50-widDiv-20+lenVal)+" "+(y-20-widDiv-18-8)+" l 0 12")
	 .attr({'stroke':'#000','stroke-width': 2});
	 

	 var l1Txt = paper.text((x+50-widDiv-20+(lenVal/2)),(y-20-widDiv-24-8),"L : "+lenVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
	



//	 var lin1L = paper.path("M"+(x+50-widDiv-20)+" "+(y-20-widDiv-12)+" l "+lenVal+" 0"+"M"+(x+50-widDiv-20)+" "+(y-20-widDiv-18)+" l 0 12"
//	 +"M"+(x+50-widDiv-20+lenVal)+" "+(y-20-widDiv-18)+" l 0 12")
//	 .attr({'stroke':'#000','stroke-width': 2});
//	 
//
//	 var l1Txt = paper.text((x+50-widDiv-20+(lenVal/2)),(y-20-widDiv-24),"L : "+lenVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
//	 
	 
    
//      var r1txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
//      var r1txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 1").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
//      
//      var r2txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
//      var r2txt2 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 2").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
//      
//      var r3txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
//      var r3txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 3").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
//       
//       
//       var r4txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
//      var r4txt4 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 4").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});

    

	} 


function width(){

 $("#canvas-div").html("");
 var paper = new Raphael(document.getElementById('canvas-div'));


var w = 600;
var h = 450;

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
	var y=100;
    
   var lenVal;
     
    var lVal = lengthVal;
    
    if(lVal == 250){
	   lenVal = 250;
	    x=100;
	    y=100;
     } if(lVal == 300){
	   lenVal = 290;
	   x=100;
	    y=100;
     } if(lVal == 350){
	   lenVal = 320;
	   x=100;
	    y=100;
     }if(lVal == 400){
	   x=80;
	    y=80;
	   lenVal = 350;
     }if(lVal == 450){
	   lenVal = 390;
	   x=70;
	    y=70;
     }if(lVal == 500){
	   lenVal = 430;
	   x=45;
	    y=80;
     }
    
    
    
//    var lenVal = 420;
    var widVal = widthVal	;
    var htVal = 5;
    
    var widDiv = widVal/2;
    
    var top = paper.path("M"+(x+50)+" "+(y+250)+"l -40 -40 l 160 0 l 40 40 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
      
    
	 var baseHt = paper.path("M"+(x+50)+" "+(y+250)+"l 0 20 l 161 0 l 0 -20 z")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});	 
//     
     var baseBk = paper.path("M"+(x+50)+" "+(y+250)+" l 0 20 l -40 -40 l 0 -20 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'}); 
   
    
     var vRec = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv)+" l 0 -250 l "+widVal+" "+widVal+" l 0 250 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});

	 var lin = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+"l 20 0 l 0 250 l -20 0 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
	 
    var conti = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv-250)+" l "+lenVal+" 0 l "+widVal+" "+widVal+" l -"+lenVal+" 0  z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
//	 
//	 
	  var contis1 = paper.path("M"+(x+50-widDiv-20+widDiv+widDiv+20)+" "+(y+250-20-widDiv-250+widDiv-(widDiv/3)-1)+" l "+(lenVal/10)+" 0  l -"+(widDiv/5)
	                           +" -"+(widDiv/5)+" l -"+(lenVal/10)+" 0 z ")
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
	 var contis2 = paper.path("M"+(x+50-widDiv-20+(widVal-widDiv)+widDiv+25)+" "+(y+250-20-widDiv-250+widDiv+(widDiv/3)-1)+" l "+(lenVal/10)+" 0  "+
	         "l "+(widDiv/5)+" "+(widDiv/5)+" l -"+(lenVal/10)+" 0 z " )
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
     var cantiHt = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l "+lenVal+" 0 l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
	 
	 var bkBeam = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l -"+widVal+" -"+widVal+"l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
 
//	 var lin1L = paper.path("M"+(x+50-widDiv-20)+" "+(y-20-widDiv-12)+" l "+lenVal+" 0"+"M"+(x+50-widDiv-20)+" "+(y-20-widDiv-18)+" l 0 12"
//	 +"M"+(x+50-widDiv-20+lenVal)+" "+(y-20-widDiv-18)+" l 0 12")
//	 .attr({'stroke':'#000','stroke-width': 2});
	 
	 var lin2W = paper.path("M"+(x+50-widDiv-20+lenVal+15)+" "+(y+250-20-widDiv-250)+" l "+widVal+" "+widVal+" l 10 0 l -20 0 "+
	 "M"+(x+50-widDiv-18+lenVal+15)+" "+(y+250-20-widDiv-250)+" l 10 0 l -20 0")
	 .attr({'stroke':'#000','stroke-width': 2});
 
     var lin1L = paper.path("M"+(x+50-widDiv-20)+" "+(y-20-widDiv-12-8)+" l "+lenVal+" 0"+"M"+(x+50-widDiv-20)+" "+(y-20-widDiv-18-8)+" l 0 12"
	 +"M"+(x+50-widDiv-20+lenVal)+" "+(y-20-widDiv-18-8)+" l 0 12")
	 .attr({'stroke':'#000','stroke-width': 2});
	 

	 var l1Txt = paper.text((x+50-widDiv-20+(lenVal/2)),(y-20-widDiv-24-8),"L : "+lenVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
	
	 var l2Txt = paper.text((x+50-widDiv+lenVal+50),(y+250-20-widDiv-250+widDiv),"W : "+widVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
	 
	 var r1txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r1txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 1").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
      
      var r2txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r2txt2 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 2").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
      
      var r3txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r3txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 3").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
       
       
       var r4txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r4txt4 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 4").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    

	} 
	
	function height(){

 $("#canvas-div").html("");
 var paper = new Raphael(document.getElementById('canvas-div'));


var w = 600;
var h = 450;

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
	var y=100;
    
   var lenVal;
     
   var lenVal;
     
    var lVal = lengthVal;
    
    if(lVal == 250){
	   lenVal = 250;
	    x=100;
	    y=100;
     } if(lVal == 300){
	   lenVal = 290;
	   x=100;
	    y=100;
     } if(lVal == 350){
	   lenVal = 320;
	   x=100;
	    y=100;
     }if(lVal == 400){
	   x=80;
	    y=80;
	   lenVal = 350;
     }if(lVal == 450){
	   lenVal = 390;
	   x=70;
	    y=70;
     }if(lVal == 500){
	   lenVal = 430;
	   x=45;
	    y=80;
     }
    
    
    
//    var lenVal = 420;
    var widVal = widthVal	;
    var htVal = heightVal*3;
    
    var widDiv = widVal/2;
    
    var top = paper.path("M"+(x+50)+" "+(y+250)+"l -40 -40 l 160 0 l 40 40 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
      
    
	 var baseHt = paper.path("M"+(x+50)+" "+(y+250)+"l 0 20 l 161 0 l 0 -20 z")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});	 
//     
     var baseBk = paper.path("M"+(x+50)+" "+(y+250)+" l 0 20 l -40 -40 l 0 -20 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'}); 
   
    
     var vRec = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv)+" l 0 -250 l "+widVal+" "+widVal+" l 0 250 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});

	 var lin = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+"l 20 0 l 0 250 l -20 0 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
	 
    var conti = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv-250)+" l "+lenVal+" 0 l "+widVal+" "+widVal+" l -"+lenVal+" 0  z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
//	 
//	 
	  var contis1 = paper.path("M"+(x+50-widDiv-20+widDiv+widDiv+20)+" "+(y+250-20-widDiv-250+widDiv-(widDiv/3)-1)+" l "+(lenVal/10)+" 0  l -"+(widDiv/5)
	                           +" -"+(widDiv/5)+" l -"+(lenVal/10)+" 0 z ")
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
	 var contis2 = paper.path("M"+(x+50-widDiv-20+(widVal-widDiv)+widDiv+25)+" "+(y+250-20-widDiv-250+widDiv+(widDiv/3)-1)+" l "+(lenVal/10)+" 0  "+
	         "l "+(widDiv/5)+" "+(widDiv/5)+" l -"+(lenVal/10)+" 0 z " )
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
     var cantiHt = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l "+lenVal+" 0 l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
	 
	 var bkBeam = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l -"+widVal+" -"+widVal+"l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
 
//	 var lin1L = paper.path("M"+(x+50-widDiv-20)+" "+(y-20-widDiv-12)+" l "+lenVal+" 0"+"M"+(x+50-widDiv-20)+" "+(y-20-widDiv-18)+" l 0 12"
//	 +"M"+(x+50-widDiv-20+lenVal)+" "+(y-20-widDiv-18)+" l 0 12")
//	 .attr({'stroke':'#000','stroke-width': 2});
	 
	 var lin2W = paper.path("M"+(x+50-widDiv-20+lenVal+15)+" "+(y+250-20-widDiv-250)+" l "+widVal+" "+widVal+" l 10 0 l -20 0 "+
	 "M"+(x+50-widDiv-18+lenVal+15)+" "+(y+250-20-widDiv-250)+" l 10 0 l -20 0")
	 .attr({'stroke':'#000','stroke-width': 2});
 
 var lin1L = paper.path("M"+(x+50-widDiv-20)+" "+(y-20-widDiv-12-8)+" l "+lenVal+" 0"+"M"+(x+50-widDiv-20)+" "+(y-20-widDiv-18-8)+" l 0 12"
	 +"M"+(x+50-widDiv-20+lenVal)+" "+(y-20-widDiv-18-8)+" l 0 12")
	 .attr({'stroke':'#000','stroke-width': 2});
	 

	 var l1Txt = paper.text((x+50-widDiv-20+(lenVal/2)),(y-20-widDiv-24-8),"L : "+lenVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
	
	 var l2Txt = paper.text((x+50-widDiv+lenVal+50),(y+250-20-widDiv-250+widDiv),"W : "+widVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
    
    var lin3W = paper.path("M"+(x+50-widVal-20+widDiv-12)+" "+(y+250-20-widDiv-250+widVal-widDiv-widDiv)+" l 0 "+htVal+" l 8 0 l -16 0")
	 .attr({'stroke':'#000','stroke-width': 2});
	 
	 var lin3WR = paper.path("M"+(x+50-widVal-20+widDiv-12)+" "+(y+250-20-widDiv-250+widVal-widDiv-widDiv)+" l 8 0 l -16 0")
	 .attr({'stroke':'#000','stroke-width': 2});
	 
	 var l3Txt = paper.text((x+50-widVal-20+widDiv-12-40),(y+250-20-widDiv-250+widVal-widDiv-widDiv),"t : "+heightVal+" mm").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
    
    var r1txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r1txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 1").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
      
      var r2txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r2txt2 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 2").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
      
      var r3txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r3txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 3").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
       
       
       var r4txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r4txt4 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 4").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
    
	}
	

function finalConfigCanti(){

 $("#main-div-conf").html("");
 var paper = new Raphael(document.getElementById('main-div-conf'));


var w = 600;
var h = 450;

var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var x;
	var y;
    
   var lenVal;
     
   var lenVal;
     
    var lVal = lengthVal;
    
    if(lVal == 250){
	   lenVal = 250;
	    x=100;
	    y=170;
     } if(lVal == 300){
	   lenVal = 290;
	   x=100;
	     y=170;
     } if(lVal == 350){
	   lenVal = 320;
	   x=100;
	     y=170;
     }if(lVal == 400){
	   x=80;
	     y=170;
	   lenVal = 350;
     }if(lVal == 450){
	   lenVal = 390;
	   x=70;
	    y=200;
     }if(lVal == 500){
	   lenVal = 430;
	   x=45;
	     y=170;
     }
    
    
    
//    var lenVal = 420;
    var widVal = widthVal	;
    var htVal = heightVal*3;
    
    var widDiv = widVal/2;
    

     var top = paper.path("M"+(x+50)+" "+(y+250)+"l -40 -40 l 160 0 l 40 40 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
      
    
	 var baseHt = paper.path("M"+(x+50)+" "+(y+250)+"l 0 20 l 161 0 l 0 -20 z")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});	 
//     
     var baseBk = paper.path("M"+(x+50)+" "+(y+250)+" l 0 20 l -40 -40 l 0 -20 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'}); 
   
    
     var vRec = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv)+" l 0 -250 l "+widVal+" "+widVal+" l 0 250 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});

	 var lin = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+"l 20 0 l 0 250 l -20 0 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
	 
    var conti = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv-250)+" l "+lenVal+" 0 l "+widVal+" "+widVal+" l -"+lenVal+" 0  z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
//	 
//	 
	  var contis1 = paper.path("M"+(x+50-widDiv-20+widDiv+widDiv+20)+" "+(y+250-20-widDiv-250+widDiv-(widDiv/3)-1)+" l "+(lenVal/10)+" 0  l -"+(widDiv/5)
	                           +" -"+(widDiv/5)+" l -"+(lenVal/10)+" 0 z ")
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
	 var contis2 = paper.path("M"+(x+50-widDiv-20+(widVal-widDiv)+widDiv+25)+" "+(y+250-20-widDiv-250+widDiv+(widDiv/3)-1)+" l "+(lenVal/10)+" 0  "+
	         "l "+(widDiv/5)+" "+(widDiv/5)+" l -"+(lenVal/10)+" 0 z " )
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
     var cantiHt = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l "+lenVal+" 0 l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
	 
	 var bkBeam = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l -"+widVal+" -"+widVal+"l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
     
      ftxt = paper.text(x,y," ");
     
      var r1txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r1txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 1").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
      
      var r2txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r2txt2 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 2").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
      
      var r3txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r3txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 3").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
       
       
       var r4txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r4txt4 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 4").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
      
	}

	function forceAdd(){
		
		
		$("#main-div-conf").html("");
 var paper = new Raphael(document.getElementById('main-div-conf'));


var w = 600;
var h = 450;

var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	var x;
	var y;
    
   var lenVal;
     
   var lenVal;
     
    var lVal = lengthVal;
    
    if(lVal == 250){
	   lenVal = 250;
	    x=100;
	    y=170;
     } if(lVal == 300){
	   lenVal = 290;
	   x=100;
	     y=170;
     } if(lVal == 350){
	   lenVal = 320;
	   x=100;
	     y=170;
     }if(lVal == 400){
	   x=80;
	     y=170;
	   lenVal = 350;
     }if(lVal == 450){
	   lenVal = 390;
	   x=70;
	    y=200;
     }if(lVal == 500){
	   lenVal = 430;
	   x=45;
	     y=170;
     }
    
    
    
//    var lenVal = 420;
    var widVal = widthVal	;
    var htVal = heightVal*3;
    
    var widDiv = widVal/2;
    

    var top = paper.path("M"+(x+50)+" "+(y+250)+"l -40 -40 l 160 0 l 40 40 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
      
    
	 var baseHt = paper.path("M"+(x+50)+" "+(y+250)+"l 0 20 l 161 0 l 0 -20 z")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});	 
//     
     var baseBk = paper.path("M"+(x+50)+" "+(y+250)+" l 0 20 l -40 -40 l 0 -20 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'}); 
   
    
     var vRec = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv)+" l 0 -250 l "+widVal+" "+widVal+" l 0 250 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});

	 var lin = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+"l 20 0 l 0 250 l -20 0 z")
     .attr({'stroke':'#000','stroke-width': 2,'fill':'50-#35a4d4-#181d1f'});
	 
    var conti = paper.path("M"+(x+50-widDiv-20)+" "+(y+250-20-widDiv-250)+" l "+lenVal+" 0 l "+widVal+" "+widVal+" l -"+lenVal+" 0  z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
//	 
//	 
	  var contis1 = paper.path("M"+(x+50-widDiv-20+widDiv+widDiv+20)+" "+(y+250-20-widDiv-250+widDiv-(widDiv/3)-1)+" l "+(lenVal/10)+" 0  l -"+(widDiv/5)
	                           +" -"+(widDiv/5)+" l -"+(lenVal/10)+" 0 z ")
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
	 var contis2 = paper.path("M"+(x+50-widDiv-20+(widVal-widDiv)+widDiv+25)+" "+(y+250-20-widDiv-250+widDiv+(widDiv/3)-1)+" l "+(lenVal/10)+" 0  "+
	         "l "+(widDiv/5)+" "+(widDiv/5)+" l -"+(lenVal/10)+" 0 z " )
	 .attr({'stroke':'#421610','stroke-width': 2,'fill':'#54160d'});  
	 
     var cantiHt = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l "+lenVal+" 0 l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
	 
	 var bkBeam = paper.path("M"+(x+50-widDiv-20+widVal)+" "+(y+250-20-widDiv-250+widVal)+" l 0 "+htVal+" l -"+widVal+" -"+widVal+"l 0 -"+htVal+" z")
	 .attr({'stroke':'#000d0d','stroke-width': 2,'fill':'50-#ded9d5-#1f1e1d'});
		
		
		ftxt.remove();
		
		 var lin1 = paper.path("M"+(x+50+lenVal-40)+" "+(y-20)+" l 0 -50 ")
	 .attr({'stroke':'#000','stroke-width': 3});
	 
	 var arr = paper.path("M"+(x+50+lenVal-40)+" "+(y-21)+" l 10 -10 l -20 0 l 10 10 ")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
	 
	  ftxt =  paper.text((x+50+lenVal-40),(y-21-60),"F : "+tx1+" N").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
	  
	  var r1txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r1txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 1").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
      
      var r2txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r2txt2 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 2").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    
      
      var r3txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r3txt1 = paper.text((x+50-widDiv-20+widDiv+widDiv+20+8-10+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+5)," 3").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
       
       
       var r4txt = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)),"R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#f20515'});
      var r4txt4 = paper.text((x+50-widDiv-20+widDiv+widDiv+20-10+2*widDiv+8+(lenVal/10)),(y+250-20-widDiv-250+widDiv-(widDiv*2)-2+htVal+(widthVal*2)+5)," 4").attr({'font-weight': 'bold','font-size':'10px','stroke':'#f20515'});
    

	}

   var paper = new Raphael(document.getElementById('main-div-conf'));
    var x=100;
    var y=100;

   var p1 = paper.text(x+280,y+108,"") ;
    var	p2 = paper.text(x+375,y+212,"");
	 var p3 = paper.text(x+375,y+107,"");
	 var p4 = paper.text(x+278,y+212,"");
	 var p5 = paper.text(x-6,y+159,"");
	 var txt = paper.text(x-6,y+159,"");
var ftxt =  paper.text((x+210),(y+250),"");

function bridgeCalculate(){	
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
		
		 var linJoin = paper.path('M' + (x +60) + ' ' + (y + 260 )  + 'l 0 -40')
		.attr({  'stroke-width': '2', 'stroke':'#000' }).toFront();	
		
	var arr = paper.path('M' + (x +60) + ' ' + (y + 230 )  + 'l 8 0 l -8 -8 l -8 8 z')
		.attr({  'stroke-width': '2', 'stroke':'#000','fill':'#decac8' }).toFront();
	
	if(flgType==1){
		columnBeam = paper.image("images/columnType1.png",(x), (y+270),250, 150);
		
		var linF = paper.path("M"+(x+100+31)+" "+(y+289)+" l 0 -22 ")
	 .attr({'stroke':'#000','stroke-width': 2});
 
	  var linAr = paper.path("M"+(x+100+31)+" "+(y+289)+"l 5 -5 l -10 0 l 5 5")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
	

	  ftxt =  paper.text((x+153),(y+272),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
	
		
	}if(flgType==2){	
	cantiBeam = paper.image("images/cantiBeamW1.png",(x), (y+270),250, 150);
	
	 var linF = paper.path("M"+(x+210)+" "+(y+285)+" l 0 -18 ")
	 .attr({'stroke':'#000','stroke-width': 2});
	 
	  var linAr = paper.path("M"+(x+210)+" "+(y+285)+"l 5 -5 l -10 0 l 5 5")
	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
	
	  ftxt =  paper.text((x+240),(y+250),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
	
	}
	 var beamBorder = paper.path('M' + (x -30) + ' ' + (y + 260 )  + 'l 400 0 l 0 170 l -400 0 z')
		.attr({ 'stroke-dasharray':  "-.", 'stroke-width': '2', 'stroke':'#8a8182' }).toFront();
		
   
		
		 p5 =  paper.text(x-10,y+75,"V").attr({'stroke' : '#000' , "font-size":"16px","font-weight": "bold","fill":"red"});

		
		
//		 var linF = paper.path("M"+(x+210)+" "+(y+285)+" l 0 -18 ")
//	 .attr({'stroke':'#000','stroke-width': 2});
//	 
//	  var linAr = paper.path("M"+(x+210)+" "+(y+285)+"l 5 -5 l -10 0 l 5 5")
//	 .attr({'stroke':'#000','stroke-width': 2,'fill':"#decac8"});
//	
//	  ftxt =  paper.text((x+240),(y+272),"F : "+" "+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
	
	 
	

	
	
//	var p1,p2,p3,p4,p5;
//	console.log("secondVal"+secondVal);
//	console.log("thirdVal"+thirdVal);
	
	
	 
//	 var flg = 3;
	 
	  r1 = paper.rect(x+193,y+55,75,40,10).attr({'stroke' : '#616362' , 'stroke-width' : 3,"fill":"#fff" });
	 if(flg==1){
		ftxt.remove();
	 
	 
	     paper.image("images/rChangeStatic.png",(x+115), (y+10),50, 25);
	      paper.image("images/rChangeStatic.png",(x+300), (y+140),50, 25);
	       paper.image("images/rChangeStatic.png",(x+300), (y+10),50, 25);
	        paper.image("images/rChangeStatic.png",(x+115), (y+140),50, 25);


          if(flgType==1){
	
		  ftxt =  paper.text((x+167),(y+272),"F : "+selLoadOut+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515',});			

        }
      if(flgType==2){
      	  ftxt =  paper.text((x+240),(y+272),"F : "+selLoadOut+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
        }

	 }
	 if(flg==2){
		ftxt.remove();
	    p5.remove();
	    
	  paper.image("images/rChangeStatic.png",(x+115), (y+10),50, 25);
	      paper.image("images/rChangeStatic.png",(x+300), (y+140),50, 25);
	       paper.image("images/rChangeStatic.png",(x+300), (y+10),50, 25);
	        paper.image("images/rChangeStatic.png",(x+115), (y+140),50, 25);
	        
      paper.text(x-10,y+75,eb+"V").attr({'stroke' : '#000' , "font-size":"16px","font-weight": "bold","fill":"red"});
        if(flgType==1){
	
		  ftxt =  paper.text((x+167),(y+272),"F : "+selLoadOut+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			

        }
      if(flgType==2){
      	  ftxt =  paper.text((x+240),(y+272),"F : "+selLoadOut+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
        }
     }
     
     
     if(flg == 3){
	ftxt.remove();
	p5.remove();
	
	paper.image("images/rChangeStatic.png",(x+115), (y+10),50, 25);
	      paper.image("images/rChangeStatic.png",(x+300), (y+140),50, 25);
	       paper.image("images/rChangeStatic.png",(x+300), (y+10),50, 25);
	        paper.image("images/rChangeStatic.png",(x+115), (y+140),50, 25);
     
     p5 = paper.text(x-10,y+75,eb+"V").attr({'stroke' : '#000' , "font-size":"16px","font-weight": "bold","fill":"red"});
    
    if(flgType==1){
	
		  ftxt =  paper.text((x+167),(y+272),"F : "+selLoadOut+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			

        }
      if(flgType==2){
      	  ftxt =  paper.text((x+240),(y+272),"F : "+selLoadOut+" N").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});			
        }
    
	
     if (corrOut == outVolt){
      txt = paper.text(x+230,y+75,corrOut).attr({'stroke' : '#e3f702' , "font-size":"20px","font-family":"digital-clock-font"});
     r1.attr({"fill":"black"});
     }else{
	  txt = paper.text(x+230,y+75,corrOut).attr({'stroke' : '#f70202' , "font-size":"20px","font-family":"digital-clock-font"});
     r1.attr({"fill":"black"});
    
     }

}
}







//function bridgeCalculate(){
//	$("#main-div-conf").html('');
//	
//	x = 100;
//	y = 100;
//	var paper = new Raphael(document.getElementById('main-div-conf'),700,500);
//	 p1 = paper.text(x+280,y+108,"") ;
//	 p2 = paper.text(x+375,y+212,"");
//	 p3 = paper.text(x+375,y+107,"");
//	 p4 = paper.text(x+278,y+212,"");
//	 p5 = paper.text(x-6,y+159,"");
//	
////	var p1,p2,p3,p4,p5;
////	console.log("secondVal"+secondVal);
////	console.log("thirdVal"+thirdVal);
//	
//	 wheatStone = paper.image("images/wheatStoneBridgeE.png",(x-50), (y-100),700, 600);
//	  r1 = paper.circle(x+327,y+160,35).attr({'stroke' : '#000' , 'stroke-width' : 3,"fill":"#fff" });
//	  r2 = paper.circle(x+228,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff"});
//	  r3 = paper.circle(x+423,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff" });
//	 if(flg==1){
//	  paper.text(x+180,y+100,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//	  paper.text(x+225,y+95,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
//	  paper.text(x+465,y+232,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//	  paper.text(x+508,y+227,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
// 	  paper.text(x+465,y+95,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
// 	  paper.text(x+510,y+87," -6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//      
//      paper.text(x+180,y+230,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//      paper.text(x+224,y+225,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
////	  paper.text(x+280,y+100,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
////	 paper.text(x+385,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//// 	 paper.text(x+380,y+100,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
////	 paper.text(x+270,y+215,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//
//	 
//	 }
//	 if(flg==2){
//	   paper.text(x+180,y+100,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//	  paper.text(x+225,y+95,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
//	  paper.text(x+465,y+232,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//	  paper.text(x+508,y+227,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
// 	  paper.text(x+465,y+95,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
// 	  paper.text(x+510,y+90,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//      
//      paper.text(x+180,y+230,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//      paper.text(x+224,y+225,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//      
//      paper.text(x-6,y+159,eb+"v").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
//
//     }
//     
//     
//     if(flg == 3){
//	p1 =   paper.text(x+180,y+100,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//	 p11 = paper.text(x+225,y+95,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
//	p2=  paper.text(x+465,y+232,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//	p22=  paper.text(x+508,y+227,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//
// 	p3 =  paper.text(x+465,y+95,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
// 	p33=  paper.text(x+510,y+90,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//      
//    p4=  paper.text(x+180,y+230,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
//     p44 = paper.text(x+224,y+225,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
//      
//     p5= paper.text(x-6,y+159,eb+"v").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
//     if (corrOut == outVolt){
//      txt = paper.text(x+328,y+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold"});
//     r1.attr({"fill":"green"});
//     }else{
//	  txt = paper.text(x+328,y+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold"});
//     r1.attr({"fill":"red"});
//    
//     }
//}
//}
//





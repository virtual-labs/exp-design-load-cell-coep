
function columnSize(){
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

	var x=150;
	var y = -80 ;
    
    var diameter = parseInt(areaSelect);
    
       console.log("areaSelect : "+areaSelect);
            
        var l1 = paper.path("M "+(x+150-(diameter))+" "+(y+200)+ " l 0 200 ");
        
        var l2 = paper.path("M "+(x+150+(diameter))+" "+(y+200)+ " l 0 200 ");  
        
        var shape = paper.path("M"+((x+168-(diameter)-40)+" "+(y+400-10)+" l "+((diameter*2)+60)+" 0 "+" l -60 98 "+
                                   " l "+(-(diameter*2)-60)+" 0 z "      )).attr({'fill':'50-#c4bebe-#141414','stroke':'#000','stroke-width':'2'}).toBack();  
        
        var arc = paper.path("M"+(x+150-(diameter))+" "+(y+400)+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+"  ").attr({'fill':'#fff'}).toFront();    
        
        var fntShap = paper.path("M "+(x+150-(diameter))+" "+(y+200)+" l 0 200"+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+" l 0 -200 z")
             .attr({'stroke':'#000','fill':'50-#fff-#9e9d9d'}).toFront();
            
         var ellipse = paper.ellipse((x+150), (y+200), diameter, 20).attr({'fill':'50-#c4bebe-#141414',' stroke': "#000", "stroke-width": 2 });
       var ellipse1 = paper.ellipse((x+150), (y+200), diameter/2, 10).attr({'fill': "#e1e4e6",' stroke': "#000", "stroke-width": 2 });


         var strg = paper.path("M"+(x+175)+" "+(y+250)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','stroke-dasharray':  "-.",'stroke-width':1.5}).toFront();
               
               
         var strgS = paper.path("M"+(x+120)+" "+(y+310)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','fill':  "#40030b"}).toFront();      
        
    
    var strgA1 = paper.path("M"+(x+125)+" "+(y+285)+" l 0 -8 "+"A 18 20 0 0 1 "+(x+152)+" "+(y+275)+"l 0 8")
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();
                        
     var strgA2 = paper.path("M"+(x+125)+" "+(y+285)+"A 18 20 0 0 1 "+(x+152)+" "+(y+282.5))               
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();                  
          
          
            var strgA21 = paper.path("M"+(x+155)+" "+(y+350)+" l 0 8 "+"A 18 20 0 0 0 "+(x+180)+" "+(y+356.5)+" l 0 -8"
                           +"A 18 20 0 0 1 "+(x+155)+" "+(y+349.5)+"z")
                        .attr({'stroke':'#000','stroke-width':1.5,'fill':  "#40030b"}).toFront();
              
            var lineAr = paper.path("M"+(x+150+(diameter/1.5))+" "+(y+200)+" l 42 -42");  
                 var r3 = paper.text((x+173+2),(y+240)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r31 = paper.text((x+173+8+2),(y+245)," 3").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
           
     var r1 = paper.text((x+120+2),(y+355)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r11 = paper.text((x+120+8+2),(y+360)," 1").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
     
     var r2 = paper.text((x+173),(y+285+85)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r22 = paper.text((x+181),(y+290+85)," 2").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});
         
          var r4 = paper.text((x+125),(y+285-25)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r42 = paper.text((x+133),(y+290-25)," 4").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
                   
          
    
               var areaTxt = paper.text((x+150+(diameter/1.5)+100),(y+150)," Cross sectional Area  ")
               .attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});  
               
               
               
  }    
  
  
  function areaEnter(){
	 
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

	var x=150;
	var y = -80 ;
    
    var diameter = parseInt(diam);
    
       console.log("areaSelect : "+areaSelect);
            
        var l1 = paper.path("M "+(x+150-(diameter))+" "+(y+200)+ " l 0 200 ");
        
        var l2 = paper.path("M "+(x+150+(diameter))+" "+(y+200)+ " l 0 200 ");  
        
        var shape = paper.path("M"+((x+168-(diameter)-40)+" "+(y+400-10)+" l "+((diameter*2)+60)+" 0 "+" l -60 98 "+
                                   " l "+(-(diameter*2)-60)+" 0 z "      )).attr({'fill':'50-#c4bebe-#141414','stroke':'#000','stroke-width':'2'}).toBack();  
        
        var arc = paper.path("M"+(x+150-(diameter))+" "+(y+400)+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+"  ").attr({'fill':'#fff'}).toFront();    
        
        var fntShap = paper.path("M "+(x+150-(diameter))+" "+(y+200)+" l 0 200"+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+" l 0 -200 z")
             .attr({'stroke':'#000','fill':'50-#fff-#9e9d9d'}).toFront();
            
         var ellipse = paper.ellipse((x+150), (y+200), diameter, 20).attr({'fill':'50-#c4bebe-#141414',' stroke': "#000", "stroke-width": 2 });
       var ellipse1 = paper.ellipse((x+150), (y+200), diameter/2, 10).attr({'fill': "#e1e4e6",' stroke': "#000", "stroke-width": 2 });


         var strg = paper.path("M"+(x+175)+" "+(y+250)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','stroke-dasharray':  "-.",'stroke-width':1.5}).toFront();
               
               
         var strgS = paper.path("M"+(x+120)+" "+(y+310)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','fill':  "#40030b"}).toFront();      
        
    
    var strgA1 = paper.path("M"+(x+125)+" "+(y+285)+" l 0 -8 "+"A 18 20 0 0 1 "+(x+152)+" "+(y+275)+"l 0 8")
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();
                        
     var strgA2 = paper.path("M"+(x+125)+" "+(y+285)+"A 18 20 0 0 1 "+(x+152)+" "+(y+282.5))               
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();                  
          
          
            var strgA21 = paper.path("M"+(x+155)+" "+(y+350)+" l 0 8 "+"A 18 20 0 0 0 "+(x+180)+" "+(y+356.5)+" l 0 -8"
                           +"A 18 20 0 0 1 "+(x+155)+" "+(y+349.5)+"z")
                        .attr({'stroke':'#000','stroke-width':1.5,'fill':  "#40030b"}).toFront();
              
             var lineAr = paper.path("M"+(x+150+(diameter/1.5))+" "+(y+200)+" l 50 -50 l 10 0");  
                       
    
               var areaTxt = paper.text((x+150+(diameter/1.5)+150),(y+150),"Area : "+areaVal+" sq mm")
               .attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});  
               
               var lineAr = paper.path("M"+(x+150+(diameter/1.5))+" "+(y+200)+" l 42 -42");  
                 var r3 = paper.text((x+173+2),(y+240)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r31 = paper.text((x+173+8+2),(y+245)," 3").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
           
     var r1 = paper.text((x+120+2),(y+355)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r11 = paper.text((x+120+8+2),(y+360)," 1").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
     
     var r2 = paper.text((x+173),(y+285+85)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r22 = paper.text((x+181),(y+290+85)," 2").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});
         
          var r4 = paper.text((x+125),(y+285-25)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r42 = paper.text((x+133),(y+290-25)," 4").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
                   
          
    
//               var areaTxt = paper.text((x+150+(diameter/1.5)+100),(y+150)," Cross sectional Area  ")
//               .attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});  
}    


function finalDiag(){
	
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

	var x=150;
	var y = -80 ;
    
    var diameter = parseInt(diam);
    
       console.log("areaSelect : "+areaSelect);
            
        var l1 = paper.path("M "+(x+150-(diameter))+" "+(y+200)+ " l 0 200 ");
        
        var l2 = paper.path("M "+(x+150+(diameter))+" "+(y+200)+ " l 0 200 ");  
        
        var shape = paper.path("M"+((x+168-(diameter)-40)+" "+(y+400-10)+" l "+((diameter*2)+60)+" 0 "+" l -60 98 "+
                                   " l "+(-(diameter*2)-60)+" 0 z "      )).attr({'fill':'50-#c4bebe-#141414','stroke':'#000','stroke-width':'2'}).toBack();  
        
        var arc = paper.path("M"+(x+150-(diameter))+" "+(y+400)+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+"  ").attr({'fill':'#fff'}).toFront();    
        
        var fntShap = paper.path("M "+(x+150-(diameter))+" "+(y+200)+" l 0 200"+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+" l 0 -200 z")
             .attr({'stroke':'#000','fill':'50-#fff-#9e9d9d'}).toFront();
            
         var ellipse = paper.ellipse((x+150), (y+200), diameter, 20).attr({'fill':'50-#c4bebe-#141414',' stroke': "#000", "stroke-width": 2 });
       var ellipse1 = paper.ellipse((x+150), (y+200), diameter/2, 10).attr({'fill': "#e1e4e6",' stroke': "#000", "stroke-width": 2 });


         var strg = paper.path("M"+(x+175)+" "+(y+250)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','stroke-dasharray':  "-.",'stroke-width':1.5}).toFront();
               
               
         var strgS = paper.path("M"+(x+120)+" "+(y+310)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','fill':  "#40030b"}).toFront();      
        
    
    var strgA1 = paper.path("M"+(x+125)+" "+(y+285)+" l 0 -8 "+"A 18 20 0 0 1 "+(x+152)+" "+(y+275)+"l 0 8")
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();
                        
     var strgA2 = paper.path("M"+(x+125)+" "+(y+285)+"A 18 20 0 0 1 "+(x+152)+" "+(y+282.5))               
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();                  
          
          
            var strgA21 = paper.path("M"+(x+155)+" "+(y+350)+" l 0 8 "+"A 18 20 0 0 0 "+(x+180)+" "+(y+356.5)+" l 0 -8"
                           +"A 18 20 0 0 1 "+(x+155)+" "+(y+349.5)+"z")
                        .attr({'stroke':'#000','stroke-width':1.5,'fill':  "#40030b"}).toFront();
              
//             var lineAr = paper.path("M"+(x+150+(diameter/1.5))+" "+(y+200)+" l 50 -50 l 20 0");  
//                       
//    
//               var areaTxt = paper.text((x+150+(diameter/1.5)+100),(y+150),"Area : ")
//               .attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});  
	     var lineF = paper.path("M"+(x+150)+" "+(y+200)+" l 0 -50").attr({"stroke-width":3});
               
               var arrF = paper.path("M"+(x+150)+" "+(y+199.7)+" l -7 -7 l 14 0 z").attr({"stroke-width":1,'fill':"#000"})
               forceTxt = paper.text(x,y," ");
                forceTxt = paper.text(x+145,y+130," F  ").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});
               
//               var lineAr = paper.path("M"+(x+150+(diameter/1.5))+" "+(y+200)+" l 42 -42");  
                 var r3 = paper.text((x+173+2),(y+240)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r31 = paper.text((x+173+8+2),(y+245)," 3").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
           
     var r1 = paper.text((x+120+2),(y+355)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r11 = paper.text((x+120+8+2),(y+360)," 1").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
     
     var r2 = paper.text((x+173),(y+285+85)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r22 = paper.text((x+181),(y+290+85)," 2").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});
         
          var r4 = paper.text((x+125),(y+285-25)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r42 = paper.text((x+133),(y+290-25)," 4").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
                   
          
    
//               var areaTxt = paper.text((x+150+(diameter/1.5)+100),(y+150)," Cross sectional Area  ")
//               .attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});  
               
	    
}



function forceEnter(){
	
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

	var x=150;
	var y = -80 ;
    
    forceTxt.remove();
    
    var diameter = parseInt(diam);
    
       console.log("areaSelect : "+areaSelect);
            
        var l1 = paper.path("M "+(x+150-(diameter))+" "+(y+200)+ " l 0 200 ");
        
        var l2 = paper.path("M "+(x+150+(diameter))+" "+(y+200)+ " l 0 200 ");  
        
        var shape = paper.path("M"+((x+168-(diameter)-40)+" "+(y+400-10)+" l "+((diameter*2)+60)+" 0 "+" l -60 98 "+
                                   " l "+(-(diameter*2)-60)+" 0 z "      )).attr({'fill':'50-#c4bebe-#141414','stroke':'#000','stroke-width':'2'}).toBack();  
        
        var arc = paper.path("M"+(x+150-(diameter))+" "+(y+400)+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+"  ").attr({'fill':'#fff'}).toFront();    
        
        var fntShap = paper.path("M "+(x+150-(diameter))+" "+(y+200)+" l 0 200"+"A 20 8 0 0 0 "+(x+150+diameter)+" "+(y+400)+" l 0 -200 z")
             .attr({'stroke':'#000','fill':'50-#fff-#9e9d9d'}).toFront();
            
         var ellipse = paper.ellipse((x+150), (y+200), diameter, 20).attr({'fill':'50-#c4bebe-#141414',' stroke': "#000", "stroke-width": 2 });
       var ellipse1 = paper.ellipse((x+150), (y+200), diameter/2, 10).attr({'fill': "#e1e4e6",' stroke': "#000", "stroke-width": 2 });


         var strg = paper.path("M"+(x+175)+" "+(y+250)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','stroke-dasharray':  "-.",'stroke-width':1.5}).toFront();
               
               
         var strgS = paper.path("M"+(x+120)+" "+(y+310)+ " l 10 0 l 0 35 l -10 0 z")
               .attr({'stroke':'#000','fill':  "#40030b"}).toFront();      
        
    
    var strgA1 = paper.path("M"+(x+125)+" "+(y+285)+" l 0 -8 "+"A 18 20 0 0 1 "+(x+152)+" "+(y+275)+"l 0 8")
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();
                        
     var strgA2 = paper.path("M"+(x+125)+" "+(y+285)+"A 18 20 0 0 1 "+(x+152)+" "+(y+282.5))               
                        .attr({'stroke':'#000','stroke-width':1.5,'stroke-dasharray':  "-."}).toFront();                  
          
          
            var strgA21 = paper.path("M"+(x+155)+" "+(y+350)+" l 0 8 "+"A 18 20 0 0 0 "+(x+180)+" "+(y+356.5)+" l 0 -8"
                           +"A 18 20 0 0 1 "+(x+155)+" "+(y+349.5)+"z")
                        .attr({'stroke':'#000','stroke-width':1.5,'fill':  "#40030b"}).toFront();
              
//             var lineAr = paper.path("M"+(x+150+(diameter/1.5))+" "+(y+200)+" l 50 -50 l 20 0");  
//                       
//    
//               var areaTxt = paper.text((x+150+(diameter/1.5)+100),(y+150),"Area : ")
//               .attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});  
	     var lineF = paper.path("M"+(x+150)+" "+(y+200)+" l 0 -50").attr({"stroke-width":3});
               
               var arrF = paper.path("M"+(x+150)+" "+(y+199.7)+" l -7 -7 l 14 0 z").attr({"stroke-width":1,'fill':"#000"})
               
                forceTxt = paper.text(x+145,y+130," F : "+ax1+" N").attr({'font-weight': 'bold','font-size':'16px','stroke':'#f20515'});
                
                var r3 = paper.text((x+173+2),(y+240)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r31 = paper.text((x+173+8+2),(y+245)," 3").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
           
     var r1 = paper.text((x+120+2),(y+355)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r11 = paper.text((x+120+8+2),(y+360)," 1").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
     
     var r2 = paper.text((x+173),(y+285+85)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r22 = paper.text((x+181),(y+290+85)," 2").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});
         
          var r4 = paper.text((x+125),(y+285-25)," R").attr({'font-weight': 'bold','font-size':'12px','stroke':'#000'});       
         var r42 = paper.text((x+133),(y+290-25)," 4").attr({'font-weight': 'bold','font-size':'8px','stroke':'#000'});       
                   
               
	
}
    
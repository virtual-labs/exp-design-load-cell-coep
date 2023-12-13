function bridgeCalculate(){
	$("#main-div-conf").html('');
	x = 100;
	y = 100;
	var paper = new Raphael(document.getElementById('main-div-conf'),700,500);
	 p1 = paper.text(x+280,y+108,"") ;
	 p2 = paper.text(x+375,y+212,"");
	 p3 = paper.text(x+375,y+107,"");
	 p4 = paper.text(x+278,y+212,"");
	 p5 = paper.text(x-6,y+159,"");
	
//	var p1,p2,p3,p4,p5;
//	console.log("secondVal"+secondVal);
//	console.log("thirdVal"+thirdVal);
	
	 wheatStone = paper.image("images/wheatStoneBridgeE.png",(x-50), (y-100),700, 600);
	  r1 = paper.circle(x+327,y+160,35).attr({'stroke' : '#000' , 'stroke-width' : 3,"fill":"#fff" });
	  r2 = paper.circle(x+228,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff"});
	  r3 = paper.circle(x+423,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff" });
	 if(flg==1){
	  paper.text(x+180,y+100,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
	  paper.text(x+225,y+95,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

	  paper.text(x+465,y+232,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
	  paper.text(x+508,y+227,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

 	  paper.text(x+465,y+95,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
 	  paper.text(x+510,y+90,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
      
      paper.text(x+180,y+230,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
      paper.text(x+224,y+225,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

//	  paper.text(x+280,y+100,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//	 paper.text(x+385,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
// 	 paper.text(x+380,y+100,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//	 paper.text(x+270,y+215,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});

	 
	 }
	 if(flg==2){
	   paper.text(x+180,y+100,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
	  paper.text(x+225,y+95,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

	  paper.text(x+465,y+232,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
	  paper.text(x+508,y+227,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

 	  paper.text(x+465,y+95,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
 	  paper.text(x+510,y+90,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
      
      paper.text(x+180,y+230,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
      paper.text(x+224,y+225,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
      
      paper.text(x-6,y+159,eb+"v").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});

     }
     
     
     if(flg == 3){
	p1 =   paper.text(x+180,y+100,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
	 p11 = paper.text(x+225,y+95,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

	p2=  paper.text(x+465,y+232,thirdVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
	p22=  paper.text(x+508,y+227,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});

 	p3 =  paper.text(x+465,y+95,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
 	p33=  paper.text(x+510,y+90,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
      
    p4=  paper.text(x+180,y+230,secondVal+" X 10").attr({'stroke' : '#084373' , "font-size":"14px","fill":"#0ee8e5"});
     p44 = paper.text(x+224,y+225,"-6").attr({'stroke' : '#084373' , "font-size":"12px","fill":"#0ee8e5"});
      
     p5= paper.text(x-6,y+159,eb+"v").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
     if (corrOut == outVolt){
      txt = paper.text(x+328,y+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold"});
     r1.attr({"fill":"green"});
     }else{
	  txt = paper.text(x+328,y+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold"});
     r1.attr({"fill":"red"});
    
     }
}
}


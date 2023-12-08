function bridgeCalculate(){
	$("#main-div-conf").html('');
	x = 100;
	y = 100;
	console.log("secondVal"+secondVal);
	console.log("thirdVal"+thirdVal);
	var paper = new Raphael(document.getElementById('main-div-conf'),600,500);
	 wheatStone = paper.image("images/wheatStoneBridgeE.png",(x-50), (y-100),700, 600);
	 var r1 = paper.circle(x+327,y+160,35).attr({'stroke' : '#000' , 'stroke-width' : 3 });
	 var r2 = paper.circle(x+228,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff"});
	 var r3 = paper.circle(x+423,y+142,12).attr({'stroke' : '#fff' , 'stroke-width' : 3,"fill":"#fff" });
	 if(flg==1){
	 paper.text(x+280,y+108,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x+375,y+212,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
 	 paper.text(x+375,y+107,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     paper.text(x+278,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     
//	  paper.text(x+280,y+100,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//	 paper.text(x+385,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
// 	 paper.text(x+380,y+100,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
//	 paper.text(x+270,y+215,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});

	 
	 }
	 if(flg==2){
	 paper.text(x+280,y+108,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x+375,y+212,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
 	 paper.text(x+375,y+107,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     paper.text(x+278,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x-6,y+159,eb+"v").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
     }
     
     
     if(flg == 3){
	paper.text(x+280,y+108,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x+375,y+212,thirdVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
 	 paper.text(x+375,y+107,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
     paper.text(x+278,y+212,secondVal).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"#0ee8e5"});
	 paper.text(x-6,y+159,eb+"v").attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold","fill":"red"});
     if (corrOut == outVolt){
     var txt = paper.text(x+328,y+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold"});
     r1.attr({"fill":"green"});
     }else{
	 var txt = paper.text(x+328,y+159,corrOut).attr({'stroke' : '#000' , "font-size":"20px","font-weight": "bold"});
     r1.attr({"fill":"red"});
    
     }
}
}


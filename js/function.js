// MENU SCROLLING
window.addEventListener("scroll", bringmenu);
document.getElementById("bottommenu").style.top = "-10%";

function bringmenu() {
		
       if (document.body.scrollTop > 14 || document.documentElement.scrollTop > 14) {
           	document.getElementById("bottommenu").style.top = "0";
           //	document.getElementById("bottomMenuNormal").style.display = "none";
       } else {
           	document.getElementById("bottommenu").style.top = "-10%";
        	//document.getElementById("bottomMenuNormal").style.display = "block";
       }
}

// OTHERS
var imgSlider1    = ['img/1a.jpg','img/1b.jpg','img/2a.jpg','img/2b.jpg','img/3a.jpg','img/3b.jpg','img/4a.jpg','img/4b.jpg','img/5a.jpg','img/5b.jpg','img/6a.jpg','img/6b.jpg'];
var descSlider1   = ['Item 0','Item 1','Item 2','Item 3','Item 4','Item 5'];
var priceSlider1  = [97,127,107,117,87,77];
var imgSlider1pos = 0;
var imgSlider1Ids = ['23127205478578','23127224385714','23127166386354','23127158784178','23081537110194','23081537077426','23081451782322','23081451716786','22965633450162','22965633515698'];

function elemId(id){
	return document.getElementById(id);
}



function move(option){
	switch(option){
		case 0:
			imgSlider1pos--;
			break;
		case 1:
			imgSlider1pos++;
			break;
	}	
	setValues(); 
	var elList = updateTransition(option);

  	for(let i = 0; i < elList.length; i++){
	  	let el = elList[i];
	 	el.addEventListener("transitionend", updateTransition, true);
	}


}

function setValues(){

	// if(imgSlider1pos < 0)
	// 	imgSlider1pos = imgSlider1.length-2;

	for( i = imgSlider1pos,j=0 ; j<8;i++,j+=2){

		// if(i >= imgSlider1.length)
		// 	i = 0;

		//console.log(" j: "+j+" "+imgSlider1[i*2]+" "+imgSlider1[i*2+1]);
		console.log(i*2+" "+j);
		elemId(imgSlider1Ids[j]).src   = imgSlider1[i*2];
		// elemId(imgSlider1Ids[j]).style.display = 'none';
		elemId(imgSlider1Ids[j+1]).src = imgSlider1[i*2+1];
		// elemId(imgSlider1Ids[j+1]).style.display = 'none';
		let i2 = Math.trunc(j/2);
		console.log("i: "+i+" "+descSlider1[i]);
	//	console.log(elemId(i2+"Desc"));
	//	console.log(elemId(i2+"Price"));

		elemId(i2+"Desc").innerHTML  = descSlider1[i];
		elemId(i2+"Price").innerHTML = "$"+ priceSlider1[i];
	}
console.log('----'+imgSlider1pos);

	elemId('prev-button').disabled = imgSlider1pos > 0 ? false : true;
	elemId('next-button').disabled = imgSlider1pos < priceSlider1.length-4 ? false : true;
}




function updateTransition(option) {
		// var el = document.querySelector(".Carousel__Cell");
var elList =document.getElementsByClassName("Carousel__Cell");
  // if (el) {
  //   el.className = "slideRight";
  // } else {
  //   el = document.querySelector("div.slideRight");
  //   el.className = "slideLeft";
  // }

  for(let i = 0; i < elList.length; i++){
  	let el = elList[i];
	 el.classList.remove('slideLeft', 'slideRight');

	  	switch(option){
			case 0:

				el.classList.add("slideLeft");
				break;
			case 1:
				el.classList.add("slideRight");
				break;
		}

	elList[i] = el;	
  }




	// for(j=0 ; j<imgSlider1Ids.length;j++){

	// 	elemId(imgSlider1Ids[j]).style.display = 'block';

	// }
 

  return elList;
}
var b = document.getElementById("addClick");
var n= document.getElementById("newItem");
var ul= document.getElementById("ol");
var list= document.getElementsByTagName("li");
var newL = document.getElementById("newL");

function Ipl (){
	return n.value.length;
};




function adder (){
	var li = document.createElement("li");
	var newButton = document.createElement("BUTTON")
		li.appendChild(document.createTextNode(n.value));
		li.appendChild(newButton);
		newButton.appendChild(document.createTextNode("Check"));
		ul.appendChild(li);
		li.setAttribute("class","dash")
		newButton.setAttribute("id","newButton")
		n.value="";
		newButton.addEventListener("click", function (){
		li.classList.toggle("done"); 	});
};




function placeholder() {
	n.placeholder="Enter Item";
};

function ent () {
	if (event.keyCode === 13){
		return true;
	}
}

function refbut(){
	if(list.length > 0){	
	var newL = document.getElementById("newL");
	newL.innerHTML="New List" ;
	newL.addEventListener("click", function removelist(){
		const parent = document.getElementById("ol");
		while (parent.firstChild) {
		parent.firstChild.remove();
		}
} ); }
};

function removebut(){
	var rembutex = document.getElementsByTagName("li");
	if(rembutex === true){
		console.log("yes");
	}
	};



function cl () {
	if (Ipl() > 0) {
		adder();
		refbut();
		removebut();
	} else{
		placeholder();
	}
};

function ce () {
	if (Ipl() > 0 && ent()) {
		adder();
		refbut();
		removebut();
	} else{
		placeholder();
	}
};

b.addEventListener("click", cl);

n.addEventListener("keypress", ce);


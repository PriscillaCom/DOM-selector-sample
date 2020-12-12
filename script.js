var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createButton(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	button.onclick = removeListItem;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.onclick = toggleListItem;
	input.value = "";
	createButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListItem(event) {
	var target = event.target;
	target.classList.toggle("done");	
}

function removeListItem(event){
	var target = event.target;
	target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

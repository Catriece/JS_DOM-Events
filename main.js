console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let n1 = document.getElementById("node1").innerText = `I used the getElementById("node1") method to access this`;

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let n2 = document.getElementsByClassName("node2");
let changeTxt = n2[0].innerText = `I used the getElementByClassName("node2") method to access this`;

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let n345 = document.getElementsByTagName("h3");
function chngText(coll) {
    for (i = 0; i < coll.length; i++) {
        let newText = n345[i].innerText = `I used the getElementByTagName("h3") method to access all of these`;
    }
}

chngText(n345)


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

let newParagraph = document.createElement("p");
let node = document.createTextNode("This node was created using the createElement() method");
newParagraph.appendChild(node);
const parent = document.getElementById("parent");
parent.appendChild(newParagraph);


// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

let newA = document.createElement("a");
let aText = document.createTextNode(`I am an <a> tag`);
newA.appendChild(aText);
newA.title = "The link";
newA.href = "https://www.linkedin.com/in/catriece-gilbert-971958236/";
parent.appendChild(newA);

parent.insertBefore(newA, newParagraph)





/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

let N1 = document.getElementById("N1");
let newN1 = document.createElement("p");
newN1.id = "newN1";
let newN1_content = document.createTextNode("New Child Node");
newN1.appendChild(newN1_content);
let parentP = N1.parentNode;
parentP.replaceChild(newN1, N1);
let removed = parentP.removeChild(newN1);


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

const fruitList = document.createElement("ul");

for (i = 0; i < list.length; i++) {
    const liItem = document.createElement("li");
    const itemTxt = document.createTextNode(list[i]);
    liItem.appendChild(itemTxt);
    fruitList.appendChild(liItem);
}

const contain = document.getElementById("container");
contain.appendChild(fruitList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
    const newDiv = document.createElement("div");
    const div_content = button.addEventListener("click", () => 
    alert("Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"));
    newDiv.appendChild(div_content);
}

const button = document.querySelector("button");


show(button);
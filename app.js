//create li element for our product bags
const bagsProductLi = document.createElement('li');

//where the element should go
//what is the parent element
//attach it to dom
// const ol = document.querySelector('ol');

// .append() - places element as the last one in the list of nodes(adds element as the last child to parent element)

// .prepend() - places element before all elements ( places element before the element calling the method)

//.before() will place an element directly before the element that is calling the method.

// .after() will place an element directory after the element that is calling the method. 

// ol.prepend(bagsProductLi);
bagsProductLi.innerText = "Bags";


//add class to bags li
bagsProductLi.setAttribute('class', 'product group');

bagsProductLi.innerText += "& Wallets"


// create header element
// create header children (h1, nav, ul)
// h1 inner text
// append h1 and nav
// grab div .container
// prepend header to .container
// create ul for li
// create li
//for loop for creating li
//ppend li to ul
//crwate our a tags
//append a tag to ul

const header = document.createElement('header');
//create header

const container = document.querySelector("div.container");
console.log(container);
//grab container

container.prepend(header);
//attach header to container

//create header children 
const h1 = document.createElement("h1");
h1.innerText = "DOM MANIPULATION";
const nav = document.createElement("nav");


header.append(h1)
header.append(nav);

//CREATE ordered list
const ul = document.createElement("ul")


//append ul to nav
nav.append(ul)
const aText = ["Home", "About", "Contact", "Reviews"];
for (let i = 0; i < aText.length; i++) {
    const navLi = document.createElement('li');
    const aTag = document.createElement('a');
    ul.append(navLi);
    navLi.append(aTag);
    aTag.setAttribute('href', '#');
    aTag.innerText = aText[i];

}
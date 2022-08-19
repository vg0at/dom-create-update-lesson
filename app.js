// console.log('Hello world')

// Query Selector
// console.log( document.querySelector('.container') )

// Grab an element by its class name, save it to a variable
const container = document.querySelector('.container')
// Log the variable that holds that element
// console.log(container)


// Grab an element by its TAG name
const li = document.querySelector('li')
// console.log(li)


// Grab an element by its ID
const content = document.querySelector('#content')
// console.log(content)

// Query Selector All()
// Grab all the elements w the class of "product"
const products = document.querySelectorAll('.product')
// Logging a single element inside of the NodeList -- behaves like an array would when indexing
// console.log(products[3])

// Iterating over products
// for (const product of products) {
//     console.log(product.textContent)
// }


// Grab all the elements that are 'input' tags
const inputs = document.querySelectorAll('input')
// console.log(inputs)


const divs = document.querySelectorAll('div')
// console.log(divs)


const list = document.querySelectorAll('li')
// console.log(list)

list.forEach((i, index) => {
    // console.log(i)
    
    // innerHTML will show EVERYTHING inside of the tag, including any nested tags
    // console.log(i.innerHTML)

    // innerText && textContent do the SAME thing
    // Show ONLY the TEXT inside of each tag
    // console.log(i.innerText)
    // console.log(i.textContent)

    // Removing inside of a forEach
    // Not optimal way to do so, you can remove the parent when removing every element inside of a tag, or you can target the element you'd like to remove specifically
    // if(index === 1){
    //     i.remove()
    // }
})


// Remove() - 
const aside = document.querySelector('aside li')
// console.log(aside)
// aside.remove()



const group = document.querySelectorAll('.group')
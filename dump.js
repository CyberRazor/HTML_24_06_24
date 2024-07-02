
let number1 = 20

const number2 = 30

let name = "CODE Lancashire "

// mathmatical operations
let sum = number1 + number2
let sub = number2 - number1
let mul = number1 * number2
let div = number2 / number1

let remainder = number2 % number1

console.log(sum, sub,mul,div, remainder)

//conditional operators
let price = 20

let orderedBefore = false

let shouldGetDiscount = price > 50 || !orderedBefore
if(shouldGetDiscount == true)

    {console.log("You get a discount!!")}
console.log(shouldGetDiscount)

let message1 = "You got a discount of : "
let discount = 10
console.log(message1 + 10 +"%")

//template syntax
//back ticks
///${variable}
console.log(`You got a discount of : ${discount}%`)

//primitive data types
//strings
//numbers
//boolean
//null

//non-primative data types

//array
let mySkills = ["javascript", "PHP", "Python"]
//access array entry
console.log(mySkills[2])
//get array length
console.log("length of array", mySkills.length)



//objects
let item = {
    name: "Laptop",
    price: "10000",
    stock: 10,
    specifications:{ram: "32GB",storage: "1TB"},
    availableColors:["black","white","silver","gold"]
}


console.log(item.price, item.name, item.specifications.storage)

let item2 = {
    name: "Mobile",
    price: "750",
    stock: 6,
    specifications:{ram: "32GB",storage: "1TB"},
    availableColors:["black","white","silver","gold"]
}

const cart = [item, item2]
function calculateCart(){
    let total = 0
    for(i = 0; i < cart.length; i++)
        {total = total +cart[i].price}

}

calculateCart()

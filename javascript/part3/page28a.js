// const products=[
//     {id:1 , name:"product1" ,price:25},
//     {id:2 , name:"product2" ,price:50},
//     {id:3 , name:"product3" ,price:45}
// ];

// //display all the products
// products.forEach((number)=>{
//     number
// console.log(number)})

// //display product price above 40
// products.filter((number)=>{
//     if(number.price>40){
//     console.log(number)}
// })

// //add product2 to the cart  using spread operatorand a key value capacity:1
// let cart=[]

// cart=[{...products[1],capacity:1}]

// console.log(cart)


//orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 45 },
];
let cart = []
//Display all products using forEach
function displayProducts(){
    products.forEach((product)=>console.log(product));
}

//Add product 2 to cart using spread operator with a
//new key quanity and assign 1
function addToCart(id){
    p=products.filter((product)=>product.id==id);
    cart=[...cart,p]
}
//display cart
function displayCart(){
    console.log(cart)
}

displayProducts()
addToCart(2)
displayCart()
addToCart(1)
displayCart()
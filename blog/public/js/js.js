
let cart = document.querySelector('.cart')
let cart_img = document.querySelector('.cart-img')
let info = document.querySelector('.info')
let cart_text = document.querySelector('.cart-text')
let cart_price = document.querySelector('.cart-price')
let btn = document.querySelector('.btn')


function createProductCard(element,parent) {
    let cart2 = document.createElement('div')
    cart2.classList.add('cart')
    parent.appendChild(cart2)
    let cart_img2 = document.createElement('div')
    cart_img2.classList.add('cart-img')
    cart2.appendChild(cart_img2)
    cart_img2.innerHTML = element.image
    let info2 = document.createElement('div')
    info2.classList.add('info')
    cart2.appendChild(info2)
    let cart_text2 = document.createElement('div')
    cart_text2.classList.add('cart-text')
    cart_text2.innerHTML = element.title
    info2.appendChild(cart_text2)
    let cart_price2 = document.createElement('div')
    cart_price2.classList.add('cart-price')
    cart_price2.innerHTML = element.price + ' Рублей'
    info2.appendChild(cart_price2)
    let btn2 = document.createElement('div')
    btn2.classList.add('btn')
    info2.appendChild(btn2)
    btn2.innerHTML = 'КУПИТЬ'









}




let productList = [

    {
        id:1,
        title: 'Масло 5л',
        price: '999',
        description: 'Aboba',
        image: '<img src="./image/img_15.png" id="tovar_img" width="200" height="200">',
        card:' ',
    },
    {
        id:2,
        title: 'Sintec Platinum',
        price: '549',
        description: 'Aboba',
        image: '<img src="./image/img_16.png" id="tovar_img" width="200" height="200">',
        card:' ',
    },
    {
        id:3,
        title: 'Rolf Energy',
        price: '649',
        description: 'Aboba',
        image: '<img src="./image/img_17.png" id="tovar_img" width="200" height="200">',
        card:' ',
    },
    {
        id:4,
        title: 'G-Energy 4',
        price: '599',
        description: 'Aboba',
        image: '<img src="./image/img_18.png" id="tovar_img" width="200" height="200">',
        card:' ',
    },
    {
        id:5,
        title: 'Mobil',
        price: '799',
        description: 'Aboba',
        image: '<img src="./image/img_19.png" id="tovar_img" width="200" height="200">',
        card:' ',
    },
    {
        id:6,
        title: 'Shel Motor Oil',
        price: '499',
        description: 'Aboba',
        image: '<img src="./image/img_20.png" id="tovar_img" width="200" height="200">',
        card:' ',
    },
]
productList.forEach(function(element){
    let parent = document.querySelector('.content')
    createProductCard(element, parent)

});

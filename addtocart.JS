const product = [
    {
        id: 0,
        image: 'images/img-10.jpg',
        title: 'Sneakers flexible',
        prix: 120,
    },
    {
        id: 1,
        image: 'images/Img_2.jpg',
        title: 'Escarpins',
        prix: 80,
    },
    {
        id: 2,
        image: 'images/img_4.jpg',
        title: 'Kit sacs luxus',
        prix: 230,
    },
    {
        id: 3,
        image: 'images/img_6.jpg',
        title: 'Sac Marron',
        prix: 300,
    },
    {
        id: 4,
        image: 'images/img_5.jpg',
        title: 'Sac Mini',
        prix: 200,
    },
    {
        id: 5,
        image: 'images/img_11.jpg',
        title: 'Sac Marron',
        prix: 350,
    },
    {
        id: 6,
        image: 'images/img_7.jpg',
        title: 'Gourmette Starline',
        prix: 150,
    },
    {
        id: 7,
        image: 'images/img_8.jpg',
        title: 'Gourmette Egyptienne',
        prix: 400,
    }




];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, prix} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${prix}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, prix} = items;
            total=total+prix;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${prix}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

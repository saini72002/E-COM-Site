let items=[]

function addItem(img,name,price,quantity=1)
{
     items.push(
         {
             img:"images/"+img,
             name: name,
             price: price,
             quantity: quantity
         }
     )
     window.alert("Item added Successfully");
}

function showCart(){
    
   
    if(items.length==0)
    {
        document.getElementById("Cart").innerHTML='<div class="noitem"> No Items To Display</div>';
        return;
    }
    let cart=`<table><tr>
           
<td></td>
<td>Item Name</td>
<td>Quantity</td>
<td>Price</td>
</tr>`
let sum=0
for( let i=0;i<items.length;i++)
{
    cart +=`
    <tr>
        <td><img src=${items[i].img} class="img" ></img></td>
        <td>${items[i].name}</td>
        <td>${items[i].quantity}</td>
        <td>${items[i].price}</td>
    </tr>  
  `
    sum+=items[i].price
}
cart+=`<tr><td colspan="3">Total Amount</td><td>${sum}</td></tr>`
cart+="</table>"
document.getElementById("Cart").innerHTML=cart
}

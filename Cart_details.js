let items=[]

function addItem(img,name,price,quantity=1)
{
    for( let i=0;i<items.length;i++)
     {
         if(items[i].name==name)
         {
             window.alert("Item Already added in the Cart");
             return;
         }
     }
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

function deleteItem(name)
{
    for( let i=0;i<items.length;i++)
     {
         if(items[i].name==name)
         {
             items.splice(i,1);
         }
     }
     showCart();
}

function showCart(){
    
   
    if(items.length==0)
    {
        document.getElementById("Cart").innerHTML='<div class="noitem"> No Items To Display</div>';
        return;
    }
    let cart=`<table><tr>
           
<td style="font-size: 35px;background-color:black;color:white;">ITEM</td>
<td style="font-size: 35px;background-color:black;color:white;">ITEM NAME</td>
<td style="font-size: 35px;background-color:black;color:white;">QUANTITY</td>
<td style="font-size: 35px;background-color:black;color:white;">PRICE</td>
</tr>`
let sum=0
for( let i=0;i<items.length;i++)
{
    cart +=`
    <tr>
        <td><img src=${items[i].img} class="img" ></img></td>
        <td>${items[i].name}</td>
        <td><i class="fa fa-plus-square" aria-hidden="true" onclick="increaseItem('${items[i].name}')"></i>  ${items[i].quantity}  <i class="fa fa-minus-square" aria-hidden="true" onclick="decreaseItem('${items[i].name}')"></i></td>
        <td>${items[i].price*items[i].quantity}</td>
    </tr>  
  `
    sum+=(items[i].quantity*items[i].price);
}
// cart+=`<hr style="height:2px;border-width:0;color:black;background-color:gray">`
cart+=`<tr><td colspan="3" style="color:black;"><b>Total Amount</td><td >${sum}</td></b></tr>`
cart+="</table>"
document.getElementById("Cart").innerHTML=cart
}
function increaseItem(nam)
{
    for( let i=0;i<items.length;i++)
     {
        if(items[i].name===nam)
        {
            if(items[i].quantity>=4)
            {
                window.alert("Cannot Add More Items");
                break;
            }
            items[i].quantity++;
        }
     }
     showCart();
}
function decreaseItem(nam)
{
    for( let i=0;i<items.length;i++)
     {
        if(items[i].name===nam)
        {
            if(items[i].quantity==1)
            {
                deleteItem(nam);
                return;
            }
            // if(items[i].quantity<=1)
            // {
            //     items[i].quantity=1;
            // }
            else
            {
            items[i].quantity--;
            }
        }
     }
     showCart();
}

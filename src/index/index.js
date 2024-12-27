
const getStoredCart = () =>{
    const storedCartStr = localStorage.getItem('add-cart');
    if(storedCartStr){
        const storedCart = JSON.parse(storedCartStr);
        return storedCart

    }
    else{
        return [];

    }

}


const addToStoredCart = (id) =>{
   const storedCart =  getStoredCart();

   if(storedCart.includes(id)){
    console.log(id,'already exits in the cart');
   }
   else{
    storedCart.push(id);
    const storedCartStr = JSON.stringify(storedCart);
    localStorage.setItem('add-cart', storedCartStr)
   }
}






const getStoredWish = () =>{
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr){
        const storedWish = JSON.parse(storedWishStr);
        return storedWish

    }
    else{
        return [];

    }

}


const addToStoredWish = (id) =>{
    const storedWish =  getStoredWish();
 
    if(storedWish.includes(id)){
     console.log(id,'already exits in the wish');
    }
    else{
     storedWish.push(id);
     const storedWishStr = JSON.stringify(storedWish);
     localStorage.setItem('wish-list', storedWishStr)
    }
 }

export{addToStoredCart, addToStoredWish, getStoredCart, getStoredWish }
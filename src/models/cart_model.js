
export class Cart {
  constructor(products= [], total= 0) {
    this.products = products,
    this.total = total,
    this.timestamp = new Date();
  }
  
  addToCart(product) {
    this.products.push(product);
    this.total+= product.price * product.quantity;
    return `${product.id} added to cart, price updated to $${this.total}`
  } 
  removeFromCart(productID) {
    const productIndex = this.products.findIndex(p => p.id === productID);
    if (productIndex !== -1) {
      const product = this.products[productIndex];
      this.products.splice(productIndex, 1);
      this.total -= product.price * product.quantity;
      return `${product.id} removed from cart, price updated to $${this.total}`
    }
  }    
}

export class Product {
  constructor(id, name, description="", price, quantity) {
    this.productID = id;
    this.name = name;
    this.description = description;
    this.price = price
  }

  updateProductName(newValue) {
    this.name = newValue; 
  }
  updateProductPrice(newValue) {
    this.price = newValue; 
  }
  updateProductDescription(newValue="") {
    this.description += newValue;
  }
}

export default { Cart, Product };
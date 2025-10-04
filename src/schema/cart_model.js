export class Cart {
  constructor(products= [], total= 0) {
    this.products = products;
    this.total = total || 0; // Asegurar que total no sea null
    this.timestamp = new Date();
  }
  
  addToCart(id, quantity, productPrice) {
    const existingProductIndex = this.products.findIndex(p => p.productId === id);
    
    if (existingProductIndex !== -1) {
      this.products[existingProductIndex].quantity += quantity;
    } else {
      this.products.push({
        productId: id,
        quantity: quantity
      });
    }

    this.total += productPrice * quantity;
    return `${id} added to cart, price updated to $${this.total}`
  }
  removeItemComplete(id, productPrice) {
    const productIndex = this.products.findIndex(p => p.productId === id);
    const product = this.products[productIndex];
    this.products.splice(productIndex, 1);
    this.total -= productPrice * product.quantity;

    return `${product.productID} removed from cart, price updated to $${this.total}`
  }
  removeItemUnit(id, productPrice) {
    const productIndex = this.products.findIndex(p => p.productId === id);
    const product = this.products[productIndex];
    product.quantity -= 1;
    if (product.quantity === 0) this.products.splice(productIndex, 1)
    this.total -= productPrice;

    return `Se ha removido una unidad de ${id} y el total se corrigió a $${this.total}`
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
export class Product {
  constructor(id, name, description="", price, type="otro") {
    this.productID = id;
    this.name = name;
    this.description = description;
    this.price = price,
    this.type = type;
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
  updateProductType(newValue) {
    this.type += newValue;
  }
}

export default Product;
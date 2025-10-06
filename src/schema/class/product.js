export class Product {
  constructor(id, name, description = "", price, type = "otro", stock = null, category = null, subcategories = []) {
    this.productID = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.category = category;
    this.subcategories = subcategories;
  }

  updateProductName(newValue) {
    this.name = newValue; 
  }
  updateProductPrice(newValue) {
    this.price = newValue; 
  }
  updateProductDescription(newValue) {
    this.description += newValue;
  }
  updateProductStock(newValue) {
    this.stock += newValue;
  }

  updateCategory(newCategory) {
    this.category = newCategory;
  }

  addSubcategory(subcategory) {
    if (!this.subcategories.includes(subcategory)) {
      this.subcategories.push(subcategory);
    }
  }

  removeSubcategory(subcategory) {
    this.subcategories = this.subcategories.filter(cat => cat !== subcategory);
  }
}

export class FoodProduct extends Product {
  constructor(id, name, description, price, stock, spicinessLevel, volumeCC, category, subcategories) {
    super(id, name, description, price, stock, category, subcategories);
    this.spicinessLevel = spicinessLevel;
    this.volumeCC = volumeCC;
  }

  updateVolumeCC(newValue) {
    this.volumeCC = newValue;
  }
  updateSpicinessLevel(newValue) {
    this.spicinessLevel = newValue;
  }
}

export class ClothingProduct extends Product {
  constructor(id, name, description, price, stock, size, color, category, subcategories) {
    super(id, name, description, price, stock, category, subcategories);
    this.size = size;
    this.color = color;
  }

  updateSize(newSize) {
    this.size = newSize;
  }

  updateColor(newColor) {
    this.color = newColor;
  }
}

export class ElectronicProduct extends Product {
  constructor(id, name, description, price, stock, brand, model, voltage, category, subcategories) {
    super(id, name, description, price, stock, category, subcategories);
    this.brand = brand;
    this.model = model;
    this.voltage = voltage;
  }

  updateBrand(newBrand) {
    this.brand = newBrand;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  updateVoltage(newVoltage) {
    this.voltage = newVoltage;
  }
}

export class PhoneProduct extends ElectronicProduct {
  constructor(id, name, description, price, stock, brand, model, voltage, ramGB, storageGB, cameraMP, processor, color, category, subcategories) {
    super(id, name, description, price, stock, brand, model, voltage, category, subcategories);
    this.ramGB = ramGB;
    this.storageGB = storageGB;
    this.cameraMP = cameraMP;
    this.processor = processor;
    this.color = color;
  }

  updateRAM(newValue) {
    this.ramGB = newValue;
  }

  updateStorage(newValue) {
    this.storageGB = newValue;
  }

  updateCamera(newValue) {
    this.cameraMP = newValue;
  }

  updateProcessor(newValue) {
    this.processor = newValue;
  }

  updateColor(newValue) {
    this.color = newValue;
  }
}

export class HeadphoneProduct extends ElectronicProduct {
  constructor(id, name, description, price, stock, brand, model, voltage, isWireless, bluetoothVersion, soundQuality, color, batteryHours, category, subcategories) {
    super(id, name, description, price, stock, brand, model, voltage, category, subcategories);
    this.isWireless = isWireless;
    this.bluetoothVersion = bluetoothVersion;
    this.soundQuality = soundQuality;
    this.color = color;
    this.batteryHours = isWireless ? batteryHours : null;
  }

  toggleWireless() {
    this.isWireless = !this.isWireless;
    if (!this.isWireless) this.batteryHours = null;
  }

  updateBluetoothVersion(version) {
    this.bluetoothVersion = version;
  }

  updateSoundQuality(quality) {
    this.soundQuality = quality;
  }

  updateColor(newColor) {
    this.color = newColor;
  }

  updateBatteryHours(hours) {
    if (this.isWireless) this.batteryHours = hours;
  }
}


export default Product;


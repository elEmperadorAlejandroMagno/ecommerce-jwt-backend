import { z } from 'zod';

// Categorías actuales permitidas (se agrega 'Screens')
export const CATEGORIES = ['Food', 'Clothing', 'Electronic', 'Screens'];

export const BaseProductSchema = z.object({
  productID: z.string(), // UUID
  name: z.string(),
  description: z.string().optional(),
  price: z.number().min(0),
  stock: z.number().nullable().optional(),
  category: z.enum(CATEGORIES),
  subcategories: z.array(z.string()).optional()
});


export const FoodProductSchema = BaseProductSchema.extend({
  spicinessLevel: z.string(),
  volumeCC: z.number()
});

export const ClothingProductSchema = BaseProductSchema.extend({
  size: z.union([z.string(), z.number()]),
  color: z.string(),
  material: z.string().optional()
});

export const ElectronicProductSchema = BaseProductSchema.extend({
  brand: z.string(),
  model: z.string(),
  voltage: z.number()
});

// Electrónicos específicos existentes
export const TvProductSchema = ElectronicProductSchema.extend({
  inches: z.number(),
  resolution: z.union([z.string(), z.number()]),
  isSmart: z.boolean()
});

export const PhoneProductSchema = ElectronicProductSchema.extend({
  ramGB: z.number(),
  storageGB: z.number(),
  cameraMP: z.number(),
  processor: z.string(),
  color: z.string()
});

export const HeadphoneProductSchema = ElectronicProductSchema.extend({
  isWireless: z.boolean(),
  bluetoothVersion: z.number(),
  soundQuality: z.number(),
  color: z.string(),
  batteryHours: z.union([z.number(), z.null()])
});

// Nueva categoría 'Screens' para pantallas (TV/SmartTV/Monitor)
export const ScreensProductSchema = BaseProductSchema.extend({
  category: z.literal('Screens'),
  brand: z.string(),
  model: z.string().optional(),
  // discriminador de subtipo dentro de Screens
  subcategory: z.enum(['tv', 'smart_tv', 'monitor']),
  // campos comunes a pantallas
  inches: z.number(),
  resolution: z.union([z.string(), z.number()]),
  // smart tv / tv
  isSmart: z.boolean().optional(),
  // monitores
  refreshRateHz: z.number().positive().optional()
});

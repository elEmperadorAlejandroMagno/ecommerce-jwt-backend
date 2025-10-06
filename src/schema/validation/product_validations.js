import z from 'zod';

const BaseProductSchema = z.object({
  productID: z.number(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number().min(0),
  stock: z.number().nullable(),
  category: z.string().nullable(),
  subcategories: z.array(z.string()).optional()
});

const FoodProductSchema = BaseProductSchema.extend({
  spicinessLevel: z.string(),
  volumeCC: z.number()
})

const ClothingProductSchema = BaseProductSchema.extend({
  size: z.union(z.string(),z.number()),
  color: z.string(),
  material: z.string()
})

const ElectronicProductSchema = BaseProductSchema.extend({
  brand: z.string(),
  model: z.string(),
  voltage: z.number()
})


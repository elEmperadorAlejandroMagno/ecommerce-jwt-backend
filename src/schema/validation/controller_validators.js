import { z } from 'zod';
import {
  CATEGORIES,
  FoodProductSchema,
  ClothingProductSchema,
  ElectronicProductSchema,
  ScreensProductSchema,
} from './product_validations.js';

// Schemas de creación (sin productID, sin timestamp)
const FoodCreateSchema = FoodProductSchema
  .omit({ productID: true })
  .extend({ category: z.literal('Food') });
const ClothingCreateSchema = ClothingProductSchema
  .omit({ productID: true })
  .extend({ category: z.literal('Clothing') });
const ElectronicCreateSchema = ElectronicProductSchema
  .omit({ productID: true })
  .extend({ category: z.literal('Electronic') });

// Screens (pantallas) con validación adicional por subcategory
const ScreensCreateSchema = ScreensProductSchema
  .omit({ productID: true })
  .superRefine((val, ctx) => {
    if (val.subcategory === 'monitor') {
      if (val.refreshRateHz == null) {
        ctx.addIssue({ code: 'custom', path: ['refreshRateHz'], message: 'refreshRateHz is required for monitor' });
      }
    }
    if (val.subcategory === 'smart_tv') {
      if (val.isSmart !== true) {
        ctx.addIssue({ code: 'custom', path: ['isSmart'], message: 'isSmart must be true for smart_tv' });
      }
    }
  });

export const ProductCreateSchema = z.discriminatedUnion('category', [
  FoodCreateSchema,
  ClothingCreateSchema,
  ElectronicCreateSchema,
  ScreensCreateSchema,
]);

// Schemas de actualización parcial (no permiten cambiar category ni productID)
const FoodUpdateSchema = FoodProductSchema.omit({ productID: true, category: true }).partial();
const ClothingUpdateSchema = ClothingProductSchema.omit({ productID: true, category: true }).partial();
const ElectronicUpdateSchema = ElectronicProductSchema.omit({ productID: true, category: true }).partial();
const ScreensUpdateSchema = ScreensProductSchema.omit({ productID: true, category: true }).partial();

const UpdateSchemasByCategory = {
  Food: FoodUpdateSchema,
  Clothing: ClothingUpdateSchema,
  Electronic: ElectronicUpdateSchema,
  Screens: ScreensUpdateSchema,
};

export function validateProduct(input) {
  return ProductCreateSchema.safeParse(input);
}

export function validatePartialProduct(category, input) {
  if (!CATEGORIES.includes(category)) {
    return { success: false, error: new z.ZodError([
      { code: 'custom', message: `Unsupported category ${category}`, path: ['category'] }
    ]) };
  }
  return UpdateSchemasByCategory[category].safeParse(input);
}

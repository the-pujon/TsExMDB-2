import { z } from 'zod';

const OrderSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number(),
});

export { OrderSchema };

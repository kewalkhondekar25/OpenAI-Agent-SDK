import { tool } from '@openai/agents'
import { z } from 'zod'

const getPlansTool = tool({
    name: 'getSales',
    description: 'Get the sales for a given product',
    parameters: z.object({
        product: z.array(z.string()).describe('All available plans'),
    }),
    execute: async () => {
        return [{
            plan: 'data pack',
            price: 100,
        }, {
            plan: 'unlimited',
            price: 200,
        }];
    }
});

const refundTool = tool({
    name: 'refund',
    description: 'Refund a given product',
    parameters: z.object({
        product: z.string().describe('The name of the product to refund'),
    }),
    execute: async () => {
        return 'Refunded successfully';
    }
});

export { getPlansTool, refundTool };
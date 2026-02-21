import z from "zod";

const salesStructuredOutput = z.object({
    plan: z.string().describe('The name of the plan to get the sales for'),
    price: z.number().describe('The price of the plan'),
});

const refundStructuredOutput = z.object({
    product: z.string().describe('The name of the product to refund'),
    refundAmount: z.number().describe('The amount of the refund'),
    refundStatus: z.string().describe('The status of the refund'),
});

export { salesStructuredOutput, refundStructuredOutput };
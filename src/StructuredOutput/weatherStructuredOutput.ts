import z from "zod";

const  weatherStructuredOutput = z.object({
    city: z.string().describe('The name of the city to get the weather for'),
    degrees: z.number().describe('The degrees of the weather for the city'),
    condition: z.string().describe('The condition of the weather for the city'),
});

export default weatherStructuredOutput;
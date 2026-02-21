import { tool } from '@openai/agents'
import { z } from 'zod'

const getWeatherTool = tool({
    name: 'getWeather',
    description: 'Get the weather for a given city',
    parameters: z.object({
        city: z.string().describe('The name of the city to get the weather for'),
    }),
    execute: async ({ city }: { city: string }) => {
        const url = `https://wttr.in/${city.toLowerCase()}?format=%C+%t`;
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }
});

export default getWeatherTool;
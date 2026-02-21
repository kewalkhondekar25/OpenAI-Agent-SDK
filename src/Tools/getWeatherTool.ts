import { tool } from '@openai/agents'
import { z } from 'zod'

const getWeatherTool = tool({
    name: 'getWeather',
    description: 'Get the weather for a given city',
    parameters: z.object({
        city: z.string().describe('The name of the city to get the weather for'),
    }),
    execute: async ({ city }: { city: string }) => {
        // TODO: Implement the logic to get the weather from the API for a given city
        // For now, we will return a static weather for a given city
        return `The weather in ${city} is 69 degrees Fahrenheit`
    }
});

export default getWeatherTool;
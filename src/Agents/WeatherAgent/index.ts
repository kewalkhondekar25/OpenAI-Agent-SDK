import { Agent } from '@openai/agents'
import getWeatherTool from '../../Tools/getWeatherTool'

const weatherAgent = new Agent({
    name: 'weatherAgent',
    instructions: 'You are a helpful assistant that can get the weather for a given city',
    tools: [getWeatherTool],
});

export default weatherAgent;
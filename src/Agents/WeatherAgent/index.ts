import { Agent } from '@openai/agents'
import getWeatherTool from '../../Tools/getWeatherTool'
import weatherStructuredOutput from '../../StructuredOutput/weatherStructuredOutput';

const weatherAgent = new Agent({
    name: 'weatherAgent',
    instructions: 'You are a helpful assistant that can get the weather for a given city',
    tools: [getWeatherTool],
    outputType: weatherStructuredOutput,
});

export default weatherAgent;
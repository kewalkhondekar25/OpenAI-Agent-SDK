import 'dotenv/config'
import { run } from '@openai/agents'
import helloAgent from './Agents/HelloWorld'
import weatherAgent from './Agents/WeatherAgent'

const main = async () => {
    try {
        // const result = await run(helloAgent, 'Hello!')
        const result = await run(weatherAgent, 'What is the weather in Pune?')
        console.log(result.finalOutput)
    } catch (error) {
        console.error(error)
    }
}

main();
import 'dotenv/config'
import { run } from '@openai/agents'
import helloAgent from './Agents/HelloWorld'
import weatherAgent from './Agents/WeatherAgent'
import { salesAgent } from './Agents/SalesAgent'

const main = async () => {
    try {
        // const result = await run(helloAgent, 'Hello!')
        // const result = await run(weatherAgent, 'What is the weather in chicago?')

        //this will show all plans available
        // const result = await run(salesAgent, 'show me all plans available?')

        //this will refund the data pack - multi-agent
        const result = await run(salesAgent, 'Refund the data pack')
        console.log(result.finalOutput)
    } catch (error) {
        console.error(error)
    }
}

main();
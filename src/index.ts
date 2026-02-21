import 'dotenv/config'
import { run } from '@openai/agents'
import helloAgent from './HelloWorld'

const main = async () => {
    try {
        const result = await run(helloAgent, 'Hello!')
        console.log(result.finalOutput)
    } catch (error) {
        console.error(error)
    }
}

main();
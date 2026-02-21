import { Agent, run } from '@openai/agents'

const helloAgent = new Agent({
    name: 'helloAgent',
    instructions: 'You are a helpful assistant that greets the user.',
});

export default helloAgent;
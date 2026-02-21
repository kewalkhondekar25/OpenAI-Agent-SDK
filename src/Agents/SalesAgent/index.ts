import { Agent } from '@openai/agents'
import { getPlansTool, refundTool } from '../../Tools/salesTool';
import { refundStructuredOutput, salesStructuredOutput } from '../../StructuredOutput/salesStructuredOutput';

const refundAgent = new Agent({
    name: 'refundAgent',
    instructions: 'You are a helpful assistant that can help with refunds',
    tools: [refundTool],
    outputType: refundStructuredOutput
});

const salesAgent = new Agent({
    name: 'salesAgent',
    instructions: 'You are a helpful assistant that can help with users to get the plans and refund the product',
    tools: [getPlansTool, refundAgent.asTool({ toolName: 'refund', toolDescription: 'Refund a given product' })],
});

export { salesAgent, refundAgent };
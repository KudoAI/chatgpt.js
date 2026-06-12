import chatgpt from '../src/chatgpt.js'

const msgChain = []

async function ask(question, provider) {
    const currentMsg = { role: 'user', content: question },
          messages = [...msgChain, currentMsg]
    console.log('\n--- msgChain BEFORE sending ---')
    console.log(JSON.stringify(messages, null, 2))
    const reply = await chatgpt.send('', { messages, provider })
    console.log('Reply:', reply)
    msgChain.push(currentMsg, { role: 'assistant', content: reply })
    console.log('--- msgChain AFTER updating ---')
    console.log(JSON.stringify(msgChain, null, 2))
}

(async () => {
    try {
        await ask('who is obama', 'google')
        await ask('who is his wife', 'openrouter')
        await ask('thanks for that info', 'google')
    } catch (err) { console.error(err.message) }
})()

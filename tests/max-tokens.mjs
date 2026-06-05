import chatgpt from '../src/chatgpt.js'

function estimateTokens(text) { return text ? Math.ceil(text.length /4) : 0 }

async function testMaxTokens(provider, tokenLimit) {
    console.log('\n' + '='.repeat(60))
    console.log(`🧪 Testing: ${provider} | maxTokens = ${tokenLimit}`)
    console.log('='.repeat(60))
    const startTime = Date.now()
    try {
        const reply = await chatgpt.send(
            'Write a detailed paragraph about the history of the Internet. Be thorough and include at least 5 key milestones.',
            { provider, maxTokens: tokenLimit, output: 'return' }
        )
        const elapsed = Date.now() - startTime,
              estimatedTokens = estimateTokens(reply),
              characterCount = reply.length
        console.log(`✅ Response received in ${elapsed}ms`)
        console.log(`📝 Response length: ${characterCount} characters`)
        console.log(`🔢 Estimated tokens: ~${estimatedTokens}`)
        console.log(`🎯 Token limit set: ${tokenLimit === null ? 'none (API default)' : tokenLimit}`)
        if (tokenLimit != null && estimatedTokens > tokenLimit)
            console.log(`⚠️  WARNING: Response (~${estimatedTokens} tokens) exceeded limit (${tokenLimit} tokens)`)
        else if (tokenLimit != null && estimatedTokens <= tokenLimit)
            console.log(`✅ Response tokens (${estimatedTokens}) are within limit (${tokenLimit})`)
        console.log(`\n📄 RESPONSE PREVIEW (first 300 chars):`)
        console.log('-'.repeat(40))
        console.log(reply.substring(0, 300) + (reply.length > 300 ? '...' : ''))
        console.log('-'.repeat(40))
    } catch (err) {
        console.error(`❌ Error: ${err.message}`)
    }
}

async function runAllTests() {
    console.log('🚀 STARTING MAXTOKENS VERIFICATION TESTS\n')
    console.log('\n📡 OPENROUTER TESTS')
    await testMaxTokens('openrouter', null)      // API default (no limit)
    await testMaxTokens('openrouter', 50)        // Very short limit
    await testMaxTokens('openrouter', 200)       // Medium limit
    console.log('\n🔬 GOOGLE TESTS')
    await testMaxTokens('google', null)          // API default (no limit)
    await testMaxTokens('google', 50)            // Very short limit
    await testMaxTokens('google', 200)           // Medium limit
    console.log('\n📊 SIDE-BY-SIDE COMPARISON (OpenRouter)')
    console.log('='.repeat(60))
    const limits = [null, 50, 200]
    for (const limit of limits) {
        const reply = await chatgpt.send('Say hello and introduce yourself briefly.', {
            provider: 'openrouter', maxTokens: limit })
        const tokens = estimateTokens(reply)
        console.log(`Limit ${ limit == null ? 'default' : limit }: ${tokens} tokens | "${
            reply.substring(0, 60)}${reply.length > 60 ? '...' : ''}"`)
    }
    console.log('\n✅ All tests completed!')
}

runAllTests().catch(console.error)

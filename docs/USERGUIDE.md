<a id="top"></a>

<div align="center">

<br>

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode/logo-6014x1334.png?v=8169c77">
    <img width=850 src="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode/logo-6014x1334.png?v=8169c77">
</picture>

<br>

</div>

<hr>

# ⚡ Importing the library

</div>

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **Note** _To use a starter template: [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js
// ==/UserScript==
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **Note** _To use a starter template: [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Since Google does not allow remote code, importing chatgpt.js locally is required:

1. Save https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js to `lib`

2. In project's (V3) `manifest.json`, add `lib/chatgpt.min.js` as a web accessible resource

```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

3. In scripts that need `chatgpt.js` (foreground/background alike), import it like so:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))
    // Your code here...
})()
```

<hr>

## 💻 Command line usage

The basic command is:

```bash
chatgpt  # or cjs
```

#

### Options

```
Parameter options:
 -p, --provider <provider>            Provider for chat API ('auto', 'google', or 'openrouter')
 -u, --ui-lang <code>                 ISO 639-1 code of language to display UI in.
 -L, --reply-lang <code|name>         Language for AI to reply in.
 -q, --query <msg>                    Query to send AI.
 -s, --summarize <filepath|text|url>  Path or URL to file or text to summarize.
 -c, --config <filepath|url>          Path or URL to custom config file to load.

Msg chain options:
 -m, --max-chars <integer>            Character limit per message.
 -k, --max-tokens <integer>           Max tokens to use.
 -t, --turns <integer>                Number of turns to preserve.
 -C, --clear                          Clear cached message chain.

Flags:
 -x, --copy                           Copy CLI response to clipboard.
 -A, --no-suggest                     Don't auto-suggest next AI action at end of CLI response.
 -V, --quiet                          Suppress all logging except errors.

git commands / options:
 -g, --commit-msg                     Generate git commit message from changes and copy to clipboard.
 -G, --commit-msg-example <msg>       Example msg for --commit-msg to reference.
 -d, --diff                           Generate human-readable git diff and append to --commit-msg if
                                      passed.

Data commands:
 -T, --sentiment                      Path or URL to file or text to analyze sentiment of.

Fun commands:
 -P, --act-as <persona>               Act as persona from https://cdn.jsdelivr.net/npm/@kudoai/ai-personas@1/dist/ai-personas.json
 -a, --ascii-art [subject]            Render ASCII art of optional subject.
 -f, --fortune                        Tell your fortune.
 -j, --joke                           Tell a joke.
 -r, --random-answer                  Answer a random question.

App commands:
 -i, --init                           Create config file (in project root).
 -I, --interactive                    Enter interactive REPL mode.
 -h, --help                           Display help screen.
 -v, --version                        Show version number.
 -S, --stats                          Show npm stats.
     --debug                          Show debug logs.
```

#

### Configuration file

**chatgpt.js** can be customized using a `.chatgpt.config.mjs` or `.chatgpt.config.js` placed in your project root.

Example defaults:

```js
export default {

    // Param options
    provider: 'auto',    // provider for chat API (or 'google' or 'openrouter')
    uiLang: 'en',        // ISO 639-1 code of language to display UI in
    replyLang: '',       // language for AI to reply in
    maxChars: 250,       // char limit per msg
    maxTokens: null,     // max tokens to use
    turnsToPreserve: 3,  // # of turns to preserve (2 msgs/turn)

    // Flags
    copy: false,         // copy CLI response to clipboard
    noSuggest: false,    // don't auto-suggest next AI action at end of CLI response
    quietMode: false,    // suppress all logging except errors
    autoClear: true      // auto-clear msg chain cache on new terminal sessions
}
```

💡 Run `chatgpt init` to generate a template `.chatgpt.config.mjs` in your project root.

<hr>

# 📖 Library methods

- [General](#general)
  - [`actAs(persona)` `async`](#actaspersona-async--universal)
  - [`detectLanguage(text)` `async`](#detectlanguagetext--parameters--async--dom-only)
  - [`dictate()`](#dictate--dom-only)
  - [`getFortune()` `async`](#getfortune-parameters--async--dom-only)
  - [`getRandomAnswer()` `async`](#getrandomanswer-parameters--async--universal)
  - [`getRelated(query)` `async`](#getrelatedquery--parameters--async--universal)
  - [`getUserLanguage()`](#getuserlanguage--dom-only)
  - [`isLoaded()` `async`](#isloaded-async--dom-only)
  - [`isTempChat()`](#istempchat--dom-only)
  - [`printAllFunctions()`](#printallfunctions--universal)
  - [`sentiment()` `async`](#sentimenttext-entity--parameters--async--dom-only)
  - [`suggest()` `async`](#suggest-async--dom-only)
  - [`summarize()` `async`](#summarizetext--parameters--async--dom-only)
  - [`translate()` `async`](#translatetext-outputlang--parameters--async--dom-only)
  - [`uuidv4()`](#uuidv4--universal)
- [In-site notifications](#in-site-notifications)
  - [`alert()`](#alert--dom-only)
  - [`notify()`](#notify--dom-only)
- [User session](#user-session)
  - [`getAccessToken()` `async`](#getaccesstoken-async--universal)
  - [`getAccountDetails()` `async`](#getaccountdetails-async--universal)
  - [`login()`](#login--dom-only)
  - [`logout()`](#logout--dom-only)
- [Chats](#chats)
  - [`askAndGetReply()` `async`](#askandgetreply-async--dom-only)
  - [`clearChats()` `async`](#clearchats-async-%EF%B8%8F-nodejs-only)
  - [`exportChat()` `async`](#exportchatchattoget-format--parameters--async--universal)
  - [`getChatData()` `async`](#getchatdata-async--universal)
  - [`getChatInput()`](#getchatinput--dom-only)
  - [`getErrorMsg()`](#geterrormsg--dom-only)
  - [`getLastPrompt()` `async`](#getlastprompt-async--universal)
  - [`getLastResponse()` `async`](#getlastresponse-async--universal)
  - [`isIdle()` `async`](#isidle-async--dom-only)
  - [`isTyping()`](#istyping--dom-only)
  - [`regenerate()`](#regenerate--dom-only)
  - [`resend()` `async`](#resend-async--universal)
  - [`scrollToBottom()`](#scrolltobottom--dom-only)
  - [`send()`](#send--universal)
  - [`sendInNewChat()`](#sendinnewchat--dom-only)
  - [`setProvider()`](#setprovider--universal)
  - [`shareChat()` `async`](#sharechat-async--universal)
  - [`speak()`](#speak--dom-only)
  - [`startNewChat()`](#startnewchat--dom-only)
  - [`stop()`](#stop--dom-only)
- [DOM related](#dom-related)
  - [`focusChatbar()`](#focuschatbar--dom-only)
  - [`getChatBox()`](#getchatbox--dom-only)
  - [`getContinueButton()`](#getcontinuebutton--dom-only)
  - [`getDictateButton()`](#getdictatebutton--dom-only)
  - [`getLoginButton()`](#getloginbutton--dom-only)
  - [`getNewChatButton()`](#getnewchatbutton--dom-only)
  - [`getNewChatLink()`](#getnewchatlink--dom-only)
  - [`getRegenerateButton()`](#getregeneratebutton--dom-only)
  - [`getScrollToBottomButton()`](#getscrolltobottombutton--dom-only)
  - [`getSendButton()`](#getsendbutton--dom-only)
  - [`getStopButton()`](#getstopbutton--dom-only)
  - [`getVoiceButton()`](#getvoicebutton--dom-only)
- [Library APIs](#library-apis)
  - [`autoRefresh`](#autorefresh-api): [`activate()`](#activate--dom-only), [`deactivate()`](#deactivate--dom-only), [`nowTimeStamp()`](#nowtimestamp--universal)
  - [`browser`](#browser-api): [`isLightMode()`](#islightmode--dom-only), [`isDarkMode()`](#isdarkmode--dom-only), [`isChromium()`](#ischromium--dom-only), [`isChrome()`](#ischrome--dom-only), [`isEdge()`](#isedge--dom-only), [`isBrave()`](#isbrave--dom-only), [`isFirefox()`](#isfirefox--dom-only), [`isFullScreen()`](#isfullscreen--dom-only), [`isMobile()`](#ismobile--dom-only)
  - [`code`](#code-api): [`debug()`](#debugcode--parameters--async--universal), [`minify()`](#minifycode--parameters--async--universal), [`execute()`](#executecode--parameters--async--universal), [`extract()`](#extract--universal), [`isIdle()`](#isidle-async--dom-only-1), [`obfuscate()`](#obfuscatecode--parameters--async--universal), [`refactor()`](#refactorcode--parameters--async--universal), [`review()`](#reviewcode--parameters--async--universal), [`unminify()`](#unminifycode--parameters--async--universal), [`write()`](#writeprompt-outputlang--parameters--async--universal)
  - [`footer`](#footer-api): [`get()`](#get--dom-only), [`hide()`](#hide--dom-only), [`show()`](#show--dom-only)
  - [`header`](#header-api): [`get()`](#get--dom-only-1), [`hide()`](#hide--dom-only-1), [`show()`](#show--dom-only-1)
  - [`history`](#history-api): [`isLoaded()`](#isloaded-async--dom-only-1)
  - [`instructions`](#instructions-api): [`add()`](#add-async--universal), [`clear()`](#clear-async--universal), [`turnOff()`](#turnoff-async--universal), [`turnOn()`](#turnon-async--universal), [`toggle()`](#toggle-async--universal)
  - [`menu`](#menu-api): [`toggle()`](#toggle--dom-only), [`open()`](#open--dom-only), [`close()`](#close--dom-only)
  - [`response`](#response-api): [`continue()`](#continue--dom-only), [`get()`](#get--universal), [`getFromAPI()`](#getfromapi-async--universal), [`getFromDOM()`](#getfromdom--dom-only), [`getLast()`](#getlast-async--universal), [`regenerate()`](#regenerate--dom-only-1), [`stopGenerating()`](#stopgenerating--dom-only)
  - [`settings`](#settings-api): [`scheme`](#scheme-api-subset)
  - [`sidebar`](#sidebar-api): [`exists()`](#exists--dom-only), [`isOn()`](#ison--dom-only), [`isOff()`](#isoff--dom-only), [`hide()`](#hide--dom-only-2), [`show()`](#show--dom-only-2), [`toggle()`](#toggle--dom-only-2), [`isLoaded()`](#isloaded-async--dom-only-2)

> [!WARNING]
> 
> **`activateDarkMode()` and `activateLightMode()` will be removed** in v5.0.0. Use `chatgpt.scheme.activateDark()` and `chatgpt.scheme.activateDark()` instead.
>
> **Top-level aliases will be removed** in v5.0.0 (`continue()`, `execute()`, `extractCode()`, `getFooterDiv()`, `getHeaderDiv()`, `getResponse()`, `getResponseFromAPI()`, `getResponseFromDOM()`, `hideFooter()`, `isDarkMode()`, `isFullScreen()`, `isLightMode()`, `minify()`, `obfuscate()`, `refactor()`, `regenerate()`, `reviewCode()`, `setScheme()`, `showFooter()`, `showHeader()`, `toggleScheme()`, `unminify()`, `write()`, `scheme` API subset). Use the canonical APIs instead (e.g. `chatgpt.code.*`, `chatgpt.response.*` and `chatgpt.settings.scheme.*`)

<hr>

| Symbol | Environment |
|--------|-------------|
| 🖥️    | Node.js only |
| 🌐    | Browser (DOM) only |
| 🔄    | Universal (both) |

## General

#### `actAs(persona)` `async` 🔄 Universal

Asks ChatGPT to act as a given persona by sending its prompt, then resolves with the prompt string.

Parameters:

`persona`: A string being the key of the persona to load from the AI personas data.

`options` (optional): An object with the following properties:

- `personasURL`: A string being the URL to fetch the personas data from. Defaults to `chatgpt.endpoints.kudoai.personas`.
- `verbose`: A boolean that logs which persona is being loaded when `true`. Defaults to `false`.

Example:

```js
(async () => {
    const prompt = await chatgpt.actAs('Linux Script Developer')
    chatgpt.alert(prompt)
})()
```

#

#### `detectLanguage(text, { parameters })` `async` 🌐 DOM only

Asks ChatGPT to detect the language of given text.

Parameters:

`text`: A string being the text to detect the language of.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const language = await chatgpt.detectLanguage('我是一個大男孩')
    chatgpt.alert(language)
    /* Alerts:
    Chinese (Traditional) */
})()
```

#

#### `dictate()` 🌐 DOM only

Opens dictation mode on ChatGPT.

#

#### `getFortune({ parameters })` `async` 🌐 DOM only

Tells your fortune.

Parameters:

`verbose`: Show console logging (default: `false`).

#

#### `getRandomAnswer({ parameters })` `async` 🔄 Universal

Parameters:

`replyLang`: Language to receive replies in.

Generates an answer to a random question.

Example:

```js
const userLanguage = chatgpt.getUserLanguage()
chatgpt.alert(userLanguage) // Example output: 'en-US'
```

#

#### `getRelated(query, { parameters })` `async` 🔄 Universal

Parameters:

`qty`: Number of related queries to return (default: `10`).
`verbose`: Show console logging (default: `false`).

Returns array of queries related to `query`.

Example:

```js
console.log(await chatgpt.getRelated('Who is obama?', { verbose: true }))

/* e.g. =>

getRelated() > Getting related queries...
getRelated() > Arrayifying related queries...
[
  'What is Barack Obama’s current occupation?',
  'How many terms did Barack Obama serve as U.S. President?',
  'What political party does Barack Obama belong to?',
  'What are some of Barack Obama’s major policy achievements?',
  'Where was Barack Obama born?'
]
*/
```

#

#### `getUserLanguage()` 🌐 DOM only

Returns the user's language as a string.

Example:

```js
const userLanguage = chatgpt.getUserLanguage()
chatgpt.alert(userLanguage) // Example output: 'en-US'
```

#

#### `isLoaded()` `async` 🌐 DOM only

Resolves a promise when ChatGPT has finished loading.

Parameters:

`timeout` (optional): An integer specifying the number of milliseconds to wait before resolving with `false`. If not provided, waits indefinitely until ChatGPT finishes loading.

Example:

```js
(async () => {
    await chatgpt.isLoaded()
    chatgpt.alert('ChatGPT has finished loading.')
})()
```

#

#### `isTempChat()` 🌐 DOM only

Returns a boolean value. `true` if the website is in Temporary Chat mode and `false` otherwise.

Example:

```js
if (chatgpt.isTempChat()) {
    // Do something
}
```

#

#### `printAllFunctions()` 🔄 Universal

Prints all the library functions to the console.

Example:

```js
chatgpt.printAllFunctions()
```

#

#### `sentiment(text, entity, { parameters })` `async` 🌐 DOM only

Asks ChatGPT to analyze sentiment from a given text.

Parameters:

`text`: A string being the text to be analyzed.
`entity` (optional): A string being the entity to analyze sentiment towards.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const text = 'Are you an #OSS supporter? Do you love JavaScript? Then why not contribute to the future of #AI app development? https://chatgpt.js.org (a #100Builders project) is seeking collabs for exactly this! @withBackdrop'
    const sentiment = await chatgpt.sentiment(text, '100 Builders')
    chatgpt.alert(sentiment)

    /* Example output:
    The sentiment of the text towards the entity "100 Builders" is strongly positive. The text encourages
    individuals who support open-source software (OSS) and have an affinity for JavaScript to get involved with
    the project. Phrases like "contribute to the future," "seeking collabs," and the inclusion of the hashtag
    #100Builders project indicate a positive and enthusiastic tone, promoting engagement and collaboration
    with the project. */
})()
```

#

#### `suggest()` `async` 🌐 DOM only

Asks ChatGPT to suggest ideas.

Parameters:

`ideaType`: A string being the type of idea to suggest.

`details` (optional): A string being details to fine-tune the suggestion.

Example:

```js
(async () => {
    const suggestions = await chatgpt.suggest('names', 'baby boy')
    chatgpt.alert(suggestions)

    /* Example output:
    1. Liam
    2. Noah
    3. Ethan
    4. Oliver
    5. Jackson
    6. Aiden
    7. Lucas
    8. Benjamin
    9. Henry
    10. Leo
    11. Samuel
    12. Caleb
    13. Owen
    14. Daniel
    15. Elijah
    16. Matthew
    17. Alexander
    18. James
    19. Nathan
    20. Gabriel */
})()
```

#

#### `summarize(text, { parameters })` `async` 🌐 DOM only

Asks ChatGPT to summarize given text.

Parameters:

`text`: A string being the text to be summarized.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const summary = await chatgpt.summarize('A very long text...')
    chatgpt.alert(summary) // Example output: 'A very short text...'
})()
```

#

#### `translate(text, outputLang, { parameters })` `async` 🌐 DOM only

Asks ChatGPT to translate given text to a given language.

Parameters:

`text`: A string being the text to translate.
`outputLang`: A string representing the output language of the translation.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const translation = await chatgpt.translate('Hello, how are you?', 'spanish')
    chatgpt.alert(translation) // Alerts: 'Hola, ¿cómo estás?'
})()
```

#

#### `uuidv4()` 🔄 Universal

Example:

```js
const randomID = chatgpt.uuidv4()
chatgpt.alert(randomID) // Example output: '239067d1-bcb8-4fd7-91eb-9ab94619b7b3'
```

<a href="#top">Back to top ↑</a>

## In-site notifications

#### `alert()` 🌐 DOM only

Creates a static alert box which displays a message. Only a user interaction can close it. Returns the HTML `id` property of the alert box as a string.

Parameters:

`title` (optional): A string which is the title of the alert.

`msg` (optional): A string which is the message to be displayed.

`btns` (optional): An array of functions which will be rendered as clickable buttons.

`checkbox` (optional): A function which will be rendered as a checkbox.

`width` (optional): An integer representing the width of the alert box in `px`.

Example:

```js
function doSomething() { /* Your code */ }

function doSomethingElse() { /* Your code */ }

function sayHello() { chatgpt.alert('Hello!') }

const alertID = chatgpt.alert('Hello, world!', 'The sky is blue.', [doSomething, doSomethingElse], sayHello, 200)
chatgpt.alert(alertID) // Example output: '1693237957878'
```

#

#### `notify()` 🌐 DOM only

Displays a temporary on-screen notification.

Parameters:

`options` (optional): An object containing the options for the vocal synthesizer.

Available options:

 - `msg`: A string which is the message to be displayed.
 - `position` (optional): A string specifying the position of the notification.
 - `notifDuration` (optional): A float specifying the duration of the notification before it fades out.
 - `shadow` (optional): A string specifying if the `box-shadow` CSS property should be used.
 - `toast` (optional): A boolean specifying whether notifications should be flattened/centered into toast alerts.

Example:

```js
chatgpt.notify({ msg: 'Hello, world!', position: 'top left', notifDuration: 3, shadow: 'on' })
```

<a href="#top">Back to top ↑</a>

## User session

#### `getAccessToken()` `async` 🔄 Universal

Returns an account access token as a string.

```js
(async () => {
    const token = await chatgpt.getAccessToken()
    chatgpt.alert(token) // Example output: 'abcdef[...]'
})()
```

#

#### `getAccountDetails()` `async` 🔄 Universal

Returns a given account detail as a string.

Parameters:

`detail`: A string representing the account detail(s) that will be returned.

Can be the following: `email`, `id`, `image`, `name`, `picture`. If a single detail is passed, it will be returned as a string, if multiple are passed, the function will return an object with the requested details. If no details are passed, the function will return an object with all the available details.

```js
(async () => {
    const accountName = await chatgpt.getAccountDetails('name')
    chatgpt.alert(accountName) // Example output: 'chatgpt.js'

    const accountData = await chatgpt.getAccountDetails('name', 'email')
    chatgpt.alert(accountData)
    /* Example output:
    {
        name: 'chatgpt.js',
        email: 'showcase@chatgptjs.org'
    }
    */
})()
```

#

#### `login()` 🌐 DOM only

Navigates to login page.

Example:

```js
chatgpt.login()
```

#

#### `logout()` 🌐 DOM only

Logs the user out from the website.

Example:

```js
chatgpt.logout()
```

<a href="#top">Back to top ↑</a>

## Chats

#### `askAndGetReply()` `async` 🌐 DOM only

Sends a given message to ChatGPT and returns the response as a string.

Example:

```js
(async () => {
    const response = await chatgpt.askAndGetReply('Hello, ChatGPT')
    chatgpt.alert(response) // Example output: 'Hello user, I'm ChatGPT!'
})()
```

#

#### `clearChats()` `async` 🖥️ Node.js only

Clears chat history.

Example:

```js
chatgpt.clearChats().then(() => chatgpt.alert('Chat history cleared!'))
```

#

#### `exportChat(chatToGet, format, { parameters })` `async` 🔄 Universal

Exports a given chat as a file.

Parameters:

`chatToGet` (optional): A string representing the chat to get the data from.

Can be the following: `active`, the current chat, `latest`, the latest chat in the list, else the `index`, `title` or `id` of the chat to get. Default is `active` if in a chat, else `latest`.

`format` (optional): A string representing the format of the export file.

Can be the following: `html`, `md`, `pdf` or `text`. Defaults to `html`.

`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    await chatgpt.exportChat('latest', 'html') // Downloads a '.html' file
})()
```

#

#### `getChatData()` `async` 🔄 Universal

Returns the requested chat data as a string (if single detail requested) or object of key-value pairs (if multiple details requested).

Parameters:

`chatToGet` (optional): A string representing the chat to get the data from.

Can be the following: `active`, the current chat, `latest`, the latest chat in the list, else the `index`, `title` or `id` of the chat to get. Default is `active` if in a chat, else `latest`.

`detailsToGet` (optional): A string or array of strings representing the chat data to retrieve.

Can be the following: `all` to get all details, `id`, `title`, `create_time`, `update_time` or `msg`. To get a single detail, just use a string, to get multiple use an array of strings instead. Default is `all`.

_**If `msg` is the requested detail, the following parameters can be used**_:

`sender` (optional): A string representing the chat member to get the message(s) from.

Can be the following: `user` to get the user message(s), `chatgpt` to get ChatGPT's response(s), `all`/`both` to get both of them. Default is `all`.

`msgToGet` (optional): A string/number representing the chat message to retrieve.

Can be the following: `all` to get all the messages in the chat, `latest` to get the latest message/response, or the `index` of the message. Default is `all`.

> **Note** _If any **user** messages were edited, they are added to the index as newly sent messages_

Example code **for all return types**:

_**All details from specified chat**_

```js
await chatgpt.getChatData()
// or
await chatgpt.getChatData('latest') // can also be 'active', 'title of the chat' or 'id of the chat'
// or
await chatgpt.getChatData('latest', 'all')
```

_Returns a JSON object_

```json
{
  "create_time": "2023-07-19T13:24:05.618539+00:00",
  "id": "e193a219-2311-4232-95f5-8e3a0e466652",
  "title": "Lemons: Citrus Fruit Overview.",
  "update_time": "2023-07-19T13:24:18+00:00"
}
```

_**Specific detail(s) from specified chat**_

```js
await chatgpt.getChatData('latest', ['id', 'title'])
```

_Returns a JSON object_

```json
{
  "id": "e193a219-2311-4232-95f5-8e3a0e466652",
  "title": "Lemons: Citrus Fruit Overview."
}
```

_**All messages from both participants in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg')
// or
await chatgpt.getChatData('latest', 'msg', 'all') // all/both
// or
await chatgpt.getChatData('latest', 'msg', 'all', 'all')
```

_Returns an array of JSON objects_

In case of a response being regenerated, the `chatgpt` object key will be converted to an array containing all the responses.

```json
[
  {
    "user": "what are lemons",
    "chatgpt": "Lemons are a type of citrus fruit that belongs..."
  },
  {
    "user": "be more specific",
    "chatgpt": [
      "Certainly! Here are some more specific...",
      "Certainly! Here are some specific..." // regenerated responses!
    ]
  }
]
```

_**All messages from a specific participant in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg')
// or
await chatgpt.getChatData('latest', 'msg', 'chatgpt') // user/chatgpt
// or
await chatgpt.getChatData('latest', 'msg', 'chatgpt', 'all')
```

_Returns an array of strings/arrays_

In case of a response being regenerated and the requested participant being `chatgpt`, it'll be converted to an array containing all the responses.

```json
[
  "Lemons are a type of citrus fruit that belongs...",
  [
    "Certainly! Here are some more specific details...",
    "Certainly! Here are some specific..."
  ]
]
```

_**One/latest message from both participants in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg', 'all', 2) // can also be 'latest' message
```

_Returns a JSON object_

In case of a response being regenerated, the `chatgpt` object key will be converted to an array containing all the responses.

```json
{
  "user": "be more specific",
  "chatgpt": [
    "Certainly! Here are some more specific...",
    "Certainly! Here are some specific..."
  ]
}
```

_**One/latest message from a specific participant in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg', 'chatgpt', 2)
```

_Returns a string or an array of strings_

In case of a response being regenerated, the `chatgpt` object key will be converted to an array containing all the responses.

```json
"Certainly! Here are some more specific..."
// or
[
  "Certainly! Here are some more specific...",
  "Certainly! Here are some specific..."
]
```

#

#### `getChatInput()` 🌐 DOM only

Returns the value of the chat input field as a string.

Example:

```js
const chatInput = chatgpt.getChatInput()
chatgpt.alert(chatInput) // Example output: 'Hello from chatgpt.js!'
```

#

#### `getErrorMsg()` 🌐 DOM only

Returns the error message (if any) from the last generation as a string.

Example:

```js
const chatErrorMsg = chatgpt.getErrorMsg()
chatgpt.alert(chatErrorMsg) // Example output: 'Conversation not found'
```

#

#### `getLastPrompt()` `async` 🔄 Universal

Returns the last message sent by the user as a string.

```js
(async () => {
    const message = await chatgpt.getLastPrompt()
    chatgpt.alert(message) // Example output: 'Hello from chatgpt.js!'
})()
```

#

#### `getLastResponse()` `async` 🔄 Universal

Returns the last ChatGPT response as a string.

```js
(async () => {
    const response = await chatgpt.getLastResponse()
    chatgpt.alert(response) // Example output: 'I am ChatGPT!'
})()
```

#

#### `isIdle()` `async` 🌐 DOM only

Resolves a promise when ChatGPT has finished generating a response.

Parameters:

`timeout` (optional): An integer specifying the number of milliseconds to wait before resolving with `false`. If not provided, waits indefinitely until response generation finishes.

Example:

```js
(async () => {
    await chatgpt.code.isIdle()
    chatgpt.alert('ChatGPT is idle')
})()
```

#

#### `isTyping()` 🌐 DOM only

Returns a boolean value. `true` if ChatGPT is generating a response, `false` otherwise.

Example:

```js
console.log(`ChatGPT is ${!chatgpt.isTyping() ? 'not' : ''} typing`)
```

###### _See also: [`isIdle`](#isidle-async--dom-only)_

#

#### `regenerate()` 🌐 DOM only

Regenerates ChatGPT's response.

Example:

```js
chatgpt.regenerate()
```

#

#### `resend()` `async` 🔄 Universal

Re-sends the last user message.

```js
(async () => {
    await chatgpt.resend()
})()
```

#

#### `scrollToBottom()` 🌐 DOM only

Scrolls to the bottom of the chat.

Example:

```js
chatgpt.scrollToBottom()
```

#

#### `send()` 🔄 Universal

Sends a message via the ChatGPT DOM or OpenRouter API and returns the response.

Parameters:

- `userQuery`: *(string)* — The message to send  
- `options` *(optional object)*:
  - `env`: *(string)* — Environment to use (default: `'chatgpt'`, all else uses back-end)
  - `provider`: *(string)* — API provider to use (default: `'random'`, available: `'google'` or `'openrouter'`)
  - `stream`: *(boolean)* — Whether to stream the response in real-time (default: `true`)
  - `onLoadStart`: *(function)* — Optional callback when response starts loading
  - `output`: *(string)* — Response output method (default: `'return'`, or 'stdout')
  - `systemQuery`: *(string)* — Optional system prompt to guide the response
  - `color`: *(string)* — Output color for CLI responses (default: `'green'`)
  - `messages`: *(array)* — Array of prev msgs to preserve context (default: `null`)
  - `maxChars`: *(integer)* — Char limit per msg (default: `null`)
  - `turnsToPreserve`: *(integer)* — 2 msgs per turn (default: `null`)
  - `maxTokens`: *(integer)* — max tokens to use (default: `null`)

Example code:

```js
chatgpt.send('Hello, world!')

// e.g. => Hello! How can I assist you today?
```

#

#### `sendInNewChat()` 🌐 DOM only

Creates a new chat and sends a message.

Parameters:

`msg`: A string representing the message to send.

Example:

```js
chatgpt.sendInNewChat('Hello, world!')
```

#

#### `setProvider()` 🔄 Universal

Sets the active API provider and stores its API key for use in `send()`.

Parameters:

- `provider`: *(string)* — The API provider name (default: `'openrouter'`)
- `options` *(object)*:
  - `key`: *(string)* — The API key for the provider

Example:

```js
chatgpt.setProvider('openrouter', { key: 'sk-or-...' })
```

#

#### `shareChat()` `async` 🔄 Universal

Makes the selected chat available to others. Returns the URL of the chat as a string.

Parameters:

`chatToGet` (optional): A number or string representing the `index`, `title` or `id` of the chat to share.

`method` (optional): A string representing the method to share the chat with. Defaults to `clipboard`.

Can be the following: `copy` or `clipboard` to copy the chat URL to clipboard, `alert`, `notify` or `notification` to create an [alert message](#alert--dom-only) with the details about the shared chat in the website.

```js
(async () => {
    await chatgpt.shareChat(1, 'copy') // copy/clipboard
})()
```

#

#### `speak()` 🌐 DOM only

Text To Speech (TTS) conversion of a given message.

Parameters:

`msg`: A string representing the message to TTS.

`options` (optional): An object containing the options for the vocal synthesizer.

Available options:

 - `voice`: A number representing the index of voices available on the user device.
 - `pitch`: A float representing the pitch of the speech. From `0` to `2`.
 - `speed`: A float representing the speed of the speech. From `0.1` to `10`.
 - `onend`: A callback function invoked when speech finishes playing.

Example:

```js
(async () => {
    chatgpt.speak(await chatgpt.getLastResponse(), { voice: 1, pitch: 2, speed: 3 })
})()
```

#

#### `startNewChat()` 🌐 DOM only

Creates a new chat.

Example:

```js
chatgpt.startNewChat()
```

#

#### `stop()` 🌐 DOM only

Stops the generation of ChatGPT's response.

Example:

```js
chatgpt.stop()
```

<a href="#top">Back to top ↑</a>

## DOM related

#### `focusChatbar()` 🌐 DOM only

Focuses the chatbar.

Example:

```js
chatgpt.focusChatbar()
```

#

#### `getChatBox()` 🌐 DOM only

Returns the chat input as an HTML element.

Example:

```js
const chatbox = chatgpt.getChatBox()
chatgpt.alert(chatbox.value) // Example output: 'Hello from chatgpt.js!'
```

#

#### `getContinueButton()` 🌐 DOM only

Returns the 'Continue generating' button as an HTML element.

Example:

```js
const continueBtn = chatgpt.getContinueButton()
continueBtn.click()
```

#

#### `getDictateButton()` 🌐 DOM only

Returns the button which allows you to dictate input.

Example:

```js
const dictateBtn = chatgpt.getDictateButton()
dictateBtn.click()
```

#

#### `getLoginButton()` 🌐 DOM only

Returns the login button as an HTML element.

Example:

```js
const loginBtn = chatgpt.getLoginButton()
loginBtn.click() // navs to login page
```

#

#### `getNewChatButton()` 🌐 DOM only

Returns the sidebar button (w/ icon) that creates a new chat as an HTML element.

Example:

```js
const newChatBtn = chatgpt.getNewChatButton()
newChatBtn.style.display = 'none' // hide New Chat button
```

#

#### `getNewChatLink()` 🌐 DOM only

Returns the sidebar link (w/ label) that creates a new chat as an HTML element.

Example:

```js
const newChatLink = chatgpt.getNewChatLink()
newChatLink.style.display = 'none' // hide New Chat link
```

#

#### `getRegenerateButton()` 🌐 DOM only

Returns the button which regenerates ChatGPT's response as an HTML element.

Example:

```js
const regenBtn = chatgpt.getRegenerateButton()
regenBtn.click()
```

#

#### `getScrollToBottomButton()` 🌐 DOM only

Returns the button which scrolls to bottom as an HTML element.

Example:

```js
const scrollToBottomBtn = chatgpt.getScrollToBottomButton()
scrollToBottomBtn.click()
```

#

#### `getSendButton()` 🌐 DOM only

Returns the button that sends the message as an HTML element.

Example:

```js
const sendBtn = chatgpt.getSendButton()
sendBtn.click()
```

#

#### `getStopButton()` 🌐 DOM only

Returns the button that stops the generation of ChatGPT's response as an HTML element.

Example:

```js
const stopBtn = chatgpt.getStopButton()
stopBtn.click()
```

#

#### `getVoiceButton()` 🌐 DOM only

Returns the chatbar button that activates Voice mode as an HTML element.

Example:

```js
const voiceBtn = chatgpt.getVoiceButton()
getVoiceButton.click() // activates Voice mode
```

<a href="#top">Back to top ↑</a>

# Library APIs

## autoRefresh `api`

API related to keeping the user's session alive and fresh.

##

#### `activate()` 🌐 DOM only

Activates the auto-refresh functionality.

Parameters:

`interval` (optional): A number representing the interval in seconds between sessions refreshes. Defaults to `30`.

Example:

```js
chatgpt.autoRefresh.activate()
```

##

#### `deactivate()` 🌐 DOM only

Deactivates the auto-refresh functionality.

Example:

```js
chatgpt.autoRefresh.deactivate()
```

##

#### `nowTimeStamp()` 🔄 Universal

Returns the current timestamp as a string (12-hour format).

Example:

```js
const timeStamp = chatgpt.autoRefresh.nowTimeStamp()
chatgpt.alert(timeStamp) // Example output: '1:56:25 PM'
```

<a href="#top">Back to top ↑</a>

## browser `api`

#### `isLightMode()` 🌐 DOM only

Returns a boolean value. `true` if system/browser scheme preference is set to light, `false` otherwise.

Example:

```js
chatgpt.alert(chatgpt.browser.isLightMode()) // logs `true` or `false`
```

#

#### `isDarkMode()` 🌐 DOM only

Returns a boolean value. `true` if system/browser scheme preference is set to dark, `false` otherwise.

Example:

```js
chatgpt.alert(chatgpt.browser.isDarkMode()) // logs `true` or `false`
```

#

#### `isChromium()` 🌐 DOM only

Returns a boolean value. `true` if the browser is Chromium and `false` otherwise.

Example:

```js
if (chatgpt.browser.isChromium()) {
    // Do something
}
```

#

#### `isChrome()` 🌐 DOM only

Returns a boolean value. `true` if the browser is Chrome and `false` otherwise.

Example:

```js
if (chatgpt.browser.isChrome()) {
    // Do something
}
```

#

#### `isEdge()` 🌐 DOM only

Returns a boolean value. `true` if the browser is Edge and `false` otherwise.

Example:

```js
if (chatgpt.browser.isEdge()) {
    // Do something
}
```

#

#### `isBrave()` 🌐 DOM only

Returns a boolean value. `true` if the browser is Brave and `false` otherwise.

Example:

```js
if (chatgpt.browser.isBrave()) {
    // Do something
}
```

#

#### `isFirefox()` 🌐 DOM only

Returns a boolean value. `true` if the browser is Firefox and `false` otherwise.

Example:

```js
if (chatgpt.browser.isFirefox()) {
    // Do something
}
```

#

#### `isFullScreen()` 🌐 DOM only

Returns a boolean value. `true` if the browser is fullscreen and `false` otherwise.

Example:

```js
if (chatgpt.browser.isFullScreen()) {
    // Do something
}
```

#

#### `isMobile()` 🌐 DOM only

Returns a boolean value. `true` if the browser is mobile and `false` otherwise.

Example:

```js
if (chatgpt.browser.isMobile()) {
    // Do something
}
```

<a href="#top">Back to top ↑</a>

## code `api`

#### `debug(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to debug the given code and return corrected code.

Parameters:

`code`: A string being the code to debug.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const debuggedCode = await chatgpt.code.debug(`
        function add(a, b) {
            return a - b
        }`)
    chatgpt.alert(debuggedCode)

    /* Alerts:
    function add(a, b) {
        return a + b
    } */
})()
```

#

#### `minify(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to minify the given code.

Parameters:

`code`: A string being the code to be minified.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const minifiedCode = await chatgpt.code.minify(`
        function autosizeBox() {
            const newLength = replyBox.value.length
            if (newLength < prevLength) { // if deleting txt
                replyBox.style.height = 'auto' // ...auto-fit height
                if (parseInt(getComputedStyle(replyBox).height) < 55) { // if down to one line
                    replyBox.style.height = '2.15rem' } // ...reset to original height
            }
            replyBox.style.height = replyBox.scrollHeight + 'px'
            prevLength = newLength
        }`)
    chatgpt.alert(minifiedCode)

    /* Alerts:
    'function autosizeBox(){const n=replyBox.value.length;if(n<prevLength){replyBox.style.height='auto'if(parseInt(getComputedStyle(replyBox).height)<55){replyBox.style.height='2.15rem'}}replyBox.style.height=replyBox.scrollHeight+'px'prevLength=n}' */
})()
```

#

#### `execute(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to execute the given code.

Parameters:

`code`: A string being the code to execute.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    chatgpt.alert(await chatgpt.code.execute('return 6 + 5')) // logs '11'
})()
```

#

#### `extract()` 🔄 Universal

Extracts pure code from response.

Parameters:

`msg`: A string being the response to extract code from.

Example:

```js
(async () => {
    chatgpt.send('What is a short script to delete files?')
    await chatgpt.isIdle()
    const response = await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'),
          scriptCode = chatgpt.code.extract(response)
    chatgpt.alert(scriptCode)

    /* Alerts:    
    const fs = require('fs')

    // Specify the path of the file(s) you want to delete
    const filePath = 'path/to/your/file.txt'

    // Delete the file
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err)
        } else {
            chatgpt.alert('File deleted successfully')
        }
    }) */
})()
```

#

#### `isIdle()` `async` 🌐 DOM only

Resolves a promise when code has finished generating.

Parameters:

`timeout` (optional): An integer specifying the number of milliseconds to wait before resolving with `false`. If not provided, waits indefinitely until code generation finishes.

Example:

```js
(async () => {
    chatgpt.send('Type me a short code block')
    await chatgpt.code.isIdle()
    chatgpt.alert('Code finished generating') // non-code may still be generating
})()
```

#

#### `obfuscate(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to obfuscate the given code.

Parameters:

`code`: A string being the code to obfuscate.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const code = `window[elem].addEventListener('mouseover', toggleTooltip)`
    const obfuscatedCode = await chatgpt.code.obfuscate(code)
    chatgpt.alert(obfuscatedCode)

    /* Alerts:
    '(window[elem])[btoa('YWxlcnRWaWV3')](btoa('bW91c2VyYm94ZXJOYW1l'), btoa('dG9nZ2VkT3V0d2FsbA==')) */
})()
```

#

#### `refactor(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to refactor the given code.

Parameters:

`code`: A string being the code to refactor.
`verbose`: Show console logging (default: `false`).

`objective` (optional): A string representing the objective of the refactoring. Defaults to `brevity`.

Example:

```js
(async () => {
    const code =  `
        if (6 > 5) {
            return true
        } else {
            return false
        }`
    const refactoredCode = await chatgpt.code.refactor(code, 'brevity')
    chatgpt.alert(refactoredCode)

    /* Alerts:
    return 6 > 5 */
})()
```

#

#### `review(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to review given code.

Parameters:

`code`: A string being the code to review.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    chatgpt.alert(await chatgpt.code.review('btoa("Hello World")'))

    /* Example output:
    The code appears to be correct. It uses the `btoa` function to encode the string "Hello World" in base64. */
})()
```

#

#### `unminify(code, { parameters })` `async` 🔄 Universal

Asks ChatGPT to unminify the given code.

Parameters:

`code`: A string being the code to unminify.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const code = `function autosizeBox(){const n=replyBox.value.length;if(n<prevLength){replyBox.style.height='auto'if(parseInt(getComputedStyle(replyBox).height)<55){replyBox.style.height='2.15rem'}}replyBox.style.height=replyBox.scrollHeight+'px'prevLength=n}`

    const minifiedCode = await chatgpt.code.unminify(code)
    chatgpt.alert(minifiedCode)

    /* Alerts:
    function autosizeBox() {
        const newLength = replyBox.value.length
        if (newLength < prevLength) { // if deleting txt
            replyBox.style.height = 'auto' // ...auto-fit height
            if (parseInt(getComputedStyle(replyBox).height) < 55) { // if down to one line
                replyBox.style.height = '2.15rem' } // ...reset to original height
        }
        replyBox.style.height = replyBox.scrollHeight + 'px'
        prevLength = newLength
    }` */
})()
```

#

#### `write(prompt, outputLang, { parameters })` `async` 🔄 Universal

Asks ChatGPT to write code given a prompt.

Parameters:

`prompt`: A string describing the code to generate.
`outputLang`: A string representing the code language to generate the prompt with.
`verbose`: Show console logging (default: `false`).

Example:

```js
(async () => {
    const code = await chatgpt.code.write('Repeat a task every 10 seconds', 'javascript')
    chatgpt.alert(code)

    /* Alerts:
    setInterval(function() {
        // Your task code here
    }, 10000) */
})()
```

<a href="#top">Back to top ↑</a>

## footer `api`

API related to the footer.

#

#### `get()` 🌐 DOM only

Returns the footer div as an HTML element.

Example:

```js
const footerDiv = chatgpt.footer.get()
footerDiv.style.padding = '15px' // make the footer taller
```

#

#### `hide()` 🌐 DOM only

Hides the footer div.

Example:

```js
chatgpt.footer.hide()
```

#

#### `show()` 🌐 DOM only

Shows the footer div if hidden.

Example:

```js
chatgpt.footer.show()
```

<a href="#top">Back to top ↑</a>

## header `api`

API related to the header.

#

#### `get()` 🌐 DOM only

Returns the header div as an HTML element.

Example:

```js
const headerDiv = chatgpt.header.get()
headerDiv.style.display = none // hide the header
```

#

#### `hide()` 🌐 DOM only

Hides the header div.

Example:

```js
chatgpt.header.hide()
```

#

#### `show()` 🌐 DOM only

Shows the header div if hidden.

Example:

```js
chatgpt.header.show()
```

<a href="#top">Back to top ↑</a>

## history `api`

API related to the chat history.

#

#### `deleteChat()` `async` 🔄 Universal

Deletes a chat from ChatGPT history.

Parameters:

`chatToDelete` (optional): A string or integer representing the chat to delete. Can be `'active'`, `'latest'`, the index of a chat, the title of a chat or the ID of a chat. Defaults to `'active'`.

Example:

```js
(async () => {
    await chatgpt.history.deleteChat('active')
    chatgpt.alert('Chat deleted.')
})()
```

#

#### `isLoaded()` `async` 🌐 DOM only

Resolves a promise when chat history has finished loading.

Parameters:

`timeout` (optional): An integer specifying the number of milliseconds to wait before resolving with `false`. If not provided, waits indefinitely until chat history finishes loading.

Example:

```js
(async () => {
    await chatgpt.history.isLoaded()
    chatgpt.alert('ChatGPT history has finished loading.')
})()
```

<a href="#top">Back to top ↑</a>

## instructions `api`

#### `add()` `async` 🔄 Universal

Adds a custom instruction for either the user or ChatGPT.

Parameters:

`instruction`: A string being the instruction to be added.

`target`: A string representing the target of the instruction. Can be either `user` or `chatgpt`.

Example:

```js
(async () => {
    await chatgpt.instructions.add('Detailed and well-explained answers', 'chatgpt')
})()
```

#

#### `clear()` `async` 🔄 Universal

Clears the custom instructions of either the user or ChatGPT.

Parameters:

`target`: A string representing the target of the instruction. Can be either `user` or `chatgpt`.

Example:

```js
(async () => {
    await chatgpt.instructions.clear('user')
})()
```

#

#### `turnOff()` `async` 🔄 Universal

Turns off custom instructions.

Example:

```js
(async () => {
    await chatgpt.instructions.turnOff()
})()
```

#

#### `turnOn()` `async` 🔄 Universal

Turns on custom instructions.

Example:

```js
(async () => {
    await chatgpt.instructions.turnOn()
})()
```

#

#### `toggle()` `async` 🔄 Universal

Toggles on/off custom instructions.

Example:

```js
(async () => {
    await chatgpt.instructions.toggle()
})()
```

<a href="#top">Back to top ↑</a>

## menu `api`

The small menu that shows up when clicking on the account button.

#

#### `toggle()` 🌐 DOM only

Toggles the menu.

Example:

```js
chatgpt.menu.toggle()
```

#

#### `open()` 🌐 DOM only

Opens the menu.

Example:

```js
chatgpt.menu.open()
```

#

#### `close()` 🌐 DOM only

Closes the menu.

Example:

```js
chatgpt.menu.close()
```

<a href="#top">Back to top ↑</a>

## response `api`

API related to ChatGPT's responses.

#

#### `continue()` 🌐 DOM only

Continues the generation of ChatGPT's cut-off response.

Example:

```js
chatgpt.response.continue()
```

#

#### `get()` 🔄 Universal

If it's a previously created chat, see [chatgpt.response.getFromDOM](#getfromdom--dom-only)

If it's a new chat, see [chatgpt.response.getFromAPI](#getfromapi-async--universal)

#

#### `getFromAPI()` `async` 🔄 Universal

Returns the Nth response written by ChatGPT in the Nth chat, as a string.

Parameters:

`chatToGet` (optional): A number representing the index of the chat to get the response from. Defaults to `latest`.

`responseToGet` (optional): A number representing the index of the response to get. Defaults to `latest`.

Example:

```js
(async () => {
    const response = chatgpt.response.getFromAPI()
    chatgpt.alert(response) // Example output: 'Hello from ChatGPT!'
})()
```

#

#### `getFromDOM()` 🌐 DOM only

Returns the Nth response ChatGPT has written as a string.

Parameters:

`pos`: A string or integer representing the position of the wanted response.

Example:

```js
var fifthResp

fifthResp = chatgpt.response.getFromDOM(5) // Returns the 5th response
fifthResp = chatgpt.response.getFromDOM('fifth') // Also returns the 5th response
fifthResp = chatgpt.response.getFromDOM('five') // Returns the 5th response too

chatgpt.alert(fifthResp) // Example output: 'Hello from ChatGPT!'
```

#

#### `getLast()` `async` 🔄 Universal

See [chatgpt.getLastResponse](#getlastresponse-async--universal)

#

#### `regenerate()` 🌐 DOM only

See [chatgpt.regenerate](#regenerate--dom-only)

#

#### `stopGenerating()` 🌐 DOM only

See [chatgpt.stop](#stop--dom-only)

<a href="#top">Back to top ↑</a>

## settings `api`

API for interfacing with ChatGPT user settings.

#

#### `scheme` `api subset`

##

#### `activateDark()` 🌐 DOM only

Changes the website theme to dark mode.

Example:

```js
chatgpt.scheme.activateDark()
```

##

#### `activateLight()` 🌐 DOM only

Changes the website theme to light mode.

Example:

```js
chatgpt.scheme.activateLight()
```

##

#### `isDark()` 🌐 DOM only

Returns a boolean value. `true` if the theme is dark mode, `false` otherwise.

Example:

```js
chatgpt.alert(chatgpt.settings.scheme.isDark()) // logs `true` or `false`
```

##

#### `isLight()` 🌐 DOM only

Returns a boolean value. `true` if the theme is light mode, `false` otherwise.

Example:

```js
chatgpt.alert(chatgpt.settings.scheme.isLight()) // logs `true` or `false`
```

##

#### `set()` 🌐 DOM only

Sets the theme to `light`, `dark` or `system`.

**Paremeters**:

`value`: A string being the value to set the theme to.

Example:

```js
chatgpt.settings.scheme.set('dark')
```

##

#### `toggle()` 🌐 DOM only

Toggles the theme between light and dark mode.

Example:

```js
chatgpt.settings.scheme.toggle()
```

<a href="#top">Back to top ↑</a>

## sidebar `api`

API related to the sidebar's behavior.

#

#### `exists()` 🌐 DOM only

Returns a boolean value. `true` if the sidebar exists , `false` otherwise (e.g. logged out UI).

Example:

```js
if (!chatgpt.sidebar.exists())
    chatgpt.alert('Sidebar is missing!')
```

#

#### `isOn()` 🌐 DOM only

Returns a boolean value. `true` if the sidebar is open, `false` otherwise.

Example:

```js
if (chatgpt.sidebar.isOn()) {
    // Do something
}
```

#

#### `isOff()` 🌐 DOM only

Returns a boolean value. `true` if the sidebar is closed, `false` otherwise.

Example:

```js
if (chatgpt.sidebar.isOff()) {
    // Do something
}
```

#

#### `hide()` 🌐 DOM only

Hides the sidebar.

Example:

```js
chatgpt.sidebar.hide()
```

#

#### `show()` 🌐 DOM only

Shows the sidebar.

Example:

```js
chatgpt.sidebar.show()
```

#

#### `toggle()` 🌐 DOM only

Toggles the visibility of the sidebar.

Example:

```js
chatgpt.sidebar.toggle()
```

#

#### `isLoaded()` `async` 🌐 DOM only

Resolves a promise when the ChatGPT sidebar has finished loading.

Parameters:

`timeout` (optional): An integer specifying the number of milliseconds to wait before resolving with `false`. If not provided, waits 5s or until New Chat link appears (since it is not always present).

Example:

```js
(async () => {
    await chatgpt.sidebar.isLoaded()
    chatgpt.alert('ChatGPT sidebar has finished loading.')
})()
```

<br>

<hr>

<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/white/icon16.svg"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/dark-gray/icon16.svg"></picture>
**[Latest releases](https://github.com/KudoAI/chatgpt.js/releases)** /
[Discuss](https://github.com/KudoAI/chatgpt.js/discussions) /
[Get support](https://github.com/KudoAI/chatgpt.js/issues) /
<a href="#top">Back to top ↑</a>

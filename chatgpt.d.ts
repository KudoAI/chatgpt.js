/**
 * TypeScript definitions for chatgpt.js v4.3.0
 * Based on: https://github.com/KudoAI/chatgpt.js
 */

declare interface ChatGPTColors {
  orange: string
  green: string
  reset: string
}

declare interface ChatGPTEndpoints {
  aipersonas: string
  assets: string
  google: {
    chat: string
  }
  openAI: {
    session: string
    chats: string
    chat: string
    share_create: string
    share: string
    instructions: string
  }
  openrouter: {
    chat: string
  }
}

declare interface ChatGPTSelectors {
  btns: Record<string, string>
  chatDivs: Record<string, string>
  chatHistory: string
  errors: Record<string, string>
  footer: string
  header: string
  links: Record<string, string>
  sidebar: string
  ssgManifest: string
}

declare interface ChatGPTAccessToken {
  token: string
  expireDate: string
}

declare interface ChatGPTAutoRefresh {
  activate(interval?: number): void
  deactivate(): void
  nowTimeStamp(): string
  toggle: {
    beacons(): void
    refreshFrame(): void
  }
  isActive?: number | null
  beaconID?: number | null
}

declare interface ChatGPTBrowser {
  isLightMode(): boolean
  isDarkMode(): boolean
  isChromium(): boolean
  isChrome(): boolean
  isEdge(): boolean
  isBrave(): boolean
  isFirefox(): boolean
  isFullScreen(): boolean
  isMobile(): boolean
}

declare interface ChatGPTCode {
  execute(code: string): Promise<string>
  extract(msg?: string): string
  isIdle(timeout?: number | null): Promise<boolean>
  minify(code: string): Promise<string>
  obfuscate(code: string): Promise<string>
  refactor(code: string, objective?: string): Promise<string>
  review(code: string): Promise<string>
  unminify(code: string): Promise<string>
  write(prompt: string, outputLang: string): Promise<string>
}

declare interface ChatGPTFooter {
  get(): HTMLElement | null
  hide(): void
  show(): void
}

declare interface ChatGPTHeader {
  get(): HTMLElement | null
  hide(): void
  show(): void
}

declare interface ChatGPTHistory {
  isLoaded(timeout?: number | null): Promise<boolean>
}

declare interface ChatGPTInstructions {
  add(instruction: string, target: 'user' | 'chatgpt'): Promise<void>
  clear(target: 'user' | 'chatgpt'): Promise<void>
  fetchData(): Promise<any>
  sendRequest(
    method: 'GET' | 'POST',
    token: string,
    body?: object
  ): Promise<any>
  turnOff(): Promise<void>
  turnOn(): Promise<void>
  toggle(): Promise<void>
}

declare interface ChatGPTMenuAttrs {
  icon?: string
  label?: string
  onclick?: (...args: any[]) => void
  items?: Array<{ text: string, value: string }>
}

declare interface ChatGPTMenu {
  elems: HTMLElement[]
  addedEvent?: boolean
  append(elem: 'button' | 'dropdown', attrs?: ChatGPTMenuAttrs): string
  close(): void
  open(): void
}

declare interface ChatGPTResponse {
  continue(): void
  get(...args: any[]): any
  getFromAPI(
    chatToGet?: string | number,
    responseToGet?: string | number
  ): Promise<string>
  getFromDOM(pos?: string | number): string
  getLast(): Promise<string>
  regenerate(): void
  stopGenerating(): void
}

declare interface ChatGPTScheme {
  isDark(): boolean
  isLight(): boolean
  set(value: 'dark' | 'light' | 'system'): void
  toggle(): void
}

declare interface ChatGPTSettings {
  scheme: ChatGPTScheme
}

declare interface ChatGPTSidebar {
  elems: HTMLElement[]
  observer: MutationObserver | {}
  activateObserver(): void
  append(elem: 'button' | 'dropdown', attrs?: ChatGPTMenuAttrs): string
  exists(): boolean
  hide(): void
  show(): void
  isOff(): boolean
  isOn(): boolean
  toggle(): void
  isLoaded(timeout?: number): Promise<boolean>
}

declare interface ChatGPTNotifyOptions {
  msg: string
  position?: string
  notifDuration?: number
  shadow?: boolean | string
  toast?: boolean
}

declare interface ChatGPTSpeakOptions {
  voice?: number
  pitch?: number
  speed?: number
  onend?: () => void
}

declare interface ChatGPT {
  // Properties
  colors: ChatGPTColors
  endpoints: ChatGPTEndpoints
  selectors: ChatGPTSelectors
  accessToken?: ChatGPTAccessToken
  draggingModal?: HTMLElement

  // Nested objects
  autoRefresh: ChatGPTAutoRefresh
  browser: ChatGPTBrowser
  code: ChatGPTCode
  footer: ChatGPTFooter
  header: ChatGPTHeader
  history: ChatGPTHistory
  instructions: ChatGPTInstructions
  menu: ChatGPTMenu
  response: ChatGPTResponse
  settings: ChatGPTSettings
  sidebar: ChatGPTSidebar
  scheme: ChatGPTScheme

  // Core methods
  actAs(persona?: string): Promise<void>
  activateDarkMode(): void
  activateLightMode(): void
  alert(
    title?: string,
    msg?: string,
    btns?: Array<(...args: any[]) => void> | ((...args: any[]) => void),
    checkbox?: (...args: any[]) => void,
    width?: number
  ): string
  askAndGetReply(query: string): Promise<string>
  clearChats(): Promise<void>
  continue(): void
  detectLanguage(text: string): Promise<string>
  executeCode(code?: string): Promise<string>
  exportChat(
    chatToGet?: string | number,
    format?: 'html' | 'md' | 'pdf' | 'text'
  ): Promise<void>
  extractCode(msg?: string): string
  focusChatbar(): void
  generateRandomIP(): string
  get(targetType: string, targetName?: string): any
  getAccessToken(): Promise<string>
  getAccountDetails(
    ...details: Array<'email' | 'id' | 'image' | 'name' | 'picture'>
  ): Promise<Record<string, any>>

  // Element getters
  getChatBox(): HTMLTextAreaElement | null
  getChatData(
    chatToGet?: string | number,
    detailsToGet?: string | string[],
    sender?: 'all' | 'both' | 'user' | 'chatgpt',
    msgToGet?: string | number
  ): Promise<any>
  getChatInput(): string
  getContinueButton(): HTMLButtonElement | null
  getErrorMsg(): string | undefined
  getFooterDiv(): HTMLElement | null
  getHeaderDiv(): HTMLElement | null
  getLastPrompt(): Promise<string>
  getLastResponse(): Promise<string>
  getLoginButton(): HTMLButtonElement | null
  getNewChatButton(): HTMLButtonElement | null
  getNewChatLink(): HTMLAnchorElement | null
  getRegenerateButton(): HTMLButtonElement | null
  getResponse(...args: any[]): any
  getResponseFromAPI(
    chatToGet?: string | number,
    responseToGet?: string | number
  ): Promise<string>
  getResponseFromDOM(pos?: string | number): string
  getScrollToBottomButton(): HTMLButtonElement | null
  getSendButton(): HTMLButtonElement | null
  getStopButton(): HTMLButtonElement | null
  getUserLanguage(): string
  getVoiceButton(): HTMLButtonElement | null

  // UI controls
  hideFooter(): void
  hideHeader(): void
  showFooter(): void
  showHeader(): void

  // State checks
  isDarkMode(): boolean
  isFullScreen(): boolean
  isIdle(timeout?: number | null): Promise<boolean>
  isLoaded(timeout?: number | null): Promise<boolean>
  isLightMode(): boolean
  isTempChat(): boolean
  isTyping(): boolean

  // Authentication
  login(): void
  logout(): void

  // Code operations
  minify(code?: string): Promise<string>
  obfuscate(code?: string): Promise<string>
  refactor(code?: string, objective?: string): Promise<string>
  reviewCode(code?: string): Promise<string>
  unminify(code?: string): Promise<string>
  writeCode(prompt?: string, outputLang?: string): Promise<string>

  // Notifications
  notify(
    msg: string,
    position?: string,
    notifDuration?: number,
    shadow?: boolean | string
  ): HTMLElement
  notify(options: ChatGPTNotifyOptions): HTMLElement

  // Utilities
  printAllFunctions(): void
  randomFloat(): number
  regenerate(): void
  renderHTML(node: HTMLElement): HTMLElement
  resend(): Promise<void>
  scrollToBottom(): void

  // Chat operations
  send(msg: string, method?: string): void
  sendInNewChat(msg: string): void
  sentiment(text: string, entity?: string): Promise<string>
  setScheme(value: 'dark' | 'light' | 'system'): void
  shareChat(
    chatToGet?: string | number,
    method?: 'alert' | 'notify' | 'notification' | 'clipboard' | 'copy'
  ): Promise<string>
  startNewChat(): void
  stop(): void
  suggest(ideaType: string, details?: string): Promise<string>
  speak(msg: string, options?: ChatGPTSpeakOptions): void
  summarize(text: string): Promise<string>
  toggleScheme(): void
  translate(text: string, outputLang: string): Promise<string>
  uuidv4(): string

  // Button actions
  clickButton(btnIdentifier: string): void
  getButton(btnIdentifier: string): HTMLElement | null

  // Alias support - extensive dynamic aliases
  [key: string]: any
}

declare const chatgpt: ChatGPT

declare global {
  interface Window {
    chatgpt: ChatGPT
  }
}

declare module '@kudoai/chatgpt.js' {
  export = chatgpt
}

declare module 'chatgpt.js' {
  export = chatgpt
}

export = chatgpt
export as namespace chatgpt

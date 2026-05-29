/**
 * TypeScript definitions for chatgpt.js v4.5.1
 * Based on: https://github.com/KudoAI/chatgpt.js
 */

declare interface ChatGPT {

  colors: {
    orange: string
    green: string
    reset: string
  }

  endpoints: {
    aipersonas: string
    assets: string
    google: {
      chat: string
    }
    openai: {
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

  selectors: {
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

  actAs(
    persona: string,
    options?: {
      personasURL?: string
      verbose?: boolean
    }
  ): Promise<string> | void

  activateDarkMode(): void
  activateLightMode(): void

  // Core methods

  alert(
    title?: string,
    msg?: string,
    btns?: Array<(...args: any[]) => void> | ((...args: any[]) => void),
    checkbox?: (...args: any[]) => void,
    width?: number
  ): string

  askAndGetReply(query: string): Promise<string>

  autoRefresh: {
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

  browser: {
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

  clearChats(): Promise<void>

  code: {
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

  continue(): void
  detectLanguage(text: string): Promise<string>
  execute(code: string): Promise<string>

  exportChat(
    chatToGet?: string | number,
    format?: 'html' | 'md' | 'pdf' | 'text'
  ): Promise<void>

  extractCode(msg?: string): string
  focusChatbar(): void

  footer: {
    get(): HTMLElement | null
    hide(): void
    show(): void
  }

  getAccessToken(): Promise<string>

  getAccountDetails(
    ...details: Array<'email' | 'id' | 'image' | 'name' | 'picture'>
  ): Promise<Record<string, any>>

  getChatBox(): HTMLTextAreaElement | null

  getChatData(
    chatToGet?: string | number,
    detailsToGet?: string | string[],
    sender?: 'all' | 'both' | 'user' | 'chatgpt',
    msgToGet?: string | number
  ): Promise<any>

  getChatInput(): string
  getContinueButton(): HTMLButtonElement | null
  getDictateButton(): HTMLButtonElement | null
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

  header: {
    get(): HTMLElement | null
    hide(): void
    show(): void
  }

  // UI controls
  hideFooter(): void
  hideHeader(): void

  history: {
    deleteChat(chatToDelete?: string | number): Promise<boolean>
    isLoaded(timeout?: number | null): Promise<boolean>
  }

  instructions: {
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

  isDarkMode(): boolean
  isFullScreen(): boolean
  isIdle(timeout?: number | null): Promise<boolean>
  isLoaded(timeout?: number | null): Promise<boolean>
  isLightMode(): boolean
  isTempChat(): boolean
  isTyping(): boolean
  login(): void
  logout(): void

  menu: {
    elems: HTMLElement[]
    close(): void
    open(): void
  }

  minify(code?: string): Promise<string>

  notify(
    msg: string,
    position?: string,
    notifDuration?: number,
    shadow?: boolean | string
  ): HTMLElement

  obfuscate(code?: string): Promise<string>
  printAllFunctions(): void
  randomFloat(): number
  refactor(code?: string, objective?: string): Promise<string>
  regenerate(): void
  renderHTML(node: HTMLElement): HTMLElement
  resend(): Promise<void>

  response: {
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

  reviewCode(code?: string): Promise<string>
  scrollToBottom(): void
  send(msg: string, method?: string): void
  sendInNewChat(msg: string): void

  setProvider(
    provider?: string,
    options?: {
      key?: string
    }
  ): void

  settings: {
    scheme: {
      isDark(): boolean
      isLight(): boolean
      set(value: 'dark' | 'light' | 'system'): void
      toggle(): void
    }
  }

  sentiment(text: string, entity?: string): Promise<string>
  setScheme(value: 'dark' | 'light' | 'system'): void

  shareChat(
    chatToGet?: string | number,
    method?: 'alert' | 'notify' | 'notification' | 'clipboard' | 'copy'
  ): Promise<string>

  showFooter(): void
  showHeader(): void

  sidebar: {
    exists(): boolean
    hide(): void
    show(): void
    isOff(): boolean
    isOn(): boolean
    isLoaded(timeout?: number): Promise<boolean>
    toggle(): void
  }

  startNewChat(): void
  stop(): void
  suggest(ideaType: string, details?: string): Promise<string>

  speak(
    msg: string,
    options?: {
      voice?: number
      pitch?: number
      speed?: number
      onend?: () => void
    }
  ): void

  summarize(text: string): Promise<string>
  toggleScheme(): void
  translate(text: string, outputLang: string): Promise<string>
  unminify(code?: string): Promise<string>
  uuidv4(): string
  writeCode(prompt?: string, outputLang?: string): Promise<string>
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

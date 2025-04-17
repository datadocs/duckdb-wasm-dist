export class LogsWriter {
  constructor(private $root: HTMLElement) {
    $root.className += 'logs-container';
  }

  add(node: Node) {
    this.$root.appendChild(node);
  }

  addCode(code: string) {
    const node = el('pre', {}, el('code', {}, code));
    this.add(node);
  }

  addText(text: string, type?: 'e' | 'w' | 'i') {
    const consoleText = `[playground] ${text}`;
    if (type === 'e') console.error(consoleText);
    else if (type === 'w') console.warn(consoleText);
    else console.log(consoleText);

    const node = el('div', { className: 'log-text ' + (type || '') });
    node.innerText = '[' + new Date().toLocaleString() + '] ' + text;
    this.add(node);
  }
}

/**
 * @author hangxingliu
 * @license MIT
 */
function el<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attrs?: Partial<Omit<HTMLElementTagNameMap[K], 'style'>> & {
    html?: string;
    style?: Partial<CSSStyleDeclaration>;
  },
  children?: any,
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  if (attrs) {
    if (typeof attrs.html !== 'undefined') {
      element.innerHTML = attrs.html;
      delete attrs.html;
    }
    if (attrs.style) {
      const style = attrs.style;
      delete attrs.style;
      Object.keys(style).forEach((key) => (element.style[key] = style[key]));
    }
    Object.assign(element, attrs);
  }

  if (children) {
    if (Array.isArray(children))
      children.forEach((child) => element.append(child));
    else if (typeof children === 'string') element.innerText = children;
    else element.append(children);
  }
  return element;
}

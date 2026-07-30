export function byId<Type extends HTMLElement = HTMLElement>(id: string): Type {
    return document.getElementById(id)! as Type;
}

export function onClick(id: string, handler: (ev: MouseEvent) => unknown) {
    document.getElementById(id)?.addEventListener("click", (ev) => {
        ev.preventDefault();
        handler(ev);
    });
}

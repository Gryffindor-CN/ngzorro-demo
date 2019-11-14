export class Menu {
    icon: string;
    name: string;
    text: string;

    constructor(icon: string,
        name: string, text: string, to?: string, children?: Array<{ icon: string, name: string, text: string, to: string }>) {
        this.icon = icon;
        this.name = name;
        this.text = text;
        this.to = to;
        this.children = children;
    }
    children?: Array<{ icon: string, name: string, text: string, to: string }>;
    to?: string;
}
class Parent {
    public readonly m: string;
    constructor(m: string) {
        this.m = m;
    }
}

export class Child<T = string> extends Parent {
    public readonly x: T;

    constructor(m: string, x: T) {
        super(m);
        this.x = x;
    }
}
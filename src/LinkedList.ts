class Nodo<T> {
    next: Nodo<T> | null =  null;
    constructor(public value:T){}
}

export class LinkedList<T> {
    head: Nodo<T> | null = null;
}
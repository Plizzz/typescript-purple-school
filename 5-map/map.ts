type Node = {
    key: string,
    value: string | number,
    next: Node | null,
}

class Map {
    private buckets: (Node | null)[];

    constructor(size: number) {
        if (size <= 0) {
            throw new Error('size must be greater than 0');
        }
        this.buckets = new Array(size).fill(null);
    }

    private hash(key: string): number {
        let hash: number = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash % this.buckets.length) * 31 + key.charCodeAt(i);
        }

        return hash % this.buckets.length;
    }

    public set(key: string, value: string | number): void {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = {key, value, next: null};
            return;
        }

        let current = this.buckets[index];

        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            if (!current.next) {
                current.next = {key, value, next: null};
                return;
            }
            current = current.next;
        }
    }

    public get(key: string): string | number | null {

        const index = this.hash(key);

        if (!this.buckets[index]) {
            return null;
        }
        let current: Node | null = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }

            current = current.next
        }
        return null;
    }

    public delete(key: string): void {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            throw new Error('indices are null');
        }
        if (this.buckets[index].key === key) {
            if (this.buckets[index].next) {
                this.buckets[index] = this.buckets[index].next;
            } else {
                this.buckets[index] = null;
            }
            return;
        }
        let current: Node | null = this.buckets[index];
        let prev = current;
        while (current) {
            if (current.key === key) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
        throw new Error('key does not exist');
    }

    public clear() {
        this.buckets.fill(null);
    }
}
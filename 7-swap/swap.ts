const swapKeysAndValues = <V extends string | number | symbol>(obj: Record<string, V>): Record<V, string> => {
    const objEntries = Object.entries(obj);
    const result: Record<V, string> = {} as Record<V, string>;

    objEntries.forEach(([key, value]) => {
        result[value] = key
    });

    return result;
}

const obj: Record<string, number> = {
    a: 1,
    b: 2
}
const res = swapKeysAndValues(obj);
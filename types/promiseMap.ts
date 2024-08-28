function promiseMap<T, S>(callback: (value: T) => Promise<S>) {
    return (value: T) => callback(value);
}

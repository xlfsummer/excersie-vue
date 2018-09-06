export function delay(timespan) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timespan);
    });
}
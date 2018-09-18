/**
 * @template T
 * @param {number} time
 * @returns {(value: T) => Promise<T>}
 */
export function delay(time){
    return value => new Promise(resolve => setTimeout(_ => resolve(value), time));
}

/** @param {string} kebab*/
export function kebab2camel(kebab){
    return kebab.replace(/(^|-)[a-z]/g, function(str){
        return str.substr(-1,1).toUpperCase();
    });
}

export default {
    kebab2camel,
    delay,
};

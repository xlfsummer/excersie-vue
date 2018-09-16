export default {
    /** @param {string} kebab*/
    kebab2camel(kebab){
        return kebab.replace(/(^|-)[a-z]/g, function(str){
            return str.substr(-1,1).toUpperCase();
        });
    }
};

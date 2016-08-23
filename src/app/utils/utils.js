
/**
 * Set in `self.__proto__` object a `_debug` function
 * The debug key is based on the filename and the constructor name
 * @param  {object} self - The object that will have the debug function
 * @param  {string} file - The __filename of caller
 * @param  {string} name - The name of the class or function
 * @return {void}
 */
exports.initializeDebug = function(self,file,name,bindToThis){
    if (bindToThis || !self._debug ){
        //Define a debug key
        let key = file.replace(/[\/\\]/g,':').replace(/(^:|:$|\.js)/g,'')

        //If the function name is not in the filename, appends it
        if (!~key.indexOf(name))
            key += ':'+name

        let debug = require('debug')(key);

        //Get the bind object
        let obj = bindToThis ? self : Object.getPrototypeOf(self);

        //Define the debug property
        Object.defineProperty( obj, '_debug', {
            value : debug
        })

        //Define also in the constructor to make available in static methods
        // Object.defineProperty( proto.constructor, '_debug', {
            // value : debug
        // })
    }

}

/**
 * Gets arguments name from a function
 * @type {RegExp}
 */
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(fn) {
    let fnStr = fn.toString().replace(STRIP_COMMENTS, '');
    let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if(result === null)
        result = [];
    return result;
}


exports.applyArguments = function(self,fn,args){
    var params = getParamNames(fn);
    for(var i = 0;i<params.length;i++){
        self[params[i]] = args[i];
    }
}

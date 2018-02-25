module.exports = function(obj, path, defaultValue, delimeter = ".") {
    let found = false
    
    for (const segment of path.split(delimiter)) {
        if (typeof obj !== "object" || !(segment in obj)) {
            found = false
            break
        }
        
        obj = obj[segment]
        found = true
    }
    
    return found ? obj : defaultValue
}

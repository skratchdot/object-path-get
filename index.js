module.exports = function(obj, path, defaultValue) {
    let found = false
    
    for (const segment of path.split(".")) {
        if (!(segment in obj)) {
            found = false
            break
        }
        
        obj = obj[segment]
        found = true
    }
    
    return found ? obj : defaultValue
}

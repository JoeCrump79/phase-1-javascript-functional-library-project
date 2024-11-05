function myEach(collection, callback) {
    let values = collection
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    for (const value of values) {
        callback(value)
    }
    return collection
}

function myMap(collection, callback) {
    let values = collection
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    const newArray = []
    for (const value of values) {
        const newValue = callback(value)
        newArray.push(newValue)
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let values = collection
    if (typeof collection === "object") {
        values = Object.values(collection)
    }

    let reduceValue = acc
    if (acc === undefined) {
        reduceValue = values[0]
        values = values.slice(1)
    }

    for (const value of values) {
        reduceValue = callback(reduceValue, value, collection)
    
    }
    return reduceValue
}

function myFind(collection, predicate) {
    let values = collection
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    for (const value of values) {
        if (predicate(value)) {
            return value
        }
    }
}

function myFilter(collection, predicate) {
    const result = []
    let values = collection
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    for (const value of values) {
        if (predicate(value)) {
            result.push(value)
        }
    }
    return result
}

function mySize(collection) {
    let values = collection
    if (typeof collection === "object") {
        values = Object.values(collection)
    }
    return values.length
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]
    }
    return array.slice(0, n)
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]
    }
    return array.slice(-n)
}

function myKeys(object) {
    let keys = []
    for (let key in object) {
        keys.push(key)
    }
    return keys 
}

function myValues(object) {
    let values = []
    for (let key in object) {
        values.push(object[key])
    }
    return values
}
const isObjectEmptyValue = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === '') {
            return true;
        }
    }
    return false;
};

export default isObjectEmptyValue
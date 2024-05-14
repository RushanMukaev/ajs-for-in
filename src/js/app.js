export default function orderByProps(obj, array = []) {
    const arraySort = [];
    const arr = [];
    const objSortArray = {...obj};

    array.forEach(el => {
        arraySort.push({
            key: el,
            value: objSortArray[el]
        })
        delete objSortArray[el];
    }) 

    for(let key in objSortArray) {
        arr.push({
            key: key,
            value: objSortArray[key]
        })
    }
    arr.sort((a, b) => a.key.localeCompare(b.key));

    return arraySort.concat(arr);
}

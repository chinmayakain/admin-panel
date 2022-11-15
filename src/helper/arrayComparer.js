export const compareArrays = (arr1, arr2) => {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.some((element) => arr1[i].revenue_type.includes(element))) {
            res.push(arr1[i]);
        }
    }
    return res;
};

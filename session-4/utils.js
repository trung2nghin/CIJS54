export function getDataFromDoc(doc){
    const data = doc.data();
    data.id = doc.id;
    return data;
}
// lay du lieu tu get many documents
export function getDataFromDocs(data) {
    // const docs = data.docs;
    // const listRes = [];
    // for (const item of docs){
    //     listRes.push(getDataFromDoc(item));
    // }
    // return listRes;
    return data.docs.map(getDataFromDoc)
}

//demo map 
// const arr = [1,2,3,4];
// const arr2 = [];
// const arr2 = arr.map(x2);
// const x2 = (item) => {
//     return item * 2 
// }
// console.log(arr2);
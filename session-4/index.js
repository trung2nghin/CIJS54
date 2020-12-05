import { getDataFromDoc,getDataFromDocs } from "./utils.js";
import "./userinfo.js";


// getOneDocument();
getManyDocuments();
//read one
async function getOneDocument() {
  //   const res = firebase.firestore().collection("users").doc("Tr3TW3MatqglzYfSrOoo").get()
  //   .then((res) => {
  //       console.log(res);
  //   });
  //async await
  const res = await firebase.firestore().collection("users").doc("Tr3TW3MatqglzYfSrOoo").get();
  const user = res.data();
  user.id = res.id;
  //  console.log(res.data());
  console.log(user);
}
//get many documents
async function getManyDocuments() {
  const res = await firebase.firestore().collection("users").get();
  console.log(res.docs)
  const user = getDataFromDocs(res);
  return user;
}
getManyDocuments().then(res => {
  let html = "";
  console.log(res)
  for (const item of res) {
    html += `<user-info name=${item.name}><user-info>`;
  }
  document.getElementById("app").innerHTML = html;
});


// add document
// function addDocument() {
//     const data = {
//         name: "alex",
//         age: 23
//     }
//     firebase.firestore().collection("users").add(data)
// }
// addDocument();

// update document
function updateDocument() {
    const docId = "Tr3TW3MatqglzYfSrOoo"
    const data = {
        // name: "Nguyen Van Z",
        // age: 30,
        phone: firebase.firestore.FieldValue.arrayUnion("09043123")
    }
    firebase.firestore().collection("users").doc(docId).update(data)
}
updateDocument();

// delete document

function deleteDocument() {
    const docId = "Tr3TW3MatqglzYfSrOoo"
    firebase.firestore().collection("users").doc(docId).delete()
}
deleteDocument();
class Student {
  className;
  fullName;
  age;
  address;
  constructor(className, fullName, age, address) {
    this.className = className;
    this.fullName = fullName;
    this.age = age;
    this.address = address;
  }
  getInfo() {
    console.log(`Name: ${this.fullName}
                  Age: ${this.age}
                  Address: ${this.address}
                  Class: ${this.className}
      `);
  }
}
class StudentCollection {
  listStudent;
  constructor() {
    this.listStudent = [];
  }
  addStudent(student) {
    if (student instanceof Student) {
      this.listStudent.push(student);
    } else {
      alert("Nhập linh tinh");
    }
  }
}
const studentCollection = new StudentCollection();
studentCollection.addStudent(new Student("12A", "Nguyen A", 18, "Ha Noi"));
studentCollection.addStudent(new Student("11A", "Nguyen B", 21, "Hai Phong"));
studentCollection.addStudent(new Student("10A", "Nguyen C", 22, "Hai Duong"));
document.getElementById("app").innerHTML = `<student-view/>`;
function getListStudent() {
  return studentCollection.listStudent;
}

class StudentView extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const listStudent = getListStudent();
    let html = "";
    for (const iterator of listStudent) {
      html += `
          <student-item name="${iterator.fullName}"></student-item>
          <student-item name="${iterator.className}"></student-item> 
          <student-item name="${iterator.age}"></student-item> 
          <student-item name="${iterator.address}"></student-item> 
        `;
    }
    console.log(html);
    this._shadowDom.innerHTML = html;
  }
}
window.customElements.define("student-view", StudentView);

class StudentItem extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.className = this.getAttribute("className")
    this.name = this.getAttribute("name");
    this.age = this.getAttribute("age");
    this.address = this.getAttribute("address");
    this._shadowDom.innerHTML = `${this.name} `;
  }
}
window.customElements.define("student-item", StudentItem);
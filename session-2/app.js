class Student {
  lop;
  ten;
  tuoi;
  quequan;
  constructor(lop, ten, tuoi, quequan) {
    this.lop = lop;
    this.ten = ten;
    this.tuoi = tuoi;
    this.quequan = quequan;
  }
  info() {
    console.log(
      `Lớp:${this.lop}, Tên: ${this.ten}, Tuổi: ${this.tuoi}, Quê Quán: ${this.quequan}`
    );
  }
}
class Lop {
  listHS;
  constructor() {
    this.listHS = [];
  }
  add(HS) {
    this.listHS.push(HS);
  }
  find1() {
    return this.listHS.filter(function (a) {
      return a.tuoi == 15;
    });
  }
  find2() {
    return this.listHS.filter(function (b) {
      return b.tuoi == 18 && b.quequan == "Hà Nội";
    });
  }
}

const trung = new Student("12", "Trung", 20, "Hà Nội");
const van = new Student("10", "Vân", 18, "Thanh Hoá");
const duy = new Student("10", "Duy", 18, "Hà Nội");
const trang = new Student("12", "Trang", 20, "Bắc Ninh");
const dung = new Student("7", "Dũng", 15, "Nghệ An");

const addHS = new Lop();
addHS.add(trung);
addHS.add(van);
addHS.add(duy);
addHS.add(trang);
addHS.add(dung);

trung.info();
console.log(addHS);
console.log(addHS.find1());
console.log(addHS.find2());

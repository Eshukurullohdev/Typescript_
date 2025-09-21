// let ism: string = "Ali";
// let yosh: number = 20;
// console.log(`Salom, men ${ism}, yoshim ${yosh}`);
const btn = document.getElementById("myBtn");
// btn?.addEventListener("click", () => {
//     alert("Uddaladim")
// })
import { kvadrat, kub } from "./math.js";
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    console.log("5 ning kvadrati", kvadrat(5));
    console.log("3 ning kubi", kub(3));
    alert("Natijalarni logda kor");
});

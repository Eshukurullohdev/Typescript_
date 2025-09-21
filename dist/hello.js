"use strict";
// let ism: string = "Ali";
// let yosh: number = 20;
// console.log(`Salom, men ${ism}, yoshim ${yosh}`);
// const btn = document.getElementById("myBtn")
// // btn?.addEventListener("click", () => {
// //     alert("Uddaladim")
// // })
// import { kvadrat, kub } from "./math.js";
// btn?.addEventListener("click", () => {
//     console.log("5 ning kvadrati", kvadrat(5));
//     console.log("3 ning kubi", kub(3));
//     alert("Natijalarni logda kor")
// })
const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
btn.addEventListener("click", () => {
    const matn = input.value.trim();
    if (matn == "") {
        alert("❌ Iltimos, vazifa kiriting!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = matn;
    list.appendChild(li);
    input.value = "";
});

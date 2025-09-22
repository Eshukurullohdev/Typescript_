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
// const input = document.getElementById("taskInput") as HTMLInputElement;
// const btn = document.getElementById("addBtn") as HTMLElement;
// const list = document.getElementById("taskList") as HTMLElement;
// btn.addEventListener("click", () => {
//     const matn = input.value.trim()
//     if (matn == "") {
//         alert("❌ Iltimos, vazifa kiriting!")
//         return
//     }
//     const li = document.createElement("li")
//     li.textContent = matn
//     list.appendChild(li)
//     input.value = ""
// })
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (name.length < 3) {
        errorMsg.textContent = "❌ Ism kamida 3 ta belgidan iborat bolish kerak";
        return;
    }
    if (!email.includes("@")) {
        errorMsg.textContent = "❌ Email notogri";
        return;
    }
    if (password.length < 6) {
        errorMsg.textContent = "❌ Parol kamida 6 ta beldigan iborat bolish kerak";
        return;
    }
    alert("✅ Form muvaffaqiyatli yuborildi");
    form.reset();
});

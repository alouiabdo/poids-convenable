let cm = document.querySelector("#cm")
let age = document.querySelector("#age")
let checkbox1 = document.getElementById("checkbox1")
let checkbox2 = document.querySelector("#checkbox2")
let checkbox3 = document.querySelector("#checkbox3")
let button = document.querySelector("button")
let divAnswer = document.querySelector("#answer")

button.addEventListener("click",function (){
let cmValue = cm.value
let ageValue = age.value
if(cmValue !==""&&ageValue !==""&&checkbox1.checked){
divAnswer.innerHTML = `
<h4>${(cmValue - 100 + ageValue / 10)*0.9}kg</h4>
<h4>Votre poids idéal</h4>
<h4>selon la formule de monnerotdumaine</h4>
<h4>${(cmValue - 100 + ageValue / 10)*0.9*0.9}kg</h4>
<h4>Votre poids limite</h4>
<h4>à partir duquel il devient excessif</h4>
<h4>La formule de Creff</h4>
<p>Poids idéal (en Kg) d’un individu possédant une morphologie « moyenne » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « mince » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « large » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 1,1.</p>
`
localStorage.setItem("kg",(cmValue - 100 + ageValue / 10)*0.9*0.9);
localStorage.setItem("kg1",(cmValue - 100 + ageValue / 10)*0.9)
}else if(cmValue !==""&&ageValue !==""&&checkbox2.checked){
divAnswer.innerHTML = `
<h4>${(cmValue - 100 + ageValue / 10)*0.9}kg</h4>
<h4>Votre poids idéal</h4>
<h4>selon la formule de monnerotdumaine</h4>
<h4>${(cmValue - 100 + ageValue / 10)*0.9*0.9}kg</h4>
<h4>Votre poids limite</h4>
<h4>à partir duquel il devient excessif</h4>
<h4>La formule de Creff</h4>
<p>Poids idéal (en Kg) d’un individu possédant une morphologie « moyenne » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « mince » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « large » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 1,1.</p>
`
localStorage.setItem("kg",(cmValue - 100 + ageValue / 10)*0.9*0.9)
localStorage.setItem("kg1",(cmValue - 100 + ageValue / 10)*0.9)
}else if(cmValue !==""&&ageValue !==""&&checkbox3.checked){
divAnswer.innerHTML = `
<h4>${(cmValue - 100 + ageValue / 10)*0.9}kg</h4>
<h4>Votre poids idéal</h4>
<h4>selon la formule de monnerotdumaine</h4>
<h4>${(cmValue - 100 + ageValue / 10)*0.9*0.9}kg</h4>
<h4>Votre poids limite</h4>
<h4>à partir duquel il devient excessif</h4>
<h4>La formule de Creff</h4>
<br><br>
<p>Poids idéal (en Kg) d’un individu possédant une morphologie « moyenne » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « mince » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « large » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 1,1.</p>
`
localStorage.setItem("kg",(cmValue - 100 + ageValue / 10)*0.9*0.9)
localStorage.setItem("kg1",(cmValue - 100 + ageValue / 10)*0.9)
}
})
if(localStorage.length>1){
          divAnswer.innerHTML = `
<h4>${localStorage.getItem("kg1")}kg</h4>
<h4>Votre poids idéal</h4>
<h4>selon la formule de monnerotdumaine</h4>
<h4>${localStorage.getItem("kg")}kg</h4>
<h4>Votre poids limite</h4>
<h4>à partir duquel il devient excessif</h4>
<h4>La formule de Creff</h4>
<br><br>
<p>Poids idéal (en Kg) d’un individu possédant une morphologie « moyenne » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « mince » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 0,9.<br>
Poids idéal (en Kg) d’un individu possédant une morphologie « large » = (Taille (en cm) – 100 + Age (en années) / 10 ) * 0,9 * 1,1.</p>
`
}
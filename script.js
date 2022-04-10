
let result = document.getElementById('result');
let lang = document.getElementById('lang');
let button = document.querySelector("button")

function translateRun() {
   let text = document.getElementById('text');
   let fulldata = ''
   let textToTranslate = text.value;
   let langToTranslate = lang.value;
   fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${langToTranslate}&dt=t&q=` + textToTranslate)
      .then(res => res.json())
      .then(data => {
         if(data[0]) {
            for (let i = 0; i < data[0].length; i++) {
               fulldata += data[0][i][0];
               result.value = fulldata;
            }
         }
      });
      if (text.value == '') {
         result.value = '';
      }
}

function changeLanguage() {
   result.value = '';
   translateRun();
}

button.addEventListener("click", function (e) {
   document.body.classList.toggle("active")
   lang.classList.toggle("active")
   button.classList.toggle("active")
})
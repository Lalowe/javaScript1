document.getElementById("demo").innerText = "My name is Vladimir"; // alebo innerHTML = "My name is Vladimir"; - pouzijes ked beres z bootstrapu napr.,ak mas len text tak innertext!
// preto takto lebo z toho dokumentu ho selektujes a getelement slektuje podla demo hasthagu
console.log(document.getElementsByClassName("content")) // elementS zaruci to ze hned to da do Array !
console.log(document.getElementsByClassName("content")[0].innerHTML = '<h1>Hello World</h1>'; // elementS zaruci to ze hned to da do Array !
        document.querySelector(".content").style.color = "red"; // SelectorAll selekt viac elementov , bez ALL len jeden [0]prvu klassu napr oznacim , alebo [1] druhy element s tou klasou !!
        document.querySelectorAll(".content")[0].setAttribute("id", "test");


        let arr = ["Vladimir", "Vlado", "Lalo"]; // i++  , i+=1 , i = i +1 ,

        for (let i = 0; i < arr.length; i++) { // znamenzna 0 ze zacina od zaciatku arrayu
            document.getElementsByClassName("content")[1].innerHTML += `<p class="text-succes">  ${arr[i]} </p>`;
        }
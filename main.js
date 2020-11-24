const codeButton = document.getElementById("typeCode");
let code;
let language;
let startIndex = 0;
let endIndex = 0;
let rate;
codeButton.addEventListener("click", () => {
    language = document.getElementById("language").value;
    code = document.getElementById("code").value;
    rate = document.getElementById("rate").value;
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "black";
    const codeDiv = document.createElement("div");
    codeDiv.innerHTML = `
    <pre><code class="language-${language.toLowerCase()}">${Prism.highlight(code.slice(startIndex, endIndex), Prism.languages[language.toLowerCase()], language.toLowerCase())}</code></pre>
    `
    document.body.addEventListener("keydown", () => {
        endIndex += 2 + Math.floor(Math.random() * 3) * rate;
        codeDiv.innerHTML = `
    <pre><code class="language-${language.toLowerCase()}">${Prism.highlight(code.slice(startIndex, endIndex), Prism.languages[language.toLowerCase()], language.toLowerCase())}</code></pre>
    `
        codeDiv.scrollIntoView(false);
    })
    document.body.appendChild(codeDiv);
})
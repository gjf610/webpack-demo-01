import x from './x'
import svg from './assets/logo-black.svg'
console.log(svg);
const div = document.getElementById('app')
div.innerHTML = `
<img src="${svg}">
`
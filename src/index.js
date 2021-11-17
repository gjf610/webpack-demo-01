import x from './x'
import svg from './assets/logo-black.svg'
console.log(svg);
const div = document.getElementById('app')
div.innerHTML = `
<img src="${svg}">
`

const button = document.createElement('button')

button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy');
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {

    });
}

div.appendChild(button)
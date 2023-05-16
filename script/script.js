const block = document.querySelector('.block');
console.log(block);
function giveRandomcolar() {
    let col1 = Math.floor((Math.random() * 226) * 1);
    let col2 = Math.floor((Math.random() * 226) * 1);
    let col3 = Math.floor((Math.random() * 226) * 1);
    let colar = `rgb(${col1},${col2},${col3})`;
    console.log(colar);
    return colar;
}

setInterval(() => {
    let maxWidt = (window.innerWidth - 110);
    console.log(maxWidt);
    let maxHeight = (window.innerHeight - 110);
    let right = Math.floor((Math.random() * (maxWidt)) * 1);
    let top = Math.floor((Math.random() * (maxHeight)) * 1);
    block.style.left = right + 'px';
    block.style.top = top + 'px';
    block.style.backgroundColor = giveRandomcolar();

}, 1000);


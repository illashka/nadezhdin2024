let i = 0;
let votes = document.getElementsByClassName('progressbar__el__text');
let sum = 0;

for (i of votes){
    if (i.textContent.slice(18) != 'ба'){
        sum = sum + parseInt(i.textContent.slice(23))/2}}

console.log('Количество подписей у Надеждина: ' + sum);

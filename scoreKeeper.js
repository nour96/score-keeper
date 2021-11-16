const selectScore = document.querySelector('#selectScore');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const h2 = document.querySelector('h2');

let score1 = 0;
let score2 = 0;


/*p1.addEventListener('click', () => {
    if (score !== null) {

        alert('PLease pick what you want to play up to..')
        console.log('Hey')
    }
})
p2.addEventListener('click', () => {
    if (score === null)
        alert('PLease pick what you want to play up to..')
})
*/
selectScore.addEventListener('change', (event) => {
    const score = selectScore.value;
    console.log(score + "chosen score");

    if (!score) {
        h2.innerText = "0 to 0";
    } else {
        p1.addEventListener('click', () => {
            if (score1 < score && score2 < score) {
                score1++;
                console.log(score1, "score1")
                h2.innerText = `${score1} to ${score2}`;
            }
            /*else {
                p1.style.backgroundColor = 'gray';
                p2.style.backgroundColor = 'gray';
            }*/
        })
        p2.addEventListener('click', () => {
            if (score1 < score && score2 < score) {
                score2++;
                console.log(score2, "score2")
                h2.innerText = `${score1} to ${score2}`;
            }
            /*else {
                p1.style.backgroundColor = 'gray';
                p2.style.backgroundColor = 'gray';
            }*/
        })

    }

});

reset.addEventListener('click', () => {
    h2.innerText = "0 to 0";
    selectScore.options.selectedIndex = 0;
    const score = selectScore.value;
    score1 = 0;
    score2 = 0;
    console.log(`Resest ${score1} , ${score2}`);
})
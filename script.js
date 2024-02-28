const btn = document.querySelector('.submit')
const card1 = document.querySelector('.main');
const card2 = document.querySelector('.main-thank-you');
// rating-box


let ratingVal = 0;

function activate(n){
    // console.log(ratingVal);
    const ratingBox = document.querySelectorAll('.rating-box');
ratingBox.forEach((box)=>{
    if (box.classList.contains('bg-color')){
        box.classList.remove('bg-color')
    }
})
    let id = 'rating-box-'+n;
    const boxId = document.getElementById(id);
    boxId.classList.add('bg-color');

    ratingVal = n;
    // console.log(ratingVal);
}

btn.addEventListener('click',()=>{
    card1.classList.add('hide-me');

    const span = document.getElementById('rating-val');

    span.append(ratingVal);

})


const feedbackForm = document.querySelector('.feedbackForm');
const fullName = document.querySelector('.fullName');
const emailID = document.querySelector('.email-address');
const whatImp = document.querySelector('.whatImprovement');
const howImp = document.querySelector('.howImp');
const submit = document.querySelector('.submitForm');
const modal = document.querySelector('.modal-wrap');
const close = document.querySelector('.closeModal');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('feedbackForm').doc().set({
        fullName: fullName.value,
        emailID: emailID.value,
        whatImp: whatImp.value,
        howImp: howImp.value
    }).then(()=>{
        feedbackForm.reset();
        modal.display();
    })
})

close.addEventListener('click', ()=>{
    modal.classList.toggle('display-none');
})

    let signupform = document.querySelector(".signup-wrap");
    let signupBtn = document.querySelector('#signupBtn');
    let submitBtn = document.querySelector('.signup-btn');
    signupBtn.onclick = () => {
        signupform.classList.toggle("active");
    }

submitBtn.onclick = () => {
    signupform.classList.remove("active");
}
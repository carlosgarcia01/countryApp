const btnDark = document.querySelector(".btn-dark-mode");

btnDark.addEventListener('click', ()=>{
    console.log('object');
    document.body.classList.toggle('dark-theme');

    if(document.body.className === 'dark-theme'){
        btnDark.innerHTML = `
        <i class="far fa-sun"></i>
        Light Mode
    `;

    }else{
        btnDark.innerHTML = `
            <i class="far fa-moon"></i>
            Dark Mode
        `;
    }
})
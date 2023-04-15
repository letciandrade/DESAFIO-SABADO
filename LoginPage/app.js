// const btnCadastro = document.getElementById('signUp')
// const telaCadastro = document.getElementById('form-container')


// btnCadastro.addEventListener('click',()=>{

//     if(telaCadastro.style.display === 'block'){
//         telaCadastro.style.display = 'none';
//     }
//     else{
//         telaCadastro.style.display = 'block';
        
//     }
// })

//falecido codigo que tentei.

const signInButton = document.getElementById('signIn')
const signUpButton = document.getElementById('signUp')
const container = document.getElementById('container')

signUpButton.addEventListener('click',()=>{
    container.classList.add('right-panel-active')
});

signInButton.addEventListener('click',()=>{
    container.classList.remove('right-panel-active')
});


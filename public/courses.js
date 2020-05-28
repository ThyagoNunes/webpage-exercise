const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-course')

for( let card of cards ){
    card.addEventListener('click', function(){
        const courseId = card.getAttribute("id");
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
    
    if(modalOverlay.classList.contains('active') == true ){
        modalOverlay.querySelector('.maximize-modal').addEventListener('click', function(){
            modalOverlay.classList.add('maximize');
        })
    }

    if(modalOverlay.classList.contains('active') == true ){
        modalOverlay.querySelector('.minimize-modal').addEventListener('click', function(){
            modalOverlay.classList.add('minimize');
        })
    }
    
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximize');
    modalOverlay.classList.remove('minimize');
})

document.querySelector('.maximize-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('minimize'); 
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximize');
})

document.querySelector('.minimize-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
    modalOverlay.classList.remove('maximize');
    modalOverlay.classList.remove('minimize');
})
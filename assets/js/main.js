const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log( prev, next )

next.addEventListener( 'click', function(){
    
    
    let activeItem = document.querySelector('.item.active')
    console.log( activeItem )

    let itemToActive = activeItem.nextElementSibling
    console.log( itemToActive )

    if( activeItem.classList.contains('last') ){
        itemToActive = document.querySelector('.item.first')
    }

    activeItem.classList.remove('active')

    
    itemToActive.classList.add('active')

})

prev.addEventListener( 'click', function(){
    
    let activeItem = document.querySelector('.item.active')
    console.log( activeItem )

    let itemToActive = activeItem.previousElementSibling
    console.log( itemToActive )

    if( activeItem.classList.contains('first') ){
        itemToActive = document.querySelector('.item.last')
    }

    
    activeItem.classList.remove('active')
    

    itemToActive.classList.add('active')

})


console.log( document.querySelectorAll('.item.last, .prev') )
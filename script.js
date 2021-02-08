const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', () => {
        // console.log('drag started')
        draggable.classList.add('dragging')
    })
});


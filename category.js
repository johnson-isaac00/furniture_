const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%'
}

// $(document).ready(function(){

//     $('.buttons').click(function(){

//         $(this).addClass('active').siblings().removeClass('active');

//         var filter = $(this).attr('data-filter');

//         if(filter == 'all'){
//             $('.image').show(400); 
//         }else{
//             $('.image').not('.'+filter).hide(200);
//             $('.image').filter('.'+filter).show(400);
//         }

//     });

// });


let bedRoom = document.querySelectorAll('.bed-room');
let kitchen = document.querySelectorAll('.kitchen');
let livingRoom = document.querySelectorAll('.living-room');
let allButton = document.querySelector('.all');
let livingRoomButton = document.querySelector('.living-room1')
let bedRoomButton = document.querySelector('.bed-room1');
let kitchenButton = document.querySelector('.kitchen1');
let imageContainer = document.querySelector('.image-container')
let bedRoomDiv = document.querySelector('.bed-roomdiv');
let kitchenDiv = document.querySelector('.kitchen-div');
let livingRoomDiv = document.querySelector('.living-roomdiv');



let showLivingRoom = () => {
    let livingRoomContainer =  document.createElement('div');
    livingRoomContainer.setAttribute('class','living-roomdiv')
    livingRoom.forEach((room)=> {
        livingRoomContainer.appendChild(room)
    })
    imageContainer.append(livingRoomContainer)
}  

let showBedRoom = () => {
    let bedRoomContainer =  document.createElement('div');
    bedRoomContainer.setAttribute('class','bed-roomdiv')
    bedRoom.forEach((room)=> {
        bedRoomContainer.appendChild(room)
    })
    imageContainer.append(bedRoomContainer)
} 

let showKitchen = () => {
    let kitchenContainer =  document.createElement('div');
    kitchenContainer.setAttribute('class','kitchen-div')
    kitchen.forEach((room)=> {
        kitchenContainer.appendChild(room)
    })
    imageContainer.append(kitchenContainer)
} 


livingRoomButton.addEventListener('click', (ev) => {
    imageContainer.innerHTML = ''
    showLivingRoom()
})

allButton.addEventListener('click',(ev) => {
    showLivingRoom();
    showBedRoom();
    showKitchen();

})

bedRoomButton.addEventListener('click', (ev) => {
    imageContainer.innerHTML = ''
    showBedRoom();
})

kitchenButton.addEventListener('click', (ev) => {
    imageContainer.innerHTML = ''
    showKitchen();
})



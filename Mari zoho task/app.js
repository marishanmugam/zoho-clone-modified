let popup = document.querySelector('.popup-container');
let cl = document.querySelector('.close')
let newCl = document.querySelector('.close-new');
let newPopup = document.querySelector('.new-vechile-entry')

cl.addEventListener('click',()=>{
    popup.classList.remove('popup-show');
    
})

newCl.addEventListener('click',()=>{
    newPopup.classList.remove('new-vechile-entry-popup')
})

const show = () => {
    popup.classList.add('popup-show');
}

const showNew = () => {
    newPopup.classList.add('new-vechile-entry-popup');
}

let tollName = document.querySelector('#toll_name');
let  carJeepVan = document.querySelector('#car-jeep-van');
let carSingleJourney = document.querySelector('#car-single-journey');
let carReturnJourney = document.querySelector('#car-return-journey');

let lcv = document.querySelector('#lcv');
let lcvSingleJourney = document.querySelector('#lcv-single-journey');
let lcvReturnJourney = document.querySelector('#lcv-return-journey');

let truck = document.querySelector('#truck');
let truckSingleJourney = document.querySelector('#truck-single-journey');
let truckReturnJourney = document.querySelector('#truck-return-journey');

let heavy = document.querySelector('#heavy');
let heavySingleJourney = document.querySelector('#heavy-single-journey');
let heavyReturnJourney = document.querySelector('#heavy-return-journey');



window.addEventListener('load',()=>{
    var toll_name = JSON.parse(localStorage.getItem('toll')) || [];
    let tolls = document.querySelector('.toll-name');

    tolls.addEventListener('submit',(e)=>{
        e.preventDefault();
    if(toll_name.value === '' && carJeepVan.value === '' && carSingleJourney.value === '' && carReturnJourney.value === '' &&
        lcv.value === '' && lcvSingleJourney.value === '' && lcvReturnJourney.value === '' &&
        truck.value === '' && truckReturnJourney.value === '' && truckReturnJourney.value === '' &&
        heavy.value === '' && heavySingleJourney.value === '' && heavyReturnJourney.value === '' )
    {
        alert('All fileds are required')
    }
    else
    {    
        let tolls = {
            toolsName : {
                city : tollName.value,
                vechileType : {
                    type1 : carJeepVan.value,                
                    type2 :lcv.value,
                    type3 : truck.value,
                    type4 : heavy.value,
                },
                prices : {
                 carjeepvan : {
                     star :carSingleJourney.value,
                     end :carReturnJourney.value,
                 },
                 lcv : {
                     start :lcvSingleJourney.value,
                     end :lcvReturnJourney.value,
                 } , 
                 truckbus : {
                     start :truckSingleJourney.value,
                     end : truckReturnJourney.value,
                 },
         
                 heavy : {
                     start : heavySingleJourney.value,
                     end : heavyReturnJourney.value,
                 },
         
                }
            }
         }
        toll_name.push(tolls);
        localStorage.setItem('toll',JSON.stringify(toll_name));
        e.target.reset();
        popup.classList.remove('popup-show');
        displayTolls();
    }

    })
    displayTolls();
})


const displayTolls =  () => {
    let tollsList = document.querySelector('.tolls-list');
    let tollshtml = '';

    toll_name.map((item)=> {
        tollshtml += `
                    <tr>
                    <td>${item.to}</td>
                    </tr>             
        ` 
    })
}

const close = () => {
    popup.classList.remove('poup-show')
    newPopup.classList.remove('new-vechile-entry-popup')
}



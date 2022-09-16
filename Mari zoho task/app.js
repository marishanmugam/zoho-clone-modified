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

let selectToll = document.querySelector('#select-tolls');

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
    tollsName = JSON.parse(localStorage.getItem('toll')) || [];
    let tolls = document.querySelector('.toll-name');

    tolls.addEventListener('submit',(e)=>{
        e.preventDefault();
    // if(tollName.value === '' && carJeepVan.value === '' && carSingleJourney.value === '' && carReturnJourney.value === '' &&
    //     lcv.value === '' && lcvSingleJourney.value === '' && lcvReturnJourney.value === '' &&
    //     truck.value === '' && truckReturnJourney.value === '' && truckReturnJourney.value === '' &&
    //     heavy.value === '' && heavySingleJourney.value === '' && heavyReturnJourney.value === '' )
    // {
    //     alert('All fileds are required')
    // }
    // else
    // {    
        let tolls = {
            toolsName : {
                city : tollName.value ,
                vechileType : {
                    type1 : carJeepVan.value,                
                    type2 :lcv.value,
                    type3 : truck.value,
                    type4 : heavy.value,
                },
                prices : {
                 carjeepvan : {
                     start :carSingleJourney.value,
                     end :carReturnJourney.value,
                 },
                 LCV : {
                     start :lcvSingleJourney.value,
                     end :lcvReturnJourney.value,
                 } , 
                 TruckBus : {
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
        tollsName.push(tolls);
        localStorage.setItem('toll',JSON.stringify(tollsName));
        e.target.reset();
        popup.classList.remove('popup-show');
        
        displayTolls();
    })
    
    displayTolls();
    // gettling tolls location for new vechile entry
    tollsName.map((data)=>{
        var option = document.createElement('option');
        option.innerHTML = `${data.toolsName.city}`;
        option.value = `${data.toolsName.city}`;
        selectToll.appendChild(option);
    })
})

const displayTolls =  () => {
    let tollsList = document.querySelector('.tolls-list');
    let tollshtml = '';

    // toll_name.map((item)=> {
    //     tollshtml += `
    //                 <tr>
    //                 <td>${item.to}</td>
    //                 </tr>             
    //     ` 
    // })
}

const close = () => {
    popup.classList.remove('poup-show')
    newPopup.classList.remove('new-vechile-entry-popup')
}


// tollsName.foreach((data){
//     let newEntryVechile ='';
//     newEntryVechile += `<option value=${data.tollName.city}>${data.tollName.city}</option>`
// })

const addVechile = () => {
       
        let tollsName = JSON.parse(localStorage.getItem('toll'));
        newVechiles = JSON.parse(localStorage.getItem('VechileList')) || [];

        addNewVechile = document.querySelector('#add-new-vechile');
        // getting time
        let date = new Date();
        hh = date.getHours(), mm = date.getMinutes() , ss = date.getSeconds();
        currentDateTIme = hh +':'+ mm +':'+ ss;
    
        // getting time
        dd = String(date.getDate()).padStart(2,'0');
        mm = String (date.getMonth() + 1).padStart(2,'0');
        yyyy = date.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
    
        vechileNumber = document.querySelector('#vechile-number');
        
        vechileNumberVal = vechileNumber.value;
        console.log(vechileNumber.value);
        
        let selectVechile = document.querySelector('#select-tolls');
    
        selectVechile.addEventListener('change',()=>{
            selVeVal = selectVechile.value;
       
           tollsName.map((it)=>{
            if(selVeVal === it.toolsName.city) {
             
                let newEntryVechile = document.querySelector('#new-entry-vechile');
                newEntryVechile.addEventListener('change',()=>{
                     NewVechileType = newEntryVechile.value;
                    
                     let tariff = document.querySelector('#tarriff')
                     switch(NewVechileType)
                     {
                         case 'carjeepvan' :
                             {
                                tariff.value = it.toolsName.prices.carjeepvan.start;
                                break;
                            }
                        case 'lcv':
                            {   
                               
                                tariff.value = it.toolsName.prices.LCV.start;
                                break;
                            } 
                        case 'truckbus':
                            {
                               
                                tariff.value = it.toolsName.prices.TruckBus.start;
                                break;
                            }   
                        case 'heavy' :
                            {
                                
                                tariff.value = it.toolsName.prices.heavy.start;
                                break;
                            }    
                        }

                        let newVechilslist = {
                            vechiletypelist : NewVechileType,
                            newVechileNumber : vechileNumberVal ,
                            newVechileToll : selVeVal ,
                            dateTime : today+ ' ' +currentDateTIme ,
                            newTollName : selVeVal,
                            tariff : tariff.value,
                        }
                        newVechiles.push(newVechilslist);
                        localStorage.setItem('VechileList',JSON.stringify(newVechiles));
                }) 
            }
        })      
    }) 

}
let submitBtn = document.querySelector('#submitbtn');
submitBtn.addEventListener('submit',addVechile());

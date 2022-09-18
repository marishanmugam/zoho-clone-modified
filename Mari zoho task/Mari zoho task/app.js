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
    newVechiles = JSON.parse(localStorage.getItem('VechileList')) || [];
    
    let tolls = document.querySelector('.toll-name');
    // localStorage.removeItem('VechileList')
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

//on changing vechile type it selectiing toll amount based on therir entry
document.querySelector('#new-entry-vechile').addEventListener('change',()=>{
    let tollValue = document.querySelector('#select-tolls').value;
    let vechileValue = document.querySelector('#new-entry-vechile').value;
    let tariff = document.querySelector('#tarriff').value;
    let vechileNumber = document.querySelector('#vechile-number').value;

     // getting time
     let date = new Date();
     hh = date.getHours(), mm = date.getMinutes() , ss = date.getSeconds();
     currentDateTIme = hh +':'+ mm +':'+ ss;
 
     // getting time
     dd = String(date.getDate()).padStart(2,'0');
     mm = String (date.getMonth() + 1).padStart(2,'0');
     yyyy = date.getFullYear();
     today = dd + '/' + mm + '/' + yyyy;

        hh1 = date.getHours() + 1;
        mm1 = date.getMinutes();
        ss1 = date.getSeconds();
        expiry =today + ' '+hh1 +':' + mm1 + ':' + ss1;
   
        let tollsName = JSON.parse(localStorage.getItem('toll'));
        let newVechiles = JSON.parse(localStorage.getItem('VechileList')) || [];

        tollsName.map((it)=>{
            if(tollValue === it.toolsName.city) {
                switch(vechileValue)
                {
                    case 'Car/Jeep/Van':
                        {
                            console.log("Car/Jeep/Van", tollValue, newVechiles);
                           let tariffAmount = it.toolsName.prices.carjeepvan.start;
                            
                            if( newVechiles.length > 0 ) {
                                newVechiles.map((item) =>{
                                    if(item.newVechileNumber === vechileNumber  && item.dateTime <= expiry)
                                    {
                                        tariffAmount = it.toolsName.prices.carjeepvan.end;   
                                        console.log(tariff);
                                    }
                                    else
                                    {
                                        console.log("else");
                                        tariffAmount = it.toolsName.prices.carjeepvan.start;
                                        console.log(tariff);

                                    }   
                                }) 
                            }
                            document.querySelector("#tarriff").value = tariffAmount;
                            break;
                    }
                case 'LCV':
                    {   
                        let tariffAmount = it.toolsName.prices.LCV.start;
                        if(newVechiles.length > 0 ) {
                            newVechiles.map((item) =>{
                                if(item.newVechileNumber  ===  vechileNumber && item.dateTime <= expiry)
                                {
                                    tariffAmount = it.toolsName.prices.LCV.end;
                                    console.log(tariff);

                                }
                                else
                                {
                                    tariffAmount = it.toolsName.prices.LCV.start;
                                    console.log(tariff);

                                }
                            })
                         }
                         
                        document.querySelector("#tarriff").value = tariffAmount;
                        break;
                    } 
                case 'Truck/Bus':
                    {
                        let tariffAmount = it.toolsName.prices.TruckBus.start;
                        if (newVechiles.length > 0 )
                        {
                            newVechiles.map((item) =>{
                                if(item.newVechileNumber ===  vechileNumber && item.dateTime <= expiry)
                                    {
                                        tariffAmount = it.toolsName.prices.TruckBus.end;
                                        console.log(tariff);

                                    }
                                    else
                                    {
                                        tariffAmount = it.toolsName.prices.TruckBus.start;
                                        console.log(tariff);

                                    }
                                })
                        }
                        
                        document.querySelector("#tarriff").value = tariffAmount;
                        break;
                    }   
                case 'Heavy Vechiles' :
                    {
                        let tariffAmount =  it.toolsName.prices.heavy.start;

                        if(newVechiles.length > 0 ) {
                            newVechiles.map((item) =>{
                                if(item.newVechileNumber ===  vechileNumber && item.dateTime <= expiry)
                                    {
                                        tariffAmount = it.toolsName.prices.heavy.end;
                                        console.log(tariff);
                                    }
                                    else
                                    {
                                        tariffAmount = it.toolsName.prices.heavy.start;
                                        console.log(tariff);
                                    }
                                })
                            }
                                
                        document.querySelector("#tarriff").value = tariffAmount;
                        break;
                    }    
                }
            }
        })
}) 

let submitBtn = document.querySelector('#submitbtn');
submitBtn.addEventListener('click',()=>{
    let newVechilslist = {
        vechiletypelist : document.querySelector('#new-entry-vechile').value,
        newVechileNumber : document.querySelector('#vechile-number').value  ,
        dateTime : today+ ' ' +currentDateTIme ,
        newTollName : document.querySelector('#select-tolls').value,
        tariff : document.querySelector("#tarriff").value,
    }
    newVechiles.push(newVechilslist);
    localStorage.setItem('VechileList',JSON.stringify(newVechiles));
})

// display all vechiles entry
const displayAllVechiles = () =>{
    let newVechiles = JSON.parse(localStorage.getItem('VechileList')) || []; 
    
    let vechilesList = document.querySelector('.allvechile-list');
    allVechilesList = '';
    newVechiles.map((item)=>{
        allVechilesList += `<tr>
                                <td>${item.vechiletypelist}</td>
                                <td>${item.newVechileNumber}</td>
                                <td>${item.dateTime}</td>
                                <td>${item.newTollName}</td>
                                <td>${item.tariff}</td>
                            </tr>`
                        })
        vechilesList.innerHTML = allVechilesList
}

displayAllVechiles();


// searching data in table
const  searchTable = () => {
        // Declare variables
        
        let input = document.querySelector('#search-vechile');
        let filter = input.value.toUpperCase();
        let tBody = document.querySelector('.allvechile-list')
        let trlist = tBody.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < trlist.length; i++) {
          td = trlist[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              trlist[i].style.display = "";
            } else {
                trlist[i].style.display = 'none';            }
          }
        }
      }


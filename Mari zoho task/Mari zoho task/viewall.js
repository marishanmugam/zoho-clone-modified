const displayAllTools = () =>{
    
    
    toolsName = JSON.parse(localStorage.getItem('toll'))
    


    let allTolls = document.querySelector('.viewall-tolls-list');
    alltolls = '';
    toolsName.map((alltolldata,index)=>{
        alltolls +=  `<tr>
                        <td>${alltolldata.toolsName.city}</td>
                        <td>${alltolldata.toolsName.prices.carjeepvan.start}/${alltolldata.toolsName.prices.carjeepvan.end}</td>
                        <td>${alltolldata.toolsName.prices.LCV.start}/${alltolldata.toolsName.prices.LCV.end}</td>
                        <td>${alltolldata.toolsName.prices.TruckBus.start}/${alltolldata.toolsName.prices.TruckBus.end}</td>
                        <td>${alltolldata.toolsName.prices.heavy.start}/${alltolldata.toolsName.prices.heavy.end}</td>
                        <td><input type='button' value='Delete Toll' onclick="delToll(${index})"></td>
                      </tr>`


                 })
                 allTolls.innerHTML = alltolls;
}

const delToll = (index) =>{
    toolsName.splice(index,1)
    localStorage.setItem('toll',JSON.stringify(toolsName));
    displayAllTools();
}
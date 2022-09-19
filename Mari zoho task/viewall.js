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

// searching data in table
const  searchTable = () => {
    let input = document.querySelector('#search-toll');
    let filter = input.value.toUpperCase();
    let tBody = document.querySelector('.viewall-tolls-list')
    let trlist = tBody.getElementsByTagName("tr");
    // Loop through all table rows
    for (i = 0; i < trlist.length; i++) 
        {
          td = trlist[i].getElementsByTagName("td")[0];
           if (td) 
           {
             txtValue = td.textContent || td.innerText;
             if (txtValue.toUpperCase().indexOf(filter) > -1)
            {
              trlist[i].style.display = "";
            } 
            else 
             {
                trlist[i].style.display = 'none';            
            }
        }
    }
}
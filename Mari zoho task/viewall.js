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
  let curIndex = index;
  let delList = JSON.parse(localStorage.getItem('toll'));
  for(var i = 0 ; i < delList.length ;i++)
  {
    console.log(curIndex);
    if(curIndex === index)
    {
      console.log(curIndex === index); 
      delList[i].isDeleted = true;
    }
  }

  
  localStorage.setItem('toll',JSON.stringify(delList));
  // if(curIndex === index)
  //  console.log('current index') 
  //  else 
  //  console.log('no index'); 
  //   // toolsName.splice(index,1)
  //   // localStorage.setItem('toll',JSON.stringify(toolsName));
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
          td = trlist[i].getElementsByTagName("td")
          for(j = 0; j < td.length; j++)
          {
            if(td[j].innerHTML.toUpperCase().indexOf(filter) > -1)
            {
              var found = true;
            }
          }
          if(found) {
            trlist[i].style.display = '';
            found = false;
          }
          else {
            trlist[i].style.display = 'none';
          }
        }
}
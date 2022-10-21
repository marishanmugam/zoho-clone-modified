[1mdiff --git a/Mari zoho task/app.js b/Mari zoho task/app.js[m
[1mindex 680e078..f67e274 100644[m
[1m--- a/Mari zoho task/app.js[m	
[1m+++ b/Mari zoho task/app.js[m	
[36m@@ -137,6 +137,7 @@[m [mdocument.querySelector('#new-entry-vechile').addEventListener('change',()=>{[m
    [m
         let tollsName = JSON.parse(localStorage.getItem('toll'));[m
         let newVechiles = JSON.parse(localStorage.getItem('VechileList')) || [];[m
[32m+[m[32m        var flag = false;[m[41m[m
 [m
         tollsName.map((it)=>{[m
             if(tollValue === it.toolsName.city) {[m
[36m@@ -149,13 +150,15 @@[m [mdocument.querySelector('#new-entry-vechile').addEventListener('change',()=>{[m
                             [m
                             if( newVechiles.length > 0 ) {[m
                                 newVechiles.map((item) =>{[m
[31m-                                    if(item.newVechileNumber === vechileNumber  && item.dateTime <= expiry)[m
[32m+[m[32m                                    if(item.newVechileNumber === vechileNumber  && flag === true )[m[41m[m
                                     {[m
[31m-                                        tariffAmount = it.toolsName.prices.carjeepvan.end;   [m
[32m+[m[32m                                        tariffAmount = it.toolsName.prices.carjeepvan.end;[m[41m [m
[32m+[m[32m                                        flag = false;[m[41m[m
                                     }[m
                                     else[m
                                     {[m
                                         tariffAmount = it.toolsName.prices.carjeepvan.start;[m
[32m+[m[32m                                       flag = true;[m[41m[m
                                     }   [m
                                 }) [m
                             }[m
[36m@@ -167,13 +170,15 @@[m [mdocument.querySelector('#new-entry-vechile').addEventListener('change',()=>{[m
                         let tariffAmount = it.toolsName.prices.LCV.start;[m
                         if(newVechiles.length > 0 ) {[m
                             newVechiles.map((item) =>{[m
[31m-                                if(item.newVechileNumber  ===  vechileNumber && item.dateTime <= expiry)[m
[32m+[m[32m                                if(item.newVechileNumber  ===  vechileNumber && flag === true)[m[41m[m
                                 {[m
                                     tariffAmount = it.toolsName.prices.LCV.end;[m
[32m+[m[32m                                    flag = false;[m[41m[m
                                 }[m
                                 else[m
                                 {[m
                                     tariffAmount = it.toolsName.prices.LCV.start;[m
[32m+[m[32m                                    flag = true;[m[41m[m
                                 }[m
                             })[m
                          }[m
[36m@@ -186,13 +191,15 @@[m [mdocument.querySelector('#new-entry-vechile').addEventListener('change',()=>{[m
                         if (newVechiles.length > 0 )[m
                         {[m
                             newVechiles.map((item) =>{[m
[31m-                                if(item.newVechileNumber ===  vechileNumber && item.dateTime <= expiry)[m
[32m+[m[32m                                if(item.newVechileNumber ===  vechileNumber && flag === true)[m[41m[m
                                     {[m
                                         tariffAmount = it.toolsName.prices.TruckBus.end;[m
[32m+[m[32m                                        flag = false;[m[41m[m
                                     }[m
                                     else[m
                                     {[m
                                         tariffAmount = it.toolsName.prices.TruckBus.start;[m
[32m+[m[32m                                        flag = true;[m[41m[m
                                     }[m
                             })[m
                         }[m
[36m@@ -205,13 +212,15 @@[m [mdocument.querySelector('#new-entry-vechile').addEventListener('change',()=>{[m
 [m
                         if(newVechiles.length > 0 ) {[m
                             newVechiles.map((item) =>{[m
[31m-                                if(item.newVechileNumber ===  vechileNumber && item.dateTime <= expiry)[m
[32m+[m[32m                                if(item.newVechileNumber ===  vechileNumber && flag === true)[m[41m[m
                                     {[m
                                         tariffAmount = it.toolsName.prices.heavy.end;[m
[32m+[m[32m                                        flag = false;[m[41m[m
                                     }[m
                                     else[m
                                     {[m
                                         tariffAmount = it.toolsName.prices.heavy.start;[m
[32m+[m[32m                                        flag = true;[m[41m[m
                                     }[m
                                 })[m
                             }[m
[36m@@ -231,6 +240,7 @@[m [msubmitBtn.addEventListener('click',()=>{[m
         dateTime : today+ ' ' +currentDateTIme ,[m
         newTollName : document.querySelector('#select-tolls').value,[m
         tariff : document.querySelector("#tarriff").value,[m
[32m+[m[32m        entry:true,[m[41m[m
     }[m
     newVechiles.push(newVechilslist);[m
     localStorage.setItem('VechileList',JSON.stringify(newVechiles));[m

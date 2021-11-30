"use strict";
export function showStaff(foobarData) {
    // console.log(foobarData);
    const staffHolder = document.querySelector("#staff_wrapper");
    const template = document.querySelector(".staff_content").content;
    staffHolder.textContent = "";
    foobarData.forEach((bartenders) => {
      //Måske sætte if (status=== WORKING) så udskrive nedenstående??
      const klon = template.cloneNode(true);
      klon.querySelector(".name").textContent = bartenders.name;
      klon.querySelector(".staff_img").src = `./images/${bartenders.name}.png`;
      klon.querySelector(".ready").style.fill = readyOrNot(bartenders.status);
      klon.querySelector(".status").textContent = bartenders.statusDetail;
      klon.querySelector(".serving_no").textContent = bartenders.servingCustomer;
      staffHolder.appendChild(klon);
    });
  }


  // Ændre farven til grøn hvis bartender er READY
  function readyOrNot(status){
    // console.log(status);
    if(status === "READY"){
        status = "green";
    } 
    return status;
  }


  // Billeder på bartendere
  // Lav mappe med billeder - giv dem navn efter bartenders navn - sæt billede ind ligesom i hogwarts url(`./images/${bartenders.name}.png`)
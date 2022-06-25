document.addEventListener("DOMContentLoaded", function(event) {
   //Create random HP to monster
   let hpPool = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300],
   hpRandom = hpPool[Math.floor(Math.random() * hpPool.length)];
   let hp = hpRandom;
   //---------------------------//
   let damage = 10; // damage inflicted on the monster
   //console log
   var monsterHealth = hp;
   console.log("Monster Health : " + monsterHealth);
   //---------------------------//
   let hpTotal = hp;
   let numHP = document.getElementById('hp').innerHTML = hp + "/" + hpTotal;
   document.getElementById("hpProgress").value = hp;
   document.getElementById("hpProgress").max = hp;
   //On Btn Attack click event
   document.getElementById('btnAttack').addEventListener("click", function(event){
      if(document.getElementById("hpProgress").value != 0)
      {
         numHP = document.getElementById('hp').innerHTML = hp - damage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= damage;
         //console log
         console.log("The monster takes damage : " + damage); 
      }
      else 
      {
         hpRandom = hpPool[Math.floor(Math.random() * hpPool.length)];
         hp = hpRandom;
         monsterHealth = hp;
         //console log
         console.log("Monster Health : " + monsterHealth);
         hpTotal = hp;
         numHP = document.getElementById('hp').innerHTML = hp + "/" + hpTotal;
         document.getElementById("hpProgress").value = hp;
         document.getElementById("hpProgress").max = hp;
         //show message
         alert("Monster in Killed");
         //console log
         console.log("Monster in Killed");
      }
   });
});
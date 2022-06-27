document.addEventListener("DOMContentLoaded", function(event) {
   //Create random HP to monster
   let hpPool = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300],
   hpRandom = hpPool[Math.floor(Math.random() * hpPool.length)];
   let hp = hpRandom;
   //---------------------------//
   let damage = 10; // damage inflicted on the monster
   //console log
   let monsterHealth = hp;
   let killedNumber = document.getElementById("killedNum").innerHTML = 0;
   let monsterBoss = document.getElementById("boss").innerHTML;
   console.log("Monster Health : " + monsterHealth);
   //---------------------------//
   let hpTotal = hp;
   let numHP = document.getElementById('hp').innerHTML = hp + "/" + hpTotal;
   document.getElementById("hpProgress").value = hp;
   document.getElementById("hpProgress").max = hp;
   searchBoss();
   //Search to boss
   function searchBoss() {
      if(hp > 200)
      {
         monsterBoss = document.getElementById("boss").style.display = "block";
         alert("Boss has been found!");
         //console log
         console.log("Boss has been found!");
      }
      else
      {
         monsterBoss = document.getElementById("boss").style.display = "none";
         //console log
         console.log("Boss not found!");
      }
   }
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
         hpTotal = hp;
         killedNumber = document.getElementById("killedNum").innerHTML = killedNumber + 1;
         numHP = document.getElementById('hp').innerHTML = hp + "/" + hpTotal;
         document.getElementById("hpProgress").value = hp;
         document.getElementById("hpProgress").max = hp;
         //show message
         alert("Monster in Killed");
         //console log
         console.log("Monster in Killed");
         console.log("Create a new Monster...");
         console.log("Monster Health : " + monsterHealth);
         searchBoss();
      }
   });
});
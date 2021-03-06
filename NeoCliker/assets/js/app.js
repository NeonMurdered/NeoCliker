document.addEventListener("DOMContentLoaded", function(event)
{
   //Create random HP to monster
   let hpPool = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300],
   hpRandom = hpPool[Math.floor(Math.random() * hpPool.length)];
   let hp = hpRandom;
   //---------------------------//
   let damage = 10; // damage inflicted on the monster
   let skillOneDamage = 20; // skill damage 1
   let skillTwodamage = 30; // skill damage 2
   let skillThreedamage = 40; // skill damage 3
   let skillFourdamage = 50; // skill damage 4
   let skillFivedamage = 60; // skill damage 5
   let monsterHealth = hp;
   let killedNumber = document.getElementById("killedNum").innerHTML = 0;
   //console log
   console.log("Monster Health : " + monsterHealth);
   //---------------------------//
   let hpTotal = hp;
   let numHP = document.getElementById('hp').innerHTML = hp + "/" + hpTotal;
   document.getElementById("hpProgress").value = hp;
   document.getElementById("hpProgress").max = hp;
   searchBoss();
   //Search to boss
   function searchBoss() {
      if(hp > 250)
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
   //Check skill one
   function checkSkills() {
      if(killedNumber == 5)
      {
         skillOne = document.getElementById("skillOne").style.display = "block";
         alert("Skill one unlocked!");
         //console log
         console.log("Skill one unlocked!");
      }
      if(killedNumber > 5)
      {
         skillOne = document.getElementById("skillOne").style.display = "block";
      }
      if(killedNumber == 10)
      {
         skillOne = document.getElementById("skillTwo").style.display = "block";
         alert("Skill two unlocked!");
         //console log
         console.log("Skill two unlocked!");
      }
      if(killedNumber > 10)
      {
         skillOne = document.getElementById("skillTwo").style.display = "block";
      }
      if(killedNumber == 15)
      {
         skillOne = document.getElementById("skillThree").style.display = "block";
         alert("Skill three unlocked!");
         //console log
         console.log("Skill three unlocked!");
      }
      if(killedNumber > 15)
      {
         skillOne = document.getElementById("skillThree").style.display = "block";
      }
      if(killedNumber == 20)
      {
         skillOne = document.getElementById("skillFour").style.display = "block";
         alert("Skill four unlocked!");
         //console log
         console.log("Skill four unlocked!");
      }
      if(killedNumber > 20)
      {
         skillOne = document.getElementById("skillFour").style.display = "block";
      }
      if(killedNumber == 25)
      {
         skillOne = document.getElementById("skillFive").style.display = "block";
         alert("Skill five unlocked!");
         //console log
         console.log("Skill five unlocked!");
      }
      if(killedNumber > 25)
      {
         skillOne = document.getElementById("skillFive").style.display = "block";
      }
      else {
         //console log
         console.log("Check skills!");
      }
   }
   //then hp <= 0
   function beginMonster() 
   {
      hpRandom = hpPool[Math.floor(Math.random() * hpPool.length)];
      hp = hpRandom;
      monsterHealth = hp;
      hpTotal = hp;
      killedNumber = document.getElementById("killedNum").innerHTML = killedNumber + 1;
      checkSkills();
      numHP = document.getElementById('hp').innerHTML = hp + "/" + hpTotal;
      document.getElementById("hpProgress").value = hp;
      document.getElementById("hpProgress").max = hp;
      //show message
      alert("Monster in Killed");
      //console log
      console.log("Monster is Killed");
      console.log("Create a new Monster...");
      console.log("Monster Health : " + monsterHealth);
      searchBoss();
   }
   //On Btn Attack click event
   document.getElementById('btnAttack').addEventListener("click", function(event)
   {
      if(document.getElementById("hpProgress").value != 0)
      {
         numHP = document.getElementById('hp').innerHTML = hp - damage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= damage;
         //console log
         console.log("The monster takes damage : " + damage); 
      }
      else 
      {
         beginMonster();
      }
   });
   //On Btn SkillOne click event
   document.getElementById('skillOne').addEventListener("click", function(event)
   {
      if(document.getElementById("hpProgress").value > damage)
      {
         numHP = document.getElementById('hp').innerHTML = hp - skillOneDamage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= skillOneDamage;
         //console log
         console.log("The monster takes damage from skill one : " + skillOneDamage); 
         //Lock
         document.getElementById('skillOne').disabled = true;
         document.getElementById('skillOne').style.backgroundColor = "red";
         // Unlock
         setTimeout(function() {
            document.getElementById('skillOne').disabled = false;
            document.getElementById('skillOne').style.backgroundColor = "lightblue";
         }, 3000);
      }
      else 
      {
         beginMonster();
      }
   });
   //On Btn SkillTwo click event
   document.getElementById('skillTwo').addEventListener("click", function(event)
   {
      if(document.getElementById("hpProgress").value > skillOneDamage)
      {
         numHP = document.getElementById('hp').innerHTML = hp - skillTwodamage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= skillTwodamage;
         //console log
         console.log("The monster takes damage from skill two : " + skillTwodamage);
         //Lock
         document.getElementById('skillTwo').disabled = true;
         document.getElementById('skillTwo').style.backgroundColor = "red";
         // Unlock
         setTimeout(function() {
            document.getElementById('skillTwo').disabled = false;
            document.getElementById('skillTwo').style.backgroundColor = "lightblue";
         }, 5000);
      }
      else 
      {
         beginMonster();
      }
   });
   //On Btn SkillThree click event
   document.getElementById('skillThree').addEventListener("click", function(event)
   {
      if(document.getElementById("hpProgress").value > skillTwodamage)
      {
         numHP = document.getElementById('hp').innerHTML = hp - skillThreedamage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= skillThreedamage;
         //console log
         console.log("The monster takes damage from skill three : " + skillThreedamage);
         //Lock
         document.getElementById('skillThree').disabled = true;
         document.getElementById('skillThree').style.backgroundColor = "red";
         // Unlock
         setTimeout(function() {
            document.getElementById('skillThree').disabled = false;
            document.getElementById('skillThree').style.backgroundColor = "lightblue";
         }, 7000);
      }
      else 
      {
         beginMonster();
      }
   });
   //On Btn SkillFour click event
   document.getElementById('skillFour').addEventListener("click", function(event)
   {
      if(document.getElementById("hpProgress").value > skillThreedamage)
      {
         numHP = document.getElementById('hp').innerHTML = hp - skillFourdamage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= skillFourdamage;
         //console log
         console.log("The monster takes damage from skill four : " + skillFourdamage);
         //Lock
         document.getElementById('skillFour').disabled = true;
         document.getElementById('skillFour').style.backgroundColor = "red";
         // Unlock
         setTimeout(function() {
            document.getElementById('skillFour').disabled = false;
            document.getElementById('skillFour').style.backgroundColor = "lightblue";
         }, 10000);
      }
      else 
      {
         beginMonster();
      }
   });
   //On Btn SkillFive click event
   document.getElementById('skillFive').addEventListener("click", function(event)
   {
      if(document.getElementById("hpProgress").value > skillFourdamage)
      {
         numHP = document.getElementById('hp').innerHTML = hp - skillFivedamage + "/" + hpTotal;
         hp = document.getElementById("hpProgress").value -= skillFivedamage;
         //console log
         console.log("The monster takes damage from skill five : " + skillFivedamage);
         //Lock
         document.getElementById('skillFive').disabled = true;
         document.getElementById('skillFive').style.backgroundColor = "red"; 
         // Unlock
         setTimeout(function() {
            document.getElementById('skillFive').disabled = false;
            document.getElementById('skillFive').style.backgroundColor = "lightblue";
         }, 15000);
      }
      else 
      {
         beginMonster();
      }
   });
});
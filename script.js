 // User data array
 var users = [];

 // Filter button click event handler
 document.getElementById("filter-btn").addEventListener("click", function() {
   var professionSelect = document.getElementById("profession");
   var selectedProfession = professionSelect.value;

   if (selectedProfession === "") {
     alert("Please select a profession before clicking the button.");
   } else {
     var filteredUsers = users.filter(function(user) {
       return user.profession === selectedProfession;
     });

     displayUsers(filteredUsers);
   }
 });

 // Add User button click event handler
 document.getElementById("add-btn").addEventListener("click", function() {
   var nameInput = document.getElementById("name");
   var ageInput = document.getElementById("age");
   var professionSelect = document.getElementById("profession");
   var selectedProfession = professionSelect.value;

   if (nameInput.value === "" || ageInput.value === "" || selectedProfession === "") {
     alert("Please fill in all the fields before adding a user.");
     return;
   }

   var newUser = {
     name: nameInput.value,
     age: parseInt(ageInput.value),
     profession: selectedProfession
   };

   users.push(newUser);
   displayUsers(users);

   nameInput.value = "";
   ageInput.value = "";
   professionSelect.value = "";
 });

 // Display the users on the UI
 function displayUsers(users) {
   var userList = document.getElementById("user-list");
   userList.innerHTML = "";

   users.forEach(function(user) {
     var userCard = document.createElement("li");
     userCard.className = "user-card";
     userCard.innerHTML = "<strong>Name:</strong> " + user.name + ", <strong>Age:</strong> " + user.age + ", <strong>Profession:</strong> " + user.profession;
     userList.appendChild(userCard);
   });
 }
var btnSignIn = document.getElementById("btn-sign-in");
var btnSignUp = document.getElementById("btn-sign-up");

var signInModal = document.getElementById("sign-in-modal");
var signUpModal	= document.getElementById("sign-up-modal");

// დახურვის ღილაკები
var signInClose = document.getElementsByClassName("close")[0];
var signUpClose = document.getElementsByClassName("close")[1];

btnSignIn.onclick = function() {
	signInModal.style.display = "block";
}

btnSignUp.onclick = function() {
	signUpModal.style.display = "block";
}

signInClose.onclick = function() {
	signInModal.style.display = "none";
}

signUpClose.onclick = function() {
	signUpModal.style.display = "none";
}


// დაიხურება ფანჯარა გარე სივრცესე დაკლიკებისას
window.onclick = function(event) {
  if(event.target == signInModal) {
    signInModal.style.display = "none";
  }

  if (event.target == signUpModal) {
  	signUpModal.style.display = "none";
  }
}

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var results = data["results"][0];
        showUserInfo(results);
    }
});

// ამ ფუნქციას გადაეცემა არგუმენტად სერვისის მიერ დაბრუნებული ობიექტი
// ამავე ფუნქციაში ხდება გარკვეული ინფორმაციის ამოღება და html კომპონენტებზე განთავსება
function showUserInfo(results) {
    var avatar = results["picture"]["medium"];
    var name = results["name"]["first"] + " " + results["name"]["last"];

    $("#user-image").attr("src", avatar);
    $("#name").text(name);

}


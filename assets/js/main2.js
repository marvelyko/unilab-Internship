
// for username
// http მოთხოვნა მიმართავს სერვისს რომელიც რანდომულად აგენერირებს მომხმარებელს 
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
    $("#unput-email").val(results["email"]);
    $("#user-age").val(results["dob"]["age"]);
    $("#adress").val(results["location"]["street"]["name"]);
    $("#phone").val(results["phone"]);
    // console.log(results["phone"]);
    $("#input-first-name").val(results["name"]["first"]);

    if (results ["gender"] == "female"){
        $("#female").prop("checked", true);
    }
    else { 
        $("#male").prop("checked", true);
    }

}



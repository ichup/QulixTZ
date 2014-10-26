function GetInfo() {
    $.get("http://api.test.imperiz.ru/api/usercard/1",function(data) {
      if(data != null)
      {
        console.log(data);
        document.getElementById("firstName").innerHTML = data.firstName;
        document.getElementById("lastName").innerHTML = data.lastName;
        document.getElementById("birthDate").innerHTML = data.birthDate;
        if(data.gender == 2)
            $(".rightColumn").css("background-color","yellow");
          else
            $(".rightColumn").css("background-color","gray");
      }
    });
}

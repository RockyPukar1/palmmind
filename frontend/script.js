$(document).ready(function () {
  function populateUserModal(user) {
    $("#userModalName").text(user.name);
    $("#userModalEmail").text(user.email);
    $("#userModalPassword").text(user.password);
  }

  function loadUsers() {
    axios
      .get("http://localhost:9000/api/v1/user")
      .then(function (response) {
        var users = response.data;
        console.log(users);
        var tableBody = $("#userTable tbody");
        tableBody.empty();
        users.forEach(function (user) {
          var row = $("<tr>");
          row.append($("<td>").text(user.name));
          row.append($("<td>").text(user.email));
          row.append($("<td>").text(user.password));
          row.on("click", function () {
            populateUserModal(user);
            $("#userModal").toggle();
          });
          tableBody.append(row);
          $("#close").on("click", function() {
            $("#userModal").toggle();
          })
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadUsers();
});

$(document).ready(function () {
  function populateUserModal(user) {
    $("#userModalName").text(user.name);
    $("#userModalEmail").text(user.email);
    $("#userModalPassword").text(user.password);
  }

  function clearUserModal() {
    $("#userModalName").text("");
    $("#userModalEmail").text("");
    $("#userModalPassword").text("");
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
          row.click(function () {
            populateUserModal(user);
            $("#userModal").modal("show");
          });
          tableBody.append(row);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadUsers();
});

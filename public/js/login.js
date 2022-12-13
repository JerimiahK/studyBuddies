const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = $("#email-address").val();
  const password = $("#password").val();
  //   $.trim(email);
  //   $.trim(password);
  console.log(email);
  console.log(password);

  if (email && password) {
    const response = await $.ajax({
      url: "http://localhost:3001/api/users/login",
      //   url: "/api/users/login",
      method: "POST",
      body: { email, password },
      dataType: "JSON",
      contentType: "application/JSON",
    });
    if (response.ok) {
      document.location.replace("/home");
    } else {
      console.log(response.statusText);
    }
  }
};

$("#login-form").on("submit", loginFormHandler);

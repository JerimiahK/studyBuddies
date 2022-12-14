const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = $("#email-address").val();
  const password = $("#password").val();
  //   $.trim(email);
  //   $.trim(password);
  console.log(email);
  console.log(password);

  if (email && password) {
    const response = await fetch("/api/users/login", {
      // url: "http://localhost:3001/api/users/login",
      // url: "/api/users/login",
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      // dataType: "json",
      // contentType: "application/JSON",
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(response.statusText);
    }
  }
};

$("#login-form").on("submit", loginFormHandler);

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = $("#email-address").val();
  const password = $("#password").val();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(response.statusText);
    }
  }
};

$("#login-form").on("submit", loginFormHandler);

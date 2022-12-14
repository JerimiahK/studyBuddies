const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = $("#user-name").val();
  const email = $("#email-address").val();
  const password = $("#password").val();
  console.log(user_name);
  console.log(email);
  console.log(password);

  if (user_name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

$("#signup-form").on("submit", signupFormHandler);

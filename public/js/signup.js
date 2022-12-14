const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = $("#user-name").val();
  const email = $("#email-address").val();
  const password = $("#password").val();
  console.log(userName);
  console.log(email);
  console.log(password);

  if (userName && email && password) {
    const response = await fetch("/api/users/sign-up", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

$("#sign_up-form").on("submit", signupFormHandler);

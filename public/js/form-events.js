// Template literals stored in var
$("#delete").on("click", (e) => {
  console.log("test");
  let targetID = e.target.parentElement.id;
  $(".modal-body").text("");
  $("#modal-title").text("Delete card");
  $("#mymodal").modal("toggle");
  $(".modal-body").prepend(`Are you sure you want to delete this card?`);
  const deleteTopic = async () => {
    const response = await fetch(`/api/topics/${targetID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };
  $("#saveBtn").on("click", deleteTopic);
});

$("#edit").on("click", (e) => {
  $(".modal-body").text("");
  $("#modal-title").text("Edit card");
  $("#mymodal").modal("toggle");
  $(".modal-body").prepend(`
  <label for="topic-name" class="form-label">Enter topic name here: </label></br>
  <input id="topic-name" type="text"></input></br>
  <label for="topic-description" class="form-label">Enter topic description here: </label></br>
  <textarea id="topic-description" type="text"></textarea></br>
  <button id="complete">Complete</button>
  `);
  let targetID = e.target.parentElement.id;
  console.log(targetID);
  const updateTopic = async () => {
    const userData = {
      topic_name: $("#topic-name").val(),
      topic_description: $("#topic-description").val(),
      topic_id: 1,
    };

    const response = await fetch(`/api/topics/${targetID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };

  $("#saveBtn").on("click", updateTopic);
});

$("#add").on("click", () => {
  $(".modal-body").text("");
  $("#modal-title").text("Create card");
  $("#mymodal").modal("toggle");
  $(".modal-body").prepend(`
  <label for="topic-name" class="form-label">Enter topic name here: </label></br>
  <input id="topic-name" type="text"></input></br>
  <label for="topic-description" class="form-label">Enter topic description here: </label></br>
  <textarea id="topic-description" type="text"></textarea></br>

  `);
  $("#topic-description");
  const addTopic = async () => {
    const userData = {
      topic_name: $("#topic-name").val(),
      topic_description: $("#topic-description").val(),
      topic_id: 1, //need to change from static to dynamic
    };

    const response = await fetch(`/api/topics/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };
  $("#saveBtn").on("click", addTopic);
});

$("#cancel").on("click", () => {
  $("#mymodal").modal("hide");
});

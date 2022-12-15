const newSubtopicPage = async (e) => {
  const response = await fetch("/api/subtopics/:topic_id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    //if response.ok we should be sent to the subtopics page.
    //the subtopic page should have all the topics related to the the topic_id = ex. javascript
    document.location.replace(`api/subtopics/`);
  } else {
    alert(response.statusText);
  }
};
$(".homepageCard").on("click", newSubtopicPage);

// WHEN a user clicks on a card -> hit our api -> get subtopic category by id
// THEN that card will take them to the corresponding subtopics page with : name, description ....

// How can we

// We want all of the subtopic names of each topic

// Each topic card needs to have a corresponding attr category_id

// THIS IS WHERE I NEED TO FIND OUT WHAT TOPIC CARD WAS CLICKED ON WHATS THE NAME OF THE CARD

// const topicID = e.currentTarget.id;
// const subtopicPage = async (e) => {
//   const response = await fetch(`/api/subtopics/:id`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   if (response.ok) {
//     document.location.replace(`api/subtopics/:id`);
//   } else {
//     alert(response.statusText);
//   }
// };
// $(".homepageCard").on("click", subtopicPage);

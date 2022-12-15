const newSubtopicPage = async () => {
  const response = await fetch("/api/subtopics", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/subtopics/${response}`);
  } else {
    alert(response.statusText);
  }
};
$(".homepageCard").on("click", newSubtopicPage);

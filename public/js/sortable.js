$(document).ready((e) => {
  $("#unknown").sortable({ connectWith: ["#neutral", "#known"] });
  $("#neutral").sortable({ connectWith: ["#unknown", "#known"] });
  $("#known").sortable({ connectWith: ["#unknown", "#neutral"] });
});

// Created event listener to listen for sort-receive events
$("#unknown, #known, #neutral").on("sortreceive", (event, ui) => {
  // console.log(event.currentTarget); // target section receiving dropped item
  // console.log(event.currentTarget.id); // current target id
  const eCurrent = event.currentTarget.id;
  function sortStatus() {
    //             condition 1          value 1              condition 2             value 2           else       value 3
    return eCurrent === "unknown" ? console.log(eCurrent) : eCurrent === "known" ? console.log(eCurrent) : console.log("neutral");
  }
  sortStatus(eCurrent);
});

$("#unknown, #known, #neutral").on("sortremove", (event, ui) => {
  console.log(event);
});

// maybe pass this two params - receive and remove
// const updateSubtopicStatus = () => {
//   //We need to call this function inside our if else statement
//   //We will take in the eCurrent = current target id
//   //update the id of the item being dropped to the current target id -> attr(id, value) to set the id
//   //Update the database??? with changes made????
// };
// $("#unknown").on("sortreceive", (event, ui) => {
//   console.log(event);
//   console.log("unknown");
// });
// $("#known").on("sortreceive", (event, ui) => {
//   console.log(event);
//   console.log("known");
// });
// const statusCheck = (currentId) => {
//   console.log(currentId);
// };

//known
//unknown
//neutral

// 1. We have 3 categories : known, unknown, neutral
// 2. We want to be able to track when an item is dropped and which category it was dropped into

//    WHEN an item is dropped into a category.
//    THEN we determine which category it was dropped into

//    WHEN we figure out which category it was dropped into
//    THEN we can check 3 things :
//1. Make sure it's not the same category -> if it's the same category DO NOTHING.
//2. Is it's a new category? -> if it's a new category, we want to add a data attribute with the respected category (known, unknown, neutral)
//3. If it's being dropped to "no category", then just revert position - https://jqueryui.com/draggable/#revert

// 1.

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

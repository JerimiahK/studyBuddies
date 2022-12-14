// $(document).ready(() => {
//   // Setting list as sortable items
//   $("#nameofList").sortable({ connectWith: ["#vegetables", "#other"] });
//   $("#nameofList").sortable({ connectWith: ["#fruits", "#other"] });
//   $("#nameofList").sortable({ connectWith: ["#fruits", "#vegetables"] });
// });
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

function toggleInstructions(elem) {
    if (elem.open) {
      console.log("Instructions opened.");
    } else {
      console.log("Instructions closed.");
    }
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculateAverage);
  
  function calculateAverage() {

    var socstudies = parseFloat(document.getElementById("socstudies").value);
    var english = parseFloat(document.getElementById("english").value);
    var math = parseFloat(document.getElementById("math").value);
  
    if (isNaN(socstudies) || isNaN(english) || isNaN(math)) {
      alert("Please enter all grades.");
      return;
    }
  
    var average = (socstudies + english + math) / 3;
  
    var rating;
    if (average >= 94) {
      rating = "Excellent";
    } else if (average >= 87) {
      rating = "Above Satisfactory";
    } else if (average >= 80) {
      rating = "Satisfactory";
    } else if (average >= 75) {
      rating = "Needs Improvement";
    } else if (average >= 70) {
      rating = "Poor";
    } else {
      rating = "Below 70 (No rating)";
    }
  
    alert("Average: " + average.toFixed(2) + "%\nRating: " + rating);
  }
  
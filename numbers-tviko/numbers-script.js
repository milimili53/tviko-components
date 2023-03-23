// Select the element you want to observe
const infoSection = document.querySelector(".nums-info");
// const targetElement = document.querySelector('#target-element');

// Create a new IntersectionObserver instance with a callback function
const observer = new IntersectionObserver((entries) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // If the target element is in view
    if (entry.isIntersecting) {
      // Call your function here
      updateCount();
    }
  });
});

// Start observing the target element
observer.observe(infoSection);

let count1 = 0;
let count2 = 0;
let count3 = 0;
let target1 = 25;
let target2 = 30;
let target3 = 100;
let speed = 50;

function updateCount() {
  if (count1 < target1) {
    count1++;
    document.querySelector("#count1").textContent = count1;
  }
  if (count2 < target2) {
    count2++;
    document.querySelector("#count2").textContent = count2 + "+";
  }
  if (count3 < target3) {
    count3 += 5;
    document.querySelector("#count3").textContent = count3 + "+";
  }
  if (count1 < target1 || count2 < target2 || count3 < target3) {
    setTimeout(updateCount, speed);
  }
}

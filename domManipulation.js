// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('mouseover', function() {
myName.innerHTML="Sovereign";
myHobby.innerHTML="I like to watch TV";
myLocation.innerHTML="I live in NYC";




});

// 3. Add an event listener to the `image1Button`
image1Button.addEventListener('click', function() {
image.src="https://www.frommers.com/system/media_items/attachments/000/868/461/s980/Frommers-New-York-City-Getting-Around-1190x768.jpg?1647177178";
});
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
image2Button.addEventListener('click', function() {
image.src="https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary.jpg";
});
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.

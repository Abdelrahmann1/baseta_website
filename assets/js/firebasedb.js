const firebaseConfig = {
  apiKey: "AIzaSyBdBgfP6m1z2f-GUGd0w9dc26fhNK1QNvg",
  authDomain: "baseta-60b4d.firebaseapp.com",
  projectId: "baseta-60b4d",
  storageBucket: "baseta-60b4d.appspot.com",
  messagingSenderId: "592412780298",
  appId: "1:592412780298:web:7a3b3aeec1936c92a37cf3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const auth = firebase.auth();
function get(gets) {
  db.collection(gets).get().then((querySnapshot) => {
    displayPropertyCards(querySnapshot)
});}

function sett() {
  db.collection("employee").set({
  username: "blackatem",
  password: "Lovelace",
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}















function displayPropertyCards(querySnapshot) {
  // Clear the previous data
  document.getElementsByClassName("property-list").innerHTML ="";

  // Iterate through the documents in the query snapshot
  querySnapshot.forEach((doc) => {
    // Access data from each document
    const propertyData = doc.data();

    // Create property card elements
    const propertyCard = document.createElement("div");
    propertyCard.classList.add("property-card");

    // Create figure element for the card banner
    const cardBanner = document.createElement("figure");
    cardBanner.classList.add("card-banner");
    cardBanner.innerHTML = `
      <a href="#">
        <img src="./assets/images/property-4.png" alt="image" class="w-100">
      </a>
      <div class="card-badge ${propertyData.typeofunit === 'rent' ? 'green' : 'blue'}">For ${propertyData.typeofunit}</div>
      <div class="banner-actions">
        <button class="banner-actions-btn">
          <ion-icon name="location"></ion-icon>
          <address>${propertyData.area}</address>
        </button>
        <button class="banner-actions-btn">
          <ion-icon name="camera"></ion-icon>
          <span>4</span>
        </button>
        <button class="banner-actions-btn">
          <ion-icon name="film"></ion-icon>
          <span>2</span>
        </button>
      </div>
    `;

    // Create div for card content
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardContent.innerHTML = `
      <div class="card-price">
        <strong>${propertyData.price}</strong>/${propertyData.typeofunit === 'rent' ? 'Month' : 'total price'}
      </div>
      <h3 class="h3 card-title">
        <a href="#">${propertyData.title}</a>
      </h3>
      <p class="card-text">${propertyData.description}</p>
      <ul class="card-list">
        <li class="card-item">
          <strong>${propertyData.Bedrooms}</strong>
          <ion-icon name="bed-outline"></ion-icon>
          <span>Bedrooms</span>
        </li>
        <li class="card-item">
          <strong>${propertyData.Bathrooms}</strong>
          <ion-icon name="man-outline"></ion-icon>
          <span>Bathrooms</span>
        </li>
        <li class="card-item">
          <strong>${propertyData.Square_ft}</strong>
          <ion-icon name="square-outline"></ion-icon>
          <span>Square Ft</span>
        </li>
      </ul>
    `;

    // Append the figure and content to the property card
    propertyCard.appendChild(cardBanner);
    propertyCard.appendChild(cardContent);

    // Append the property card to the container
    x= document.getElementsByClassName("property-list");
    x[0].appendChild(propertyCard);
  });
}

// Firebase Configuration (এখানে আপনার Firebase Console থেকে কপি করে কোড দিন)
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "yourproject.firebaseapp.com",
    projectId: "yourproject",
    storageBucket: "yourproject.appspot.com",
    messagingSenderId: "12345678",
    appId: "1:123456:web:abcd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form Data Save to Firebase
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;

        db.collection("messages").add({
            name: name,
            email: email,
            message: message,
            date: new Date().toLocaleString()
        })
        .then(() => {
            alert("Success! Your message is in our system.");
            contactForm.reset();
        })
        .catch((err) => alert("Error: " + err));
    });
}
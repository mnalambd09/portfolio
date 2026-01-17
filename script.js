const firebaseConfig = {
    apiKey: "AIzaSyCu2NssNUFDeNFR1hRVmJTLq2bY-zcn2qM",
    authDomain: "portfolio-bd449.firebaseapp.com",
    projectId: "portfolio-bd449",
    storageBucket: "yportfolio-bd449.firebasestorage.app",
    messagingSenderId: "905555909489",
    appId: "1:905555909489:web:f204dc2261bec6e5c874d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// --- SIGN UP LOGIC ---
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const pass = document.getElementById('signupPassword').value;

        auth.createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                alert("Account Created Successfully! Now you can Login.");
                window.location.reload(); // Refresh to login tab
            })
            .catch((error) => alert(error.message));
    });
}

// --- LOG IN LOGIC ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;

        auth.signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                alert("Welcome Back, Noor Alam!");
                window.location.href = "index.html"; // Redirect to Home
            })
            .catch((error) => alert("Login Failed: " + error.message));
    });
}

// --- CONTACT FORM LOGIC ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const msg = document.getElementById('contactMessage').value;

        db.collection("portfolio_messages").add({
            name: name,
            email: email,
            message: msg,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Message Sent! I will contact you soon.");
            contactForm.reset();
        })
        .catch((error) => console.error("Error: ", error));
    });
}
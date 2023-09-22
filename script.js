// Initialize Firebase with your config (same as before)
const firebaseConfig = {
    apiKey: "AIzaSyAacscWNcavaCx_1DIaMqhkZyD-AP0nPNk",
    authDomain: "miniportal-68b06.firebaseapp.com",
    databaseURL: "https://miniportal-68b06-default-rtdb.firebaseio.com",
    projectId: "miniportal-68b06",
    storageBucket: "miniportal-68b06.appspot.com",
    messagingSenderId: "434218533521",
    appId: "1:434218533521:web:7acfa5798ae08698573530",
    measurementId: "G-SXE3CNBYGQ"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to look up student's subject-wise marks
function lookupStudentMarks() {
    const studentId = document.getElementById("studentId").value;
    const resultElement = document.getElementById("result");

    // Retrieve the student's data from Firebase
    const studentRef = database.ref("students/" + studentId);
    studentRef.once("value", (snapshot) => {
        const studentData = snapshot.val();
        if (studentData) {
            const subjects = studentData.subjects;
            let resultHTML = `<h2>Student ID: ${studentId}</h2><ul>`;
            for (const subject in subjects) {
                if (subjects.hasOwnProperty(subject)) {
                    resultHTML += `<li>${subject}: ${subjects[subject]}</li>`;
                }
            }
            resultHTML += `</ul>`;
            resultElement.innerHTML = resultHTML;
        } else {
            resultElement.textContent = "Student not found.";
        }
    });
}

// Attach the lookupStudentMarks function to the button click event
document.getElementById("lookupButton").addEventListener("click", lookupStudentMarks);

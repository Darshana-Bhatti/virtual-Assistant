/*let btn=document.querySelector("#btn")
let content=document.querySelector("#content");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', ()=>{
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
   let transcript= event.results[currentIndex][0].transcript
   content.innerText=transcript
   takecommand(transcript)
    console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start()
})*/
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN";  // Hindi language
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (speechRecognition) {
    let recognition = new speechRecognition();

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takecommand(transcript.toLowerCase()); // Ensure this function is defined elsewhere
    };

    recognition.onerror = (event) => {
        console.log("Speech recognition error: ", event.error);
    };

    btn.addEventListener("click", () => {
        recognition.start();
        btn.style.display="none"
        voice.style.display="block"
    });
} else {
    console.log("SpeechRecognition API not supported by this browser.");
}
function takecommand(message) {
    // Ensure case-insensitive comparison and trim any extra spaces
    message = message.toLowerCase().trim();

    // Show and hide elements as needed
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello")) {
        speak("Hello sir, what can I help you?");
    }
    else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Darshana Bhatti.");
    }
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    }
    else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    }
    else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening whatsapp...");
        window.open("https://whatsapp.com/", "_blank");
    }
    else if (message.includes("open facebook")) {
        speak("Opening facebook...");
        window.open("https://facebook.com/", "_blank");
    }
    else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://s");
    }
    else if (message.includes("thank you for help")) {
        speak("most welcome there is anything else with which i help you");
    }
    else if (message.includes("nothing")) {
        speak("Ok no problem nice to meet you, I wish we meet soon");
    }
    else{
        let finalText="this is what i found on internet regarding"+ message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}

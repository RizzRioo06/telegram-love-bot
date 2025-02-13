function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// Countdown Timer
function startCountdown() {
    const eventDate = new Date("2025-04-29T00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("countdown").innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m`;
        }
    }, 1000);
}
startCountdown();

// Photo Carousel
let images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg", "images/photo9.jpg", "images/photo10.jpg", "images/photo11.jpg", "images/photo12.jpg", "images/photo13.jpg", "images/photo14.jpg", "images/photo15.jpg"]; // Add more if needed
let index = 0;
const carouselImage = document.getElementById("carousel-image");

function showImage(newIndex) {
    index = (newIndex + images.length) % images.length;
    carouselImage.src = images[index];
}

// Auto-Slide Every 3 Seconds
setInterval(() => {
    showImage(index + 1);
}, 3500); // Change 3000 to a different value (milliseconds) if needed

// Manual Controls
document.getElementById("prev").addEventListener("click", () => showImage(index - 1));
document.getElementById("next").addEventListener("click", () => showImage(index + 1));


let letters = {
    letter1: `My Dearest Ella Rim,  

From the moment I met you, I knew my heart had found its home. Every moment with you is like a beautiful melody that I never want to stop playing.  

Today, as we celebrate **our anniversary**, I want you to know that my love for you grows stronger every day. Through every laugh, every conversation, every challenge—we’ve built something truly special.  

Even though distance separates us, my heart is always right next to yours. You are my greatest love, my happiness, my safe place. No matter where life takes us, I promise you this—I will always choose you, today, tomorrow, and forever.  

**Happy Anniversary, my love.** Here’s to many more years of love and adventure together.  

**Forever Yours,**  
💖 *Elian Rin*`,

    letter2: `My Sweet Ella,  

Happy **Valentine’s Day**, my love! 💘  

Every moment with you is like a dream I never want to wake up from. You are the **most beautiful part of my life**, and no words will ever be enough to describe how much you mean to me.  

Even miles apart, I feel you in every heartbeat, in every thought, in every wish. You are my forever, my always, and my reason to smile.  

So today, on **Valentine’s Day**, I just want to remind you of this—**I love you more than words can say, more than distance can measure, more than time can define.**  

**Happy Valentine’s Day, my love.** You will always be my greatest blessing.  

**With all my love,**  
💘 *Elian Rin*`
};



// Message Board
function addMessage() {
    let input = document.getElementById("message-input").value;
    if (input.trim() === "") return;

    let messageBoard = document.getElementById("message-board");
    let newMessage = document.createElement("p");
    newMessage.innerText = input;
    messageBoard.appendChild(newMessage);

    document.getElementById("message-input").value = ""; // Clear input
}

function sendLetterToTelegram(letterKey) {
    let message = letters[letterKey];
    console.log("Message to send:", message);

    fetch("https://telegram-love-bot.onrender.com/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response from server:", data);
            if (data.success) {
                alert("Love letter sent successfully! 💖");
            } else {
                alert("Oops! Could not send the message.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred while sending the message.");
        });
}


document.getElementById("love-button").addEventListener("click", () => {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const balloon = document.createElement("div");
            balloon.innerHTML = "🎈"; // Balloon emoji
            balloon.classList.add("balloon");
            document.body.appendChild(balloon);

            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.bottom = "-10vh"; // Start below screen
            balloon.style.fontSize = Math.random() * 20 + 10 + "px";

            // Balloon floating animation
            balloon.animate([
                { transform: `translateY(0vh)`, opacity: 1 },
                { transform: `translateY(-120vh)`, opacity: 0 }
            ], {
                duration: 4000 + Math.random() * 2000,
                easing: "ease-in-out",
                fill: "forwards"
            });

            setTimeout(() => { balloon.remove(); }, 5000);
        }, i * 100);
    }
});


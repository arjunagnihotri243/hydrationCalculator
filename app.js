document.getElementById("theAnswer").style.display = "none";

let calculate = document.querySelector("#calculate")



calculate.addEventListener("click", () => {
    const liter = 0.5;
    // half a liter of water per hour of exercise. round down to the nearest number.

    let hour = document.getElementById("time").value;
    let answer =  Math.floor(hour * liter)

    document.getElementById("theAnswer").style.display = "block";
    document.getElementById("correctAnswer").textContent = answer;
})


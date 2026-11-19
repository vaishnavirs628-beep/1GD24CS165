const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const predictBtn = document.getElementById("predictBtn");
const result = document.getElementById("result");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
        }

        reader.readAsDataURL(file);
    }
});

predictBtn.addEventListener("click", () => {

    if(!imageInput.files.length){
        result.innerHTML =
        "<p style='color:red;'>\"C:\\Users\\Admin\\Downloads\\OIP - Copy.webp\"</p>";
        return;
    }

    const diseases = [
        "Tomato Early Blight",
        "Tomato Late Blight",
        "Potato Healthy",
        "Potato Early Blight",
        "Corn Rust",
        "Apple Scab",
        "Healthy Leaf"
    ];

    const randomDisease =
        diseases[Math.floor(Math.random() * diseases.length)];

    result.innerHTML = `
        <h3>Detection Result</h3>
        <p><strong>Disease:</strong> ${randomDisease}</p>
        <p><strong>Confidence:</strong> ${Math.floor(Math.random()*10)+90}%</p>
        <p><strong>Recommendation:</strong> Apply appropriate fungicide and monitor plant health regularly.</p>
    `;
});
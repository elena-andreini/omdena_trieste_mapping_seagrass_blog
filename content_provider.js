/* const fileInput = document.getElementById("introduction.txt"); // Your file input element
fileInput.addEventListener("change", function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        const fileContent = reader.result;
        // Use the file content as needed
    };
    reader.readAsText(file);
}); */
fetch("introduction.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("overview").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));
    
    fetch("2_Previous_Studies.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("previous_studies").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("3_Ground_Truth_Data.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("gt_data").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    
    fetch("4_Satellite_Imagery.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("satellite_images").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));
     
    fetch("5_DataSet_Creation.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("dataset_creation").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));
     
    fetch("6_Data_Exploration.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("data_exploration").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("7_Image_Correction.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("image_correction").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("8_Model_Training.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("model_training").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("8_Model_Training.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("model_training").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("9_Results_And_Metrics.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("result_and_metrics").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("10_Deployment.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("deployment").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));

    fetch("11_Conclusions.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("conclusions").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));


    fetch("biblio.html")
    .then(response => response.text())
    .then(content => {
        document.getElementById("bibliography").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));
    
    
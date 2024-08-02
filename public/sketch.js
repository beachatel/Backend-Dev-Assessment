let inputAge = 0; // Default age value
const dataWidth = 5000;
const dataHeight = 5000;
let circles = [];

function preload() {
    table = loadTable('Data/age_descending.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    drawCircles();
}

function drawCircles() {
    background(0);

    // Calculate scaling factor based on the size of the data area and canvas size
    const scaleFactor = min(width / dataWidth, height / dataHeight);

    // Apply scaling
    push();
    translate(width / 2, height / 2);
    scale(scaleFactor);
    translate(-dataWidth / 2, -dataHeight / 2);

    // Draw circles
    for (let r = 0; r < table.getRowCount(); r++) {
        const ageStr = table.getString(r, 'age');
        const age = parseInt(ageStr);

        if (!isNaN(age) && Number.isInteger(age)) {
            let radius;
            let multiplier;
            if (age >= 0 && age < 10) {
                multiplier = 1;
            } else if (age >= 10 && age < 20) {
                multiplier = 0.9;
            } else if (age >= 20 && age < 30) {
                multiplier = 0.8;
            } else if (age >= 30 && age < 40) {
                multiplier = 0.7;
            } else if (age >= 40 && age < 50) {
                multiplier = 0.6;
            } else if (age >= 50 && age < 60) {
                multiplier = 0.5;
            } else if (age >= 60 && age < 70) {
                multiplier = 0.4;
            } else if (age >= 70 && age < 80) {
                multiplier = 0.3;
            } else if (age >= 80 && age < 90) {
                multiplier = 0.2;
            } else if (age >= 90 && age < 100) {
                multiplier = 0.1;
            }
            radius = age * multiplier;

            const x = random(dataWidth);
            const y = random(dataHeight);

            // Set fill color based on age and inputAge
            if (age <= inputAge) {
                fill(255, 0, 0);
            } else {
                fill(255, 255, 255);
            }

            circle(x, y, radius * 2);
        }
    }
    pop();
}

function redrawCircles() {
    inputAge = parseInt(document.getElementById('ageInput').value);
    drawCircles();
}

function draw() {
    drawCircles();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawCircles();
}


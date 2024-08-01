let table;


function preload() {

    table = loadTable('Data/age_descending.csv', 'csv', 'header');

}

function setup() { 
    createCanvas(5000,5000);
    background(255);

    // console.log(table);
    noLoop()

    // for loop to run through the rows / r = row
    for (let r = 0; r < table.getRowCount(); r++ ) {
        const name = table.getString(r, 'name');
        const doe = table.getString(r, 'date_of_event')

        // const age = table.getString(r, 'age')
      
        const citizenship = table.getString(r, 'citizenship')
        const eventLoc = table.getString(r, 'event_location')
        const eventLocDist = table.getString(r, 'event_location_district')
        const eventLocReg = table.getString(r, 'event_location_region')
        const dod = table.getString(r, 'date_of_death')
        const gender = table.getString(r, 'gender')
        const tookPart = table.getString(r, 'took_part_in_the_hostilities')
        const por = table.getString(r, 'place_of_residence')
        const porDist = table.getString(r, 'place_of_residence_district')
        const toi = table.getString(r, 'type_of_injury')
        const ammo = table.getString(r, 'ammunition')
        const killedBy = table.getString(r, 'killed_by')
        const notes = table.getString(r, 'notes')

       
        var multiplier;

        // console.log(age)

        // const x = random(width)
        // const y = random(height)

        const ageStr = table.getString(r, 'age');
         const age = parseInt(ageStr); // Convert age from string to integer
        console.log(ageStr);


        // const ageSize = map(age,0,112,0,112)
  
         let redCount = 0; // Counter for red circles
       
        //   Check if age is a valid integer
        if (!isNaN(age) && Number.isInteger(age)) {
            const x = random(width);
            const y = random(height);

            // Set fill color based on age
          if (age >= 0 && age < 10) { // Ages between values will be red
                fill(255, 0, 0);
                redCount++; // Increment red count
                 console.log("Red circle with age:", age);
          } else {
            fill(255, 255, 255);
          }

          // for loop to change scale of each range of ages while keeping overall proportion
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


    circle(x,y,age*multiplier)
            //   console.log("Number of red circles:", redCount); // Log the number of red circles
    }




    //check if circle is covering something



}




}
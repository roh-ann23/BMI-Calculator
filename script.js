

let button = document.querySelector("form");


button.addEventListener("submit", function(e){
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#width").value);
    let result = document.querySelector(".result")

    if(height === ""  || height < 0 || isNaN(height)){
        result.innerHTML = "Invalid Height";
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Invalid Weight";
    }
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        let weightStatus  = document.querySelector(".wt_guide")
        // let weightStatus = document.querySelector("#wight_guide h3")

        if(bmi < 18.6){
            weightStatus.innerHTML = "Underweight";
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            weightStatus.innerHTML = "Normal";
        }
        else if(bmi >= 24.9){
            weightStatus.innerHTML = "Overweight"
        }
    }
    }
);
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let height_status = false,
    weight_status = true;

  if (height == "" || isNaN(height) || height <= 0) {
    document.getElementById("height_erorr").innerHTML =
      "Please provide a valid height";
  } else {
    document.getElementById("weight_erorr").innerHTML = "";
    height_status = true;
  }

  if (weight == "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_erorr").innerHTML =
      "Please Provide a valid weight";
  } else {
    document.getElementById("weight_erorr").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = "Under Weight" + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal" + bmi;
    } else {
      result.innerHTML = "Over Weight" + bmi;
    }
  } else {
    alert("the form has Erorrs");
    result.innerHTML = "";
  }
});

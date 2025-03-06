const date = document.querySelector("#date");
const button = document.querySelector("#button");
const resultDiv = document.querySelector("#result");

button.addEventListener("click", function () {
  
  if (!date.value) {
    resultDiv.textContent = "Taxmin qilaymi !?";
    return;
  }

  const currDate = new Date();
  const sepDate = new Date(date.value);
  const onlyYear = currDate.getFullYear() - sepDate.getFullYear();

  if (onlyYear < 0) {
    resultDiv.textContent = "Kelajakda tugilganmisiz ?";
    return;
  }

  const onlyMonth = Math.abs(currDate.getMonth() - sepDate.getMonth());
  const returnIt = document.createElement("p");

  returnIt.textContent += "You are " + onlyYear + " year(s) ";

  if (onlyMonth !== 0) {
    returnIt.textContent += " and " + onlyMonth + " month(s) ";
  }

  returnIt.textContent += " old";

  resultDiv.innerHTML = "";   
  resultDiv.appendChild(returnIt);
});

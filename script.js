const date = document.querySelector("#date");
const button = document.querySelector("#button");
const resultDiv = document.querySelector("#result");

button.addEventListener("click", function () {
  if (!date.value) {
    resultDiv.textContent =
      "Shunaqayam odam erinchoq boladimi! Taxmin qilaymi?";
    return;
  }

  const sepDate = new Date(date.value);
  const onlyYear = 2025 - sepDate.getFullYear();

  if (onlyYear < 0) {
    resultDiv.textContent = "Kelajakda tugilganmisiz?";
    return;
  }

  const onlyMonth = sepDate.getMonth();
  const returnIt = document.createElement("p");
  returnIt.textContent +=
    "You are " + onlyYear + " and " + onlyMonth + " months old";
  resultDiv.innerHTML = "";
  resultDiv.appendChild(returnIt);
});

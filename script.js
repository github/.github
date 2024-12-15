document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="units"]');
  const totalPrice = document.getElementById("total-price");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      switch (radio.value) {
        case "1":
          totalPrice.textContent = "$10.00 USD";
          break;
        case "2":
          totalPrice.textContent = "$18.00 USD";
          break;
        case "3":
          totalPrice.textContent = "$24.00 USD";
          break;
      }
    });
  });
});
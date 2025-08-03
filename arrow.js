// Swap Icon Animation
const swapIcon = document.getElementById("swapIcon");
const swapIconMobile = document.getElementById("swapIconMobile");
let isRotated = false;

swapIconMobile.addEventListener("click", () => {
  // Animasyon efekti
  if (isRotated) {
    swapIconMobile.classList.remove("rotate-[360deg]");
    swapIconMobile.classList.add("rotate-180");
  } else {
    swapIconMobile.classList.remove("rotate-180");
    swapIconMobile.classList.add("rotate-[360deg]");
  }

  isRotated = !isRotated;

  // Currency değerlerini değiştir (opsiyonel)
  swapCurrencies();
});

swapIcon.addEventListener("click", () => {
  // Animasyon efekti
  if (isRotated) {
    swapIcon.classList.remove("rotate-[270deg]");
    swapIcon.classList.add("rotate-90");
  } else {
    swapIcon.classList.remove("rotate-90");
    swapIcon.classList.add("rotate-[270deg]");
  }

  isRotated = !isRotated;

  // Currency değerlerini değiştir (opsiyonel)
  swapCurrencies();
});

// Currency swap fonksiyonu
function swapCurrencies() {
  const firstCurrency = document.getElementById("firstCurrencyOption");
  const secondCurrency = document.getElementById("secondCurrencyOption");

  // Desktop değerlerini değiştir
  const tempValue = firstCurrency.value;
  firstCurrency.value = secondCurrency.value;
  secondCurrency.value = tempValue;

  // Mobile değerlerini de değiştir (varsa)
  const firstCurrencyMobile = document.getElementById(
    "firstCurrencyOptionMobile"
  );
  const secondCurrencyMobile = document.getElementById(
    "secondCurrencyOptionMobile"
  );

  if (firstCurrencyMobile && secondCurrencyMobile) {
    const tempMobileValue = firstCurrencyMobile.value;
    firstCurrencyMobile.value = secondCurrencyMobile.value;
    secondCurrencyMobile.value = tempMobileValue;
  }

  // Sonucu temizle
  document.getElementById("result").value = "";
  if (document.getElementById("resultMobile")) {
    document.getElementById("resultMobile").value = "";
  }
}

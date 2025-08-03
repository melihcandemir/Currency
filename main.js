// element seçimi
const amountInput = document.querySelector("#amount");
const amountInputMobile = document.querySelector("#amountMobile");

const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const firstCurrencyOptionMobile = document.querySelector(
  "#firstCurrencyOptionMobile"
);

const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const secondCurrencyOptionMobile = document.querySelector(
  "#secondCurrencyOptionMobile"
);

const resultInput = document.querySelector("#result");
const resultInputMobile = document.querySelector("#resultMobile");

const convertBtn = document.querySelector("#convertBtn");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
  amountInputMobile.addEventListener("input", exchange);
  convertBtn.addEventListener("click", exchange);
}

function getActiveElements() {
  const isMobile = window.innerWidth < 768; // md breakpoint
  return {
    amount: isMobile ? amountInputMobile : amountInput,
    firstCurrency: isMobile ? firstCurrencyOptionMobile : firstCurrencyOption,
    secondCurrency: isMobile
      ? secondCurrencyOptionMobile
      : secondCurrencyOption,
    result: isMobile ? resultInputMobile : resultInput,
  };
}

function exchange() {
  const elements = getActiveElements();
  const amount = Number(elements.amount.value.trim());
  const firstOptionValue =
    elements.firstCurrency.options[elements.firstCurrency.selectedIndex]
      .textContent;

  const secondOptionValue =
    elements.secondCurrency.options[elements.secondCurrency.selectedIndex]
      .textContent;

  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      elements.result.value = result.toFixed(3);
    });
}

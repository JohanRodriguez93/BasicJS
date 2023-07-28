//Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.

//Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
//Persona 1
//Persona 2
//Persona 3

//Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

//var cuentas = [
//  { nombre: “Mali”, saldo: 200 }
//  { nombre: “Gera”, saldo: 290 }
//  { nombre: “Maui”, saldo: 67 }
//];

//Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:

//Consultar saldo
//Ingresar monto
//Retirar Monto

//Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta

//Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.

//Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

//Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.

const cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "8901" },
  ];
  
  const accountSelect = document.getElementById("accountSelect");
  const passwordInput = document.getElementById("passwordInput");
  const loginButton = document.getElementById("loginButton");
  const optionsContainer = document.getElementById("optionsContainer");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const checkBalanceButton = document.getElementById("checkBalanceButton");
  const depositButton = document.getElementById("depositButton");
  const withdrawButton = document.getElementById("withdrawButton");
  const logoutButton = document.getElementById("logoutButton");
  const transactionsContainer = document.getElementById("transactionsContainer");
  const transactionList = document.getElementById("transactionList");
  const errorDisplay = document.getElementById("errorDisplay");
  const balanceDisplay = document.getElementById("balanceDisplay");
  
  let currentAccount = null;
  
  loginButton.addEventListener("click", () => {
    const accountIndex = parseInt(accountSelect.value);
    const password = passwordInput.value;
    const selectedAccount = cuentas[accountIndex];

    if (selectedAccount.password === password) {
      currentAccount = selectedAccount;
      optionsContainer.style.display = "block";
      welcomeMessage.innerText = `Bienvenido(a), ${currentAccount.nombre}!`;
      errorDisplay.style.display = "none";
    } else {
      showError("Contraseña incorrecta. Inténtalo nuevamente.");
    }
  });
  
  checkBalanceButton.addEventListener("click", () => {
    balanceDisplay.innerText = `Saldo actual: $${currentAccount.saldo}`;
    balanceDisplay.style.display = "block";
    errorDisplay.style.display = "none";
  });
  
  const depositInput = document.createElement("input");
  depositInput.type = "number";
  depositInput.placeholder = "Monto a ingresar";
  depositInput.style.margin = "0 auto 10px";
  depositInput.style.display = "block";

  const withdrawInput = document.createElement("input");
  withdrawInput.type = "number";
  withdrawInput.placeholder = "Monto a retirar";
  withdrawInput.style.margin = "0 auto 10px";
  withdrawInput.style.display = "block";

  depositButton.insertAdjacentElement("beforebegin", depositInput);
  withdrawButton.insertAdjacentElement("beforebegin", withdrawInput);

  depositButton.addEventListener("click", () => {
    const amount = parseFloat(depositInput.value);

    if (isNaN(amount) || amount <= 0) {
      showError("Ingresa un monto válido.");
      return;
    }

    const newBalance = currentAccount.saldo + amount;

    if (newBalance > 990) {
      showError("El saldo no puede ser mayor a $990.");
      return;
    }

    currentAccount.saldo = newBalance;
    showTransaction(`Depósito de $${amount}`, currentAccount.saldo);
    depositInput.value = "";
    errorDisplay.style.display = "none";
  });

  withdrawButton.addEventListener("click", () => {
    const amount = parseFloat(withdrawInput.value);

    if (isNaN(amount) || amount <= 0) {
      showError("Ingresa un monto válido.");
      return;
    }

    const newBalance = currentAccount.saldo - amount;

    if (newBalance < 10) {
      showError("El saldo no puede ser menor a $10.");
      return;
    }
    if (amount > currentAccount.saldo) {
      showError("Error: El monto a retirar es mayor que el saldo actual.");
      return;
    }

    currentAccount.saldo = newBalance;
    showTransaction(`Retiro de $${amount}`, currentAccount.saldo);
    withdrawInput.value = "";
    errorDisplay.style.display = "none";
  });
  
  logoutButton.addEventListener("click", () => {
    currentAccount = null;
    optionsContainer.style.display = "none";
    transactionsContainer.style.display = "none";
    balanceDisplay.style.display = "none";
    errorDisplay.style.display = "none";
    passwordInput.value = "";
  });
  
  function showTransaction(description, newBalance) {
    const transactionItem = document.createElement("li");
    transactionItem.innerText = `${description}. Nuevo saldo: $${newBalance}`;
    transactionList.appendChild(transactionItem);
    transactionsContainer.style.display = "block";
    currentAccount.transactions.push(transactionItem.innerText);
    if (currentAccount.transactions.length > 5) {
      currentAccount.transactions.shift();
    }
  }

  function showError(errorMessage) {
    errorDisplay.innerText = errorMessage;
    errorDisplay.style.display = "block";
  }


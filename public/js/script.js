async function deductToll() {
    const numberPlate = document.querySelector("#result h4").textContent.split(": ")[1];
    const response = await fetch("/deduct-toll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numberPlate }),
    });

    const result = await response.json();
    if (result.success) {
        alert(`Toll deducted! Remaining Balance: ${result.balance}`);
    } else {
        alert(`Error: ${result.message}`);
    }
}

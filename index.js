function rollDice() {
    const numDice = parseInt(document.getElementById("numDice").value); // Convert to number
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++) { 
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.jpg" alt="Dice: ${value}">`); 
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

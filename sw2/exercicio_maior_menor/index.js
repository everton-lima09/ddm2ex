function encontrarMaiorMenor() {
    const numerosInput = document.getElementById("numerosInput").value;
    const numeros = numerosInput.split(',').map(Number);

    if (numeros.length === 0 || numerosInput.trim() === "") {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    document.getElementById("resultado").innerText = `O maior número é ${maior} e o menor número é ${menor}`;
}
document.getElementById('calculate').addEventListener('click', calculateWeight);

function calculateWeight() {
    const weight = document.getElementById('weight').value;
    const resultsTable = document.getElementById('results');
    resultsTable.innerHTML = ''; // Xóa kết quả cũ

    if (!weight) {
        alert("Vui lòng nhập cân nặng của bạn.");
        return;
    }

    const planets = {
        "Sao Thủy": 0.38,
        "Sao Kim": 0.91,
        "Mặt Trăng": 0.165,
        "Sao Hỏa": 0.38,
        "Sao Mộc": 2.34,
        "Sao Thổ": 1.06,
        "Sao Thiên Vương": 0.92,
        "Sao Hải Vương": 1.19
    };

    for (const planet in planets) {
        const planetWeight = (weight * planets[planet]).toFixed(2);
        const row = resultsTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = planet;
        cell2.textContent = planetWeight;
    }
}
function addCard() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("名前と年齢を入力してください");
        return;
    }

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <button onclick="this.parentElement.remove()">削除</button>
        <h2>${name} さん</h2>
        <p>年齢：${age} 歳</p>
    `;

    document.getElementById("cardList").appendChild(card);
}
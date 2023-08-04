function displayInputValue() {
    let input = document.getElementById("nameInput");
    let name = input.value;
    let output = document.getElementById("output");
    output.textContent = "您輸入的名字是：" + name;

    input.value = "";
}
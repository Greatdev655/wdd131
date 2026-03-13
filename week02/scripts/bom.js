const inputField = document.getElementById("favchap");
const list = document.getElementById("list");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    if (inputField.value.trim() !== "") {

        const li = document.createElement("li");
        li.textContent = inputField.value;

        const delButton = document.createElement("button");
        delButton.textContent = "X";

        delButton.addEventListener("click", () => {
            list.removeChild(li);
            inputField.focus();
        });

        li.append(delButton);
        list.append(li);

        // limit to 10 entries
        if (list.children.length > 10) {
            list.removeChild(list.lastChild);
            alert("Sorry! You can't have more than 10 scriptures");
        }

        inputField.value = "";
        inputField.focus();
    }

});
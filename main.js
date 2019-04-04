let productArray = [
    "Iphone X", "Galaxy S10", "Note 8", "LG G3", "Huawei P3"
];
let positionOfProductInArray = 0;
let countProduct = 0;
displayProduct();

function displayAmountProduct() {
    if (countProduct !== 0) {
        document.getElementById("amountProduct").innerHTML = countProduct + "Product";
    }
    else {
        document.getElementById("amountProduct").innerHTML = "No Product";
    }
}

function displayProduct() {
    let producTable = "<table>";
    for (let i = 0; i < productArray.length; i++){
        producTable += "<tr>" + "<td>" + productArray[i] + "</td>";
        producTable += "<td>" +
            "<input type='button' onclick='editProduct(" + i + ")' value='Edit'>" + "</td>";
        producTable += "<td>" +
            "<input type='button' onclick='deleteProduct(" + i + ")' value='Delete'>" + "</td>" + "</tr>";
    }
    return document.getElementById("displayProduct").innerHTML = producTable;
}

function addProduct() {
    let nameProduct = document.getElementById("inputProduct").value;
    productArray.push(nameProduct.trim());
    document.getElementById("inputProduct").value = "";
    countProduct++;
    displayProduct();
    displayAmountProduct();
}
function deleteProduct(index) {
    productArray.splice(index,1);
    countProduct--;
    displayProduct();
    displayAmountProduct();
}
function editProduct(index) {
    document.getElementById("editName").value = productArray[index];
    document.getElementById("spoiler").style.display = "block";
    positionOfProductInArray += index;
}
function confirmEdit() {
    let nameProduct = document.getElementById("editName").value;
    productArray.splice(positionOfProductInArray,1,nameProduct.trim());
    positionOfProductInArray = 0;
    displayProduct();
    closeEdit()
}
function closeEdit() {
    document.getElementById("spoiler").style.display = "none";
}
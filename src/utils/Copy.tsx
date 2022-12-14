export default function CopyCode(code) {
    navigator.clipboard.writeText(code);
    document.getElementById("cpy").innerHTML = "Copied <i class='fa-solid fa-check'></i>";
    document.getElementById("cpy").style.filter = "brightness(1.2)";

    setTimeout(() => {
        document.getElementById("cpy").innerHTML = "Copy <i class='fa-regular fa-copy'></i>";
        document.getElementById("cpy").style.filter = "brightness(1)";
    }, 2000);
}


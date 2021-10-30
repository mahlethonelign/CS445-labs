window.onload = function(){
    document.getElementById("swap").onclick = function () {
        let src1 = document.getElementById("img1").src;
        let src2 = document.getElementById("img2").src;
        document.getElementById("img2").src = src1;
        document.getElementById("img1").src = src2;

    }
}
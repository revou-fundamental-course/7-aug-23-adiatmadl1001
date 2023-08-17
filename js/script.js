function calculatePerimeter()
{
    let firstSide = parseFloat(document.getElementById("firstSide").value);
    let secondSide = parseFloat(document.getElementById("secondSide").value);
    let thirdSide = parseFloat(document.getElementById("thirdSide").value);

    if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide))
    {
        document.getElementById("result-perimeter").innerHTML = "Masukkan Angka Terlebih Dahulu";
        return;
    }

    let perimeter = firstSide + secondSide + thirdSide;
    let formula = "K = s1 + s2 + s3"
    document.getElementById("result-perimeter").innerHTML = formula +"<br>" + "K =" + firstSide + "+" + secondSide + "+" + thirdSide +"<br>" + "K =" + perimeter;

}

function calculateArea() 
{
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height))
    {
        document.getElementById("result-area").innerHTML = "Masukkan Angka Terlebih Dahulu";
        return;
    }

    let area = 0.5 * base * height
    let formula = "L = 0.5 x alas x tinggi"
    document.getElementById("result-area").innerHTML = formula + "<br>" + "L = 0.5x" + base + "x" + height + "<br>" + "L = " + area;
}

function resetFormPerimeter() 
{
    document.getElementById("firstSide").value = "";
    document.getElementById("secondSide").value = "";
    document.getElementById("thirdSide").value = "";
    document.getElementById("result-perimeter").innerHTML = "";
}

function resetFormArea()
{
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result-area").innerHTML = "";
}
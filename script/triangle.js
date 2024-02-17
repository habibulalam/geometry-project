function areaOfTriangle(){
    // Triangle base 
    const triangleBase = document.getElementById('triangle-base-input')
    const baseText = triangleBase.value;
    const base = parseFloat(baseText)
    

    // Triangle height
    const triangleHeight = document.getElementById('triangle-height-input')
    const heightText = triangleHeight.value;
    const height = parseFloat(heightText);

    // Triangle Area
    const TriangleArea = 0.5 * base * height;

    // Display the result
    const display = document.getElementById('Triangle-area')
    display.innerText = TriangleArea;
}
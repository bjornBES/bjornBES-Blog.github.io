
function Home_Start() {
    LoadTopBar();
    changeFontSize();
}

function GetDeviceSize() {
    // Get the width and height of the device screen
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    return {screenHeight, screenWidth}
}

function changeFontSize() {
    const Size = GetDeviceSize();
    if(Size[0] < 425)
    {
        var heading = document.querySelector('.Text_Box h3');
        var currentSize = window.getComputedStyle(heading).fontSize; // Get the current font size
        var newSize = parseInt(currentSize) + 5; // Increase font size by 5px
        heading.style.fontSize = newSize + 'px'; // Set the new font size
    }
}
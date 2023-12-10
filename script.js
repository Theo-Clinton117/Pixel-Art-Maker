document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('pixelCanvas');

    function createPixel() {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', function() {
            this.style.backgroundColor = getColor();
        });
        return pixel;
    }

    function getColor() {
        // You can implement your color selection logic here
        // For simplicity, I'm using a random color in this example
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createCanvas(rows, cols) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                canvas.appendChild(createPixel());
            }
            canvas.appendChild(document.createElement('br'));
        }
    }

    createCanvas(20, 20); // Adjust the number of rows and columns as needed
});
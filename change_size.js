let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');

// Initial sizes
image1.classList.add('large');
image2.classList.add('small');

// Function to toggle the sizes
function toggleSizes() {
    if (image1.classList.contains('large')) {
        image1.classList.remove('large');
        image1.classList.add('small');
        image2.classList.remove('small');
        image2.classList.add('large');
    } else {
        image1.classList.remove('small');
        image1.classList.add('large');
        image2.classList.remove('large');
        image2.classList.add('small');
    }
}

// Event listeners for clicks on both images
image1.addEventListener('click', toggleSizes);
image2.addEventListener('click', toggleSizes);

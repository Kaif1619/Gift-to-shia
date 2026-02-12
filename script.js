document.addEventListener('DOMContentLoaded', () => {
    const uploadBtn = document.getElementById('upload-btn');
    const imageInput = document.getElementById('image-input');
    const imageGallery = document.getElementById('image-gallery');

    // Function to display uploaded images
    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            imageGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }

    // Handle upload button click
    uploadBtn.addEventListener('click', () => {
        const files = imageInput.files;
        if (files.length === 0) {
            alert('Please select at least one image to upload.');
            return;
        }
        
        // Simulate upload by displaying each selected image
        for (let i = 0; i < files.length; i++) {
            displayImage(files[i]);
        }
        
        // Clear the input after "upload"
        imageInput.value = '';
    });
});
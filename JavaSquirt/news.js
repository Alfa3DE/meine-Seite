const addButton = document.getElementById('addImg');
        const imageInput = document.getElementById('imageInput');
        const imageDisplay = document.getElementById('imageDisplay');

        function displayImage(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imageDisplay.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        addButton.addEventListener('click', function() {
            imageInput.click();
        });

        imageInput.addEventListener('change', displayImage);
console.log('connected');
document.getElementById('file-loader')
    .addEventListener('change', function () {

        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('output')
                .textContent = fr.result;
        }

        fr.readAsText(this.files[0]);
    })
document.getElementById('upload-button');

# files_dropzone

A Simple File Dropping zone

All Dropped or Selected Files are stored in a list variable named 'dropped_files'
To upload the files you can append the files to your form like below

//
let your_form = document.getElementById("your-form-id");

your_form.onsubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(your_form);

    // check if files were dropped
    if(dropped_files.length > 0){
        formData.append('uploadedFiles', file, file.name);    
    }
    
    // post form
    let response = await fetch('files/post/url/', {method: 'POST', body: formData});
}


![files-dropzone](https://user-images.githubusercontent.com/54437169/168844550-fa321061-71f8-4623-a620-eb2c34761d13.png)


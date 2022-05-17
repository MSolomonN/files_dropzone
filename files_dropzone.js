const drop_zone = document.getElementById('dropping-zone');
const choose_finput = document.getElementById('choose-finput');
const dropped_files = [];

// add manually choosen files
choose_finput.onchange = (event) => {
    let files = event.target.files;
    for(let i=0; i<files.length; i++){
        dropped_files.push(files[i]);
    }
    render_uploded_files();
}

// show dropped files
const render_uploded_files = () => {
    let uploaded_area = document.getElementById('uploaded-area');
    let images_html = '';
    let files_html = '';

    for(let i=0; i<dropped_files.length; i++){
        let file = dropped_files[i];

        if(file.type.startsWith('image')){
            let url = URL.createObjectURL(file);
            images_html += `<img src="${url}">`;
        }
        else{
            files_html += `<span><img> ${file.name}</span><br>`;
        }
    }

    uploaded_area.innerHTML = `<div class="dropzone-uploaded-images">${images_html}</div>`;
    uploaded_area.innerHTML += `<div class="dropzone-uploaded-files">${files_html}</div>`;
}

// when files enter drop area
drop_zone.ondragover = (event) => {
    event.preventDefault();
    drop_zone.className = "drop-zone expanded-dots";
}

// when files leave drop area
drop_zone.ondragleave = (event) => {
    event.preventDefault();
    drop_zone.className = "drop-zone"
}

// when files are dropped
drop_zone.ondrop = (event) => {
    event.preventDefault();

    if(event.dataTransfer.items){
        let items = event.dataTransfer.items;

        for(let i=0; i<items.length; i++){
            if(items[i].kind == 'file'){
                let file = items[i].getAsFile();
                dropped_files.push(file);
            }
        }
    }
    else{
        let files = event.dataTransfer.files;
        
        for(let i=0; i<files.length; i++){
            let file = files[i];
            dropped_files.push(file);
        }
    }

    render_uploded_files();
    drop_zone.className = "drop-zone";
}

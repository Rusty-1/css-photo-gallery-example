function GeneratePhotos(count){
    let topics = ['Sports', 'Cars', 'Wildlife', 'Sharks', 'Surfing', 'Arts', 'Creative', 'Cities', 'Rugby', 'Diving', 'Festivals', 'Landscapes']
    let layouts = ['size-small', 'size-medium-1', 'size-small', 'size-medium-2', 'size-small', 'size-large-1', 'size-small', 'size-large-2', 'size-small']

    let html = ``;

    for(let n = 0; n < count; n++){
        let category = topics[Math.floor(Math.random() * topics.length)]
        let layout = layouts[Math.floor(Math.random() * layouts.length)]

        html += `
            <div class="gallery-item ${layout}">
                <div class="image">
                    <img src="https://source.unsplash.com/1600x900?${category}/${n}" alt="${category}">
                </div>
                <div class="text">
                    <p>${category}: ${n}</p>
                </div>
            </div>
            `;
    }

    return html;
}
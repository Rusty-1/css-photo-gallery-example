function GeneratePhotos(count){
    topics = ['Sports', 'Cars', 'Wildlife', 'Sharks', 'Surfing', 'Arts', 'Creative', 'Cities', 'Rugby', 'Diving', 'Festivals', 'Landscapes']

    let html = ``;

    for(let n = 0; n < count; n++){
        let category = topics[Math.floor(Math.random() * topics.length)]
        html += `
            <div class="gallery-item">
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
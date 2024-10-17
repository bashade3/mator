const images = [
    "https://hips.hearstapps.com/hmg-prod/images/wh-sexposition-69-01-1633532100.png?resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-face-off-1562099039.png?crop=1xw:1xh;center,top&resize=980:*",
    "https://sexpositions.club/wp-content/uploads/2016/03/5_19_3.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/5_22.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/18_26.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/15_3.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/1_60_2.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/4_4_4.png",
    "https://sexpositions.club/wp-content/uploads/2016/02/4_1_3.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/4_17_4.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/4_13_2.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/19_33.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/18_68.png",
    "https://sexpositions.club/wp-content/uploads/2016/02/8_2.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/13_24_4.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/1_29.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/2_41_5.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/1_51_4.png",
    "https://sexpositions.club/wp-content/uploads/2019/06/19_36.png",
    "https://sexpositions.club/wp-content/uploads/2016/04/12_19.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/12_3.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/12_13_2.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/11_18.png",
    "https://sexpositions.club/wp-content/uploads/2016/03/11_14_2.png"
];

function showImages() {
    const container = document.getElementById("image-container");
    container.innerHTML = ""; // تفريغ المحتوى السابق

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
    });
}

function showRandomImage() {
    const container = document.getElementById("image-container");
    container.innerHTML = ""; // تفريغ المحتوى السابق

    const randomIndex = Math.floor(Math.random() * images.length);
    const img = document.createElement("img");
    img.src = images[randomIndex];
    container.appendChild(img);
}

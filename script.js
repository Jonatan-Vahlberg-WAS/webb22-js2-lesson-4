

const featuredArticleButton = document.querySelector('#featured-article-button');

const messages = {
    en: {
        button: 'You clicked the button!',
    },
    sv: {
        button: 'Du klickade pΓ₯ knappen!',
    },
    none: {
        button: "π¦ π β π π π  β‘οΈ π΅ βοΈ π π  π’ π· π π¨ βΊοΈ π π§ π π"
    }
}

featuredArticleButton.addEventListener('click', () => {
    const language = document.documentElement.lang || "none";
    const message = messages[language].button;
    alert(message);
});
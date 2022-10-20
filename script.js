

const featuredArticleButton = document.querySelector('#featured-article-button');

const messages = {
    en: {
        button: 'You clicked the button!',
    },
    sv: {
        button: 'Du klickade på knappen!',
    },
    none: {
        button: "🚦 🕌 ⛈ 😔 🚏 🚅  ➡️ 🈵 ♐️ 😋 🚃  🔢 🏷 📖 🗨 ☺️ 🏋 📧 💓 📖"
    }
}

featuredArticleButton.addEventListener('click', () => {
    const language = document.documentElement.lang || "none";
    const message = messages[language].button;
    alert(message);
});
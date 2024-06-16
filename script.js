window.onload = () => {
    const lyricMusics = [
        {
            text: "I love you, you were ready",
            delay: 3000
        },
        {
            text: "The pain is strong and urges rise",
            delay: 9300
        },
        {
            text: "But I'll see you, when He lets me",
            delay: 3700
        },
        {
            text: "Your pain is gone, your hands untied",
            delay: 9500
        },
        {
            text: "SO FAR AWAY",
            delay: 8000
        },
        {
            text: "And I need you to know",
            delay: 5500
        },
        {
            text: "SO FAR AWAY",
            delay: 7400
        },
        {
            text: "And I need you to, need you to know",
            delay: 10000
        }
    ];

    const lyric = lyricMusics.map((lyric) => lyric.text);
    const delay = lyricMusics.map((lyric) => lyric.delay);

    const lyricTextElement = document.getElementById('lyric-text')
    let lyricIndex = 0

    const wrapLetters = (text) => {
        const baseDelay = text.includes("SO FAR AWAY") ? 0.4 : 0.1
        console.log(baseDelay)

        return text.split('').map((letter, index) => {
            const span = document.createElement('span')
            span.textContent = letter
            span.style.animationDelay = `${index * baseDelay}s`
            return span;
        });
    };

    const updateLyrics = () => {
        lyricTextElement.innerHTML = ''
        const letters = wrapLetters(lyric[lyricIndex])
        letters.forEach(letter => lyricTextElement.appendChild(letter))

        setTimeout(() => {
            lyricIndex = (lyricIndex + 1) % lyric.length
            updateLyrics();
        }, delay[lyricIndex]);
    };

    setTimeout(() => {
        lyricTextElement.style.opacity = 1
        updateLyrics();
    }, 2000);
};

// ============================================
// 💝 KHEKELI'S VALENTINE'S PROPOSAL FOR MAAMPEE 💝
// ============================================

const CONFIG = {
    // The queen's name 👑
    valentineName: "Maampee",

    // The title that appears in the browser tab
    pageTitle: "Maampee... Khekeli Has Something to Ask You 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '🌹', '💘', '😍'],
        bears: ['🧸', '🐻', '🦋', '✨', '🔥']
    },

    // Questions and answers — kept fun & cheeky
    questions: {
        first: {
            text: "Hey Maampee... do you like Khekeli? 👀",
            yesBtn: "Obviously 😏",
            noBtn: "Nah 😤",
            secretAnswer: "I don't just like Khekeli... I LOVE him! 😍❤️‍🔥"
        },
        second: {
            text: "Okay okay... but HOW MUCH do you love Khekeli? 🤔",
            startText: "This much!",
            nextBtn: "I'm ready for the big question 💕"
        },
        third: {
            text: "Maampee... will you be Khekeli's Valentine on Feb 14th, 2026? 🌹💍",
            yesBtn: "YES YES YES! 🥰",
            noBtn: "Let me think..."
        }
    },

    // Love meter messages — increasingly hype
    loveMessages: {
        extreme: "MAAMPEE YOU'RE CRAZY IN LOVE!! Khekeli is shaking rn 🥵🚀💝🔥",
        high: "Sheesh!! To infinity and beyond for Khekeli! 🚀💝",
        normal: "And beyond! Khekeli already knew 😏🥰"
    },

    // Messages that appear after she says "Yes!"
    celebration: {
        title: "SHE SAID YES!! 🎉💝 Khekeli is the happiest man alive!! 🥳💖",
        message: "Maampee, come get your surprise — a big warm hug, the biggest kiss, and Khekeli's whole heart! 🎁💋",
        emojis: "🎁💖🤗💝💋❤️💕🔥✨🥂🌹"
    },

    // Color scheme — vibrant & romantic
    colors: {
        backgroundStart: "#ff6b9d",
        backgroundEnd: "#c850c0",
        buttonBackground: "#ff4081",
        buttonHover: "#ff79a8",
        textColor: "#d63384"
    },

    // Animation settings
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",
        bounceSpeed: "0.4s",
        heartExplosionSize: 1.8
    },

    // Background Music — local song.mp3
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "song.mp3",
        startText: "🎵 Play Our Song",
        stopText: "🔇 Pause Music",
        volume: 0.6
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
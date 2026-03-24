// Navigation system
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.dataset.section;

        // remove active section
        sections.forEach(sec => sec.classList.remove("active"));

        // show selected section
        document.getElementById(target).classList.add("active");

        // highlight active menu
        links.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");
    });
});


// -------- Dynamic Explore News --------

const newsContainer = document.createElement("div");
newsContainer.id = "news-container";

const exploreSection = document.getElementById("explore");
exploreSection.appendChild(newsContainer);

const news = [
    {
        title: "Global Updates",
        text: "Follow major global events, politics, and conflicts happening around the world, including developments in ongoing wars and peace."
    },
    {
        title: "Entertainment & Social Media",
        text: "Discover viral stories, trending videos, and social media highlights from platforms like YouTube, TikTok, and Instagram."
    },
    {
        title: "Technology News",
        text: "Stay updated with the latest tech trends including AI, software releases, gadgets, and breakthroughs in science."
    },
    {
        title: "AI Technology Expanding Worldwide",
        text: "Artificial intelligence is rapidly transforming industries including healthcare, education and transportation."
    },
    {
        title: "New Smartphone Innovations",
        text: "Tech companies are competing to launch advanced smartphones with powerful AI chips and satellite connectivity."
    },
    {
        title: "Global Political Tensions",
        text: "Countries around the world continue to monitor geopolitical conflicts and international diplomacy."
    },
    {
        title: "Space Exploration Updates",
        text: "Scientists are preparing new missions to explore Mars and the outer planets."
    }
];

function loadNews() {
    newsContainer.innerHTML = "";

    news.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("news-card");

        card.innerHTML = `
<h3>${item.title}</h3>
<p>${item.text}</p>
`;

        newsContainer.appendChild(card);

    });

}

loadNews();


// -------- Comment System --------

const form = document.getElementById("comment-form");

if (form) {

    const commentBox = document.createElement("div");
    commentBox.id = "comments";
    form.after(commentBox);

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const comment = document.createElement("div");
        comment.classList.add("comment");

        comment.innerHTML = `
<strong>${name}</strong>
<p>${message}</p>
<hr>
`;

        commentBox.prepend(comment);

        form.reset();

        alert("Thank you for your feedback!");

    });

}


// -------- Character Counter --------

const messageField = document.getElementById("message");

if (messageField) {

    const counter = document.createElement("small");
    counter.innerText = "0 characters";
    messageField.after(counter);

    messageField.addEventListener("input", () => {
        counter.innerText = messageField.value.length + " characters";
    });

}


// -------- Dark Mode Toggle --------

const darkBtn = document.createElement("button");
darkBtn.innerText = "Toggle Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

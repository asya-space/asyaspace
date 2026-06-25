const projects = [
        {
                title: "Musician Blog",
                image: '../../assets/musician.png',
                url: 'https://musician-blog-boor.vercel.app/'
        },
        {
                title: "Shelter",
                image: '../../assets/shelter.png',
                url: 'https://shelter-zeta.vercel.app/'
        },
        {
                title: "Symbol Converter",
                image: '../../assets/converter.png',
                url: 'https://asya-space.github.io/symbol-converter/'
        },
        {
                title: "Little Fishies Game",
                image: '../../assets/fishies.png',
                url: 'https://little-fishies-game.vercel.app/'
        },

]

const list = document.querySelector('.projects-list');
projects.forEach(project => {
        list.insertAdjacentHTML(
                'beforeend',
                `<li class="z-40">
                        <h3 class="text-white z-40 text-2xl">${project.title}</h3>
                </li>`
        );
})
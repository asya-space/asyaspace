const projects = [
    {
    	title: "Musician Blog",
    	image: '/musician.png',
    	url: 'https://musician-blog-boor.vercel.app/'
    },
    {
        title: "Shelter",
        image: '/shelter.png',
        url: 'https://shelter-zeta.vercel.app/'
    },
    {
        title: "Symbol Converter",
        image: '/converter.png',
        url: 'https://asya-space.github.io/symbol-converter/'
    },
    {
        title: "Little Fishies Game",
        image: '/fishies.png',
        url: 'https://little-fishies-game.vercel.app/'
    },

]

const list = document.querySelector('.projects-list');
projects.forEach(project => {
    list.insertAdjacentHTML(
        'beforeend',
        `<li class="projects-item group min-h-64 min-w-3xs rounded-2xl border border-zinc-800 flex items-center justify-center relative overflow-hidden cursor-pointer transition duration-300">
            <a class="items-link" href=${project.url} target="_blank">
            	<img class="image absolute rounded-2xl inset-0 z-1 w-full h-full object-cover opacity-0 group-hover:opacity-30 group-active:opacity-100 transition duration-300" src=${project.image}>
                <h3 class="title-default text-center relative z-2 group-hover transition duration-300">${project.title}</h3>
            </a>
        </li>`
    );
})

list.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (item) {
        const title = item.querySelector('h3');
        if (title && !title.dataset.originalText) {
            title.dataset.originalText = title.textContent;
            title.textContent = 'viewed (you can click again)';
			title.classList.remove('title-default');
			title.classList.add('title-active');
                        
            setTimeout(() => {
            	title.textContent = title.dataset.originalText;
				title.classList.remove('title-active');
				title.classList.add('title-default');
                delete title.dataset.originalText;
            }, 10000)
        }
    }
})

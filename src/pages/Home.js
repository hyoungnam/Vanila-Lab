import './Home.scss';

export default class Home {
    constructor() {
        this.state = [
            { id: 1, name: '할일 1' },
            { id: 2, name: '할일 2' },
            { id: 3, name: '할일 3' },
        ]
        this.render();
        this.mount();

    }
    setState(newState) {
        this.state = newState
        this.render()
    }
    mount() {
        const items = document.querySelector('#main')

        items.addEventListener('click', (e) => {
            const deleteBtns = e.target.closest('.home__item .home__delete')
            const item = e.target.closest('.home__item span')


            if (item) {
                item.className === 'home__name' ? item.className = 'home__done' : item.className = 'home__name'
            }
            if (deleteBtns) {
                const newItems = [...this.state].filter((item) => {
                    return item.id !== Number(deleteBtns.dataset.id)
                });
                this.setState(newItems);
            }
        });
        items.addEventListener('submit', (e) => {
            e.preventDefault()
            const inputValue = document.querySelector('.home__input').value
            if (inputValue) {
                const newItem = {
                    id: this.state.length + 1,
                    name: inputValue
                }
                const newItems = [...this.state, newItem];
                this.setState(newItems);
            }
        })


    }
    template() {
        return `<div class="page">
            <h1>Home Page</h1>
            <form id="form" action="">
                <label for="todo">입력: </label>
                <input type="text" id="todo" placeholder="할 일을 입력하세요" class="home__input">
                <input type="submit" value="추가하기">
            </form>
            <ul class="home__items">
            ${this.state.map((item) =>
            `<li class="home__item">
                <span class="home__name">${item.name}</span>
                <button data-id=${item.id} class="home__delete">
                    <strong>삭제</strong>
                </button>
            </li>`).join('')}
            </ul>
        </div>`
    }
    render() {
        const main = document.getElementById('main');
        main.innerHTML = this.template();
    }
}

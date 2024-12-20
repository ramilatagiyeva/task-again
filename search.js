const div = document.querySelector('.search-container');
const loading = false;
async function getApi() {
    if (loading) return;
    loading = true;
    section.innerHTML += `<img id="gif" src="https://media.tenor.com/ghWmBohXpjIAAAAM/waiting-anxious.gif" alt="">`
    try {
        page++;
        const { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products`);
        document.getElementById('gif').remove();
        data.forEach((item) =>{
            const div = document.createElement("div");
            div.classList.add(".box");
            div.innerHTML = `<div class="box">
                            <div class="img-1">
                                <img src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg.webp" alt="">
                            </div>
                            <div class="text">
                            <h3>BELL PEPPER</h3>
                            <p>5 kq</p>
                            <p>5$</p>
                            </div>
                        </div>`;
                        section.append(".box")
        })
    } catch (error) {
        console.log(error);
        
    }
}
getApi()


const input = document.getElementById("search-1")
async function search() {
    const { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products`);
    const result = data.filter((item) => item.title.toLowerCase().includes(input.value.toLowerCase))
    if(result.length != 0) {
        result.forEach((item) => {
            const div = document.createElement("div");
            div.classList.add("box");
            div.innerHTML = `<div class="box">
                            <div class="img-1">
                                <img src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg.webp" alt="">
                            </div>
                            <div class="text">
                            <h3>BELL PEPPER</h3>
                            <p>5 kq</p>
                            <p>5$</p>
                            </div>
                        </div>`;
                        search-container.append(div)
        })
    }

}

const abcz = document.getElementById("abcz")
const zbca = document.getElementById("zbca")
const cheap = document.getElementById("cheap")
const expensive = document.getElementById("expensive")
const simple = document.getElementById("simple")
abcz.addEventListener("click", alf)
async function alf() {
    const { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products`);
    const result = data.sort((b,a) => b.title.localeCompare(a.title)
        result.forEach((item) => {
            const div = document.createElement("div");
            div.classList.add("box");
            div.innerHTML = `<div class="box">
                            <div class="img-1">
                                <img src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg.webp" alt="">
                            </div>
                            <div class="text">
                            <h3>BELL PEPPER</h3>
                            <p>5 kq</p>
                            <p>5$</p>
                            </div>
                        </div>`;
                        search-container.append(div)
        })
    
}


const section = document.querySelector('.second');
const page = 1;
const limit = 4;
const loading = false;
async function getApi() {
    if (loading) return;
    loading = true;
    section.innerHTML += `<img id="gif" src="https://media.tenor.com/ghWmBohXpjIAAAAM/waiting-anxious.gif" alt="">`
    try {
        page++;
        const { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss?page=${page}&limit=${limit}`);
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
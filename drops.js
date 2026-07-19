fetch("drops.json")
.then(response => response.json())
.then(products => {

    const grid = document.getElementById("products");

    products.forEach(product => {

        grid.innerHTML += `

        <div class="card">

            <div class="poster">
                <img src="${product.thumbnail}" alt="${product.title}" width=340px height=auto>
            </div>

            <h2>${product.title}</h2>

            <div class="price">
                ${product.price}
            </div>

            <div class="buttons">

                <button class="primary">
                    Cop
                </button>

                <a href="product.html?id=${product.id}">
                    <button class="secondary">
                        More
                    </button>
                </a>

            </div>

        </div>

        `;

    });

});
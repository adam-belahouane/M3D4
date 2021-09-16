fetchapi = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
        return response.json()})
    .then((body) =>{
        let row = document.querySelector(".row")
        body.forEach((body) => {
            let img = body.img
            let col = document.createElement('div')
            col.classList = 'col-md-3'

            col.innerHTML= `<div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top"  src="${img}">
           
              
            <div class="card-body">

              <p class="card-text">
                ${body.title}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addToCart(event)">
                    Add to cart
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="skipBook(event)">
                    skip
                  </button>
                </div>
                <small class="text-muted">${body.price}</small>
              </div>
            </div>
          </div>`
          row.appendChild(col)
        })

    })
}
skipBook = (event) => {
    event.currentTarget.closest(".col-md-3").remove()
}
addToCart = (event) => {
    console.log(event)
    console.log(event.path[3].childNodes[1].innerText)
    console.log(event.path[4].childNodes[1].currentSrc)
    let img = event.path[4].childNodes[1].currentSrc
    let imgTitle = event.path[3].childNodes[1].innerText

    let Scart = document.querySelector("#shopping-cart")

    let col = document.createElement('div')
            col.classList = 'col-md-3'

            col.innerHTML= `<div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top"  src="${img}">
           
              
            <div class="card-body">

            <p class="card-text">
            ${imgTitle}
          </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addToCart(event)">
                    Add to cart
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="skipBook(event)">
                    remove from cart
                  </button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>`
         Scart.appendChild(col)

         alert("added to cart")


}

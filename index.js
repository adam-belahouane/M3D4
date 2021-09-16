fetchapi = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
        return response.json()})
    .then((body) =>{
        console.log(body)
        let row = document.querySelector(".row")
        body.forEach((body) => {
            console.log(body)
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Add to cart
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
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
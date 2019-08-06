

const root = document.querySelector("#root")


const companiesAPI = 'https://acme-users-api-rev.herokuapp.com/api/companies'


const Products = () => {
    const productsAPI = 'https://acme-users-api-rev.herokuapp.com/api/products'
    let productsList

    const productsFunction = (data) => {
       productsList = data.map(product => React.createElement(
           'li',
           {key: product.id},
           product.name
       ))
    }

    fetch(productsAPI)
        .then(response => response.json())
        .then(data => productsFunction(data))

}



let App = () => {
    let data = React.createElement('div', null, [products, companies])
    return data
}


ReactDOM.render(React.createElement(App), root);
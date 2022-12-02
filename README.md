# EcommerceAPI
1)To Setup on Local Sytstem Clone to your local repository
2)run NPM install to download node modules
3)run npm start or node index.js to start the project

Info about app:
in local host: 
1) get request to http://localhost:8000/products -> fetch you products
2) post request to http://localhost:8000/products/create with body in format below format will create product 
{
    "product":{
        "name":"Books",
        "quantity":100
    }
}
3)delete request to http://localhost:8000/products/:id -> wiil delete product
4)post request to http://localhost:8000/products/:id/update_quantity?number=20 - will update product quantity

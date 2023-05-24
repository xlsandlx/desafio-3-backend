import express from 'express'

const products = [
    {id: 1, title:"producto prueba 1" ,description:"Este es un producto prueba 1" ,price:200 ,thumbnail:"Sin imagen" , code:"0001" , stock:25 },
    {id: 2, title:"producto prueba 2" ,description:"Este es un producto prueba 2" ,price:200 ,thumbnail:"Sin imagen" , code:"0002" , stock:25 },
    {id: 3, title:"producto prueba 3" ,description:"Este es un producto prueba 3" ,price:200 ,thumbnail:"Sin imagen" , code:"0003" , stock:25 },
    {id: 4, title:"producto prueba 4" ,description:"Este es un producto prueba 4" ,price:200 ,thumbnail:"Sin imagen" , code:"0004" , stock:25 },
    {id: 5, title:"producto prueba 5" ,description:"Este es un producto prueba 5" ,price:200 ,thumbnail:"Sin imagen" , code:"0005" , stock:25 },
    {id: 6, title:"producto prueba 6" ,description:"Este es un producto prueba 6" ,price:200 ,thumbnail:"Sin imagen" , code:"0006" , stock:25 },
    {id: 7, title:"producto prueba 7" ,description:"Este es un producto prueba 7" ,price:200 ,thumbnail:"Sin imagen" , code:"0007" , stock:25 },
    {id: 8, title:"producto prueba 8" ,description:"Este es un producto prueba 8" ,price:200 ,thumbnail:"Sin imagen" , code:"0008" , stock:25 },
    {id: 9, title:"producto prueba 9" ,description:"Este es un producto prueba 9" ,price:200 ,thumbnail:"Sin imagen" , code:"0009" , stock:25 },
    {id: 10, title:"producto prueba 10" ,description:"Este es un producto prueba 10" ,price:200 ,thumbnail:"Sin imagen" , code:"0010" , stock:25 },
]

const app = express()

app.get('/', (request, response) => {
    response.send('Desafio 3')
})

app.get('/products', (request, response) => {
    const limit = request.query.limit
    if (!limit) {
        response.send(products)
    } else if (limit <= 0 || limit > products.length) {
        return response.send({ error: 'El limite no es valido' })
    }else {
        const limitProducts = products.slice(0, limit);
        response.send(limitProducts)
    }
})

app.get('/products/:id', (request, response) => {
    const id = request.params.id
    const product = products.find(item => item.id == id)
    if (!product) return response.send({ error: 'El producto no existe' })
    response.send(product)
})

app.listen(8080, () => console.log('Server up'))
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios")

module.exports = function(api) {
  api.loadSource(async ({ addCollection, store }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data: products } = await axios.get(
      `${process.env.API_URL}/products`
    )
    const { data: categories } = await axios.get(
      `${process.env.API_URL}/categories`
    )
    const productCollection = addCollection({ typeName: "product" })
    const categoryCollection = addCollection({ typeName: "category" })

    for (const product of products) {
      productCollection.addNode({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        slug: product.slug,
        image: {
          width: product.image.formats.small.width,
          height: product.image.formats.small.height,
          size: product.image.formats.small.size,
          url: `${process.env.API_URL}${product.image.formats.small.url}`,
        },
      })
    }

    for (const category of categories) {
      categoryCollection.addNode({
        id: category.id,
        name: category.name,
        products: store.createReference(
          "product",
          category.products.map((product) => product.id)
        ),
      })
    }
  })
}

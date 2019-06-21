var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: "Vue Mastery",
        // image: "./358947.jpg",
        selectedVariant: 0,
        someAlt: "Img",
        // inStock: true,
        inventory: 10,
        styleObject: {
            color: "green",
            fontSize: "30px"
        },
        details: ["80% cotton", "20% polyester"],
        variants: [
            {
                variantId: 2234,
                variantColor: "first image",
                variantImage: "./111111.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "second image",
                variantImage: "./358947.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});

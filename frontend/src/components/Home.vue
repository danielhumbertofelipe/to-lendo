<template>
    <div class="container">
        <header>
            <h1>Tô Lendo</h1>
            <div class="login">
                <button v-show="!logado"><router-link to="/login">Login</router-link></button>
                <label v-show="logado">Fulano</label>
                <button v-show="logado"><router-link to="/login">Logoff</router-link></button>
            </div>
        </header>
        <body>
            <div v-show="logado">
                <h3>Minhas leituras</h3>
            </div>
            <h3>Biblioteca</h3>
            <div class="cards">
                <div v-for="book in books">
                    <Card class="card" @click="Details(book)" :book="book"></Card>
                    <button>Add</button>
                </div>
            </div>
        </body>
    </div>
</template>

<script>
import router from "../router"
import Card from "./Card.vue"
export default{
    name: "Home",
    data() {
        return {
            logado: false,
            books: []
        }
    },
    components: {
        Card
    },
    methods: {
        async getBooks() {
            const req = await fetch('http://localhost:1337/api/books?populate=category,authors')
            const data = await req.json()
            this.books = data.data
            console.log(this.books)
        },
        Details(book) {
            router.push("/detailsBook/"+book.id)
        }
    },
    mounted() {
        this.getBooks()
    }
}
</script>

<style scoped>
    header{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login{
        position: absolute;
        right: 30px;
    }

    .cards{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .card{
        margin: 5px;
    }
</style>
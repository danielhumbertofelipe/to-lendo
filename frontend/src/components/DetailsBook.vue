<template>
    <div>
        <header>
            <h1>Tô Lendo</h1>
            <div class="login">
                <button v-show="!logado"><router-link to="/login">Login</router-link></button>
                <label v-show="logado">Fulano</label>
                <button v-show="logado"><router-link to="/login">Logoff</router-link></button>
            </div>
        </header>
        <body>
            <p>Título: {{ book.title }}</p>
            <p>Autores: <span v-for="(author, index) in book.authors">{{ author.name }}<br/></span></p>
            <p>Editora: {{ book.publisher }}</p>
            <p>Número de páginas: {{ book.pages }}</p>
            <p>Avaliação: {{ book.rating }}</p>
            <p>ISBN: {{ book.isbn }}</p>
            <p>Categoria: {{ book.category.title}}</p>
        </body>
    </div>
</template>

<script>
    export default{
        name: "DetailsBook",
        data() {
            return {
                logado: false,
                book: []
            }
        },
        methods: {
            async getBook() {
                const req = await fetch('http://localhost:1337/api/books/'+this.$route.params.id+'?populate=category,authors')
                const data = await req.json()
                this.book = data.data
            }
        },
        beforeMount() {
            this.getBook()
        }
    }
</script>

<style>
    header{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login{
        position: absolute;
        right: 30px;
    }
</style>
<template>
    <div class="card">
        <div class="container">
            <p>Título: {{ book.title }}</p>
            <p>Autor(es): <span v-for="(author, index) in book.authors" v-show="index<=1">{{ author.name }}<br/></span></p>
            <p>Avaliação: {{ book.rating }}</p>
            <p>Categoria: {{ book.category.title}}</p>  
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["book"]
}
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 300px;
        border-radius: 25px;
        border: 2px solid gray;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }
    .img {
        border-radius: 25px 25px 0 0;
        height: 150px;
    }
    .container {
        padding: 1px 16px;
        border-radius: 0px 0px 25px 25px;
        font-weight: bold;
    }
</style>
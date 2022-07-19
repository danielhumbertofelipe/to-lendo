<template>
    <div class="login">
        <header>
            <h1>Tô lendo</h1>
        </header>
        <form>
            <label for="email">Email: </label>
            <input type="text" name="email" id="email" required><br/>
            <label for="password">Senha: </label>
            <input type="password" name="password" id="password" required><br/>
            <button type="submit">Logar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    
</style>
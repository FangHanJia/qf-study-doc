<template>
    <div class="box">
        <header class="header">
            <hd></hd>
        </header>
        <div class="main">
            <aside class="aside"> 
                <menus></menus>
            </aside>
            <div class="section">
                <router-view></router-view>
            </div>
        </div>
        <footer class="footer">
            <foot></foot>
        </footer>
    </div>
</template>

<script>
    import './home.css'
    import hd from './header.vue';
    import menus from './menus.vue';
    import foot from './footer.vue'

    export default{
        components:{
            hd,
            menus,
            foot
        }
    }
</script>

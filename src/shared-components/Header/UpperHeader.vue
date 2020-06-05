<template>
     <section class="upper-header">
            <router-link to='/user-auth' tag='p' class="auth-button">Log-in</router-link>
            <div class="address">
                <p>"Peter Peter" street 55</p>
                <p>Call us: 0149 775 774</p>
            </div>
        </section>
</template>

<style scoped lang='scss'>
    .upper-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 20px;
        .auth-button{
            border: 1px solid white;
            cursor: pointer;
            padding: 5px 15px;
        }
        .address {
            text-align: end;
            font-size: 18px;
        }
    }
</style>
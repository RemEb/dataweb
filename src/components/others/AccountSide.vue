    <!--用户登陆模块-->
    <template>
        <div id="account">
            <a href="#"><img :src="imgUrl"></a>
            <div class="account-text">
                <a href="#"><p>{{accountData.name}}</p></a>
                <p>{{accountData.role}}</p>
            </div>
        </div>
    </template>

    <script>
        export default {
            name: "AccountSide",
            props: ['accountData'],
            data() {
                return{
                   imgUrl:require("../../assets/photo.png")
                }
            }
        }
    </script>

    <style scoped>
        #account {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 1em;
        }

        #account img {
            margin: 10px;
            float: left;

        }

        .account-text {
            float: left;
            margin-right: 20px;
        }

        .account-text p:nth-child(1) {
            font-weight: bold;
            margin-top: 20px;
        }

        .account-text p:nth-child(2) {
            color: gray;
        }

        .account-text p {
            margin: 0 0;
        }

        .account-text a {
            color: black;
        }
    </style>
<template>
    <div>
        <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Género</th>
                <th>Curso</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in usersData" :key="index"> 
                    <td>{{index + 1}}</td> 
                    <td>{{user.first_name + ' ' + user.last_name}}</td>  
                    <td>{{user.email}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.course}}</td>
                    <td><b-button v-if="user.status == 'active'" @click="blockUser(index)" variant="success">Block</b-button>
                        <b-button v-if="user.status == 'blocked'" @click="unblockUser(index)" variant="danger">UnBlock</b-button> <b-button variant="dark">Editar</b-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        data: function() {
            return {
                usersData : []
            }
        },
        mounted() {
            this.usersData = this.$store.state.users
        },
        methods: {
            ...mapMutations(["SET_USER_BLOCKED" , "SET_USER_ACTIVE"]),

            blockUser(idx) {
                for(const user of this.$store.state.users) {
                    if(this.$store.state.users.indexOf(user) == idx) {
                        this.SET_USER_BLOCKED(idx)
                    }
                }
            },
            unblockUser(idx) {
                for(const user of this.$store.state.users) {
                    if(this.$store.state.users.indexOf(user) == idx) {
                        this.SET_USER_ACTIVE(idx)
                    }
                }
            }
        }
    }


</script>

<style>

</style>

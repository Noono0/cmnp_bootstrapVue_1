<template>

  <div>
    <!-- <table>
        <tr>
            <td>글쓴이</td>
            <td>제목</td>
            <td>내용</td>
        </tr>
        
        <tr :key="index" v-for="(value,index) in data" @click="detail(index)"> 
            <td>{{value.writer}}</td>
            <td>{{value.title}}</td>
            <td>{{value.content}}</td>
        </tr>
    </table>  -->

    <table border="2">
         <tr :key="index" v-for="(value,index) in data" @click="detail(index)"> 
             <td>{{value.menu}}</td>

         </tr>
    </table>


  </div>  

</template>

<script>
import data from '@/data'

export default {
name: 'Read',
data() {
    return{
        data:data.Menu
    }
},
methods:{
    write(){
        this.$router.push({
            path:'create'
        })
    },
    detail(index){
        this.$router.push({
            name:'Detail',
            params:{
                contentId:index
            }
        })
    }
}
}
</script>


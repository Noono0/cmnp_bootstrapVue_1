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

    <!-- <table border="2"> -->
         <!-- <tr :key="index" v-for="(value,index) in data" @click="detail(index)">  -->
             <!-- <td>{{value.menu}}</td> -->

         <!-- </tr> -->
    <!-- </table> -->

로그인 : <a href="http://localhost:8080/#/Login">로그인</a> <br>
접수 : <a href="http://localhost:8080/#/Jubsu">접수</a><br>
출발지 선택 : <a href="http://localhost:8080/#/Depart">출발지 선택</a><br>
도착지 선택 : <a href="http://localhost:8080/#/Arrive">도착지 선택</a><br>
오더화면 : <a href="http://localhost:8080/#/Order">오더화면</a><br>
오더화면 - 상세정보 : <a href="http://localhost:8080/#/Order_Detail">오더화면 - 상세정보</a><br>
통계화면 : <a href="http://localhost:8080/#/Status">통계화면</a><br>
설정화면 : <a href="http://localhost:8080/#/Option">설정화면</a>



<!-- 로그인 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Login">로그인</a> <br>
접수 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Jubsu">접수</a><br>
출발지 선택 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Depart">출발지 선택</a><br>
도착지 선택 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Arrive">도착지 선택</a><br>
오더화면 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Order">오더화면</a><br>
오더화면 - 상세정보 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Order_Detail">오더화면 - 상세정보</a><br>
통계화면 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Status">통계화면</a><br>
설정화면 : <a href="http://haeun-bootstrapvue01.netlify.app/#/Option">설정화면</a> -->





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


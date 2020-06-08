<template>
  <div>
     <div class="container">
 <!-- 1지사명 card -start -->
<!-- <b-card bg-variant="success" text-variant="white"    footer="오더화면 - 지사명을 선택하실수 있습니다." footer-text-variant="secondary" style="height:120px"> -->

<b-card bg-variant="success" text-variant="white"    >

  <div>
  <b-form inline>
    
        지사명
        <!-- <b-col></b-col> -->
  &nbsp; &nbsp;
     <b-form-select v-model="selected" :options="options" style="width:40%; font-size:10px; height:40px"></b-form-select>
   <!-- <b-col></b-col> -->
     &nbsp; &nbsp;
    <b-button variant="warning" >저장</b-button>
    
   
  </b-form>
   <div style="color:#bebebe">오더화면 - 지사명을 선택하실수 있습니다.</div>
</div>

 <!-- <b-card-text  class="small text-muted" text-variant="dark">Last updated 3 mins ago</b-card-text> -->
 <!-- <b-card-text   text-variant="danger">Last updated 3 mins ago</b-card-text> -->
</b-card>
 <!-- 1지사명 card -end -->
<br>



 <!-- 2통화시 프로그램 card -start -->
<!-- <b-card bg-variant="success" text-variant="white"    footer="수신하실때 프로그램이 실행됩니다." footer-text-variant="secondary" style="height:120px"> -->

<b-card bg-variant="success" text-variant="white"  >

 
  <b-form inline>
         통화시 프로그램 자동실행 
         <b-col></b-col>
<b-form-checkbox switch size="lg" v-model="checked" >{{checked}}</b-form-checkbox>

   
 
  </b-form>
<div style="color:#bebebe">수신하실때 프로그램이 실행됩니다.</div>



</b-card>
 <!-- 2통화시 프로그램 card -end -->

<br>
 <!-- 3오더리스트 card -start -->
<!-- <b-card bg-variant="success" text-variant="white"    footer="오더화면 - 목록 출력내용을 수정하실수 있습니다" footer-text-variant="secondary" style="height:120px"> -->

<b-card bg-variant="success" text-variant="white"     style="height:100%">

  
  <b-form inline>
         오더 리스트 설정
    <b-col></b-col>
    <b-icon-arrow-right-circle variant="warning" font-scale="2" style=""></b-icon-arrow-right-circle>

  </b-form>
   
<div style="color:#bebebe">오더화면 - 목록 출력 내용을 수정하실수 있습니다.</div>

</b-card>
 <!-- 3오더리스트 card -end -->
 <br>

 <!-- 4오더 폰트 card -start -->
<!-- <b-card bg-variant="success" text-variant="white"    footer="컨트롤을 움직여 폰트 크기 설정" footer-text-variant="secondary" style="height:150px"> -->

<b-card bg-variant="success" text-variant="white"  >


  <b-form inline>
    
         오더 폰트 설정
      &emsp;
         <h3 style="color:blue;">예시 폰트 확인</h3>&emsp;
    
    <label for="range-2"></label>
   <b-form-input id="range-2" v-model="value" type="range" min="5" max="20" step="1" style="width:50%"></b-form-input>&emsp;
    <div class="mt-2">글씨 크기: {{ value }}</div>

    &emsp;
    <!-- <b-button variant="warning" >저장</b-button> -->
  </b-form>
<div style="color:#bebebe">컨트롤을 움직여 폰트 크기 설정</div>



</b-card>
 <!-- 4오더폰트 card -end -->
<br>

 <!-- 5출/도착지 card -start -->
<!-- <b-card bg-variant="success" text-variant="white"    footer="ON 으로 하시면 출/도착지 POI 명이 적용됩니다" footer-text-variant="secondary" style="height:120px"> -->

<b-card bg-variant="success" text-variant="white"    footer="ON 으로 하시면 출/도착지 POI 명이 적용됩니다" footer-text-variant="secondary">


  <b-form inline>
   
        출 / 도착지 POI 선택시 POI 명 적용
        <!-- &nbsp; -->
    <b-col></b-col>   <b-col></b-col>
<b-form-checkbox switch size="lg" v-model="checked1" >{{checked1}}</b-form-checkbox>


    <!-- <b-button variant="warning" >저장</b-button> -->
  </b-form>



</b-card>
 <!-- 5출/도착지 card -end -->

<br>



     </div> <!-- container -->
  </div><!-- end -->
</template>

<script>
import OptionData from '@/OptionData'
export default {
data(){
    return{
        checked:true
        ,checked1:true
        ,value:'10',
        selected:null,
        options:OptionData.Options
    }
}
}
</script>

<style>

</style>
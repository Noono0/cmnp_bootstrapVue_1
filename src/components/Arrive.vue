<template>
  <div >
<div class="container">
    
<p class="text-left" > 도착지 </p>
   
<!-- 도착지 input start -->
 <b-input-group style="width:80%">
    <!-- <b-input-group-prepend>
      <b-button variant="outline-info">Button</b-button>
    </b-input-group-prepend> -->

    <b-form-input type="text" placeholder="도착지를 입력해주세요"></b-form-input>

    <b-input-group-append>
      <b-button variant="secondary"><b-icon-mic></b-icon-mic></b-button>
      <!-- <b-button variant="outline-secondary">Button</b-button> -->
    </b-input-group-append>
  </b-input-group>

<!-- 도착지 input end -->
<hr>
<p class="text-left" style="background-color:#bebebe" >최근 도착지 </p>
<hr>

<b-form inline >
<h6>문정역 8호선 1번출구</h6>
<b-col></b-col>
<b-button variant="primary"  >도착지선택</b-button>

</b-form>
<hr>
<b-form inline>
<h6>강남역 2호선 4번출구</h6>
<b-col></b-col>
<b-button variant="primary">도착지선택</b-button>

</b-form>
<hr>
<b-form inline>
<h6>서울역 1호선 2번출구</h6>
<b-col></b-col>
<b-button variant="primary">도착지선택</b-button>

</b-form>
<hr>


<br>
<br>
<b-button variant="secondary" style="width:100%">도착지 내역 삭제</b-button>
<br><br>
</div>  <!-- container -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
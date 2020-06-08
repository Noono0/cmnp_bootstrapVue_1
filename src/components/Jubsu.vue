<template>
 <div>
<div class="container">

<!-- selected Option start-->
 

  <b-form-select v-model="selected" :options="options" style="width:300px"></b-form-select>



<!-- selected Option end-->
<br><br>




<b-form inline>
	<b-col cols="xs-2">고객</b-col>
	<b-col cols="xs-2"></b-col>&emsp;
	<b-col cols="xs-6">
	 <b-button variant="warning">접수내역</b-button> 
   <b-button variant="warning">주소록</b-button>
   <b-button variant="warning">통화내역</b-button>
	</b-col>
	<b-col cols="xs-2"></b-col>
</b-form>
<br>






<!-- <b-col cols="sm-2"></b-col>
<b-col cols="sm-8"> -->
<b-input-group style="width:90%">


    <b-input  placeholder="출발지를 입력해주세요" ></b-input>

    <b-input-group-append>
      <b-button variant="secondary"><b-icon-mic></b-icon-mic></b-button>

    </b-input-group-append>
  </b-input-group>
<!-- </b-col>
 <b-col cols="2"></b-col> -->

<br>

<!-- 출발 input start -->
<b-form inline>
     <!-- <b-col cols="xs-2">출발</b-col> -->
	 출발
	 <b-col cols="1" sm="1"></b-col>
    
    <b-input style="width:75%"></b-input>
    
  </b-form>
  <!-- 출발 input end -->
<br>
<!-- 도착 input start -->
<b-form inline>
     <!-- <b-col cols="xs-2">도착</b-col>&emsp; -->
	 도착
	  <b-col cols="1" sm="1"></b-col>
	 <b-input style="width:45%"></b-input>
	  &emsp;
     <!-- <b-col cols="2" xs="auto"> -->
		
    <!-- <b-input style="width:200px"></b-input>&emsp; -->
     <!-- </b-col> -->
     <!-- <b-col cols="2" xs="auto">&emsp; -->
	<b-button variant="primary" @click="addItem()" >+ 경유</b-button>
     <!-- </b-col> -->
  <!-- <button  @click='remove()'>삭제</button> 테스트용 필요 -->
  </b-form>
<!-- 도착 input end -->
<br>



<ul id="example-1">
    <!-- <li v-for="(item,index) in items" :key="item.message"> -->
  <li v-for="(item,index) in items" :key="index">
    <!-- {{ item.message }}fdsafdsa 지우자 -->

{{index}}-index
	<p v-html="item.message" > 
    
    </p>
  </li>
<!-- <button @click="addItem()">Add new item</button>  지우자 -->





</ul>
<br>
<!-- 거리& 추천요금 start -->
<b-form inline>
     <!-- <b-col cols="2">거리</b-col> -->
	 &nbsp;&nbsp;거 리&nbsp;&nbsp;
	 <b-col cols="1"></b-col>
	 <div style="color:blue;">7.2</div>&nbsp;KM
	 <!-- <b-col cols="1" style="color:blue;">7.2</b-col>KM -->
	 <!-- <b-col cols="1"></b-col> -->
	 &emsp;
	  </b-form>
	  <b-form inline>
	 추천요금&emsp;
	 <!-- <b-col cols="1"></b-col> -->
	 <!-- <b-col cols="2" style="color:blue;">10000</b-col> -->
	 <div style="color:blue;">100000</div>&nbsp;
	 ~
	 &nbsp;
	 <div style="color:blue;">150000</div>
	 <!-- <b-col cols="2"  style="color:blue;">15000</b-col> -->
	  </b-form>
 
<!-- 거리& 추천요금 end -->
<br>
<!-- 요금란 start -->
<b-form inline>
     요금
	 <b-col cols="1"></b-col>
	 <b-spinbutton v-model="value1"  min="0" max="1000000" step="1000" style="width:140px">
		 </b-spinbutton>&nbsp;원
	
	<!-- <b-col></b-col> -->
	&nbsp;&nbsp;
	 <b-button variant="success" ><b-icon-arrow-clockwise></b-icon-arrow-clockwise></b-button>
	
  </b-form>


<!--  요금란 end -->
<br>
<!-- 후불요금 start -->
<b-form inline>
    후불
	 <b-col cols="1"></b-col>
	 <b-spinbutton v-model="value2"  min="0" max="1000000" step="1000" style="width:140px">
		 </b-spinbutton>&nbsp;원
	
	<!-- <b-col cols="1">
	 <b-button variant="success" ><b-icon-arrow-clockwise></b-icon-arrow-clockwise></b-button>
	</b-col> -->
  </b-form>
<!-- 후불요금 end -->
<br>

<!-- 적요 input start -->
<b-form inline>
     적요
	 <!-- <b-col cols="8"> -->
		 <b-col cols="1"></b-col>
    <b-textarea style="width:75%;"></b-textarea>
	 <!-- </b-col> -->
  </b-form>
  <!-- 적요 input end -->

<br>

<b-button variant="primary">접수</b-button>
&emsp;
<!-- <b-col cols="1"></b-col> -->
<b-button variant="primary">대기</b-button>
&emsp;
<!-- <b-col cols="1"></b-col> -->
<b-button variant="primary">문의</b-button>
&emsp;
<!-- <b-col cols="1"></b-col> -->
<b-button variant="primary">초기화</b-button>


</div>	<!-- container -->
</div> <!-- div end -->
</template>

<script>
import OptionData from '@/OptionData'


export default {
data(){
	return{
		value1:1000,
		value2:1000,
		 items: [
    //    { message: 'Foo' },
	  //  { message: 'Bar' },
	//   { message: "<a href='http://medium.com'>링크</a>"},
	//   { message: "<input></input>"},
	//    { message: "<b-input></b-input>"}, 지우자들
     ],
    options:OptionData.Options,
    selected:null,
  // index:items.index



	}
		
	
},
methods: {
addItem(index){
   console.log("fsdafsdafs");
   console.log("fdsaf: "+index);
		 this.items.push({

			 message: "<input style='width:60%'></input> <button  @click='remove()'>삭제</button>"
			// message: "<button >fsdaf</button>"
		 })

	},
	remove(index){
		alert(index);
		console.log(index);
		this.items.splice(index,1)
	}
	
},
}
</script>

<style>

</style>
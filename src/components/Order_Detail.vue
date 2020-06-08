<template>
  <div>
      
 <div class="container">

  

<div class="table-responsive">
    <table class="table table-bordered">
    



        <tr>
          <th>대표번호</th>
          <td>022021825</td>
        
        </tr>
      
     
       <tr>
          <th>상담원</th>
         <td>고하은상담원</td>
        </tr>
      

      <tr>
          <th>고객번호</th>
          
         <td style="text-align: left; padding-left:0px; padding-right:0px">&nbsp;
           010-1111-2222 
           
           <b-button variant="success" size="sm"><b-icon-phone></b-icon-phone></b-button>
           &nbsp; 
         <b-button variant="success" size="sm"> <b-icon-envelope></b-icon-envelope> </b-button>
         </td>
        </tr>
      
      <tr>
          <th>고객명</th>
         <td>고객고하은</td>
        </tr>
      

      <tr>
          <th>접수시간</th>
         <td>2020-06-03 21:00</td>
        </tr>
      

     <tr>
          <th>출발지</th>
         <td style="color:blue;">문정역 8호선 1번출구</td>
        </tr>
      

      <tr>
          <th>도착지</th>
         <td style="color:blue;">잠실역 2호선 1번출구</td>
        </tr>
      

       <tr>
          <th>요금</th>
        <td>
          <b-form inline>
         
           <b-spinbutton v-model="value1"  min="0" max="1000000" step="1000" style="width:130px">
            <!-- <b-spinbutton v-model="value1"  min="0" max="1000000" step="1000"  > -->
             </b-spinbutton>
             <!-- <b-col></b-col> -->
             &nbsp;  &nbsp;
             <b-button variant="primary" size="sm">수정</b-button>
          </b-form>
        </td>
        </tr>
      
       <tr>
          <th>사용마일리지</th>
         <td>~~~~</td>
        </tr>
      
       <tr>
          <th>적요</th>
         <td>~~~~</td>
        </tr>
      


     
    </table>
  </div>  <!-- table div -->

<b-button variant="primary">문자배차</b-button>&emsp;
<b-button variant="primary">강제배차</b-button>&emsp;
<b-button variant="primary">인근기사배차</b-button>&emsp;


 </div> <!-- container -->


  </div>     <!-- div end -->
</template>

<script>
export default {
data(){
	return{
		value1:1000,
		value2:1000,
		
		
	}
		
	
}
}
</script>

<style>
.table th, .table td {

    vertical-align: middle;
   
}


</style>
<template>
  <div>
    <div class="container">
      <b-button v-b-modal.modal-multi-1 class="w-100 p-2 ">전체지사 05.27 ~ 05.28</b-button>
         <b-button  class="w-100 p-2" >
  

   <div class="button2">
       <b-form inline >
           <b-col cols="1"></b-col>
          
 <b-radio value="Myorder" name="order"> My오더 </b-radio>
           <!-- &nbsp; &nbsp; &nbsp; -->
           <b-col cols="1"></b-col>
<b-radio  value="Myorder2" name="order" checked> 전체</b-radio>

           <!-- <b-col cols="1"></b-col> -->
         &nbsp; &nbsp;
<b-button  style="float:right;"  variant="success">
자동검색
</b-button>
       
       </b-form>
</div>
 </b-button>

<br><br>


    <!-- table -start -->
<b-table-simple border="1px" >
    <b-tr>
        <b-td colspan="2" style="background-color:#ffc107;"><b-form-checkbox v-model="checked1" name="check-button" button button-variant="warning" style="width:100%" >
                         배차
                         <!-- :{{ checked1 }} -->
    </b-form-checkbox></b-td>
        <b-td colspan="2" style="background-color:#ffc107;"><b-form-checkbox v-model="checked2" name="check-button" button button-variant="warning" >
                      근배중
                      <!-- :{{ checked2 }} -->
    </b-form-checkbox></b-td>
        <b-td colspan="2" style="background-color:#ffc107;"><b-form-checkbox v-model="checked3" name="check-button" button button-variant="warning" >
                      배차중
                      <!-- :{{ checked3 }} -->
    </b-form-checkbox></b-td>   
    </b-tr>
    <b-tr>
        <b-td colspan="2" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked4" name="check-button" button button-variant="warning" >
                        완료
                        :{{ checked4 }}
    </b-form-checkbox> </b-td>
        <b-td colspan="2" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked5" name="check-button" button button-variant="warning" >
                            취소
                            :{{ checked5 }}
    </b-form-checkbox> </b-td>
        <b-td colspan="2" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked6" name="check-button" button button-variant="warning" >
                             강제
                             :{{ checked6 }}
    </b-form-checkbox> </b-td>   
    </b-tr>

 <b-tr>
        <b-td colspan="2" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked7" name="check-button" button button-variant="warning" >
                              대기
                              :{{ checked7 }}
    </b-form-checkbox> </b-td>
        <b-td colspan="2" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked8" name="check-button" button button-variant="warning" >
                    문의
                    :{{ checked8 }}
    </b-form-checkbox> </b-td>
        <b-td colspan="2" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked9" name="check-button" button button-variant="warning" >
                       예약
                       :{{ checked9 }}
    </b-form-checkbox> </b-td>   
    </b-tr>
<b-tr>
        <b-td colspan="3" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked10" name="check-button" button button-variant="warning" >
                            전체
                                 :{{ checked10 }}　
    </b-form-checkbox> </b-td>



       <b-td colspan="3" style="background-color:#ffc107;"> <b-form-checkbox v-model="checked11" name="check-button" button button-variant="warning" >
                             문의
                                 :{{ checked11 }}　
    </b-form-checkbox> </b-td>

    </b-tr>
</b-table-simple>
<!-- table -end -->



<b-form inline>
<b-input placeholder="고객번호"  style="width:16%; font-size:8px; height:40px;"></b-input>&emsp;
<b-input placeholder="고객명" style="width:16%; font-size:9px; height:40px;"></b-input>&emsp;
<b-input placeholder="출발지" style="width:16%; font-size:9px; height:40px;"></b-input>&emsp;
<b-input placeholder="도착지" style="width:16%; font-size:9px; height:40px;"></b-input>&emsp;
<b-button variant="success"><b-icon-search></b-icon-search></b-button>
</b-form>





<br>

    </div>
    <div class= "container">

<div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th><pre>지사명</pre></th>
          <th><pre>대표번호</pre></th>
          <th><pre>상담원</pre></th>
          <th><pre>고객번호</pre></th>
          <th><pre>접수시간</pre></th>
          <th><pre>경과시간</pre></th>
          <th><pre>배차시간</pre></th>
          <th><pre>완료시간</pre></th>
          <th><pre>출발지</pre></th>
          <th><pre>도착지</pre></th>
          <th><pre>요금</pre></th>
          <th><pre>기사명</pre></th>
          <th><pre>기사사번</pre></th>
          <th><pre>고객구분</pre></th>
          <th><pre>법인명</pre></th>
          <th><pre>결제</pre></th>
          <th><pre>취소사유</pre></th>
          <th><pre>접수번호</pre></th>
          <th><pre>상태</pre></th>
          <th><pre>고객명</pre></th>
      
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><pre>(주)콜마너</pre></td>
          <td><pre>07080178048</pre></td>
          <td><pre>test098</pre></td>
          <td><pre>010-8970-1784</pre></td>
          <td><pre>2020-06-02 18:52:42</pre></td>
          <td><pre>Cell</pre></td>
          <td><pre>Cell</pre></td>
          <td><pre>Cell</pre></td>
          <td><pre>@후불)경유)수서동 로즈데일B/D 서울 강남구 수서동</pre></td>
        </tr>

      <tr>
         <td>
           <pre>(주)콜마너222</pre>

        </td>
          <td><pre>0722222</pre></td>
          <td><pre>te2222</pre></td>
          <td><pre>010-2222-2222</pre></td>
          <td><pre>2020-06-02 18:52:42</pre></td>
          <td><pre>2222</pre></td>
          <td><pre>2222</pre></td>
          <td><pre>2222</pre></td>
          <td><pre>@선불)경유)강남역 강남역 1번출구 </pre></td>
          <td><pre>도착지입니다</pre></td>
          <td><pre>요금란입니다</pre></td>
          <td><pre>기사명입니다</pre></td>
          <td><pre>기사사번입니다</pre></td>
          <td><pre>고객구분입니다</pre></td>
          <td><pre>법인명입니다</pre></td>
          <td><pre>결제입니다</pre></td>
          <td><pre>취소사유입니다</pre></td>
          <td><pre>접수번호입니다</pre></td>
          <td><pre>상태명입니다</pre></td>
          <td><pre>고객명입니다</pre></td> 


      </tr>


      </tbody>
    </table>
  </div>
    
  
</div>  <!-- container -->



  </div> <!-- end -->
</template>

<script>
export default {
data(){
    return {
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false,
        checked5:false,
        checked6:false,
        checked7:false,
        checked8:false,
        checked9:false,
        checked10:false,
        checked11:false,



    }
}
}
</script>

<style>
.table th, .table td{
    padding:0;
    border-top:0px
}
</style>
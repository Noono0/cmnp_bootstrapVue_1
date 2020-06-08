<template>
  <div>
 <div class="container">

      <!-- nav bar -sta -->
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
     <!-- <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle> -->
<!-- 3line sidebar btn sta-->
<b-button v-b-toggle.sidebar-backdrop><b-icon icon="justify"></b-icon></b-button>
  
        <b-sidebar id="sidebar-backdrop" title="콜마너 관리자앱" backdrop-variant="dark" backdrop>
      <div class="px-3 py-2">
        <p>
       <b-icon icon="person-circle" variant="primary" font-scale="7"></b-icon>
        </p>
      </div>
    LOLER.CMNP
    <div>
    </div>
    <br>
    <br>
<b-button class="w-100 p-2 " variant="success" href="http://localhost:8080/#/Jubsu">접수     </b-button><br><br>
<b-button class="w-100 p-2 " variant="success" href="http://localhost:8080/#/Order">콜현황   </b-button><br><br>
<b-button class="w-100 p-2 " variant="success" href="http://localhost:8080/#/Tong">통계     </b-button><br><br>
<b-button class="w-100 p-2 " variant="success" href="http://localhost:8080/#/Option">설정     </b-button><br><br>
<b-button class="w-100 p-2 " variant="success">공지사항 </b-button><br><br><br><br><br><br>
<b-button class="w-100 p-2 " variant="dark">로그아웃 </b-button>
    </b-sidebar>
     <!-- 3line sidebar btn end  -->

    <b-navbar-brand href="#">&emsp;콜마너 관리자</b-navbar-brand>

  

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">접수</b-nav-item>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        <b-nav-item href="#">콜현황</b-nav-item>
         <b-nav-item href="#">통계</b-nav-item>
         <b-nav-item href="#">설정</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- nav bar -end -->

<!-- 전체지사 버튼 -sta -->

<div class="modal1" >
  
  <b-button v-b-modal.modal-multi-1 class="w-100 p-2 "  >전체지사 05.27 ~ 05.28</b-button>

  <b-modal id="modal-multi-1" size="lg" title="검색설정" ok-only >
    <p class="my-2">기간 &emsp;
    <b-button v-b-modal.modal-multi-3>2020-05-27</b-button> ~ <b-button v-b-modal.modal-multi-4>2020-05-27</b-button><br><br>

    <b-form-checkbox size="lg">&emsp; (주) 콜마너(022021802) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; 서울서브 (026619)</b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; (주) 콜마너 (025231793) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; 영구영구대리 (16000909) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; 콜벤지사(9999911111) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; ((주) 콜마너(555555555) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; (주) 콜마너(666666666) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; (주) 콜마너(777777777) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; (주) 콜마너(888888888) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; (주) 콜마너(9999999999) </b-form-checkbox>
    <b-form-checkbox size="lg">&emsp; (주) 콜마너(0000000000) </b-form-checkbox>

    </p>
  
    <template v-slot:modal-footer >
      
      <b-button class = "mx-auto" style="width:400px" variant="warning" @click= "search()">검 색</b-button>
     
    </template>
   
  </b-modal>

  <b-modal id="modal-multi-3" size="lg" title="Third Modal" >
    <p class="my-1">
  <b-calendar block locale="en-US"></b-calendar>
    </p>
  </b-modal>

 <b-modal id="modal-multi-4" size="lg" title="forth Modal" >
    <p class="my-1">
  <b-calendar block locale="en-US"></b-calendar>
    </p>
  </b-modal> 
</div>

<!-- 전체지사 버튼 -end -->
<!-- order radio btn -sta -->

 <b-button  class="w-100 p-2" >
   <div class="button2">
 <!-- <input type="radio" value="Myorder" name="order"> My오더
<input type="radio" value="Myorder" name="order" checked> 전체 -->
<b-form inline>
  <!-- <b-row> -->
 





<!-- 2차 -->

  <b-col cols="2" sm="2" style="background-color:red;"></b-col>

<b-form-radio value="myorder1" name="order">My오더</b-form-radio>
 
  <b-col cols="1" sm="2" style="background-color:red;"></b-col>
   
<b-form-radio value="myorder2" name="order">전체</b-form-radio>


<b-col cols="1" sm="2" style="background-color:red;"></b-col>

<b-button    href="#">
<b-icon icon="arrow-counterclockwise" font-scale="2" ></b-icon>
</b-button>
<b-col cols="1" sm="2" style="background-color:red;"></b-col>



<!-- 3차 완성형 부트스트랩4
<div class="col-2 col-sm-2 col-md-3"></div>
  <div class="col-4 col-sm-3 col-md-2">
<b-form-radio value="myorder1" name="order">My오더</b-form-radio>
  </div>


 
    <div class="col-4 col-sm-3 col-md-2">
 <b-form-radio value="myorder2" name="order">전체</b-form-radio> 
 </div>

<div class="col-2 col-sm-2 col-md-3">
<b-button  style="float:right;"  href="#">
<b-icon icon="arrow-counterclockwise" font-scale="2" ></b-icon>
</b-button>
</div>  -->




  <!-- </b-row> -->
</b-form>
</div>
 </b-button>

<!-- order radio btn -end -->



<!-- total dropdown -sta -->
 <b-button  class="w-100 p-2" >
  <div class="hap">
   <div>
합계 &emsp;&emsp;&emsp;&emsp;
  <!-- <b-dropdown id="dropdown-1" text="일반정렬" class="m-md-2" variant="light">
    <b-dropdown-item>일반정렬</b-dropdown-item>
    <b-dropdown-item>커스텀정렬</b-dropdown-item>
    <b-dropdown-item>최신접수정렬</b-dropdown-item>
    <b-dropdown-divider ></b-dropdown-divider>
    <b-dropdown-item >등등등..</b-dropdown-item> -->
     <!-- <b-dropdown-item active>등등등..</b-dropdown-item> -->
    <!-- <b-dropdown-item disabled>Disabled action</b-dropdown-item> --> 
  <!-- </b-dropdown> -->

<b-form-select v-model="selected" :options="options" style="width:50%"></b-form-select>










   </div>
  </div>

 </b-button>
<!-- total dropdown -end -->

<br/><br/>





  <!--order table -sta -->
  <!-- <b-table sticky-header="500px" responsive="sm" :items="items" :field="field" head-variant ="light"> </b-table>  -->
  
    <b-table sticky-header="500px"  :no-border-collapse="noCollapse"   responsive  :items="items1"
      :fields="fields"   >
  
     
      <template v-slot:head()="scope1">
          
        <div class="text-nowrap">
         {{ scope1.label }}
        </div>
       
      </template>
    </b-table>
  <!--order table -end -->
  
  <!-- order total table -sta -->
 
   <b-table sticky-header="500px"     :items="items2"   >
      
      <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
     
      <template v-slot:head()="scope">
           {{ scope.total }}
      </template>
    </b-table>
  
  <!-- total table -end -->
  
  
  
  
  
  
  
 
 
 
 </div> <!-- container -->
</div>    <!-- div end -->
</template>



<script>
import data from '@/data'
import OptionData from '@/OptionData'

  export default {
    data() {
      return {
        selected:'A',
        options:OptionData.align_option,
        // stickyHeader: true,
        noCollapse: true,
        fields: data.title,
        items1: data.Content,
        items2: data.Total
        
      }
    }
  }
</script>
<style>
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
     padding-right: 0px; 
     padding-left: 0px; 
}

</style>
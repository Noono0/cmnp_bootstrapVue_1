<template>
  <div>
      <div>
        {{data.menu}}
      </div>
    <!-- <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button> -->
 <br>
 <br> <br>
 <br>
 <!-- <b-table striped hover :items="items"></b-table> -->
<br>
<br>
<div class="modal1" >
  <b-button v-b-modal.modal-multi-1 class="w-100 p-2 "  >전체지사 05.27 ~ 05.28</b-button>

  <b-modal id="modal-multi-1" size="lg" title="First Modal" ok-only >
    <p class="my-2">기간 &emsp;
    <b-button v-b-modal.modal-multi-3>2020-05-27</b-button> ~ <b-button v-b-modal.modal-multi-4>2020-05-27</b-button>
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



 <b-button  class="w-100 p-2" >
   <div class="button2">
 <input type="radio" value="Myorder" name="order"> My오더
<input type="radio" value="Myorder" name="order"> 전체
<b-button  style="float:right;">
<b-icon icon="arrow-counterclockwise" font-scale="2"  ></b-icon>
</b-button>

</div>
 </b-button>



 <b-button  class="w-100 p-2" >
  <div class="hap">
   <div>
합계 &emsp;&emsp;&emsp;&emsp;
  <b-dropdown id="dropdown-1" text="일반정렬" class="m-md-2" variant="light">
    <b-dropdown-item>일반정렬</b-dropdown-item>
    <b-dropdown-item>커스텀정렬</b-dropdown-item>
    <b-dropdown-item>최신접수정렬</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <!-- <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
  </b-dropdown>

   </div>
  </div>

 </b-button>
  
 <div>

    <b-table sticky-header :items="items" head-variant="light"></b-table>
  
     <!-- <tr>
      <td>지사명</td>
      <td>전체</td>
<td>완료</td>
<td>문의</td>
<td>취소</td>
     </tr>
     <tr>
       <td>1 </td>
 <td>전체 1 </td>
     <td>완료 1</td>
      <td>문의 1 </td>
       <td>취소 1 </td>
     </tr> -->
 
 
  </div>
     
</div>  

  
</template>

<script>
import data from '@/data'



export default {
    name: 'Detail',
    data(){
        // const index = this.$route.params.contentId
        return {
            // data: data[index],
            // field:['지사명','전체','완료','문의','취소'],
             items: data.Content


        
        }

    }
}
</script>


<style>

</style>





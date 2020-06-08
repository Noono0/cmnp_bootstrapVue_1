<template>
  <div>
<div class="container">
        <form class="form-horizontal" role="form" method="POST" action="">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2 style="color:blue">콜마너 관리자 전용</h2>
                    <hr>
                </div>
            </div>
             <b-button v-b-modal.authOK>인증받기</b-button>
             <br/><br>



<!-- modal-main start -->
<b-modal id="authOK" size="lg" title="인증요청" style="center" >
<div style="color:red;">
인증번호를 연속으로 3회 잘못 입력시 다시 인증 번호를 요청해야 합니다.<br><br>

인증번호 발급을 5회(실패건)연속 하실수 없습니다.<br><br>

5회 이상 인증번호 발급시 인증번호 발급이 제한되므로 콜마너 고객센터로 해제 요청하셔야 합니다.<br><br>
인증번호 요청 후 1분 이내에는 인증번호 요청이 되지 않습니다.</div>
<!-- modal-main end -->


<!-- modal - ID & Auth call -start -->
  <b-form inline>

    <b-input placeholder="ID를 입력해주세요" style="width:50%" ></b-input>


   &emsp; <b-button variant="primary"  style="width:40%">인증요청</b-button>
 
  <br><br>
  <b-form-input placeholder="인증번호 입력해주세요" style="width:45%"></b-form-input>
 &emsp; <b-button variant="success"  style="width:45%">콜마너 고객센터<br> 전화하기</b-button>
 </b-form>

<!-- modal - ID & Auth call -end -->

<!-- modal-footer start -->
<template v-slot:modal-footer="{ ok, cancel }" >
      <b-button size="md" variant="primary" @click="ok()">
      인증확인
      </b-button>
      <b-button size="md" variant="secondary" @click="cancel()">
       닫기
      </b-button>
     
    </template>
<!-- modal-footer end -->


</b-modal>

<!-- modal end -->

<!-- ID input start -->
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group has-danger">
                        <label class="sr-only" >ID</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><h3>ID</h3></div>
                            <input type="text"  class="form-control" id="ID"
                                   placeholder="ID를 입력해주세요" required autofocus>
                        </div>
                    </div>
                </div>
            </div>
<!-- ID input end -->

<!-- PW input start -->
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only" >Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><h4>PW</h4></div>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="비밀번호를 입력해주세요" required>
                        </div>
                    </div>
                </div>
            </div>
<!-- PW input end -->
<!-- id & pw checkbox -start -->
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" style="padding-top: .35rem">
                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label class="form-check-label">
                                   <b-form-checkbox size="lg">
                            <span style="padding-bottom: .15rem">ID 저장&emsp;&emsp;</span>
                            </b-form-checkbox>
                        </label>

 <label class="form-check-label">
           
                                   <b-form-checkbox size="lg">
                            <span style="padding-bottom: .15rem">PASS 저장</span>
                            </b-form-checkbox>
                        </label>
                    </div>
                </div>
            </div>

<!-- id & pw checkbox -end -->
<br>

<!-- 수도권 & 지방권 checkbox -start -->
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" style="padding-top: .35rem">
                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label class="form-check-label">
                           
                                   <b-form-radio size="lg" name="capital">
                            <span style="padding-bottom: .15rem">수도권&emsp;&emsp;</span>
                            </b-form-radio>
                        </label>

 <label class="form-check-label">
                         
                                   <b-form-radio size="lg" name="capital">
                            <span style="padding-bottom: .15rem">지방권</span>
                            </b-form-radio>
                        </label>


                    </div>
                </div>
            </div>

<!-- 수도권 & 지방권 checkbox -end -->


            <div class="row" style="padding-top: 1rem">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <b-button type="submit" variant="primary" size="lg" style="float:right;">Login</b-button>
                   
                </div>
            </div>
        </form>
    
    
    </div>  <!-- container -->


  </div>     <!-- div end -->
</template>

<script>
export default {

}
</script>

<style>

</style>
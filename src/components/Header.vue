<template>
  <div class="Header">
      <el-row class="Header-center">
       <el-col :span="6" :push="2" :md="8">
          <button type="button" class="btn">Upgrade</button>
          <button type="button" class="btn">Dashboard</button>
          <button type="button" class="btn">My Settings</button>
       </el-col>
      <el-col :span="6" :push="10">
        <div class="header-left">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="header-left-icon"/>
					<span>tranchidoan1998@gmail.com</span>
					<a href="#logout">Logout</a>
				</div>
      </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header{
    height: 80px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
  }
   .btn{
    display: inline-block;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid #cccccc;
    padding: .375rem .75rem;
    border-radius: 7px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    margin-left: 10px;
   }
  .Header-center{
     padding: 23px;
}
  .header-left{
    padding: 7px;
    float:right;
  }
  .header-left-icon {
	font-size: 20px;
	color: #a7a7a7cc;
}
  .header-left a {
	margin-left: 20px;
	color: red;
  text-decoration: none;
}
  .header-left span {
	margin-left: 7px;
}
  .Header-center button:hover{
    background-color: #67C23A;
  }

</style>

<template>
    <div class="Body">
    <el-row>
        <el-col :span="8">
            <div class="sidebar-top">
                <el-button type="success">+ Add New Monitor</el-button>
				<input type="text" class="" placeholder="Search">
				<font-awesome-icon :icon="['fas', 'search']" class="sidebar-top-icon" />
            </div>
            <div class="sidebar-body">
                <div class="sidebar-body-top">
                        <el-button type="success">100.000%</el-button>
						<el-button type="info">http</el-button>
						<div class="sidebar-text">
                            <span >CMC Website</span>
                        </div>
						<div class="sidebar-body-right">
                            <div class="body-Progress-bar">
                                <BProgress :value="35" variant="success" style="border-radius: 0px !important;" ></BProgress>
                            </div>
                                <el-dropdown trigger="click">
                                    <font-awesome-icon :icon="['fas', 'cog']" class="sidebar-body-icon"/>
                                    <el-dropdown-menu slot="dropdown" class="body-dropdown-menu">
                                        <el-dropdown-item style="color: #fff !important;"><font-awesome-icon :icon="['fas', 'caret-right']" style="margin-right: 10px;"/>Pause</el-dropdown-item>
                                        <el-dropdown-item style="color: #fff !important;"><font-awesome-icon :icon="['fas', 'caret-right']" style="margin-right: 10px;"/>Edit</el-dropdown-item>
                                        <el-dropdown-item style="color: #fff !important;"><font-awesome-icon :icon="['fas', 'caret-right']" style="margin-right: 10px;"/>Delete</el-dropdown-item>
                                        <el-dropdown-item style="color: #fff !important;"><font-awesome-icon :icon="['fas', 'caret-right']" style="margin-right: 10px;"/>Reset Stats</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
						</div>                         
				</div>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="content-top">
                <font-awesome-icon :icon="['fas', 'tv']" class="content-top-icon"/><span>CMC Website</span><br>
                <a href="#item">https://cmccybersecurity.com/</a>
                <div class="content-top-text">A place to find all the details about your monitors</div>
			</div>
            <div class="content-body">
                <div class="top-content">
                    <div>
                        <font-awesome-icon :icon="['fas', 'signal']" class="content-body-icon"/>
                        <b>Uptime</b><span>last 24 hours</span>
                        <div class="content-body-progress">
                            <BProgress :value="30" variant="success" style="border-radius: 0px !important;" ></BProgress>
                        </div>
                    </div>
                    <div>
                        <font-awesome-icon :icon="['fas', 'chart-line']" class="content-body-icon"/><b>Response Time</b><span>last 24 hours(979.00 ms av.)</span>
                        <div class="top-content-text">Show the "instant" that the monitor started returning a response in ms (and average for the displayed period is 979.00ms)</div>
                        
                            <div style=" width:90%; margin: 20px 10px">
                                <Char />
                            </div>
                        
                    </div>
				</div>
                <div class="content-left">
						<div class="current">
							<p><font-awesome-icon :icon="['fas', 'genderless']" class="content-left-icon"/><b>Current Status</b></p>
							<div class="content-left-up">
                                <font-awesome-icon :icon="['fas', 'genderless']" class="content-left-icon2"/>
								<b style="font-size: 30px;padding: 0px 40px;">Up</b>
							</div>
                            
							<span style="font-size: 14px;color: rgb(190, 190, 190);padding: 0px 10px;">Since 18 hrs, 28 mins (2020-08-04 08:03:39)</span>
						</div>
                        <div class="current0">
							<p><font-awesome-icon :icon="['fas', 'signal']" class="content-left-certificate"/><b>Current Status</b></p>
							<p><b style="color: rgb(0, 165, 0);"><font-awesome-icon :icon="['fas', 'certificate']" class="content-left-certificate2"/>100.000%</b> (last 24 hours)</p>
							<p><b style="color: rgb(0, 165, 0);"><font-awesome-icon :icon="['fas', 'certificate']" class="content-left-certificate2"/>100.000%</b> (last 7 days)</p>
							<p><b style="color: rgb(0, 165, 0);"><font-awesome-icon :icon="['fas', 'certificate']" class="content-left-certificate2"/>100.000%</b> (last 30 days)</p>
						</div>
                        <div class="current1">
							<p><font-awesome-icon :icon="['fas', 'genderless']" class="current1-genderless"/><b>Latest dowtime</b></p>
							<p style="padding: 5px 10px;font-size: 14px;color: white;">No dowtime recorded</p>
						</div>
                </div>
            </div>
            <div style="position: relative; top: 20px;height:30px;">
               
                    <div style="position: absolute; left: 20px;">
                        <b style="font-weight:bold">Latest event </b>(up, down, start, pause)
                    </div>
                    <a style="position: absolute; right: 15px;" href="#item">Export Log</a>
                
            </div>
            <div style="position: relative; top: 20px;height:auto;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="event" label="Event" width="200px"> 
                        <template slot-scope="scope">
                            <span v-html="eventHandle(scope.row.event)"></span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="datetime" label="Date-Time" width="400px"> </el-table-column>
                    <el-table-column prop="reason"  label="Reason" width="200px">
                        <template slot-scope="scope">
                            <span v-html="eventHandleBold(scope.row.event,scope.row.reason)"></span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="duration" label="Duration"> </el-table-column>
                </el-table>
            </div>
        </el-col>
    </el-row>
    <div class="mess">
		<a href="#id"><font-awesome-icon :icon="['fas', 'comment-alt']" style="font-size: 25px;color: white;position: absolute; top: 25%; right: 25%;" /></a>
	</div>
    </div>
</template>
<script>
import { BProgress } from 'bootstrap-vue'
import { Line } from 'vue-chartjs'
import Char from './Char.vue'
export default {
    name: 'Body',
    components:{
       BProgress,
       Char,
   },
   methods: {
       eventHandle(data){
           if(data==="Up"){
               return '<span style="background: #689F38; padding: 5px 13px; font-size: 12px; color: #fff;font-weight: 600;border-radius: 7px;">  <i class="fa fa-arrow-up"></i> '+ data +'</span>';
           }
           else if(data==="Started"){
               return '<span style="background: #2e89e5; padding: 5px 13px; font-size: 12px; color: #fff;font-weight: 600;border-radius: 7px;"> <i class="fas fa-caret-right"></i> '+ data +'</span>';
           }
           else if(data==="Paused"){
               return '<span style="background: black; padding: 5px 13px; font-size: 12px; color: #fff;font-weight: 600;border-radius: 7px;"><i class="fas fa-pause">         '+ data +'</span>';
           }
       },
       eventHandleBold(data,reason){
           if(data==="Up"){
               return '<span style="font-weight:700; color:green"> '+ reason +'</span>';
           }
           else{
               return '<span style="font-weight:700;"> '+ reason +'</span>';
           }
       }
   },
   data() {
        return {
          tableData: [{
            event: 'Up',
            datetime: '2020-08-04 08:03:39',
            reason: 'OK(200)',
            duration: '18 hrs, 28 mins',
            
          }, 
          {
            event: 'Started',
            datetime: '2020-08-04 08:01:55',
            reason: 'Started',
            duration: '0 hrs, 1 mins',
          },
          {
            event: 'Paused',
            datetime: '2020-08-04 08:01:53',
            reason: 'Paused',
            duration: '0 hrs, 0 mins',
          },
           {
            event: 'Up',
            datetime: '2020-08-04 04:55:36',
            reason: 'OK(200)',
            duration: '3 hrs, 6 mins',
          },
          {
            event: 'Started',
            datetime: '2020-08-04 04:54:59',
            reason: 'Stared',
            duration: '0 hrs, 0 mins',
          }], 
        }
      },
    extends: Line,
    props: ['chartdata', 'options'],
    mounted () {
        this.renderChart(this.chartdata, this.options)      
  }

}
</script>

<style scoped>
.sidebar-top {
	position: relative;
	width: 100%;
	height: 80px;
	background-color: rgb(24, 24, 24);
}
.sidebar-top button {
	padding: 5px 11px;
    margin: 15px;
    height: 35px;
}
.sidebar-top input {
	background-color: black;
    margin: 17px;
    float: right;
    padding: 4px;
    border: none;
    color: grey;
    height: 30px;
    width: 230px;
}
.sidebar-top-icon{
	position: absolute;
    top: 25px;
    right: 25px;
    color: grey;
}
.sidebar-body {
	background-color: rgb(204, 204, 204);
	height: 755px;
}
.sidebar-body-top button {
	margin: 16px 10px;
    padding: 10px;
}
.sidebar-text{
    display: inline-block;
	font-weight: bold;
	font-size: 22px;
    margin: 15px 0px;
}
.sidebar-body-icon {
	position: relative;
    top : 4px;
    right : -150px;
   
}
.sidebar-body-right{
	position: relative;
	float: right;
    width: 180px;
}
.body-Progress-bar{
    position: relative;
    top : 24px;
    width: 140px;
}
.body-dropdown-menu{
    width: 33%;
    background-color: rgb(73, 73, 73);
    color: #fff;
}
.content-top{
    background-color: rgb(167 167 167);
    height: 100px;
}
.content-top span{
	font-size: 25px;
	font-weight: bold;
}
.content-top-icon{
    margin-left: 15px;
    margin-right: 15px;;
    font-size: 25px;
    
}
.content-top a {
	margin-left: 15px;
    margin-right: 15px;;
	font-weight: bold;
	font-size: 20px;
	color: rgb(0, 161, 0);
}
.content-top-text {
	margin: 0px 15px 10px 15px;
	font-size: 14px;
}


.content-body{
	position: relative;
	border-radius: 5px;
	width: 98%;
	margin: auto;
	height: 400px;
	background-color: rgb(41 41 41);
    top: 15px;
}
.content-body-icon{
    color: azure;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 25px;
}
.top-content {
	width: 68%;
	float: left;
	height: auto;
}
.content-body-progress{
    padding-left: 20px;
    padding-top: 20px;
	width: 90%;
    padding-bottom: 10px;
    border-bottom: 2px solid #3c3c3c;
}
.top-content b{
	color: white;
    font-size: 25px;
}
.top-content span {
	font-weight: bold;
    color: #009200;
    margin-left: 10px;
    font-size: 20px;
}
.top-content-text{
    width: 90%;
    font-size: 14px;
    color: rgb(190, 190, 190);
    padding: 0 10px 10px;
    border-bottom: 2px solid #3c3c3c;
}


.content-left {
	width: 32%;
	float: right;
	height: auto;
}
.current {
	position: relative;
	margin-top: 15px;
	height: 118px;
	width: 95%;
	background-color: rgb(31, 31, 31);
}
.current p {
	margin-bottom: 0px;
	
	padding: 10px 30px;
    border-bottom: 1px solid #3c3c3c;
	color:white
}
.content-left-up{
    color: rgb(0, 165, 0);
}
.content-left-icon{
	position: absolute;
    top: 9%;
    left: 7px;
    font-size: 25px;
}
.content-left-icon2{
    position: absolute;
    top: 43%;
    left: 7px;
    font-size: 39px;
}
.current p b {
	font-weight: bold;
    font-size: 17px;
}
.current0 {
	
	margin-top: 10px;
	height: 145px;
	width: 95%;
	background-color: rgb(31, 31, 31);
}
.current0 p {
	font-size: 17px;
	margin-bottom: 0px;
	position: relative;
	padding: 5px 30px;
    border-bottom: 1px solid #3c3c3c;
	color:white
}
.content-left-certificate{
	position: absolute;
	top: 25%;
    left: 7px;
	font-size: 16px;
}
.content-left-certificate2{
	position: absolute;
	top: 29%;
    left: 7px;
	font-size: 16px;
}
.current0 p b {
	font-weight: bold;
    font-size: 17px;
}
.current1 {
	
	margin-top: 10px;
	height: 76px;
	width: 95%;
	background-color: rgb(31, 31, 31);
}
.current1 p {
	margin-bottom: 0px;
	position: relative;
	padding: 10px 30px;
    border-bottom: 1px solid #3c3c3c;
	color:rgb(223, 69, 69)
}
.current1-genderless{
	position: absolute;
	top: 26%;
    left: 7px;
	font-size: 25px;
}
.current1 p b {
	font-weight: bold;
    font-size: 17px;
}
.mess {
	position: fixed;
    bottom: 20px;
    right: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: yellowgreen;
}

@media (min-width: 740px) {

}
@media (min-width: 1113px) {

}
@media (min-width: 740px) and (max-width: 1023px) {

}
@media (min-width: 1024px) and (max-width: 1239px) {

}




</style>
<template>
<div>
   <div class="head" id="header" v-if="show">
			<a href="#"><img src="../images/head.jpg" /></a>
			<span class="iconfont icon-cha" id="cha" @click="clearHandle"></span>
		</div>
	<div class="navmain">
			<div class="nav">
				<div class="logoList">
					<div class="dog">
						<img src="../images/logobig.png" class="jpg" />
						
					</div>
					<ul class="lists">

					</ul>
				</div>
				<div class="dingwei">
					
					
				</div>

				<ul class="list3">
					<a href="#">
						<li class="specil"><a class="hello" @click="toLogin">你好，请登录</a><em @click="toReg"><a >免费注册</a></em></li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
					<a href="#">
						<li>我的订单</li>
					</a>
				</ul>
			</div>
		</div>
<div class="titlebox">
			<div class="title">
				<div class="first">
					<form>
						<input type="text" class="txt" id="otxt" placeholder="全棉时代每满200减100" />
						<ul id="olist"></ul>
						<span class="iconfont icon-xiangjix
"></span>
						<input type="submit" class="sub" value="" />
						<p class="iconfont icon-sousuo"></p>
					</form>
					    <div class="cart" @click="toCart">
						<img src="../images/cart.jpg" />
						<span>我的购物车</span>
						<!--<div class="num"></div>-->
					</div>
				</div>
				<div class="second">
					<ul @click='toDetail'>
						
							<li>家具一元抢</li>
						
							<li>婴儿奶粉</li>
						
							<li>婴儿奶粉</li>
						
							<li>婴儿奶粉</li>
						
							<li>婴儿奶粉</li>
						
							<li>婴儿奶粉</li>
						
							<li>婴儿奶粉</li>
						
					
						
					</ul>
				</div>
				
				
					<div class="bg02">
						<img @click="toDetail" src="../images/bg02.jpg"/>
					</div>
				
			</div>
		</div>
<div class="bigbox">
		<div class="main">
		<swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="banner.length!=0"> 
			<swiper-slide v-for="(item,index) in banner" :key="index" >
				<img :src="item.url" alt="" @click="toDetail" />
				</swiper-slide>
				 <div class="swiper-pagination"  v-for="(item,index) in banner" :key="index" slot="pagination" ></div> 
				</swiper> 
					
	 






			<!-- <div class="btn btn1">></div>
			<div class="btn btn2">
				</div> -->
					<!-- <ul id="num">
						<li class="li"></li>
						<li class="li"></li>
						<li class="li"></li>
						<li class="li"></li>
						<li class="li"></li>
						<li class="li"></li>
						<li class="li"></li>
						<li class="li"></li>
					</ul> -->

					<div class="center">
						<img @click="toDetail" src="../images/c1.jpg" />
						<img @click="toDetail" class="c2" src="../images/c2.jpg" />
						<img @click="toDetail" src="../images/c3.jpg" />
					</div>
					<div class="right">
						<div class="denglu">
							<img class="login" src="../images/no_login.jpg" />
							<span>Hi~欢迎来到悦桔拉拉</span>
							<div class="regist">
								<a @click='toLogin'>登录</a>&nbsp;&nbsp;
								<a @click='toReg'>注册</a>
							</div>
							<div class="new">
								<a href="#">新人福利</a>
							</div>
							<div class="vip">
								<a href="#">PLUS会员</a>
							</div>
							<h3 class="kb">悦桔拉拉快报</h3>
							<ul class="ul-list">
								<li>特惠我但是都谁的我抗生素</li>
								<li>DVD烦不烦D我但是发房贷</li>
								<li>反对法的的地的抗生地方的</li>
								<li>发辅导班的我但是都的</li>
								<li>发辅导班的我但是都的发表</li>
								<li>发辅导班的我但是发表</li>
								<li>发辅导班的我但是与的发表</li>
								<li>发辅导班的我但是与的</li>
								<li>发辅导班的我但是与的发表</li>
								<li>发辅导班的我但是发表</li>
								
							</ul>
						</div>

						

						

					</div>
			</div>
</div>
			
				

				
					

				<div class="fashion">——&nbsp; &nbsp; 时尚达人&nbsp;&nbsp; ——</div>

				<div class="main04box">
					<div class="left04">
						<h3>
					<p>运动户外</p>
					<span>></span>
					<em>专属你的购物指南</em>
				</h3>
						<img @click="toDetail" src="../images/a5.png" />
						<img @click="toDetail" class="a6" src="../images/a6.png" />
						<img @click="toDetail" class="a6" src="../images/a7.png" />
					</div>
					<div class="center04">
						<h3>
					<p>魅力装扮</p>
					<span>></span>
					<em>专属你的购物指南</em>
				</h3>
						<img @click="toDetail" src="../images/a5.png" />
						<img @click="toDetail" class="a6" src="../images/a6.png" />
						<img @click="toDetail" class="a6" src="../images/a7.png" />
					</div>
					<div class="right04">
						<div class="pro"></div>
						<img src="../images/a4.png" />
					</div>
				</div>

				<div class="igent">——&nbsp; &nbsp; 智能先锋&nbsp;&nbsp; ——</div>

				<div class="main05box">
					<div class="left05">
						<h3>
					<p>运动户外</p>
					<span>></span>
					<em>专属你的购物指南</em>
				</h3>
						<a href="list.html" target="_blank"><img src="../images/a5.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a6.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a7.png" /></a>
					</div>
					<div class="center05">
						<h3>
					<p>魅力装扮</p>
					<span>></span>
					<em>专属你的购物指南</em>
				</h3>
						<a href="list.html" target="_blank"><img src="../images/a5.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a6.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a7.png" /></a>
					</div>
					<div class="right05">
						<div class="pro"></div>
						<img src="../images/a4.png" />
					</div>
				</div>

				<div class="life">——&nbsp; &nbsp; 生活百货&nbsp;&nbsp; ——</div>

				<div class="main06box">
					<div class="left06">
						<h3>
					<p>运动户外</p>
					<span>></span>
					<em>专属你的购物指南</em>
				</h3>
						<a href="list.html" target="_blank"><img src="../images/a5.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a6.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a7.png" /></a>
					</div>
					<div class="center06">
						<h3>
					<p>魅力装扮</p>
					<span>></span>
					<em>专属你的购物指南</em>
				</h3>
						<a href="list.html" target="_blank"><img src="../images/a5.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a6.png" /></a>
						<a href="list.html" target="_blank"><img class="a6" src="../images/a7.png" /></a>
					</div>
					<div class="right06">
						<div class="pro"></div>
						<img src="../images/a4.png" />
					</div>
				</div>
                <div class="footbox">
				<div class="foot1">
					<img src="../images/f1.jpg" />
					<img src="../images/f1.jpg" />
					<img src="../images/f1.jpg" />
					<img src="../images/f1.jpg" />
				</div>
				</div>
				<div class="foot2">
					<ul>
						<span>购物指南</span>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
					</ul>
					<ul>
						<span>购物指南</span>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
					</ul>
					<ul>
						<span>购物指南</span>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
					</ul>
					<ul>
						<span>购物指南</span>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
					</ul>
					<ul>
						<span>购物指南</span>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
						<a href="#">
							<li>购物流程</li>
						</a>
					</ul>
					<img src="../images/f2.jpg" />
				</div>

				<div class="foot3">
					<ul class="ul1">
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
						<a href="#">
							<li>关于我们</li>
						</a>
					</ul>
					<ul class="ul2">
						<a href="#">
							<li>京公网安备1929283746565656565&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备读博士对比&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备1929283746565656565&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备但是VS伯伯VS的&nbsp;&nbsp;</li>
						</a>
					</ul>

					<ul class="ul3">
						<a href="#">
							<li>京公网安备但是得不看&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备读博士对比&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备收到脑开始吧&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备备是VS伯伯VS的&nbsp;&nbsp;</li>
						</a>
					</ul>

					<ul class="ul4">
						<a href="#">
							<li>京公网安备但是你是得不看&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备读博士对比&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备收点半开始吧&nbsp;&nbsp;|</li>
						</a>
						<a href="#">
							<li>&nbsp;&nbsp;京公网安备备收到安备备收安备备收脑VS伯伯VS的&nbsp;&nbsp;</li>
						</a>
					</ul>
					<img src="../images/f3.jpg" />

				</div>

				<div class="bline" id="b-line"></div>
				
					<div class="sevenp" id="s-evenp">
						<p class="s-p1">京东会员</p>
						<p class="s-p2">购物车</p>
						<p class="s-p3">我的关注</p>
						<p class="s-p4">我的足迹</p>
						<p class="s-p5">我的消息</p>
						<p class="s-p6">咨询JIMI</p>
						<p class="s-p7">反馈</p>
					</div>
					<div class="seven" id="s-even">
						<span class="iconfont icon-wode"></span>
						<a href="cart.html" target="_blank"><span class="iconfont icon-gouwuchekong"></span></a>
						<span class="iconfont icon-guanzhu"></span>
						<span class="iconfont icon-zuji"></span>
						<span class="iconfont icon-xiaoxi"></span>
						<span class="iconfont icon-jimi"></span>
						<span class="iconfont icon-shujuguanlisvg68"></span>
					</div>
				<div class="fanhui" id="f-anhui">
					<p>顶部</p>
					<span class="iconfont icon-shang"></span>
				</div>
					
					
				<div class="xfbox" id="x-fbox">
					<div class="xf">
						<img src="../images/z1.jpg"/>
						<form>
							<input class="txt" type="text" placeholder="dell显示器"/>
							<input type="submit" class="sub" name="" id="" value="" />
							<span class="iconfont icon-sousuo"></span>
							<p class="iconfont icon-xiangjix"></p>
						</form>
					</div>
				</div>	
			</div>
</template>  
<script>
import '../fonts/iconfont.css'
import '../css/shouyestyle.css'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
	
	data(){
		const that = this;
		return{
			show:true,
        banner:[{
			url:require('../images/lunbo3.jpg')
		},
		{
			url:require('../images/lunbo4.jpg')
		},
		{
			url:require('../images/lunbo5.jpg')
		},
		{
			url:require('../images/lunbo6.jpg')
		},{
			url:require('../images/lunbo7.jpg')
		},{
			url:require('../images/lunbo8.jpg')
		},{
				url:require('../images/l1.jpg')
		},{
				url:require('../images/l2.jpg')
		}],
    
    
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex= this.realIndex - 1;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }

		}
	},
	methods:{
		toCart(){
			this.$router.push({
				name:'Cart'
			})
		},
		toLogin(){
			this.$router.push({
				name:'Login'
			})
		},
		toReg(){
			this.$router.push({
				name:'Reg'
			})
		},
		toDetail(){
			this.$router.push({
				name:'Detail'
			})
		},
		clearHandle:function(){
			console.log("aa")
			this.show=false
		}
		
		
	},
	components: {
    swiper,
    swiperSlide
  }
    
}



</script>

<style>

.swiper-container{
	width:590px;
	position: absolute;
	margin-left:280px;
}
.swiper-pagination{
  background:pink;
	opacity: 0.8;

}
/* .swiper-pagination-bullet{
	margin-top:-100px;
} */
</style>


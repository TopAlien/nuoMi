<template>
	<div class="shopp">
		<GoBack :title='title' />
		<div class="shopp_carouse">
      <Carousel :listImg='listImg'/>
    </div>
		<div class="shopp_position">
			<div class="shopp_position-left">
				<p class="shopp_position-left-title">nuoMi 商城</p>
				<!-- 加了wrap一层 -->
				<div class="shopp_position-left-wrap">
					<i class="shopp_position-left-icon icon-selfSupport"/>
					<span>自营品牌</span>
					<i class="shopp_position-left-icon icon-bolt"/>
					<span>课程同款</span>
					<i class="shopp_position-left-icon icon-shiled"/>
					<span>7天无理由退换货</span>
				</div>
			</div>
			<div class="shopp_position-right">
				<p class="shopp_position-right-fans">50万粉丝</p>
				<span class="shopp_position-right-allow" @click="toggleAllow">{{ allow }}</span>
			</div>
		</div>
		<ul class="shopp_tab">
			<li class="shopp_tab-item">
				<i class="shopp_tab-item-icon icon-sport" />
				<span class="shopp_tab-item-title">运动装备</span>
			</li>
			<li class="shopp_tab-item">
				<i class="shopp_tab-item-icon icon-femaleClothe" />
				<span class="shopp_tab-item-title">女子服饰</span>
			</li>
			<li class="shopp_tab-item">
				<i class="shopp_tab-item-icon icon-maleClothe" />
				<span class="shopp_tab-item-title">男子服饰</span>
			</li>
			<li class="shopp_tab-item">
				<i class="shopp_tab-item-icon icon-pingpai" />
				<span class="shopp_tab-item-title">品牌周边</span>
			</li>
		</ul>
		<div class="shopp_banner">
			<img class="shopp_banner-img" src="../../assets/images/153745894367.png" alt="">
		</div>
		<ScrollShop :shopArr='scrollShop'/>
		<FixedShop :shopArr='fixedShop'/>
		<!-- 限时折扣 -->
		<div class="shopp_discount">
			<div class="shopp_discount-time">
				<div>
					<img class="shopp_discount-time-discount" src="../../assets/images/discount.svg" alt="">
					<img class="shopp_discount-time-discount_1" src="../../assets/images/discount_1.svg" alt="">
				</div>
				<span class="shopp_discount-time-end">距结束 时间</span>
			</div>
			<div class="shopp_discount-content">
				<div class="shopp_discount-content-item">
					<img class="shopp_discount-content-item-position" src="../../assets/images/6discount.svg" alt="">
					<img class="shopp_discount-content-item-img" src="../../assets/images/action1.jpg" alt="">
					<span>¥169</span>
					<del>¥299</del>
				</div>
				<div class="shopp_discount-content-item">
					<img class="shopp_discount-content-item-position" src="../../assets/images/6discount.svg" alt="">
					<img class="shopp_discount-content-item-img" src="../../assets/images/action1.jpg" alt="">
					<span>¥169</span>
					<del>¥299</del>
				</div>
				<div class="shopp_discount-content-item">
					<img class="shopp_discount-content-item-position" src="../../assets/images/6discount.svg" alt="">
					<img class="shopp_discount-content-item-img" src="../../assets/images/action1.jpg" alt="">
					<span>¥169</span>
					<del>¥299</del>
				</div>
			</div>
		</div>
		<!-- 周销榜 -->
		<div class="shopp_grid">
			<div class="shopp_grid-left">
				<div class="shopp_grid-left-top">
					<div class="shopp_grid-left-top-info">
						<p class="shopp_grid-left-top-info-hot">商城热销榜</p>
						<p class="shopp_grid-left-top-info-hourly">每小时更新</p>
						<span class="shopp_grid-left-top-info-btn">GO ></span>
					</div>
				</div>
				<div class="shopp_grid-left-bottom">
					<p >瑜伽伸展</p>
					<span>GO ></span>
				</div>
			</div>
			<div class="shopp_grid-right">
				<div class="shopp_grid-right-item right-top">
					<p>课程同款</p>
					<span>GO ></span>
				</div>
				<div class="shopp_grid-right-item right-center">		
					<p>室内训练</p>
					<span>GO ></span>
				</div>
				<div class="shopp_grid-right-item right-bottom">
					<p>跑步骑行</p>
					<span>GO ></span>
				</div>
			</div>
		</div>
		<HaveTopShop :shopArr='shopData'/>
		<div class="shopp_noMore">
			- 没有更多商品 -
		</div>
	</div>
</template>
<script>
	import GoBack from '@/components/GoBack'
	import Carousel from '@/components/Carousel'
	import HaveTopShop from './components/HaveTopShop'
	import FixedShop from './components/FixedShop'
	import ScrollShop from './components/ScrollShop'

	export default{
		name:'shopp',
		components:{
			GoBack,
			Carousel,
			ScrollShop,
			FixedShop,
			HaveTopShop
		},
		data(){
			return{
				title:'nuoMi商城',
				allow:'关注',
				// 轮播图片 
        listImg:[
          {
            url:'../../../static/1538215096151_750x340.jpg'
          },
          {
            url:'../../../static/1538973105079_750x340.jpg'
          },
          {
            url:'../../../static/1538966114813_750x340.jpg'
          },
          {
            url:'../../../static/1538291694130_750x340.jpg'
          }
				],
				shopData:[
					{
						id:0,
						topUrl:'../../../static/banner1.jpg',
						topTitle:'室内训练',
						url:'../../../static/banner2.jpg',
						title:'买买买',
						money: 99
					},
					{
						id:1,
						url:'../../../static/banner1.jpg',
						title:'买你妹',
						money: 55
					},
					{
						id:2,
						url:'../../../static/banner4.jpg',
						title:'买个毛线',
						money:77
					},
					{
						id:3,
						url:'../../../static/banner3.jpg',
						title:'买什么买',
						money:66
					}
				],
				fixedShop:[
					{
						id:0,
						title:'新品上线',
						url:'../../../static/banner1.jpg',
						text:'智能体制陈',
						money: 99
					},
					{
						id:1,
						title:'新品上线',
						url:'../../../static/banner1.jpg',
						text:'智能体制陈智能体制陈智能体制陈智能体制陈智能体制陈智能体制陈智能体制陈',
						money: 99
					},
					{
						id:2,
						title:'新品上线',
						url:'../../../static/banner1.jpg',
						text:'智能体制陈',
						money: 99
					},
					{
						id:3,
						title:'新品上线',
						url:'../../../static/banner1.jpg',
						text:'智能体制陈',
						money: 99
					},
					{
						id:4,
						title:'新品上线',
						url:'../../../static/banner1.jpg',
						text:'智能体制陈',
						money: 99
					},
					{
						id:6,
						title:'新品上线',
						url:'../../../static/banner1.jpg',
						text:'智能体制陈',
						money: 99
					}
				],
				scrollShop:[
					{
						id:0,
						title:'人气单品',
						url:'../../../static/banner2.jpg',
						text:'智能体脂秤',
						describe:'多彩好看 智能体脂秤',
						money: 99
					},
					{
						id:1,
						title:'人气单品',
						url:'../../../static/banner2.jpg',
						text:'智能体脂秤',
						describe:'多彩好看 智能体脂秤',
						money: 99
					},
					{
						id:2,
						title:'人气单品',
						url:'../../../static/banner2.jpg',
						text:'智能体脂秤',
						describe:'多彩好看 智能体脂秤',
						money: 99
					},
					{
						id:3,
						title:'人气单品',
						url:'../../../static/banner2.jpg',
						text:'智能体脂秤',
						describe:'多彩好看 智能体脂秤',
						money: 99
					},
					{
						id:4,
						title:'人气单品',
						url:'../../../static/banner2.jpg',
						text:'智能体脂秤',
						describe:'多彩好看 智能体脂秤',
						money: 99
					}
				]
			}
		},
		methods:{
			toggleAllow(){
				return this.allow == '关注' ? this.allow = '已关注' : this.allow = '关注'
			}
		}
	}
</script>
<style lang="stylus">
.shopp
background-color #fff
	&_carouse
			width 100%
			height 160px
	&_position
		position relative
		top -35px
		display flex
		width 95%
		height 70px
		margin 0 auto
		font-size 12px
		font-weight 200
		background-color #ffffff
		border-radius 5px
		box-shadow 1px 1px 5px 0 #ccc
		z-index 1
		align-items center
		&-left
			flex 1
			padding 10px
			&-title
				font-size 16px
				padding 0 0 5px
			&-wrap
				margin-top 5px
				display flex
				align-items center
				& span
					margin-right 10px
			&-icon
				display inline-block
				width 15px
				height 15px
			.icon-bolt
				background transparent url('../../assets/images/bolt.svg') 100% 100% / 15px 15px no-repeat 
			.icon-selfSupport
				background transparent url('../../assets/images/selfSupport.svg') 100% 100% / 15px 15px no-repeat 
			.icon-shiled
				background transparent url('../../assets/images/shield.svg') 100% 100% / 15px 15px no-repeat 
		&-right
			padding 10px
			&-fans
				margin-bottom 5px
			&-allow
				display inline-block
				text-align center
				width 50px
				height 20px
				line-height 20px
				margin-top 2px
				border 2px solid #24c789
				border-radius 20px
	&_tab
		margin-top -70px //shopp-position 取消
		height 100px
		background-color #fff
		display flex
		align-items flex-end
		padding 20px 
		justify-content space-between
		&-item
			&-icon
				display block
				margin 0 auto
				width 40px
				height 40px
				border-radius 50%
				margin-bottom 8px
			.icon-sport
				background rgb(183,142,112) url('../../assets/images/bag.svg') 50% 50% / 25px 25px no-repeat
			.icon-maleClothe
				background #24c789 url('../../assets/images/short.svg') 50% 50% / 25px 25px no-repeat
			.icon-femaleClothe
				background rgb(82,155,211) url('../../assets/images/skirt.svg') 50% 50% / 25px 25px no-repeat
			.icon-pingpai
				background rgb(61,53,151) url('../../assets/images/purse.svg') 50% 50% / 25px 25px no-repeat
			&-title
				font-size 12px
				font-weight 200
	&_banner
		width 100%
		height 120px
		&-img
			width 100%
			height 100%
	&_discount
		box-sizing border-box
		padding 15px
		background-color #fff
		margin 15px 0 15px
		&-time
			display flex
			justify-content space-between
			margin-bottom 10px
			align-items center
			&-discount
				width 60px
				height 100%
			&-discount_1
				width 20px
				height 100%
			&-end
				font-size 12px
				font-weight 200
				color #ccc
		&-content
			display flex
			justify-content space-between
			&-item
				width 111px
				position relative
				&-img
					width 100%
					height 111px
					margin-bottom 10px
				& span
					color red
				& del
					color #777
				&-position
					position absolute
					top 5px
					left 5px
					width 40px
					height 40px
	&_grid
		display flex
		justify-content space-between
		margin-top 15px
		background-color #fff
		text-align right
		color #fff
		font-size 14px
		&-left
			flex 1
			&-top
				position relative
				height 160px
				background transparent url('../../assets/images/storebg-8918f5df5f.jpg') 100% 100% /100% 100% no-repeat
				&-info
					position absolute
					width 100px
					height 100px
					border-radius 50%
					top 0
					left 0
					right 0
					bottom 0
					margin auto
					text-align center
					background-color orange
					white-space pre-wrap
					&-hot
						margin-top 30px
					&-hourly
						color #000
						font-weight 200
						font-size 12px
						margin-top -10px
					&-btn
						display inline-block
						font-size 12px
						margin-top 20px
			&-bottom
				height 80px
				background-color rgb(140,164,208)
		&-right 
			flex 1
			&-item
				height 80px
			.right-top
				background #ccc url('../../assets/images/slogan-cfd33df7dd.png') 100% 100% /100% 100% no-repeat
			.right-center
				background-color rgb(138,192,171)
			.right-bottom
				background-color rgb(150,150,209)
	&_noMore
		width 100%
		height 50px
		line-height 50px
		font-weight 200
		font-size 12px
		text-align center
</style>

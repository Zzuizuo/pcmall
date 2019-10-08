<template>
  <div class="content">
    <div class="pagetop">
      <img src="../assets/logo1.png" alt="">
      <div>探店大师</div>
    </div>
    <!-- <div class="swriper">
      <swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="banner.length!=0">
        <swiper-slide v-for="(item,index) in banner" :key="index" >
          <img :src="item.image" alt="" />
        </swiper-slide>
        <div class="swiper-pagination"  v-for="(item,index) in banner" :key="index" slot="pagination" ></div>
      </swiper>
      <div class="number">{{imgIndex}}/{{detailimages.length}}</div>
    </div> -->
    <div class="listbox">
      <div class="cell" v-for="item in bows" :key="item.id" @click="handleShowMask(item)">
        <img :src="item.cover || ''">
        <div class="celltitle">{{item.name}}</div>
        <div class="cellname">商家：{{item.shop.name}}</div>
        <div class="price">￥{{item.originPrice}}</div>
      </div>
    </div>

    <div class="maskbox" v-if="buyModal" @click="handleHideMask">
        <div class="maskcontent">
          <img :src="product.cover || ''">
          <div class="celltitle">{{product.name || ''}}</div>
          <div class="cellname">商家：{{product.shop.name}}</div>
          <div class="price">￥{{product.originPrice}}</div>
          <div class="maskbtn" @click="handleBuy">购买</div>
        </div>
    </div>
  </div>
</template>

<script>
    import {
        // swiper,
        // swiperSlide
    } from "vue-awesome-swiper";
    require("swiper/dist/css/swiper.css");

    export default {
        name: 'HelloWorld',
        // components: {
        //     swiper,
        //     swiperSlide
        // },
        props: {},
        data() {
          return {
            product: {},
            buyModal:false,
            bows: [{
		"_id": "5d8dfb968db7702a7f636602",
		"online": true,
		"name": "yy1",
		"originPrice": "12",
		"startTime": "2019-10-04T12:08:00.000Z",
		"createTime": "2019-09-27T12:07:50.247Z",
		"shop": {
			"_id": "5d5ce6d061f6b56fe938f7a0",
			"name": "yy",
			"city": "成都市",
			"location": [104.0822579765517, 30.65951404968409]
		},
		"recommendToIndex": true,
		"hot": false
	}, {
		"_id": "5d8dfb968db7702a7f6365ff",
		"online": true,
		"name": "1yy1",
		"originPrice": "12",
		"startTime": "2019-10-04T12:08:00.000Z",
		"createTime": "2019-09-27T12:07:50.241Z",
		"shop": {
			"_id": "5d5ce6d061f6b56fe938f7a0",
			"name": "yy",
			"city": "成都市",
			"location": [104.0822579765517, 30.65951404968409]
		},
		"recommendToIndex": true,
		"hot": false
	}, {
		"_id": "5d7213b5792b301aa33bf06d",
		"online": true,
		"name": "aaa",
		"originPrice": 200,
		"startTime": "2019-10-06T08:07:00.000Z",
		"recommendToIndex": true,
		"createTime": "2019-09-06T08:07:17.249Z",
		"shop": {
			"_id": "5d6fa7c9c98f374b66cf9f7c",
			"name": "123",
			"city": "成都市",
			"location": [104.08329, 30.65618]
		}
	}, {
		"_id": "5d5534dc8f1126669d94991c",
		"online": true,
		"cover": "http://cdn.classx.cn/FuuTT45nFWqECCIaGi5YC02nh3B3",
		"name": "霸王餐",
		"originPrice": "50",
		"startTime": "2019-10-19T10:11:00.000Z",
		"createTime": "2019-08-15T10:33:00.197Z",
		"shop": {
			"_id": "5d55307a8f1126669d9498e2",
			"name": "怡红院",
			"city": "成都市",
			"location": [104.08230371403651, 30.659533441039564]
		}
	}, {
		"_id": "5d5376f1e65f2e69a253a66f",
		"online": true,
		"cover": "http://cdn.classx.cn/FuVNzWhMa0bMcwYpz9LftVGsxJJW",
		"name": "霸王餐",
		"originPrice": "100",
		"startTime": "2019-11-14T02:44:00.000Z",
		"createTime": "2019-08-14T02:50:25.210Z",
		"shop": {
			"_id": "5d5157ee7868b54424cb2e7d",
			"name": "钟二宝的店",
			"city": "成都市",
			"location": [104.08233, 30.659624]
		}
	}, {
		"_id": "5d203b2966bc5c1e394ba803",
		"cover": "http://cdn.classx.cn/Fo9EFxPG0dQBWpmg5LbI6amythTf",
		"name": "【Lee叔叔龙虾馆】200元代金券",
		"originPrice": 200,
		"startTime": "2019-10-06T06:02:00.000Z",
		"createTime": "2019-07-06T06:09:45.068Z",
		"shop": {
			"_id": "5d203af466bc5c1e394ba802",
			"name": "Lee叔叔的龙虾馆1",
			"city": "成都市",
			"location": [104.06945087906, 30.6027520950837]
		},
		"online": true
	}, {
		"_id": "5d2039ca66bc5c1e394ba7fe",
		"cover": "http://cdn.classx.cn/Fo9EFxPG0dQBWpmg5LbI6amythTf",
		"name": "【Lee叔叔龙虾馆】200元代金券",
		"originPrice": 200,
		"startTime": "2019-10-06T06:02:00.000Z",
		"createTime": "2019-07-06T06:03:54.098Z",
		"shop": {
			"_id": "5d20398566bc5c1e394ba7fd",
			"name": "Lee叔叔的龙虾馆",
			"city": "成都市",
			"location": [104.0695123034, 30.6026392547785]
		},
		"online": true
	}, {
		"_id": "5d200d1366bc5c1e394ba7ef",
		"cover": "http://cdn.classx.cn/FiReGN72I3ulzeLoJfcJU5LVkLng",
		"name": "【Lee叔叔龙虾馆】200元代金券",
		"originPrice": 200,
		"startTime": "2019-10-11T02:50:00.000Z",
		"createTime": "2019-07-06T02:53:07.581Z",
		"shop": {
			"_id": "5d200cd566bc5c1e394ba7ee",
			"name": "Lee叔叔的龙虾馆",
			"city": "成都市",
			"location": [104.055152893066, 30.6788902282715]
		},
		"online": true
	}]
          }
            
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData() {
                // this.axios.post('/userapp/open/edi/load',{}).then((res)=>{
                //   console.log(res);
                // })
            },
            handleShowMask(item){
              this.product = item
              this.buyModal = true
            },
            handleHideMask(){
              this.buyModal = false
            },
            handleBuy(){

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    * {
        padding: 0;
        margin: 0;
    }
    
    .content {
        width: 1200px;
        margin: 0 auto;
        .pagetop{
          display: flex;
          align-items: center;
          margin-top: 10px;
          img{
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
        }
        .listbox {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            // justify-content: space-between;
            .cell{
              width: 290px;
              display: flex;
              flex-direction: column;
              padding: 15px;
              border: 1px solid #f0f0f0;
              box-sizing: border-box;
              margin-right: 10px;
              margin-bottom: 10px;
              cursor: pointer;
              &:nth-child(4n){
                margin-right: 0;
              }
              &:hover{
                box-shadow: #aaa 0 0 10px;
              }
              img{
                width: 258px;
                height: 180px;
                display: block;
              }
              .celltitle{
                font-size: 14px;
                color: #242627;
                margin-top: 5px;
              }
              .cellname{
                font-size: 12px;
                color: #666;
                margin-top: 5px;
              }
              .price{
                color: #FF4925;
                font-size: 16px;
                 margin-top: 5px;
              }
            }
        }
        .maskbox{
          background: rgba(0,0,0,.5);
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          .maskcontent{
            background: #fff;
            padding: 40px 60px;
            position: relative;
            img{
              width: 440px;
              height: 294px;
            }
            .celltitle{
                font-size: 16px;
                color: #242627;
                margin-top: 5px;
              }
              .cellname{
                font-size: 14px;
                color: #666;
                margin-top: 5px;
              }
              .price{
                color: #FF4925;
                font-size: 18px;
                 margin-top: 5px;
              }

              .maskbtn{
                position: absolute;
                right: 60px;
                bottom: 40px;
                width: 60px;
                height: 30px;
                background: #FF4925;
                color: #fff;
                font-size: 12px;
                line-height: 30px;
                text-align: center;
                border-radius: 15px;
              }
          }
        }
    }
</style>
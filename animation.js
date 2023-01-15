// 音乐播放
window.onload = function(){ 
    var audio = document.getElementById('music');
        audio.pause();//打开页面时无音乐 去掉则是打开网页即播放音乐
}
function mplay() {
    var audio = document.getElementById('music');
    var musicfbox = document.querySelector('.music-fbox');
    if (audio.paused) {
        audio.play();
        // document.getElementById('musicImg').src="./resource/images/m.png";
    }else{
        audio.pause();
        // audio.currentTime = 0;//音乐从头播放
        // document.getElementById('musicImg').src="./resource/images/m.png";
    }
}
//侧边栏显示俄隐藏
var btnshow = document.querySelector(".fbox-show")
var btnhidden = document.querySelector(".fbox .fbox-hidden")
var menuBox = document.querySelector(".fbox .right-fbox")
btnhidden.addEventListener("click", function(){
    console.log("隐藏客服栏目")
    menuBox.style.display = 'none'
    btnhidden.style.display = 'none'
    btnshow.style.display = 'block'
})
btnshow.addEventListener("click", function(){
    console.log("显示客服栏目")
    menuBox.style.display = 'block'
    btnhidden.style.display = 'block'
    btnshow.style.display = 'none'
})

// 视频播放
// function vplay(src){
//     var video = document.getElementById('video1');
//     video.src = src;
//     var vdiv = document.getElementById('vdiv');
// }

//公告滚动
let el = document.querySelector(".ct-news .news .news-mid .roll-wrapper .roll-box")
console.log("公告滚动："+el)
var t1 = setInterval(function(){
    // 复制第一行元素放到最后
    var nline = el.children[0].cloneNode(true)
    el.append(nline)
    _animation_top(el, 30, 0, 5, 3, 300)
}, 4000) // 数字控制滚动间隔
function _animation_top(elem, iHight, offset, addoffset, itop, time) {
    // 定时器使用
    var tim = setInterval( function(){
        offset += addoffset
        // 修改top属性模拟滚动
        elem.style.top = `-${offset}px`
        if(offset > iHight){
            // 到达一定值停止
            clearInterval( tim )
            // 移除滚动完的元素
            elem.children[0].remove()
            elem.style.top = `-${itop}px`
        }
    }, time)
}

// 游戏截图滚动
let el2 = document.querySelector(".ct-news .v-shot .shot-list .item .img-box")
// console.log("游戏截图滚动："+el2)
var jtflag = true;
var t2 = setInterval(function(){
    if(jtflag){
        // 复制第一行元素放到最后
        var nline = el2.children[0].cloneNode(true)
        el2.append(nline)
        _animation_left(el2, 829, 0, 100, 0, 100)
    }
}, 5000) // 数字控制滚动间隔
function _animation_left(elem, iLeft, offset, offsetadd, ileft, time) {
    // 定时器使用
    var tim = setInterval( function(){
        offset += offsetadd
        // 修改left属性模拟滚动
        elem.style.left = `-${offset}px`
        if(offset > iLeft){
            // 到达一定值停止
            clearInterval( tim )
            // 移除滚动完的元素
            elem.children[0].remove()
            elem.style.left = `-${ileft}px`
        }
    }, time) //每20毫秒执行一次
}
// 游戏截图前一张图和后一张图操作
// var jtprev = document.querySelector('.ct-news .v-shot .shot-list .item .img-prev');
// var jtnext = document.querySelector('.ct-news .v-shot .shot-list .item .img-next');
// jtprev.onclick=function(){
//     jtflag=false
//     let jtprev1 = document.querySelector(".ct-news .v-shot .shot-list .item .img-box")
//     // 复制最后1行元素放到最前
//     var nline = jtprev1.children[4].cloneNode(true)
//     nline.insertBefore(jtprev1)
//     jtflag=true
//     t2()= setInterval(function(){
//         if(jtflag){
//             // 复制第一行元素放到最后
//             var nline = el2.children[0].cloneNode(true)
//             el2.append(nline)
//             _animation_left(el2, 829, 0, 100, 100)
//         }
//     }, 5000) // 数字控制滚动间隔
// }
// jtprev.onclick=function(){
//     var jtprev1 = document.querySelector(".ct-news .v-shot .shot-list .item .img-box")
//     var nline = jtprev1.firstChild
//     _animation_left(el2, 829, 0, 100, 100)
// }
// jtnext.onclick=function(){
//     _animation_left(el2, 829, 0, 100, 100)
// }

//新闻中心图片切换
var aImgs = document.querySelectorAll('.ct-news .ct-img-news .img-news .imgs img');
var aLis = document.querySelectorAll('.ct-news .ct-img-news .img-news .dots li');
var btnLeft = document.querySelector('.ct-news .ct-img-news .img-news .img-left');
var btnRight = document.querySelector('.ct-news .ct-img-news .img-news .img-right');
var index=0;    //当前图片下标
var lastIndex=0;
btnRight.onclick=function(){
    //记录上一张图片的下标
    lastIndex = index;
    //清除上一张图片的样式
    aImgs[lastIndex].className = '';
    aLis[lastIndex].className = '';
    index++;
    index %= aImgs.length;    //实现周期性变化
    //设置当前图片的样式
    aImgs[index].className = 'on';
    aLis[index].className = 'img-active';
}
btnLeft.onclick=function(){
    //记录上一张图片的下标
    lastIndex = index;
    //清除上一张图片的样式
    aImgs[lastIndex].className = '';
    aLis[lastIndex].className = '';
    index--;
    if (index < 0) {
        index = aImgs.length - 1;
    }
    //设置当前图片的样式
    aImgs[index].className = 'on';
    aLis[index].className = 'img-active';
}

// 视频中心滚动
let el3 = document.querySelector(".ct-news .v-center .v-img-list .wrapper .img-list")
console.log("视频中心滚动："+el3)
var t3 = setInterval(function(){
    // 复制第一行元素放到最后
    var nline = el3.children[0].cloneNode(true)
    el3.append(nline)
    _animation_left(el3, 205, 0, 80, 0, 300) //滚动方法复用
}, 2000) // 数字控制滚动间隔
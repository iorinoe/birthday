// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的木野子",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个一起过的生日",
        "犹记得往昔的华容道",
        "菇菇夙夜奋战四小时的样子",
        "是吾辈之楷模",
        "虽然嘴上说着我们是ANTI",
        "但是喵起来都是GACHI",
        "盼菇菇宠辱不惊，闲看庭前花开花落",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的木野子": "./imgs/xiaokeai.png",
       "今天是你的生日": "./imgs/birthday.png",
       "菇菇夙夜奋战四小时的样子": "./imgs/huarongdao.png",
       "但是喵起来都是GACHI": "./imgs/zhijia.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始奏乐",
        play: "木野子之歌",
        bannar_coming: "五彩斑斓的气球",
        balloons_flying: "好像生日少点了东西",
        cake_fadein: "GACHI观众的蛋糕？",
        light_candle: "ANTI们点火的蜡烛？",
        wish_message: "贺菇诞辰悦也",
        story: "来自GACHI的生日祝福",
    }
};

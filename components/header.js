var HeaderLayout = {
    data:function(){
        return {}
    },
    props:{},
    methods: {
        
    },
    template:`
        <div class="header">
            <div class="nav">
                <div class="left">
                    <div class="logo">
                        <img src="/images/logo.png" alt="">
                    </div>
                </div>
                <div class="cen">
                    <ul class="menu">
                        <li class="lis">
                            <span class="active">首页</span>
                        </li>
                        <li class="lis">
                            <span>产品中心</span>
                            <div class="twoNav">
                                <i class="arrow"></i>
                                <p class="navText">
                                    <a href="">协同办公系统（OA）</a>
                                </p>
                                <p class="navText">
                                    <a href="">人力资源管理系统</a>
                                </p>
                                <p class="navText">
                                    <a href="">电子票据管理平台</a>
                                </p>
                                <p class="navText">
                                    <a href="">智能报销管理系统</a>
                                </p>
                                <p class="navText">
                                    <a href="">合同管理系统</a>
                                </p>
                            </div>
                        </li>
                        <li class="lis">
                            <span>新闻中心</span>
                        </li>
                        <li class="lis">
                            <span>客户案例</span>
                        </li>
                        <li class="lis">
                            <span>关于我们</span>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="icon">
                        <img src="/images/Hotline.png" alt="">
                    </div>
                    <div class="textBox">
                        <p class="phone">010-87897479</p>
                    </div>
                    <div class="btn" @click="handleOpen">申请试用</div>
                </div>
            </div>
        </div>
    `
}
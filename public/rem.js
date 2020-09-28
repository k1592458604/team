
    // 单位转换
    function rem() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
    }
    rem();
    window.onresize = rem;
    // 阻止默认事件
    document.addEventListener('touchmove', function (event) {
        event.preventDefault()
    }, { passive: false })

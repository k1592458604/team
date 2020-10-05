<template>
    
  <div class="allBox">

        <router-view></router-view>    
    <!--  <img
      src="/img/A0启动图.jpg"
      alt=""
      v-if="show"

    /> -->
        <van-tabbar v-model="active" active-color="rgb(235, 97, 0)" route v-show="this.$route.meta.isShow">
            <van-tabbar-item to="/home">
        <template #icon>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA2CAYAAABz508/AAAIcUlEQVRoQ+1bbWybVxV+zn3fxElJmpbS0g/Wog02hkbWaVWQtqLOINuvS6IItmXTYBpjSGWjP4BNggqhhkoTK+o+AJV1iFIxtAlZo20a17U9Wncq7UpTtTCG9sHYj65sTenImqStsd97DzqRPZnEjr/dALlSlB/vveec+9xzzz33OdeEBjdmpn379rU3NTWt0FrfwcxfAHAlEb0FYA+AbR6P57TX60020jRqpLJwOHylZVndRBRk5jUAWvPoH8kAsieVSj3f29s71ggbGwLE3r17r1ZKfQPA55l5KRG1AJhOtwHwnlLqdWPMY8y8Z+3atf+qJyB1AyIUCrW1tbUtV0qtZ+a7AbRVMZETAB4mooNHjx59r7+/X4Cqaas5ELFY7ApmDgDoZmYvgLk1stgFcIKIwpZlhUdGRl7q6+vTNZI9rXuWpePQoUPzL1y48C1m/iKAFVV6wHS60wDeBhBzXXdLT0/PX8sytEDnqjwikUi0aK2Xp1Kpe4hofQ1Xv6S5EZGA8mvLsp5IJpN/6+npuVjSwDydKgIiFostMsZ8FsBaZvYT0aIiwa9S+4qOIyJm5n8COMDMsm2igUDgbNGBkzqUBcTg4OAc27a/AuBeAB8H0FGuwjr3l6P2VaXUDq31L8s5aYoCEYlEPAAWMnOfZVkPyvFX58nURDwRnSaija7rRoaGhs719/dLsC3YCgJx/PjxOcPDwz6lVBCAuP9HJSusiZUNEsLMhoheIaK9zLz71KlTx9etWydxZUqbMjEB4Ny5c7cx8/3i/sw8n4hUg2yvlxo5Zs8Q0e+VUlv8fv/xyYreByKz/z9DRJuZufNyBb96IZEjVzziWaXUI83NzW94vd6JLTMBhCRBWusfENGXATQ1wJiZoEI85Oeu6z7R3d09MgFEJBK5n4geLXAJmglG18sGyTseCAaDv8oCcRsRbQOwoF4aZ6BcBjBMRF93HGdgAogdO3a0LFmy5D5m/i6Aj8xAo2tqEjOPKaUGiWi73+8/SETm/WAZCoWstra2TqXUD5n5cwDsmmqfWcLiSqmvBQIBIYMm2pTjUxIopdTdzLyBiJYysyRU/1X5Qx7MLwGQeUykAUS023Xdr0qQLAhE9sPg4OCHmpqahEq7HcBqANbMWtSi1sgd5CwRxZn5GBE9nL0UlgWEqGFmFYlEFimlbgKwEcB1WVSLmnF5O6SI6BlmfrKlpeWV8fHxDtu2XwLwwbI9YvI8YrHYBwDcY4wRzmFZCXRbo6HQzDyilBIP2BQMBl/L8e5lNQMiKzSRSMxLJpO9AHqJyMfM1VBwVYOVc58YADDg8XhOZLPFugKRDbLRaHS+bdvXpNPph4SUzQSjqidWpgDJDh93Xfe5xYsXv7Vq1aq8F6rBwcHae0Q+Q6PRaBczfy8TVIWjqGdglckOM/PTxpgtuZG/EIgNA0IMkDyko6NjlTGmW5grANfXGBC5HA0x806t9UA5XGVDgciJIbbrukuNMRI/hMi5tkx3z9f9TWbebNt22OfzyXYoi86/LEDkzkKO33g8frsx5kEA1wBoLyM5m9gCckP0eDyPe73e8XwIJRIJ2xizzHXdqwOBwPP5+tQViEzC9SmPx/NisTplJBKR2sbNUuoDIOU+qXUWInuERDlJRM8B+K3jOG8UAuDixYs3KqVuBXArEQ05jnNnvr7hcPhGy7JeACApgLQDqVTqrt7e3uGimWUxd45Go9czc5SIjimltvr9/nixMZK+27a9HMAarfWXiOhmZp7gP4SaZ+Y/KKW2aa1fGB8ff6dQAScSiSwkon4ikiLSMolFRBRyHOeOyTYkEom2ZDIpnvLpHG+U6/e3g8HgU1UDEY/HV2qtT+Yo/rNSajMRJVzXfbcUBnnXrl3zOjo6ViSTyda5c+f+ZfXq1QULvsKX7t+/f5Hruncys2S583MnnQ+IUCjU2t7e/qQkgnkW6RIR3eI4zrGJhSi2ioW+5wFCukoQe1NqlMx8QP47jvNOpTqy4yKRyFWZLXAXM0uaP+V4ngyEABeLxYRaeCwTm6aYwcwv27Yd8Pv9b9caiKwyIT1GM4SpbJ9tfr//NSnGlAOKVNJSqdR6rfW9RHTVdElbPo+IxWI3GWN+A+CKfHqJ6Mejo6Mb+vr6LtULiMl6paQft217azqdPtHa2jpWKMD29/erzs7O+a2trX4AmwB8rBTwCsWIeDzu11qHJhWjkkT0lOM436xHjCjFXjkRpGg7BOCPSqm/a63/YYxJKqU6iGieUuqTxpgAEa3MBtJSBBcCQsbGYrFuY8zPMp4hIDzq8XgeyT2SG+UR+eaSAiCEifxJbJHTo5mZ2yupo0wHRIZ9u4+IfgRge0tLy8bJecnlBKKUhS65z3RAiBAJntFodE0wGDyYN16UrGlSxwKnRqXiqh5XDIhiCv5vPGIWiGIIZL7PesQsEP/pKrMeMesRsx6RN3z+z2wNoU2DweAUPqLEQ6Pya/jAwMCHm5ubhYyR1zWXtTHzJaXU9x3HkTceFbWKPUK0hcPh6yzLehrADRVpr82gNBH91LKsTT6f73ylIqsCInOz+4TW+hdE1NXgZ0dS5B1XSm0fHR39Tl9fn1ziKm5VAyGad+7cuWDOnDnCBj0AQDjJmsgtNCsp8ymljsoLOZ/Pt7tcwief3JoZLLR6Op1eaYx5iJkrDlrFlpSI5Jc9P7Esa+vhw4dP1+onCzUDIncC8XhcWGp5jyDFnVqUAKXKdZ6IXiSiDYFA4OVigJX7vS5AiBFHjhxpHRsbu0Fr7SUieb95LTMLd1iOzjMA/sTMhyzL+t358+dPVhsLCgFUjlHlgjzRXzjIrq6uBULFZaiyWzJMtLzol7+FUnghIim2nGXmM8z8KjMLgfI6EY0Eg8F3yy3zlWvsvwEBef9kABJytgAAAABJRU5ErkJggg==" />
        </template>
        <span>首页</span>
        </van-tabbar-item>
      <!-- v-show="this.$route.meta.isShow" -->
            <van-tabbar-item to="/course">
      <template #icon>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAYAAABqbKGZAAAFZElEQVRoQ+2af4hUVRTHv+e+t7q72ZSkJCmLWP0RIVngbgpREzrz3luWyaIlg0RR/4hEJJDAKDZCoiisKCNQQoLUgUpYd9682dEHhjJuEqTRX/2hW5rrauXij2lm3j1xYTbGbWbeDOwyN/D++859nM89555z7rmXMA3D87xnpJTfNvGrU7ZtL29CviFRakgqRKgC5gaAP4lIVpvCzALAfACn/w8wnhDi9UKhMFENpq2tbS4z7wNwTXsYZv66o6NjUzQa/asazODg4Ly2trYsMxdvw4S4O7mue7TJfaNW/VXbts9OzpvcMy23jOu63CTMuBDi6Xg8/tNUGAC/AfiemQs1/jlbCPEUM/8yI25WAZNi5qq+XlZsERH1AJioA9PousxMaFYwRMRSyicAnKmljWEYjpTyUwCB9jAAHrUs68daMOl0OgFgLzPL2zC3rtLMuplOlvF93ywUCt3MvCKXy+0aGBioWlFM9SIVmiej2R9EVKrlZsw8G8CdAK5Mt5slk0mjs7MzAmCBaZprAKxj5gcBXGbmqOM4PzcSWSphGpFXMvVCc6P/OGVZVvfg4OBi0zS7iagbwAoAywCoRRtVNR6AhwBssW17byM/bhmMEMKXUq4honnMfBeA6wB8IcRBZj5pmubcYrF4kpn3BEGwra+vTxWxdUfLYJg5Q0Q7iEglX6Xwwd7e3ouV2rqu+wMAwzTNvtWrVytr6QkjpdwshDgO4CPbtndM1VIFgXw+/w6ArUSUsCwrrS0MEcUBqKrjXsuylqjErZT1fX/ezZs31wohnlV7Rn1XlrNte7O2MKOjoyu7uro+UBtcCJEIgmA2Ea0DYAMwKxUnoitSyoWO4/xdD6hle0YVmq7rrgXwGREZzHwHgHon37W2bR/QFiabzS4pFosZAPeHuhBR2rIsZbWao6WWUVq5rvsNAJUo6w5mvkhEKyrPUVMntBymic6OyjObbNveX4u65TDJZLIjEon8ysz3hBuHPwbwWq1A0HIYBZBOp3cz88thrgYgZxjGc7FY7EI1WS1gPM9bKaX0AcwKAbohpbR7e3uPaQuTSqXmE9ERAEvDrMPM7zuOs11nGNXo+ISZN4bkGsVwrr29/YFoNPqf44oWblYO0RuJ6ENmnhNmHcMw4rFYTOWnW4Y2MOl0+mFmPgxgcRgMgAO2bavqQU+YgYEB0dPT4wFY1QDMeSHEY/F4/FKlrDaWKbvaegBfNABzjZlfchznkLYwvu/fnc/nzwPoDAFSDY5329vb36wMBFpZRgF4nrdfSvlCA9Y5WigUXkwkEmOTstrBuK6rDm1D6rgcAnTVMIxVsVjslLYwQ0NDC4QQ3wF4oB5MuaX8huM4O7WFOXHiRMfExMQeZlaht+41JTOfGRkZWTbZJNTOzcqF5xZmfg9AR4irqab/45ZljSg5LWGy2ezyYrGoDm2LwgKBEGJ3PB5/RVuYZDI5KxKJ+My8MgyGiM5KKR9xHGdCS8uUXW0bM+8KgwFwlZn7HcfJaAuTyWTuC4JAdTHDQnRARG/lcrmd2sKUyxtVq8XCrENEh03TXK81TCaTeV71oMNCNBFdCoJgldYwqVRKXQrnACwMC9HMvFVrmGQyOScSiXwJIMHM9RKo6lMPaw2jADzP2y6lfJuIqjU7VO/5tOraMPNxrWGUa2UymSdLpdIBIlrwbw1GdIGZvzIM41CpVDo3NjZ2ecOGDXntYXzfn5PP59XdTBeAY0KIfbFY7Ei1Z2DawyhrDA8PLw2C4LJlWb/XraSn+e1MWEqY/D5z7wAa1aAsNy23zTP1EEiV2s2M61LKzysvU5vo5M+sZdRFaDMk4+Pj3N/fH1TO0QXmHxqW620Azy1NAAAAAElFTkSuQmCC" />
        </template>
        <span>课程</span></van-tabbar-item>
            <van-tabbar-item to="/record">
      <template #icon>
          <img src="data:image/png;base64,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" />
        </template>
      <span>约课记录</span></van-tabbar-item>
            <van-tabbar-item to="/exercise">
      <template #icon>
          <img style="background:#fff" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTA1MTBDRjlDMjIwMTFFOThBODNDNERFMzE4MzM4NDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTA1MTBDRkFDMjIwMTFFOThBODNDNERFMzE4MzM4NDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDUxMENGN0MyMjAxMUU5OEE4M0M0REUzMTgzMzg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDUxMENGOEMyMjAxMUU5OEE4M0M0REUzMTgzMzg0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Php7KSUAAAPhSURBVHja3JpraI1xHMf/Y17IreaWS8iUeIHkuo0Xi3bGiBcIxbBsxyUMRXhhSSkris1myKUsXpjIzrBMks1sXsjKNpc3aoWZGDaz+f47v9Xx7P8857n9n8t+9Wk7/+d5zulzfv/n97+cJ6a0tJQhBoAgSAGDWTi6mLvRB/wBH8F1cEt0UiAQEF4cC+JBORjPvBurQAlYaeRbqfC4VHesAHlGxMYy/0RQbxL6MP/F4t4qNqa3iv3ujWJPQJGeE2N9JHUPLDVSFf0QJUak/CJ2UzAwp4G7oDgUCo3zo9gFsFrRthXcoQyuATWQm+AnsUKQIZAqULQNA9VKOa+KnQWZirZMgZSqnBfFToAdAqlzUa7rlpvoRbHD4IAJqUi551zOS+PYPpBrQao7hvLMeUVsDzilaMsC+SbfL84LYjvBGUGm8q28qdtiGTRWWe1+yqhwU2wDuCoYp6xKPQPJbonxGcMNCZmqAkmBQKDLDbHlNCWyO1MvSKrT6XvsLy3rH+mYJhmNWpAIqQ6ni0c7WEhdRYZUAqTanZ4rtoL5kqRqSKrN6dn9VzCXvlVlmbcqVU3dr83pcayZMlUvkDpvhxQLb4E7uoJuoky5IiVL7D2YDRrdkpLRFRv4zQw+uylld8begHkCqS1OS9kp9pqkmgVSRTZIJRiRskusEswBLYr2zTZIVZFUh9PLFj49Sha0bxIsR8xIJdJUzHBYyVi5htRFSVKjwQKZYnwXdpGgPV2i1EC+UQPWyhLjW87LVKQuSZIaQcsS/ttYnQyxK6znljOPoESpeJprTpZ1j/FisFHl2FvQaUGKd7EkgRSvti/Z/79ixtgpls967qPzmAZywH0wBfwyOVyISnoKZXGQrKrIpbapHJsBjrDwnmA9vf5pUEqUKb4nErLSr6OJFWpIMVoV89gFTpLcdJ1yalL8fi22OmvQEitgPX/xUMaSiP/3klyjDrlKlULBs5/HbAg1Md61sqJcOxOMUrRxudwIuR8aUp2Cz8yxa0YuEjvGwnvp0SJVpT1bIfdd0P2UUpepO9sWyrniIXBc57UBjWPZVJazqaDw4eCdyj3F9xjT7F7tRortp3tET8RRidYKnvWRYD0NC00Kqf7gAXVLI2FoHNttQIrRPFHPULGOCswr8CmifThNkRJNJKOv3ozxreXTBt88VeNYLWXiId1TykeEJtFyx+xTdy16xYImvrH0iNc8E49BGf1t0Lh2FgkPsbgGlLLQTKBicJumUk9Vyrqo+5ZZXAPyMe6DLLE66k56ox84CI5aLHT8ueDtMrcGvhg8fyoVEP7kWquJz/sGrtHiVnf8E2AAJ/f4tFT+KuUAAAAASUVORK5CYII=" />
        </template>
      <span>练习</span></van-tabbar-item>
            <van-tabbar-item to="/user">
      <template #icon>
          <img src="data:image/png;base64,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" />
        </template>
      <span>我的</span></van-tabbar-item>
          </van-tabbar>
      
    <div class="word" v-if="this.$route.meta.isstay" id="box" @touchmove="change" @click="stay">
      <van-icon size="35" color="white" name="chat-o" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // show: true,
        active: "/home",
      };
    },
    mounted() {

      // setTimeout(() => {
      //   this.$route.meta.isstay = true
      //   this.show = false;
      // }, 2000);
    },
    methods: {
      stay() {
        this.$router.push({
          path: "home_stay",
        });
      },
      change(event) {
        let box = document.querySelector("#box");
        let x = event.targetTouches[0].clientX;
        let y = event.targetTouches[0].clientY;
        let clientW = document.documentElement.clientWidth;
        let clientH = document.documentElement.clientHeight;

        // 检测触碰
        if (x < 35) {
          x = 35;
        } else if (x > clientW - 35) {
          x = clientW - 35;
        }
        if (y < 35) {
          y = 35;
        } else if (y > clientH - 35) {
          y = clientH - 35;
        }
        // console.log(y)
        // console.log(x)
        box.style.left = x - 35 + 'px'
        box.style.top = y - 35 + 'px'
      }
    }

  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .word {
    width: 0.7rem;
    height: 0.7rem;
    background: blue;
    position: absolute;
    border-radius: 50%;
    z-index: 999;
    top: 5rem;
    left: 2.7rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 0.17rem;
    height: 0.18rem;
  }
</style>
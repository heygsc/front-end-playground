(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{662:function(v,_,t){"use strict";t.r(_);var a=t(69),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("对于内容复杂和变更频繁的前端应用，页面渲染也常常是性能优化的核心场景。")]),v._v(" "),t("p",[v._v("前面我有给大家整体地讲过"),t("RouterLink",{attrs:{to:"/front-end-basic/performance/front-end-performance-optimization.html"}},[v._v("《前端性能优化--方案归纳篇》")]),v._v("，其实里面已经囊括了大多数场景下的一些性能优化的方向。关于加载流程相关的优化，也有在"),t("RouterLink",{attrs:{to:"/front-end-basic/performance/front-end-performance-startup.html"}},[v._v("《前端性能优化--加载流程篇》")]),v._v("一文中进行详细的介绍。")],1),v._v(" "),t("p",[v._v("本文主要围绕页面渲染相关的内容，来进行性能优化分析。")]),v._v(" "),t("h1",{attrs:{id:"首屏渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏渲染"}},[v._v("#")]),v._v(" 首屏渲染")]),v._v(" "),t("p",[v._v("说到页面渲染，首屏的渲染显然是最首要的。其实前面在归纳篇也有介绍，首屏加载优化核心点在于："),t("strong",[v._v("将页面内容尽快展示给用户，减少页面白屏时间。")])]),v._v(" "),t("p",[v._v("首屏渲染包括了首屏内容的加载和渲染两个过程。")]),v._v(" "),t("h2",{attrs:{id:"首屏内容加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏内容加载"}},[v._v("#")]),v._v(" 首屏内容加载")]),v._v(" "),t("p",[v._v("对于首屏加载过程，我们可以通过以下方式进行优化：")]),v._v(" "),t("ul",[t("li",[v._v("使用骨架屏进行预渲染")]),v._v(" "),t("li",[v._v("对页面进行分片/分屏加载，将页面可见/可交互时间提前")]),v._v(" "),t("li",[v._v("优化资源加载的顺序和粒度，仅加载需要的资源，通过异步加载方式加载剩余资源")]),v._v(" "),t("li",[v._v("使用差异化服务，比如读写分离，对于不同场景按需加载所需要的模块")]),v._v(" "),t("li",[v._v("使用服务端直出渲染，减少页面二次请求和渲染的耗时")]),v._v(" "),t("li",[v._v("使用秒看技术，通过预览的方式（比如图片）提前将页面内容提供给用户")]),v._v(" "),t("li",[v._v("配合客户端进行资源预请求和预加载，比如使用预热 Web 容器")]),v._v(" "),t("li",[v._v("配合客户端将资源和数据进行离线，可用于下一次页面的快速渲染")])]),v._v(" "),t("p",[v._v("这里提到了很多的方向，但是否每个优化点都适用于自身的项目中，需要结合项目本身做调研和验证。举个简单的例子，最后两条优化点明显是基于有自研客户端的前提下，需要配合客户端一起做优化才可以实现。")]),v._v(" "),t("p",[v._v("实际上，对于首屏内容的优化，前端开发在项目中更常用的点是骨架屏、数据分片/分屏加载、SSR DOM 直出渲染这几种，因为这几个优化点相对来说方向明确、效果明确、实现相对简单。如果是想要对项目做差异化服务、做资源的拆分和优化，则可能随着项目的复杂度增加，方案难度提升、实现成本也增长。")]),v._v(" "),t("h2",{attrs:{id:"首屏内容渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏内容渲染"}},[v._v("#")]),v._v(" 首屏内容渲染")]),v._v(" "),t("p",[v._v("对于首屏内容渲染的过程，更多时候我们是指浏览器渲染 HTML 的过程。该过程可以优化的点也是我们常常提及的，浏览器渲染页面的优化过程，比如：")]),v._v(" "),t("ul",[t("li",[v._v("将 CSS 放在"),t("code",[v._v("<head>")]),v._v("里，可用来避免浏览器渲染的重复计算")]),v._v(" "),t("li",[v._v("将 JavaScript 脚本放在"),t("code",[v._v("<body>")]),v._v("的最后面，避免资源阻塞页面渲染")]),v._v(" "),t("li",[v._v("减少 DOM 数量，减少浏览器渲染过程中的计算耗时")]),v._v(" "),t("li",[v._v("通过合理使用浏览器 GPU 合成，提升浏览器渲染效率")])]),v._v(" "),t("p",[v._v("以上这些，是我们在做首屏渲染时考虑渲染过程的优化点。虽然这些优化点属于前端基础和共识，也常常会出现在基础面试中。")]),v._v(" "),t("p",[v._v("很多时候我们为了准备面试而学习了很多的知识和原理，却容易在将知识和实践结合的过程中忘记。越是基础和简单的点，反而往往会在实际写代码的时候被忽略，直到性能出现了问题，这些基础的优化点才会被注意到。")]),v._v(" "),t("p",[v._v("当然，首屏性能的提升，除了渲染相关的，也还有上一篇我们提到的"),t("RouterLink",{attrs:{to:"/front-end-basic/performance/front-end-performance-startup.html"}},[v._v("加载流程相关的优化")]),v._v("。")],1),v._v(" "),t("h1",{attrs:{id:"页面更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面更新"}},[v._v("#")]),v._v(" 页面更新")]),v._v(" "),t("p",[v._v("除了首屏内容需要尽快加载和渲染以外，当页面内容需要更新的时候，我们也需要尽可能地减少更新内容渲染的耗时。")]),v._v(" "),t("p",[v._v("一般来说，页面更新场景我们常常会关注用户操作和页面渲染。")]),v._v(" "),t("h2",{attrs:{id:"用户操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户操作"}},[v._v("#")]),v._v(" 用户操作")]),v._v(" "),t("p",[v._v("页面内容的更新，一般有两种情况：")]),v._v(" "),t("ol",[t("li",[v._v("用户自身操作（点击、输入、拖拽等）的页面响应。")]),v._v(" "),t("li",[v._v("实时内容的变更（比如聊天室的消息提醒、弹幕等等）。")])]),v._v(" "),t("p",[v._v("如果是用户自身的操作，则我们需要及时地更新页面内容，让用户感受到操作生效了。该过程应该是优先级最高的，一般需要同步进行。因为如果有别的任务在执行而导致主线程阻塞，就容易造成页面卡顿的体验。关于卡顿相关的，我会另外再起一篇文章介绍，这里就不过多展开啦。")]),v._v(" "),t("p",[v._v("至于实时内容的变更，优先级更多会比用户操作稍微低一些，也基本上都是异步进行的。我们还可以考虑对变更内容做合并、批量更新，也可以考虑定时拉取最新内容更新的方式。")]),v._v(" "),t("h3",{attrs:{id:"事件委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[v._v("#")]),v._v(" 事件委托")]),v._v(" "),t("p",[v._v("对于用户交互频繁的场景，我们还得注意事件的绑定。相信很多人都了解过事件委托，如果在列表数量内容较大的时候，对成千上万节点进行事件监听，也是不小的性能消耗。使用事件委托的方式，通过将事件绑定在父元素上，我们可以大量减少浏览器对元素的监听，也是在前端性能优化中比较简单和基础的一个做法。")]),v._v(" "),t("p",[v._v("事件委托是很常见的优化方式，需要注意的是，如果我们直接在"),t("code",[v._v("document.body")]),v._v("上进行事件委托，可能会带来额外的问题。由于浏览器在进行页面渲染的时候会有合成的步骤，合成的过程会先将页面分成不同的合成层，而用户与浏览器进行交互的时候需要接收事件。")]),v._v(" "),t("p",[v._v("如果我们在"),t("code",[v._v("document.body")]),v._v("上被绑定了事件，这时候整个页面都会被标记。即使我们的页面不关心某些部分的用户交互，合成器线程也必须与主线程进行通信，并在每次事件发生时进行等待。此时可以使用"),t("code",[v._v("passive: true")]),v._v("选项来解决。")]),v._v(" "),t("h2",{attrs:{id:"页面渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染"}},[v._v("#")]),v._v(" 页面渲染")]),v._v(" "),t("p",[v._v("我们在页面内容更新的时候，一般也可以考虑以下优化点：")]),v._v(" "),t("ul",[t("li",[v._v("减少/合并 DOM 操作，减少页面更新的内容范围，减少浏览器渲染过程中的计算耗时")]),v._v(" "),t("li",[v._v("对于页面动画，可以使用 CSS transition 能力，减少 DOM 属性的修改")]),v._v(" "),t("li",[v._v("使用资源预加载，在空闲时间，提前将用户可能需要用到的资源进行获取并加载（比如下一页的内容）")])]),v._v(" "),t("h3",{attrs:{id:"dom-操作合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作合并"}},[v._v("#")]),v._v(" DOM 操作合并")]),v._v(" "),t("p",[v._v("说到 DOM 操作的合并和减少，目前大多数前端框架都提供了虚拟 DOM 的能力（比如 Vue 和 React）。虚拟 DOM 本身就有对 DOM 操作和更新做优化，通过使用 JavaScript 对象模拟 DOM 元素，并在页面需要更新时对更新的部分做 DOM Diff，尽可能地减少内容的更新频率和范围。")]),v._v(" "),t("p",[v._v("虽然现在大多数前端项目都离不开前端框架，也正因为这些框架本身已经做了很多的优化，所以我们常常会忘记和忽略掉这些注意事项。")]),v._v(" "),t("p",[v._v("但也从侧面论证了，即使是很基础的优化点也需要重视，即使是简单的优化点也可以做出很棒的设计。")]),v._v(" "),t("h3",{attrs:{id:"页面滚动渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面滚动渲染"}},[v._v("#")]),v._v(" 页面滚动渲染")]),v._v(" "),t("p",[v._v("考虑到页面滚动的场景，可能会出现性能问题的地方常常是长列表/页面的渲染。")]),v._v(" "),t("p",[v._v("由于页面内容过多，页面的 DOM 元素数量也很多，容易造成页面渲染的卡顿。在这样的情况下，我们可以考虑仅渲染可见区域的部分，比如页面内容超出滚动范围之外，就可以进行销毁，将页面的 DOM 数量保持在一定范围内。")]),v._v(" "),t("h1",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[v._v("#")]),v._v(" 结束语")]),v._v(" "),t("p",[v._v("本文主要围绕页面渲染和更新的过程，介绍了一些性能优化的方向。其实如果你有注意到，就会发现本文的内容大多数还是基础和简单的前端知识点。")]),v._v(" "),t("p",[v._v("还是那句话，前端基础和原理知识基本上大多数开发都掌握了，但是要怎么将这些知识在项目中发挥到最佳的作用呢？这才是我们工作中在不断探索和学习，获得经验和成长的关键点。")]),v._v(" "),t("p",[v._v("纸上得来终觉浅，了解一些知识很简单，但是要深入理解、熟练掌握后，再结合自身经验将它发挥出来，才是其价值的完整体现。")])])}),[],!1,null,null,null);_.default=r.exports}}]);
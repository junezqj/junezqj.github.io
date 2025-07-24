import{_ as s,c as e,d as a,o as i}from"./app-YirvRM7o.js";const l={};function c(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>垃圾回收： 不再需要的内存 需不需要是有人决定的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function createInstance() {</span>
<span class="line">const doms = new Array(10000).fill(0).map((_, i) =&gt; {</span>
<span class="line">const dom = document.createElement(&#39;div&#39;);</span>
<span class="line">dom.innerHTML = i;</span>
<span class="line">return dom;</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">    function increase() {</span>
<span class="line">        doms.forEach(dom =&gt;</span>
<span class="line">            dom.innerHTML = Number(dom.innerHTML) + 1</span>
<span class="line">        );</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return increase;</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const increase = createInstance();</span>
<span class="line">const btn = document.querySelector(&#39;button&#39;);</span>
<span class="line">btn.addEventListener(&#39;click&#39;, increase);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DOM元素不是垃圾，是被需要的；跟占用的内存大小无关</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const nums = [1, 2, 3, 4, 5];</span>
<span class="line">const sum = nums.reduce((total, num) =&gt; total + num, 0);</span>
<span class="line">console.log(sum); </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看不出来还需不需要</p><p>JS 垃圾回收机制：无法触达的内存空间，即你访问不了的 可触达但我们不再需要的属于内存泄漏。 解决方案：让其不可触达</p><p>引用计数、标记清除（新生代、老生代、星历图）</p><p>闭包环境容易让我们掉以轻心，从而导致那些我们不再需要的内存空间仍然可以被触达，于是导致了内存泄漏</p><ol><li>持有了不再需要的函数引用，会导致函数关联的词法环境无法销毁，从而导致内存泄漏</li><li>当多个函数共享词法环境时，会导致词法环境膨胀，从而导致出现无法触达但是无法回收的内存空间 （increase未使用到，本来是可以被优化的，但是其他函数使用到了，词法环境不得不膨胀来适应所有函数）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function createInstance() {</span>
<span class="line">    const doms = new Array(10000).fill(0).map((_, i) =&gt; {</span>
<span class="line">        const dom = document.createElement(&#39;div&#39;);</span>
<span class="line">        dom.innerHTML = i;</span>
<span class="line">        return dom;</span>
<span class="line">    })</span>
<span class="line"></span>
<span class="line">    function increase() {}</span>
<span class="line">    function _temp() {doms}</span>
<span class="line">    return increase;     // 到了这个时间节点，词法环境优化的步骤已经结束了</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let increase;</span>
<span class="line">const increase = createInstance();</span>
<span class="line">const btn = document.querySelector(&#39;button&#39;);</span>
<span class="line">btn.addEventListener(&#39;click&#39;, () =&gt; {</span>
<span class="line">    increase = createInstance();</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const t=s(l,[["render",c]]),p=JSON.parse('{"path":"/frontend/js/test.html","title":"","lang":"zh-CN","frontmatter":{},"git":{},"filePathRelative":"frontend/js/test.md"}');export{t as comp,p as data};

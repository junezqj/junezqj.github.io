import{_ as s,e as a,g as e,o as l}from"./app-unMoNcBm.js";const i={};function t(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="git-常用命令手册" tabindex="-1"><a class="header-anchor" href="#git-常用命令手册"><span>Git 常用命令手册</span></a></h1><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 设置全局用户名</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置全局邮箱</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email@example.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看配置列表</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--list</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库操作" tabindex="-1"><a class="header-anchor" href="#仓库操作"><span>仓库操作</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 初始化仓库</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 克隆远程仓库</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>  <span class="token comment"># 克隆指定分支</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=s(i,[["render",t],["__file","command.html.vue"]]),o=JSON.parse('{"path":"/git/command.html","title":"Git 常用基本命令","lang":"zh-CN","frontmatter":{"title":"Git 常用基本命令","date":"2025-03-19T00:00:00.000Z"},"headers":[{"level":2,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":2,"title":"仓库操作","slug":"仓库操作","link":"#仓库操作","children":[]}],"git":{"updatedTime":1742378805000,"contributors":[{"name":"junezqj","username":"junezqj","email":"junezqj@gmail.com","commits":1,"url":"https://github.com/junezqj"}],"changelog":[{"hash":"3315461c663f437745cf19b7ed776f9998f2482c","time":1742378805000,"email":"junezqj@gmail.com","author":"junezqj","message":"feat: 添加git基本命令"}]},"filePathRelative":"git/command.md"}');export{r as comp,o as data};

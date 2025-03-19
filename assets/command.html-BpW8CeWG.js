import{_ as n,e as a,g as e,o as l}from"./app-BL_EWje8.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="git-常用命令手册" tabindex="-1"><a class="header-anchor" href="#git-常用命令手册"><span>Git 常用命令手册</span></a></h1><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 设置全局用户名</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础工作流" tabindex="-1"><a class="header-anchor" href="#基础工作流"><span>基础工作流</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 查看当前状态</span></span>
<span class="line"><span class="token function">git</span> status                 <span class="token comment"># 查看完整状态</span></span>
<span class="line"><span class="token function">git</span> status <span class="token parameter variable">-s</span>              <span class="token comment"># 精简状态显示</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>             <span class="token comment"># 添加指定文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>                  <span class="token comment"># 添加所有文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> *.js               <span class="token comment"># 通配符添加</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 提交更改</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;commit message&quot;</span>          <span class="token comment"># 常规提交</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;commit message&quot;</span>       <span class="token comment"># 跳过add直接提交已跟踪文件</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看提交历史</span></span>
<span class="line"><span class="token function">git</span> log                    <span class="token comment"># 查看提交历史</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--oneline</span>          <span class="token comment"># 单行显示</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--graph</span>            <span class="token comment"># 图形化显示</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">-p</span> filename.txt    <span class="token comment"># 查看文件修改历史</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理"><span>分支管理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 分支操作</span></span>
<span class="line"><span class="token function">git</span> branch                      <span class="token comment"># 列出本地分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-a</span>                   <span class="token comment"># 列出所有分支（含远程）</span></span>
<span class="line"><span class="token function">git</span> branch feature/login        <span class="token comment"># 创建新分支</span></span>
<span class="line"><span class="token function">git</span> checkout dev                <span class="token comment"># 切换分支</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> hotfix          <span class="token comment"># 创建并切换分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> old-branch        <span class="token comment"># 删除分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-m</span> new-name          <span class="token comment"># 重命名当前分支</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 合并与变基</span></span>
<span class="line"><span class="token function">git</span> merge feature              <span class="token comment"># 合并指定分支到当前分支</span></span>
<span class="line"><span class="token function">git</span> merge <span class="token parameter variable">--abort</span>              <span class="token comment"># 中止合并冲突</span></span>
<span class="line"><span class="token function">git</span> rebase main                <span class="token comment"># 变基操作（改变提交基础）</span></span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>          <span class="token comment"># 继续变基操作</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 远程操作</span></span>
<span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> old-branch  <span class="token comment"># 删除远程分支</span></span>
<span class="line"><span class="token function">git</span> fetch <span class="token parameter variable">--prune</span>                    <span class="token comment"># 同步远程已删除分支</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程协作" tabindex="-1"><a class="header-anchor" href="#远程协作"><span>远程协作</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 远程仓库</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token parameter variable">-v</span>                   <span class="token comment"># 查看远程仓库</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/original/repo.git  <span class="token comment"># 添加上游仓库</span></span>
<span class="line"><span class="token function">git</span> fetch upstream              <span class="token comment"># 获取上游更新</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 推送与拉取</span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main        <span class="token comment"># 首次推送并建立跟踪</span></span>
<span class="line"><span class="token function">git</span> push                       <span class="token comment"># 后续推送</span></span>
<span class="line"><span class="token function">git</span> pull                       <span class="token comment"># 拉取并合并（= fetch + merge）</span></span>
<span class="line"><span class="token function">git</span> fetch origin               <span class="token comment"># 仅获取远程更新</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销与恢复" tabindex="-1"><a class="header-anchor" href="#撤销与恢复"><span>撤销与恢复</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 文件级撤销</span></span>
<span class="line"><span class="token function">git</span> restore filename.txt        <span class="token comment"># 撤销工作区修改</span></span>
<span class="line"><span class="token function">git</span> restore <span class="token parameter variable">--staged</span> file.txt   <span class="token comment"># 撤销暂存区修改</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 提交级撤销</span></span>
<span class="line"><span class="token function">git</span> reset HEAD~1                <span class="token comment"># 撤销最后一次提交（保留修改）</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~1         <span class="token comment"># 彻底撤销最后一次提交</span></span>
<span class="line"><span class="token function">git</span> revert commit_hash          <span class="token comment"># 创建撤销提交</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级操作" tabindex="-1"><a class="header-anchor" href="#高级操作"><span>高级操作</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 储藏与标签</span></span>
<span class="line"><span class="token function">git</span> stash                      <span class="token comment"># 储藏当前修改</span></span>
<span class="line"><span class="token function">git</span> stash list                 <span class="token comment"># 查看储藏列表</span></span>
<span class="line"><span class="token function">git</span> stash apply                <span class="token comment"># 应用最近储藏</span></span>
<span class="line"><span class="token function">git</span> stash pop                  <span class="token comment"># 应用并删除储藏</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag v1.0                   <span class="token comment"># 创建轻量标签</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.1 <span class="token parameter variable">-m</span> <span class="token string">&quot;Release&quot;</span>   <span class="token comment"># 创建注释标签</span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--tags</span>                <span class="token comment"># 推送所有标签</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 子模块与调试</span></span>
<span class="line"><span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/user/repo  <span class="token comment"># 添加子模块</span></span>
<span class="line"><span class="token function">git</span> bisect start                                <span class="token comment"># 二分法调试</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const o=n(i,[["render",p],["__file","command.html.vue"]]),r=JSON.parse('{"path":"/git/command.html","title":"Git 常用基本命令","lang":"zh-CN","frontmatter":{"title":"Git 常用基本命令","date":"2025-03-19T00:00:00.000Z"},"headers":[{"level":2,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":2,"title":"仓库操作","slug":"仓库操作","link":"#仓库操作","children":[]},{"level":2,"title":"基础工作流","slug":"基础工作流","link":"#基础工作流","children":[]},{"level":2,"title":"分支管理","slug":"分支管理","link":"#分支管理","children":[]},{"level":2,"title":"远程协作","slug":"远程协作","link":"#远程协作","children":[]},{"level":2,"title":"撤销与恢复","slug":"撤销与恢复","link":"#撤销与恢复","children":[]},{"level":2,"title":"高级操作","slug":"高级操作","link":"#高级操作","children":[]}],"git":{"updatedTime":1742379895000,"contributors":[{"name":"junezqj","username":"junezqj","email":"junezqj@gmail.com","commits":2,"url":"https://github.com/junezqj"}],"changelog":[{"hash":"679d3a459973d8d681741d7b1af255ad37ffbaab","time":1742379895000,"email":"junezqj@gmail.com","author":"junezqj","message":"feat: 完善git基本命令"},{"hash":"3315461c663f437745cf19b7ed776f9998f2482c","time":1742378805000,"email":"junezqj@gmail.com","author":"junezqj","message":"feat: 添加git基本命令"}]},"filePathRelative":"git/command.md"}');export{o as comp,r as data};

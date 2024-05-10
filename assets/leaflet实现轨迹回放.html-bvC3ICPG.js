import{_ as t,r as e,o as l,c as o,a as s,b as n,d as p,e as c}from"./app-BtjMBKQV.js";const r="/personal-blog/images/1.png",i={},u=s("h1",{id:"leaflet实现轨迹回放",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#leaflet实现轨迹回放"},[s("span",null,"leaflet实现轨迹回放")])],-1),k=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言"},[s("span",null,"前言")])],-1),d={href:"https://weijun-lab.github.io/Leaflet.TrackPlayer/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"leaflet",-1),b={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer/issues",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer",target:"_blank",rel:"noopener noreferrer"},g=c('<p><strong>喜报，已登录leaflet官网</strong><img src="'+r+`" alt="在这里插入图片描述"></p><h2 id="_1-搭建基础的leaflet开发环境" tabindex="-1"><a class="header-anchor" href="#_1-搭建基础的leaflet开发环境"><span>1.搭建基础的leaflet开发环境</span></a></h2><p>—— Leaflet.TrackPlayer支持在多个环境下使用，本文通过vue3来演示。创建index.vue并写入：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;map&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token constant">L</span> <span class="token keyword">from</span> <span class="token string">&quot;leaflet&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;leaflet/dist/leaflet.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">34.27519341726532</span><span class="token punctuation">,</span><span class="token number">108.911884710754</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&quot;http://{s}.tile.osm.org/{z}/{x}/{y}.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
#map <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 800px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装并引入leaflet-trackplayer" tabindex="-1"><a class="header-anchor" href="#_2-安装并引入leaflet-trackplayer"><span>2.安装并引入Leaflet.TrackPlayer</span></a></h2><p>cmd执行：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm install leaflet<span class="token operator">-</span>trackplayer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;leaflet-trackplayer&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-将播放器对象添加至地图" tabindex="-1"><a class="header-anchor" href="#_3-将播放器对象添加至地图"><span>3.将播放器对象添加至地图</span></a></h2><p>在<code>map</code>对象创建后添加轨迹播放器到地图上：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//模拟一段轨迹数据</span>
  <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25615548523744</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91164044842363</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.256155386830855</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91179023713374</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.256155386830855</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91179023713374</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25607942383744</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91177925878043</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255720609670156</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91171038494707</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255607664345405</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91169441655762</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25553269366626</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91169442258713</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25544769867856</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91173736885014</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25544769867856</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91173736885014</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25541482067108</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91157060617357</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255437230925885</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91091151687152</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2554647726071</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90999074936826</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255474922592086</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90972209999609</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255470035735925</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90952435653506</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25546585239153</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90796530095042</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255466079902156</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90748786950532</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255466139078585</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90736001962813</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25546047844199</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90659889522819</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25545553696015</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90646504623344</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255455684520776</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90610644487133</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25543990484673</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90555904106137</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255434929044085</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90550010453336</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25671044153241</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90546803620235</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.256994331993134</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9054630187248</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2573861821876</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90545199896282</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2583997892619</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90543593456538</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25896857276571</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90541491120209</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2600241555513</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90541482639716</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26038901329847</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9054088034598</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.260957801498556</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9053717970368</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.261048767618306</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536579609017</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26174549083055</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536574011179</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.262888033588865</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9053716419483</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.263321862668384</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536561345179</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26381066919356</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536057947523</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.264314469827035</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90535454535133</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.264416428997436</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90535453715839</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.264545377344014</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90535452679667</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26485025108296</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536549063917</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26494221420379</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536548324928</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.265745895588346</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9053544303257</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26596581086138</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90534442324677</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2664006399377</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90533339995</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26711335674291</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532235431407</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.267682127119045</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532230860484</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.267977007932025</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532228490632</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26842182796332</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532224915717</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26893662309246</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90531221835984</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26961734908727</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90530616999233</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27079687296456</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90529608575685</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27079687296456</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90529608575685</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270796835711245</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90539697877264</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27080243135706</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90641586657812</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270802076591195</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9072299373526</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270812817234265</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90777629238795</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270822675023936</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90806094950152</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27082259586891</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90822075550248</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27082849640933</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9084135191401</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27083332877497</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90873512064815</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27083823372032</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90891189899708</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270843970260856</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9093942860198</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270843671165785</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90992459787954</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27084322644142</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91067459821011</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270842940218785</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91113596785353</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270842859216124</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91126379113685</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270847625398574</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91162328889843</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27084755144006</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91173612991112</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085335722669</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91202471962777</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270852784122816</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9128555142759</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085267748</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91300529292631</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085254672574</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91318702269936</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085205628723</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91385101989933</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27087119213721</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91615435172467</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27087566746897</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91675434843464</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2708814553737</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91698994875553</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085429757733</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9171776307563</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27080602434836</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91749908177066</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27080602434836</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91749908177066</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270751948023054</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91760590116054</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27073590010758</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9176648001958</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270708807347326</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91777660774166</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27070375357</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783650359831</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270708656282736</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91793832501797</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27073056759363</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91802317433239</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270778426427114</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91815194371763</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27082633013241</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91823279701194</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27090620143976</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91833361195992</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27096613594049</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91837653091702</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27103006872475</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91841944945133</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271094016769126</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91844639632818</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27115297737252</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91846236313094</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27124992726748</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91847333575198</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271362907088765</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91844637465212</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27141590080522</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9184303988106</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27146990941202</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91839845127609</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271506924906745</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91836650505593</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27161499324317</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91824870518059</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27165204453143</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91817882572266</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27169010556983</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91809796526304</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27170014671252</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91805004879423</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27170014671252</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91805004879423</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271813130666544</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91801809584462</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271926114560934</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91798614283951</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27202208565869</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91797515437597</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27211304847173</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91797514704386</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27364144760009</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91794807112001</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27430117651852</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91794801793834</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27430117651852</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91794801793834</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27452116643137</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91786215053015</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27504196130342</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91785212600149</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.275856640147865</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783608824171</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27635543402423</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783604803085</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27635543402423</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783604803085</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.277267066837524</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91782499372012</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27870948266951</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91780890532164</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27895038797587</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91780289635481</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2793632206358</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779787178181</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28040878884263</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779279619023</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28146034867298</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779271140113</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28146034867298</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779271140113</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28263387644584</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91777065508535</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28417326218677</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91773359532593</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28442516136318</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91772758544468</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28569565334534</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769553859388</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28609849266868</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9176845252085</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28774477772293</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91770036464814</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.289932847077175</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769519685113</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29036166314886</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769516226238</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29064054341951</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769513976726</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.291648114741015</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769006717632</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29183603934873</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91768406243645</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29314945213906</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91770591827063</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.293712204034165</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9177108641832</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.294226985630914</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91770583134237</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29428596006031</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9177058265846</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29436110539907</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9175131548741</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29435643485554</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91715377349566</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29435732039652</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.916147466944</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29435732039652</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.916147466944</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.294572232299814</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614145952745</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29463620453703</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614145436851</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29495306695566</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614142881548</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29495306695566</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614142881548</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29496736180883</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91578701078069</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">//定义沿着轨迹移动的Icon</span>
  <span class="token keyword">let</span> markerIcon <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;./assets/car.png&quot;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
      <span class="token literal-property property">iconAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13.5</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//创建播放器对象并添加至地图</span>
  <span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>TrackPlayer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">{</span> markerIcon <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>car.png<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e056edffbd104a44b5702f352bf70229~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=27&amp;h=54&amp;s=3905&amp;e=png&amp;a=1&amp;b=313636" alt="car.png"></p><p>查看运行结果，轨迹播放器已经成功添加至地图上了：<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/266076d94f404abcb8d1f42d952a838b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=715&amp;h=712&amp;s=538335&amp;e=png&amp;b=e9e3dc" alt="在这里插入图片描述"></p><h2 id="_4-开始播放" tabindex="-1"><a class="header-anchor" href="#_4-开始播放"><span>4.开始播放</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//地图设置到合适的缩放级别</span>
map<span class="token punctuation">.</span><span class="token function">setZoom</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//开始播放</span>
track<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要调用<code>start()</code>方法就能开始播放了： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b22a1ddd2ac0453abf5d5a1138bcb56f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=732&amp;h=560&amp;s=6386575&amp;e=gif&amp;f=110&amp;b=eeeae6" alt="在这里插入图片描述"></p><h2 id="_5-其他情况" tabindex="-1"><a class="header-anchor" href="#_5-其他情况"><span>5.其他情况</span></a></h2><p>假设要播放人行走的轨迹，那通常情况下不需要使marker随行进方向旋转，改写创建播放器相关代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//定义沿着轨迹移动的marker</span>
<span class="token keyword">let</span> markerIcon <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">iconAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12.5</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建播放器对象并添加至地图//markerRotation:false 使marker不自动旋转</span>
<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>TrackPlayer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">{</span> markerIcon<span class="token punctuation">,</span><span class="token literal-property property">markerRotation</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cff0ba1303b4e30b42e55ac668d0ec4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=732&amp;h=560&amp;s=6023813&amp;e=gif&amp;f=108&amp;b=eeeae6" alt="在这里插入图片描述"></p><h2 id="_6-完整代码" tabindex="-1"><a class="header-anchor" href="#_6-完整代码"><span>6.完整代码</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;map&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token constant">L</span> <span class="token keyword">from</span> <span class="token string">&quot;leaflet&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;leaflet/dist/leaflet.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;leaflet-trackplayer&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">34.27519341726532</span><span class="token punctuation">,</span><span class="token number">108.911884710754</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&quot;http://{s}.tile.osm.org/{z}/{x}/{y}.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//模拟一段轨迹数据</span>
  <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25615548523744</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91164044842363</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.256155386830855</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91179023713374</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.256155386830855</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91179023713374</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25607942383744</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91177925878043</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255720609670156</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91171038494707</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255607664345405</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91169441655762</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25553269366626</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91169442258713</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25544769867856</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91173736885014</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25544769867856</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91173736885014</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25541482067108</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91157060617357</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255437230925885</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91091151687152</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2554647726071</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90999074936826</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255474922592086</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90972209999609</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255470035735925</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90952435653506</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25546585239153</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90796530095042</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255466079902156</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90748786950532</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255466139078585</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90736001962813</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25546047844199</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90659889522819</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25545553696015</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90646504623344</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255455684520776</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90610644487133</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25543990484673</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90555904106137</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.255434929044085</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90550010453336</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25671044153241</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90546803620235</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.256994331993134</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9054630187248</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2573861821876</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90545199896282</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2583997892619</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90543593456538</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.25896857276571</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90541491120209</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2600241555513</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90541482639716</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26038901329847</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9054088034598</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.260957801498556</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9053717970368</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.261048767618306</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536579609017</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26174549083055</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536574011179</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.262888033588865</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9053716419483</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.263321862668384</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536561345179</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26381066919356</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536057947523</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.264314469827035</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90535454535133</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.264416428997436</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90535453715839</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.264545377344014</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90535452679667</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26485025108296</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536549063917</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26494221420379</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90536548324928</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.265745895588346</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9053544303257</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26596581086138</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90534442324677</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2664006399377</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90533339995</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26711335674291</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532235431407</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.267682127119045</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532230860484</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.267977007932025</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532228490632</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26842182796332</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90532224915717</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26893662309246</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90531221835984</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.26961734908727</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90530616999233</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27079687296456</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90529608575685</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27079687296456</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90529608575685</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270796835711245</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90539697877264</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27080243135706</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90641586657812</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270802076591195</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9072299373526</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270812817234265</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90777629238795</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270822675023936</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90806094950152</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27082259586891</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90822075550248</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27082849640933</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9084135191401</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27083332877497</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90873512064815</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27083823372032</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90891189899708</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270843970260856</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9093942860198</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270843671165785</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.90992459787954</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27084322644142</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91067459821011</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270842940218785</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91113596785353</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270842859216124</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91126379113685</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270847625398574</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91162328889843</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27084755144006</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91173612991112</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085335722669</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91202471962777</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270852784122816</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9128555142759</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085267748</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91300529292631</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085254672574</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91318702269936</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085205628723</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91385101989933</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27087119213721</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91615435172467</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27087566746897</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91675434843464</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2708814553737</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91698994875553</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27085429757733</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9171776307563</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27080602434836</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91749908177066</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27080602434836</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91749908177066</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270751948023054</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91760590116054</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27073590010758</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9176648001958</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270708807347326</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91777660774166</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27070375357</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783650359831</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270708656282736</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91793832501797</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27073056759363</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91802317433239</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.270778426427114</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91815194371763</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27082633013241</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91823279701194</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27090620143976</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91833361195992</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27096613594049</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91837653091702</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27103006872475</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91841944945133</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271094016769126</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91844639632818</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27115297737252</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91846236313094</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27124992726748</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91847333575198</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271362907088765</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91844637465212</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27141590080522</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9184303988106</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27146990941202</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91839845127609</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271506924906745</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91836650505593</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27161499324317</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91824870518059</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27165204453143</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91817882572266</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27169010556983</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91809796526304</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27170014671252</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91805004879423</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27170014671252</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91805004879423</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271813130666544</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91801809584462</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.271926114560934</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91798614283951</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27202208565869</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91797515437597</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27211304847173</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91797514704386</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27364144760009</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91794807112001</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27430117651852</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91794801793834</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27430117651852</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91794801793834</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27452116643137</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91786215053015</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27504196130342</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91785212600149</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.275856640147865</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783608824171</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27635543402423</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783604803085</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27635543402423</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91783604803085</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.277267066837524</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91782499372012</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27870948266951</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91780890532164</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.27895038797587</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91780289635481</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.2793632206358</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779787178181</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28040878884263</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779279619023</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28146034867298</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779271140113</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28146034867298</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91779271140113</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28263387644584</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91777065508535</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28417326218677</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91773359532593</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28442516136318</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91772758544468</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28569565334534</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769553859388</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28609849266868</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9176845252085</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.28774477772293</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91770036464814</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.289932847077175</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769519685113</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29036166314886</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769516226238</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29064054341951</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769513976726</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.291648114741015</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91769006717632</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29183603934873</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91768406243645</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29314945213906</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91770591827063</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.293712204034165</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9177108641832</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.294226985630914</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91770583134237</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29428596006031</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9177058265846</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29436110539907</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.9175131548741</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29435643485554</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91715377349566</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29435732039652</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.916147466944</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29435732039652</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.916147466944</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.294572232299814</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614145952745</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29463620453703</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614145436851</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29495306695566</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614142881548</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29495306695566</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91614142881548</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">34.29496736180883</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">108.91578701078069</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">//定义沿着轨迹移动的marker</span>
  <span class="token keyword">let</span> markerIcon <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;./assets/car.png&quot;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">,</span>
      <span class="token literal-property property">iconAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">13.5</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//创建播放器对象并添加至地图</span>
  <span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>TrackPlayer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">{</span> markerIcon <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//地图设置到合适的缩放级别</span>
  map<span class="token punctuation">.</span><span class="token function">setZoom</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">animate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//开始播放</span>
  track<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
#map <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 800px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>car.png<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6aa835522b094eb78b098e739b45d07e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=27&amp;h=54&amp;s=3905&amp;e=png&amp;a=1&amp;b=313636" alt="car.png"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>`,25),f={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"自定义线路样式",-1),_=s("code",null,"设置行进速度",-1),j=s("code",null,"事件监听",-1),w={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer/issues",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/weijun-lab/Leaflet.TrackPlayer",target:"_blank",rel:"noopener noreferrer"};function x(T,P){const a=e("ExternalLinkIcon");return l(),o("div",null,[u,k,s("p",null,[s("strong",null,[n("👉 "),s("a",d,[n("在线demo"),p(a)]),n("👈")])]),s("p",null,[n("本文介绍如何通过插件"),s("a",v,[n("Leaflet.TrackPlayer"),p(a)]),n("来简洁高效的在"),m,n("上实现轨迹回放功能，以下仅做基础示意，更多功能和用法请参见文档。这是我在工作之余开发的插件，对于该插件的有任何建议或意见，可以在"),s("a",b,[n("Issues"),p(a)]),n("里提出。如果有帮助到你，请"),s("a",y,[n("点个star"),p(a)]),n("。")]),g,s("p",null,[n("本文使用插件"),s("a",f,[n("Leaflet.TrackPlayer"),p(a)]),n("实现了一个基础的轨迹回放功能，另外该插件还支持"),h,n("、"),_,n("、"),j,n("等相关功能。具体请参阅"),s("a",w,[n("插件文档"),p(a)]),n("。对于该插件的有任何建议或意见，可以在"),s("a",q,[n("Issues"),p(a)]),n("里提出。如果有帮助到你，请"),s("a",L,[n("点个star"),p(a)]),n("。")])])}const I=t(i,[["render",x],["__file","leaflet实现轨迹回放.html.vue"]]),B=JSON.parse('{"path":"/posts/leaflet%E5%AE%9E%E7%8E%B0%E8%BD%A8%E8%BF%B9%E5%9B%9E%E6%94%BE.html","title":"leaflet实现轨迹回放","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1.搭建基础的leaflet开发环境","slug":"_1-搭建基础的leaflet开发环境","link":"#_1-搭建基础的leaflet开发环境","children":[]},{"level":2,"title":"2.安装并引入Leaflet.TrackPlayer","slug":"_2-安装并引入leaflet-trackplayer","link":"#_2-安装并引入leaflet-trackplayer","children":[]},{"level":2,"title":"3.将播放器对象添加至地图","slug":"_3-将播放器对象添加至地图","link":"#_3-将播放器对象添加至地图","children":[]},{"level":2,"title":"4.开始播放","slug":"_4-开始播放","link":"#_4-开始播放","children":[]},{"level":2,"title":"5.其他情况","slug":"_5-其他情况","link":"#_5-其他情况","children":[]},{"level":2,"title":"6.完整代码","slug":"_6-完整代码","link":"#_6-完整代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1715322716000,"contributors":[{"name":"weijun","email":"1092751942@qq.com","commits":1}]},"filePathRelative":"posts/leaflet实现轨迹回放.md","excerpt":"\\n<h2>前言</h2>\\n<p><strong>👉 <a href=\\"https://weijun-lab.github.io/Leaflet.TrackPlayer/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">在线demo</a>👈</strong></p>\\n<p>本文介绍如何通过插件<a href=\\"https://github.com/weijun-lab/Leaflet.TrackPlayer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Leaflet.TrackPlayer</a>来简洁高效的在<code>leaflet</code>上实现轨迹回放功能，以下仅做基础示意，更多功能和用法请参见文档。这是我在工作之余开发的插件，对于该插件的有任何建议或意见，可以在<a href=\\"https://github.com/weijun-lab/Leaflet.TrackPlayer/issues\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Issues</a>里提出。如果有帮助到你，请<a href=\\"https://github.com/weijun-lab/Leaflet.TrackPlayer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">点个star</a>。</p>"}');export{I as comp,B as data};

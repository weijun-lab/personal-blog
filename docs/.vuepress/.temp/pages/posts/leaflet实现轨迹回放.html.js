import comp from "E:/学习/personal-blog/docs/.vuepress/.temp/pages/posts/leaflet实现轨迹回放.html.vue"
const data = JSON.parse("{\"path\":\"/posts/leaflet%E5%AE%9E%E7%8E%B0%E8%BD%A8%E8%BF%B9%E5%9B%9E%E6%94%BE.html\",\"title\":\"leaflet实现轨迹回放\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"1.搭建基础的leaflet开发环境\",\"slug\":\"_1-搭建基础的leaflet开发环境\",\"link\":\"#_1-搭建基础的leaflet开发环境\",\"children\":[]},{\"level\":2,\"title\":\"2.安装并引入Leaflet.TrackPlayer\",\"slug\":\"_2-安装并引入leaflet-trackplayer\",\"link\":\"#_2-安装并引入leaflet-trackplayer\",\"children\":[]},{\"level\":2,\"title\":\"3.将播放器对象添加至地图\",\"slug\":\"_3-将播放器对象添加至地图\",\"link\":\"#_3-将播放器对象添加至地图\",\"children\":[]},{\"level\":2,\"title\":\"4.开始播放\",\"slug\":\"_4-开始播放\",\"link\":\"#_4-开始播放\",\"children\":[]},{\"level\":2,\"title\":\"5.其他情况\",\"slug\":\"_5-其他情况\",\"link\":\"#_5-其他情况\",\"children\":[]},{\"level\":2,\"title\":\"6.完整代码\",\"slug\":\"_6-完整代码\",\"link\":\"#_6-完整代码\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"posts/leaflet实现轨迹回放.md\",\"excerpt\":\"\\n<h2>前言</h2>\\n<p><strong>👉 <a href=\\\"https://weijun-lab.github.io/Leaflet.TrackPlayer/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">在线demo</a>👈</strong></p>\\n<p>本文介绍如何通过插件<a href=\\\"https://github.com/weijun-lab/Leaflet.TrackPlayer\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Leaflet.TrackPlayer</a>来简洁高效的在<code>leaflet</code>上实现轨迹回放功能，以下仅做基础示意，更多功能和用法请参见文档。这是我在工作之余开发的插件，对于该插件的有任何建议或意见，可以在<a href=\\\"https://github.com/weijun-lab/Leaflet.TrackPlayer/issues\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Issues</a>里提出。如果有帮助到你，请<a href=\\\"https://github.com/weijun-lab/Leaflet.TrackPlayer\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">点个star</a>。</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

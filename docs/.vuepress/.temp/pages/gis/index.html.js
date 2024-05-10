import comp from "E:/学习/personal-blog/docs/.vuepress/.temp/pages/gis/index.html.vue"
const data = JSON.parse("{\"path\":\"/gis/\",\"title\":\"GIS\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"GIS\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"GIS\"},\"layout\":\"GIS\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    /**
     * 設置該路由在側邊欄和麵包屑中展示的名字
     */
    title?: string
    /**
     * 設置該路由的圖標，記得將 svg 導入 @/icons/svg
     */
    svgIcon?: string
    /**
     * 設置該路由的圖標，直接使用 Element Plus 的 Icon（與 svgIcon 同時設置時，svgIcon 將優先生效）
     */
    elIcon?: string
    /**
     * 默認為 false，設置為 true 時該路由不會在側邊欄出現
     */
    hidden?: boolean
    /**
     * 設置能進入該路由的角色，支持多個角色疊加
     */
    roles?: string[]
    /**
     * 默認為 true，如果設置為 false，則不會在麵包屑中顯示
     */
    breadcrumb?: boolean
    /**
     * 默認為 false，如果設置為 true，則會固定在 tags-view 中
     */
    affix?: boolean
    /**
     * 當一個路由下面的 children 聲明的路由數量大於 1 個時，會自動變成嵌套的模式，
     * 只有一個時，會將該子路由作為根路由顯示在側邊欄中，
     * 如果希望無論路由下面的 children 聲明的數量是多少，都顯示根路由，
     * 可以設置 alwaysShow: true，這樣會忽略之前定義的規則，始終顯示根路由
     */
    alwaysShow?: boolean
    /**
     * 示例: activeMenu: "/xxx/xxx"，
     * 當設置了該屬性進入路由時，會高亮 activeMenu 屬性對應的側邊欄。
     * 該屬性適用於帶有 hidden: true 屬性的路由
     */
    activeMenu?: string
    /**
     * 是否緩存該路由頁面
     * 默認為 false，設置為 true 時表示需要緩存，此時該路由和該頁面都需要設置一致的 Name
     */
    keepAlive?: boolean
  }
}

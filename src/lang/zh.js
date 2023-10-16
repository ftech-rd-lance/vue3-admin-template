export default {
	router: {
		Dashboard: '首頁',
		LowCodePlatFrom: '低程式碼平臺',
		RBAC: '使用者許可權角色',
		'Setting Switch': '配置檔案',
		'Error Log': '錯誤日誌',
		'Error Index': '錯誤日誌列表',
		'Error Generator': '錯誤日誌生成',

		Nested: '路由巢狀',
		Menu1: '選單1',
		'Menu1-1': '選單 1-1',
		'Menu1-2': '選單 1-2',
		'Menu1-2-1': '選單 1-2-1',
		'Menu1-2-2': '選單 1-2-2',
		'Menu1-3': '選單 1-3',
		menu2: '選單 2',

		'External Link': '外鏈',

		'Basic Demo': '基礎例子',
		Hook: 'hook',
		Pinia: 'pinia',
		Mock: 'mock',
		'Svg Icon': 'svg使用',
		'Parent Children': '父子元件通訊',
		'KeepAlive Group': '快取組',
		'Tab KeepAlive': 'tab快取',
		'Third KeepAlive': '三級路由快取',
		SecondChildren: '三級路由示例1',
		ThirdChildren: '三級路由示例2',
		Worker: '多執行緒',
		Permission: '許可權路由',
		'Permission Switch': '許可權切換',
		'Role Index': '角色許可權',
		'Code Index': 'Code許可權',
		'Button Permission': '按鈕許可權',

		Charts: '圖表',
		Excel: 'Excel',
		'Rich Text': '富文字',
		Table: '表格',
		Guid: '使用引導',
		Other: '其他'
	},

	tagsView: {
		Refresh: '重新整理',
		Close: '關閉當前',
		'Close Others': '關閉其他',
		'Close All': '關閉所有'
	},
	navbar: {
		Home: '首頁',
		Github: '專案git地址',
		Docs: '官方文件',
		'login out': '退出登入'
	},
	//page
	dashboard: {
		'switch theme': '切換主題色',
		'switch size': '切換尺寸',
		'switch language': '切換語言',
		en: 'English',
		zh: '中文',
		'Button Group': '按鈕組',
		'unocss using': 'unocss使用',
		'global var': '全域性靜態變數'
	},
	'error-log': {
		log: '錯誤日誌',
		pageUrl: '頁面路徑',
		startDate: '開始日期',
		endDate: '結束日期',
		github: 'Github 地址',
		search: '查詢',
		reset: '重置',
		multiDel: '批次刪除'
	}
	// permission: {
	//   addRole: '新增角色',
	//   editPermission: '編輯許可權',
	//   roles: '你的許可權',
	//   switchRoles: '切換許可權',
	//   tips:
	//     '在某些情況下，不適合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它動態渲染 dom 的場景。你只能透過手動設定 v-if 來實現。',
	//   delete: '刪除',
	//   confirm: '確定',
	//   cancel: '取消'
	// },
	// guide: {
	//   description: '引導頁對於一些第一次進入專案的人很有用，你可以簡單介紹下專案的功能。本 Demo 是基於',
	//   button: '開啟引導'
	// },
	// components: {
	//   documentation: '文件',
	//   tinymceTips:
	//     '富文字是管理後臺一個核心的功能，但同時又是一個有很多坑的地方。在選擇富文字的過程中我也走了不少的彎路，市面上常見的富文字都基本用過了，最終權衡了一下選擇了Tinymce。更詳細的富文字比較和介紹見',
	//   dropzoneTips:
	//     '由於我司業務有特殊需求，而且要傳七牛 所以沒用第三方，選擇了自己封裝。程式碼非常的簡單，具體程式碼你可以在這裡看到 @/components/Dropzone',
	//   stickyTips: '當頁面滾動到預設的位置會吸附在頂部',
	//   backToTopTips1: '頁面滾動到指定位置會在右下角出現返回頂部按鈕',
	//   backToTopTips2:
	//     '可自定義按鈕的樣式、show/hide、出現的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
	//   imageUploadTips:
	//     '由於我在使用時它只有vue@1版本，而且和mockjs不相容，所以自己改造了一下，如果大家要使用的話，優先還是使用官方版本。'
	// },
	// table: {
	//   dynamicTips1: '固定表頭, 按照表頭順序排序',
	//   dynamicTips2: '不固定表頭, 按照點選順序排序',
	//   dragTips1: '預設順序',
	//   dragTips2: '拖拽後順序',
	//   title: '標題',
	//   importance: '重要性',
	//   type: '型別',
	//   remark: '點評',
	//   search: '搜尋',
	//   add: '新增',
	//   export: '匯出',
	//   reviewer: '稽核人',
	//   id: '序號',
	//   date: '時間',
	//   author: '作者',
	//   readings: '閱讀數',
	//   status: '狀態',
	//   actions: '操作',
	//   edit: '編輯',
	//   publish: '釋出',
	//   draft: '草稿',
	//   delete: '刪除',
	//   cancel: '取 消',
	//   confirm: '確 定'
	// },
	// example: {
	//   warning:
	//     '建立和編輯頁面是不能被 keep-alive 快取的，因為keep-alive 的 include 目前不支援根據路由來快取，所以目前都是基於 component name 來進行快取的。如果你想類似的實現快取效果，可以使用 localStorage 等瀏覽器快取方案。或者不要使用 keep-alive 的 include，直接快取所有頁面。詳情見'
	// },
	// errorLog: {
	//   tips: '請點選右上角bug小圖示',
	//   description:
	//     '現在的管理後臺基本都是spa的形式了，它增強了使用者體驗，但同時也會增加頁面出問題的可能性，可能一個小小的疏忽就導致整個頁面的死鎖。好在 Vue 官網提供了一個方法來捕獲處理異常，你可以在其中進行錯誤處理或者異常上報。',
	//   documentation: '文件介紹'
	// },
	// excel: {
	//   export: '匯出',
	//   selectedExport: '匯出已選擇項',
	//   placeholder: '請輸入檔名(預設excel-list)'
	// },
	// zip: {
	//   export: '匯出',
	//   placeholder: '請輸入檔名(預設file)'
	// },
	// pdf: {
	//   tips: '這裡使用   window.print() 來實現下載pdf的功能'
	// },
	// theme: {
	//   change: '換膚',
	//   documentation: '換膚文件',
	//   tips: 'Tips: 它區別於 navbar 上的 theme-pick, 是兩種不同的換膚方法，各自有不同的應用場景，具體請參考文件。'
	// },
	// tagsView: {
	//   refresh: '重新整理',
	//   close: '關閉',
	//   closeOthers: '關閉其它',
	//   closeAll: '關閉所有'
	// },
	// settings: {
	//   title: '系統佈局配置',
	//   theme: '主題色',
	//   tagsView: '開啟 Tags-View',
	//   fixedHeader: '固定 Header',
	//   sidebarLogo: '側邊欄 Logo'
	// }
}

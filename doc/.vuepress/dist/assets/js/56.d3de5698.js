(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{482:function(v,_,e){"use strict";e.r(_);var r=e(2),t=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("在上期内容中，我们已经对"),_("code",[v._v("hrp")]),v._v("的基本目录结构进行了讲解，使我们对整体项目有了初步了解。了解目录结构后，我们可以更轻松地阅读代码，并针对特定模块进行修改。然而，想要进行更深入的二次开发，就需要了解整体业务流程，以及代码在何时执行哪些操作，例如何时开始运行、读取用例、进行接口请求等。在遇到缺乏文档的情况下，阅读源代码是解决问题的最佳途径，比如查找如何引用其他用例或者排查hooks修改数据无效的问题。一旦我们充分了解了源码，遇到问题时直接查看源代码将更加高效节省时间。")]),v._v(" "),_("p",[v._v("了解"),_("code",[v._v("hrp")]),v._v("用例运行的大致步骤有助于我们更好地掌握整体流程。大致步骤如下：")]),v._v(" "),_("h2",{attrs:{id:"一、设置httprunner对象-在此步骤中-我们初始化httprunner对象-为后续的用例运行做准备。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、设置httprunner对象-在此步骤中-我们初始化httprunner对象-为后续的用例运行做准备。"}},[v._v("#")]),v._v(" 一、设置"),_("code",[v._v("HTTPRunner")]),v._v("对象：在此步骤中，我们初始化"),_("code",[v._v("HTTPRunner")]),v._v("对象，为后续的用例运行做准备。")]),v._v(" "),_("h2",{attrs:{id:"二、读取测试用例-hrp支持读取yaml和json格式的用例文件-将用例内容转换成testcase对象-方便hrp进行运行。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、读取测试用例-hrp支持读取yaml和json格式的用例文件-将用例内容转换成testcase对象-方便hrp进行运行。"}},[v._v("#")]),v._v(" 二、读取测试用例："),_("code",[v._v("hrp")]),v._v("支持读取"),_("code",[v._v("yaml")]),v._v("和"),_("code",[v._v("json")]),v._v("格式的用例文件，将用例内容转换成"),_("code",[v._v("TestCase")]),v._v("对象，方便"),_("code",[v._v("hrp")]),v._v("进行运行。")]),v._v(" "),_("ol",[_("li",[v._v("遍历用例列表：运行时可以指定运行一个或多个用例。")]),v._v(" "),_("li",[v._v("校验文件格式：确保用例文件格式正确。")]),v._v(" "),_("li",[v._v("读取文件内容：通过"),_("code",[v._v("ToTestCase")]),v._v("将文件内容转换成可执行的测试用例对象。")])]),v._v(" "),_("h2",{attrs:{id:"三、运行测试用例-在这个阶段-hrp开始执行测试用例。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、运行测试用例-在这个阶段-hrp开始执行测试用例。"}},[v._v("#")]),v._v(" 三、运行测试用例：在这个阶段，"),_("code",[v._v("hrp")]),v._v("开始执行测试用例。")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("HRPRunner")]),v._v(" 初始化：HRPRunner 是 HTTPRunner 的核心对象，它是测试执行的入口，承载了许多全局配置和控制的功能。HRPRunner 的初始化包括配置 HTTP 客户端、设置超时、是否启用统计和日志等。这些设置将影响整个测试执行的行为。")]),v._v(" "),_("li",[v._v("遍历测试用例："),_("code",[v._v("hrp")]),v._v("分两次遍历，首先遍历测试用例对象，然后在第二次遍历中执行各个"),_("code",[v._v("api")]),v._v("（接口）。")]),v._v(" "),_("li",[v._v("创建运行用例对象"),_("strong",[v._v("CaseRunner")]),v._v("：每个测试用例都有一个对应的 CaseRunner，用于管理测试用例的执行。CaseRunner 初始化的过程包括加载插件、解析配置、设置超时等。插件可以为测试用例提供额外的功能和验证方式。")]),v._v(" "),_("li",[v._v("运行"),_("code",[v._v("api")]),v._v("：对于每个"),_("code",[v._v("api")]),v._v("，"),_("code",[v._v("hrp")]),v._v("会进行以下操作：")])]),v._v(" "),_("ul",[_("li",[v._v("解析所有字段：将函数、变量等解析成正常的数据内容。")]),v._v(" "),_("li",[v._v("运行"),_("code",[v._v("SetupHooks")]),v._v("：对请求内容进行修改，常用于加密操作。")]),v._v(" "),_("li",[v._v("设置测试报告收集内容。")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("http.Do")]),v._v("发起http请求。")]),v._v(" "),_("li",[v._v("解析接口返回内容，更新单个接口的测试报告。")]),v._v(" "),_("li",[v._v("运行"),_("code",[v._v("TeardownHooks")]),v._v("：对返回内容进行修改，常用于解密操作。")]),v._v(" "),_("li",[v._v("提取参数：提取的参数可作为后续接口的变量，也可以导出到其他测试用例中进行使用")]),v._v(" "),_("li",[v._v("断言：当测试用例执行完毕后，HTTPRunner会进行断言判断，以验证实际响应与预期结果是否一致。HRP内置了多种断言函数，用于比较响应状态码、响应内容、响应时间等。如果断言失败，HTTPRunner将标记该步骤为失败，并记录错误信息。")])]),v._v(" "),_("h2",{attrs:{id:"四、输出测试报告"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、输出测试报告"}},[v._v("#")]),v._v(" 四、输出测试报告")]),v._v(" "),_("p",[v._v("生成测试报告是测试过程中的重要一环，它能够清晰地展示测试结果和问题情况。HTTPRunner支持生成文本格式和HTML格式的测试报告。测试报告中包含了执行结果摘要、失败步骤、请求响应信息等，为开发人员和测试人员提供了问题定位和修复的依据。。")]),v._v(" "),_("p",[v._v("了解这些运行步骤，我们可以通过调试的方式，对特定位置设置断点，逐步调试代码，从而深入了解整体的运行过程。尽管通过调试可能会花费更多时间，但它能让我们了解整个流程和数据交互的细节。")])])}),[],!1,null,null,null);_.default=t.exports}}]);
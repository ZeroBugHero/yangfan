(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{483:function(v,_,o){"use strict";o.r(_);var t=o(2),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("随着行业的发展和技术的进步，软件测试岗位的要求正不断提高。过去三年里，纯粹的功能测试岗位已不再是理想选择，因为现在几乎所有的测试职位都要求掌握自动化测试，包括接口自动化、UI自动化、性能测试等，并且需要具备编程能力，尤其是熟练掌握测试领域最常用的语言——Python。")]),v._v(" "),_("p",[v._v("Python作为测试领域最常用的语言，已经成为了找到测试工作的标准。大多数小公司和团队都将Python作为其自动化测试的首选语言，因为它相对其他编程语言入门简单，并且有许多测试相关的第三方库可供使用，从而使得测试工作更加方便高效。")]),v._v(" "),_("p",[v._v("然而，为了在寻找更好的测试岗位时处于有利地位，除了精通Python外，还需要掌握其他编程语言和框架，例如Java、Go、Vue等，同时也需要能够编写工具、搭建框架和平台的能力。虽然Java的学习成本相对较高，但Go作为一门新兴的编程语言，学习成本较低，并且与Python有许多共同之处，因此逐渐成为测试领域的另一个热门选择。随着时间的推移，预计Go在测试框架的开发和维护中将会得到越来越广泛的应用，其生态系统也会日益完善。")]),v._v(" "),_("p",[v._v("目前已有一些测试框架开始采用Go进行开发，比如"),_("code",[v._v("HttpRunner")]),v._v("的4.x版本。相较于Python版本，Go版本的功能更加强大，支持多协议、性能测试以及App UI自动化等。与Python版本相比，Go版本不需要将JSON/YAML文件转换成Python文件再进行执行，从而使得执行效率更高，资源消耗更少。对于平台接入方面，Go也更加简便。")]),v._v(" "),_("h2",{attrs:{id:"提升自己的竞争力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提升自己的竞争力"}},[v._v("#")]),v._v(" 提升自己的竞争力")]),v._v(" "),_("p",[v._v("在日益竞争激烈的测试岗位市场中，保持对Python的熟练掌握是必不可少的，同时学习和掌握其他语言和框架，如Go等，将为你在职业生涯中开创更加成功的道路提供有力支持。")]),v._v(" "),_("p",[v._v("在过往的面试经历中，对第三方库的源码了解的重要性逐渐显现。作为一个测试工程师，仅停留在使用层面上可能会限制你的发展。通过深入阅读源码、理解其结构、重要组成部分和关键模块，你可以提升对工具的理解和应用能力。当你遇到问题、bug或者功能无法满足需求时，通过对源码的掌握，你可以进行二次开发，实现定制化需求，不再束手无策。")]),v._v(" "),_("p",[v._v("对于接口自动化测试工具而言，它支持的协议种类如HTTP、WebSocket、RPC等，以及对App UI自动化和性能测试的支持，虽然已经相当丰富，但可能仍不足以满足日常工作中的所有需求。如果你掌握了二次开发技巧，增加新的协议如gRPC、MQTT等也将变得轻而易举。")]),v._v(" "),_("p",[v._v("我已经完成了测试平台的开发并成功接入了"),_("code",[v._v("hrp")]),v._v("，通过对项目结构和关键模块的深入了解，对"),_("code",[v._v("hrp")]),v._v("的源码也有了相当的熟悉程度。通过分享我的经验，将帮助更多使用者快速修复bug、满足功能需求，甚至打造出优秀的自定义工具。")]),v._v(" "),_("h2",{attrs:{id:"学习hrp并二次开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#学习hrp并二次开发"}},[v._v("#")]),v._v(" 学习hrp并二次开发")]),v._v(" "),_("p",[v._v("在这个系列中，讲解Go在"),_("code",[v._v("hrp")]),v._v("中的应用、测试平台接入"),_("code",[v._v("hrp")]),v._v("的实现方法、"),_("code",[v._v("hrp")]),v._v("源码解读等内容将帮助更多人理解这个工具的背后机制和原理。此外，准备以"),_("code",[v._v("MQTT")]),v._v("作为二次开发的协议，这将进一步展示你在二次开发方面的技能和应用，主要包含一下4点")]),v._v(" "),_("ol",[_("li",[v._v("理解 "),_("code",[v._v("HttpRunner")]),v._v(" 的工作原理：你需要深入理解 "),_("code",[v._v("HttpRunner")]),v._v(" 的整体架构和各个组件的功能，以及它们之间的关系。这包括了解 "),_("code",[v._v("HttpRunner")]),v._v(" 如何解析测试用例，如何执行 HTTP 请求，以及如何处理响应和生成测试报告等。")]),v._v(" "),_("li",[v._v("理解 "),_("code",[v._v("HttpRunner")]),v._v(" 的源代码：你需要阅读并理解 "),_("code",[v._v("HttpRunner")]),v._v(" 的源代码，包括 "),_("code",[v._v("hrp")]),v._v(" 和 "),_("code",[v._v("HttpRunner")]),v._v(" 目录下的代码。这将帮助你了解 "),_("code",[v._v("HttpRunner")]),v._v(" 的具体实现方式，以及如何扩展或修改其功能。")]),v._v(" "),_("li",[v._v("扩展 "),_("code",[v._v("HttpRunner")]),v._v(" 的功能：一旦你对 "),_("code",[v._v("HttpRunner")]),v._v(" 的工作原理和源代码有了足够的理解，你就可以开始进行二次开发了。你可以添加新的功能，例如支持新的 HTTP 方法或测试类型，或者改进现有的功能，例如提高测试性能或改进测试报告的格式。")]),v._v(" "),_("li",[v._v("测试你的修改：在进行二次开发时，你需要确保你的修改没有引入新的错误。这意味着你需要编写测试用例来验证你的修改，并且需要在每次修改后都运行这些测试用例。")])]),v._v(" "),_("p",[v._v("作为一个新手，这里有一些步骤可以帮助你更好地理解 "),_("code",[v._v("hrp")]),v._v(" 目录下的源代码：")]),v._v(" "),_("ol",[_("li",[v._v("理解 Go 语言：首先，你需要对 Go 语言有基础的了解，包括语法、数据类型、函数、包的概念以及如何编写和运行 Go 程序。如果你已经熟悉其他编程语言，你可能会发现 Go 语言相对简单易学。")]),v._v(" "),_("li",[v._v("浏览整个项目结构：然后，你应该大致浏览一下 "),_("code",[v._v("hrp")]),v._v(" 目录的结构，了解其中的每个文件和子目录的用途。例如，"),_("code",[v._v(".go")]),v._v(" 文件是 Go 的源代码文件，"),_("code",[v._v("pkg")]),v._v(" 目录通常包含公共的库代码，"),_("code",[v._v("tests")]),v._v(" 目录包含测试代码等。")]),v._v(" "),_("li",[v._v("阅读主要的 "),_("code",[v._v(".go")]),v._v(" 文件：在理解了项目的大致结构后，你可以开始阅读一些主要的 "),_("code",[v._v(".go")]),v._v(" 文件，例如 "),_("code",[v._v("main.go")]),v._v(" 或 "),_("code",[v._v("cmd")]),v._v(" 目录下的主执行文件。这将帮助你理解程序的主要工作流程。")]),v._v(" "),_("li",[v._v("深入理解关键模块：然后，你应该选择一些关键的模块或函数，深入理解它们的工作原理和实现方式。你可以从 "),_("code",[v._v("README.md")]),v._v(" 或代码注释中获取一些线索。")]),v._v(" "),_("li",[v._v("运行并调试代码：最好的学习代码的方式就是实际运行并调试它。你可以尝试在本地环境中运行代码，看看它是如何工作的。同时，使用一个好的 IDE 和调试工具可以帮助你更好地理解代码。")]),v._v(" "),_("li",[v._v("阅读和写测试：查看 "),_("code",[v._v("tests")]),v._v(" 目录下的测试代码可以帮助你理解功能的预期行为，同时也可以作为学习如何编写良好测试的例子。写测试也是理解代码的好方法，因为这需要你理解函数的输入、输出和副作用。")]),v._v(" "),_("li",[v._v("重构和编写新代码：一旦你对代码有了足够的理解，你就可以尝试修改它，例如重构一些代码或添加新的功能。这不仅可以提高你的编程技巧，也可以让你更深入地理解代码。")])]),v._v(" "),_("p",[v._v("以上就是一些熟悉 "),_("code",[v._v("hrp")]),v._v(" 目录下源码的步骤，希望对你有所帮助。如果你在阅读代码的过程中遇到任何问题，欢迎随时向我提问。")])])}),[],!1,null,null,null);_.default=e.exports}}]);
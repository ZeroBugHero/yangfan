package interfacecase

type RouterGroup struct {
	// Code generated by server Begin; DO NOT EDIT.
	ApiMenuRouter
	InterfaceTemplateRouter
	TestCaseRouter

	ApiCaseRouter
	// Code generated by server End; DO NOT EDIT.
}

type ApiCaseGroup struct {
	ApiCaseRouter
}

type ReportRouterGroup struct {
	ReportRouter
}

type RunCaseRouterGroup struct {
	RunCaseRouter
}

type ApiConfigRouterGroup struct {
	ApiConfigRouter
}

type TimerTaskGroup struct {
	TimerTaskRouter
}

type PerformanceRouterGroup struct {
	// Code generated by server Begin; DO NOT EDIT.
	PerformanceRouter
}

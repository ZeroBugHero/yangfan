package main

import (
	"github.com/test-instructor/cheetah/server/core"
	"github.com/test-instructor/cheetah/server/global"
	"github.com/test-instructor/cheetah/server/initialize"
	"go.uber.org/zap"
	"math/rand"
	"sync"
	"time"
)

//go:generate go env -w GO111MODULE=on
//go:generate go env -w GOPROXY=https://goproxy.cn,direct
//go:generate go mod tidy
//go:generate go mod download

// @title Swagger Example API
// @version 0.0.1
// @description This is a sample Server pets
// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name x-token
// @BasePath /
func main() {
	rand.Seed(time.Now().UnixNano())
	global.GVA_VP = core.Viper() // 初始化Viper
	global.GVA_LOG = core.Zap()  // 初始化zap日志库
	zap.ReplaceGlobals(global.GVA_LOG)
	global.GVA_DB = initialize.Gorm()                   // gorm连接数据库
	global.DebugTalkLock = make(map[string]*sync.Mutex) // 设置debugTalk锁
	initialize.Timer()
	initialize.TimerTaskCase()
	initialize.DBList()
	if global.GVA_DB != nil {
		initialize.RegisterTables(global.GVA_DB) // 初始化表
		// 程序结束前关闭数据库链接
		db, _ := global.GVA_DB.DB()
		defer db.Close()
	}
	core.RunWindowsServer()
}

package system

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"

	"github.com/test-instructor/yangfan/server/global"
	"github.com/test-instructor/yangfan/server/model/common/response"
	"github.com/test-instructor/yangfan/server/model/system/request"
	systemRes "github.com/test-instructor/yangfan/server/model/system/response"
	"github.com/test-instructor/yangfan/server/utils"
)

type CasbinApi struct{}

// UpdateCasbin @Tags Casbin
//	@Summary	更新角色api权限
//	@Security	ApiKeyAuth
//	@accept		application/json
//	@Produce	application/json
//	@Param		data	body		request.CasbinInReceive			true	"权限id, 权限模型列表"
//	@Success	200		{object}	response.Response{msg=string}	"更新角色api权限"
//	@Router		/casbin/UpdateCasbin [post]
func (cas *CasbinApi) UpdateCasbin(c *gin.Context) {
	var cmr request.CasbinInReceive
	_ = c.ShouldBindJSON(&cmr)
	if err := utils.Verify(cmr, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := casbinService.UpdateCasbin(cmr.AuthorityId, cmr.CasbinInfos); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// GetPolicyPathByAuthorityId @Tags Casbin
//	@Summary	获取权限列表
//	@Security	ApiKeyAuth
//	@accept		application/json
//	@Produce	application/json
//	@Param		data	body		request.CasbinInReceive											true	"权限id, 权限模型列表"
//	@Success	200		{object}	response.Response{data=systemRes.PolicyPathResponse,msg=string}	"获取权限列表,返回包括casbin详情列表"
//	@Router		/casbin/getPolicyPathByAuthorityId [post]
func (cas *CasbinApi) GetPolicyPathByAuthorityId(c *gin.Context) {
	var casbin request.CasbinInReceive
	_ = c.ShouldBindJSON(&casbin)
	if err := utils.Verify(casbin, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	paths := casbinService.GetPolicyPathByAuthorityId(casbin.AuthorityId)
	response.OkWithDetailed(systemRes.PolicyPathResponse{Paths: paths}, "获取成功", c)
}

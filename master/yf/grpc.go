package yf

//import (
//	"context"
//	"github.com/test-instructor/yangfan/proto/pb"
//)
//
//type masterServer struct {
//	pb.UnimplementedBoomerSerServer
//	*MasterBoom
//}
//
//func (b masterServer) Start(ctx context.Context, request *pb.StartReq) (resp *pb.StartResp, err error) {
//	//req := hrp.StartRequestPlatformBody{
//	//	Profile: *boomer.NewProfile(),
//	//}
//	//err = mapstructure.Decode(request, &req)
//	//if err != nil {
//	//	return
//	//}
//	//if len(req.Other) > 0 {
//	//	keys := make([]string, 0, len(req.Other))
//	//	for k := range req.Other {
//	//		keys = append(keys, k)
//	//	}
//	//	err = fmt.Errorf("failed to recognize params: %v", keys)
//	//	return
//	//}
//	//
//	//if req.ID < 1 {
//	//	err = errors.New("missing testcases ID")
//	//	return
//	//}
//	//
//	//b.SetTestCasesID(req.ID)
//	//
//	//err = b.StartPlatform(&req.Profile)
//	return
//}
//
//func (b masterServer) Rebalance(ctx context.Context, req *pb.RebalanceReq) (*pb.RebalanceResp, error) {
//	//TODO implement me
//	panic("implement me")
//}
//
//func (b masterServer) Work(ctx context.Context, req *pb.WorkReq) (*pb.WorkResp, error) {
//	workInfo := b.GetWorkersInfo()
//	workResp := new(pb.WorkResp)
//	var works []*pb.Work
//	for k, _ := range workInfo {
//		work := &pb.Work{
//			Id:                workInfo[k].ID,
//			Ip:                workInfo[k].IP,
//			Os:                workInfo[k].OS,
//			Arch:              workInfo[k].Arch,
//			State:             workInfo[k].State,
//			Heartbeat:         workInfo[k].Heartbeat,
//			UserCount:         workInfo[k].UserCount,
//			WorkerCpuUsage:    workInfo[k].WorkerMemoryUsage,
//			CpuUsage:          workInfo[k].CPUUsage,
//			CpuWarningEmitted: workInfo[k].CPUWarningEmitted,
//			WorkerMemoryUsage: workInfo[k].WorkerCPUUsage,
//			MemoryUsage:       workInfo[k].MemoryUsage,
//		}
//		works = append(works, work)
//	}
//	workResp.Work = works
//	return workResp, nil
//}
//
//func (b masterServer) Master(ctx context.Context, req *pb.MasterReq) (*pb.MasterResp, error) {
//	masterInfo := b.GetMasterInfo()
//	var masterResp = new(pb.MasterResp)
//	masterResp.State = masterInfo["state"].(int32)
//	masterResp.Workers = int32(masterInfo["workers"].(int))
//	masterResp.TargetUsers = masterInfo["target_users"].(int64)
//	masterResp.CurrentUsers = int32(masterInfo["current_users"].(int))
//	return masterResp, nil
//}
//
//func (b masterServer) Stop(ctx context.Context, req *pb.StopReq) (*pb.StopResp, error) {
//	//TODO implement me
//	panic("implement me")
//}
//
//func (b masterServer) Quit(ctx context.Context, req *pb.QuitReq) (*pb.QuitResp, error) {
//	//TODO implement me
//	panic("implement me")
//}

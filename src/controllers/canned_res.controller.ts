import { NextFunction, Request, Response } from 'express';
import { CannedResponsesDto } from '@dtos/CannedResponses.dto';
import { Team } from '@interfaces/team.interface';
import CannedResService from '@services/canned_responses.service';
import { CannedRes } from '@/interfaces/canned_response';

class CannedResController {
  public cannedResService = new CannedResService();
 // get All Canned Responses by Account ID
  public getCannedResByAcID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cannedresbyaccid=req.params.accountId;
      const findAllCannedResBYAcID: CannedRes[] = await this.cannedResService.findAllCannedRes(cannedresbyaccid);
      res.status(200).json({ data: findAllCannedResBYAcID, message: 'findAll', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
//   //get Teams by id
//   public getTeamById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const _Id: string = req.params.id;
//       console.log('inside by id == ', _Id);

//       const findOneTeamData: Team = await this.teamService.findTeamById(_Id);

//       res.status(200).json({ data: findOneTeamData, message: 'findOne', statusCode: 200 });
//     } catch (error) {
//       next(error);
//     }
//   };
  // create Canned Responses
  public createCannedResp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cannedData: CannedResponsesDto = req.body;
      console.log("canned Controller ==>",cannedData)
      const createCannedRespData: CannedRes = await this.cannedResService.createCannedResp(cannedData);
      res.status(201).json({ data: createCannedRespData, message: 'created', statusCode: 201 });
    } catch (error) {
      next(error);
    }
  };
//   //update language
//   public updateTeam = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const TeamId: any = req.params.id;
//       const teamData: TeamDto = req.body;
//       console.log('inside update  == ', teamData);
//       const updateLocaleData: Team = await this.teamService.updateTeam(TeamId, teamData);
//       res.status(200).json({ data: updateLocaleData, message: 'updated', statusCode: 200 });
//     } catch (error) {
//       next(error);
//     }
//   };
//   //delete language
//   public deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const teamId: string = req.params.id;
//       const isActive : number = parseInt(req.params.isActive);
//       const deleteLocaleData: Team = await this.teamService.deleteTeam(teamId, isActive);
//       console.log(teamId);
//       res.status(200).json({ data: deleteLocaleData, message: 'deleted', statusCode: 200 });
//     } catch (error) {
//       next(error);
//     }
//   };

}

export default CannedResController;

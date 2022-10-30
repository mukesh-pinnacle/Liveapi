import { NextFunction, Request, Response } from 'express';
import TeamMemberService from '@services/team_member.service';
import { TeamMember } from '@/interfaces/team_member.interface';
import { TeamMemberDto } from '@/dtos/TeamMemberDto';


class TeamMemberController {
  public teamMemberService = new TeamMemberService();
  //get All language
  public getAllTeamMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllTeamMemData: TeamMember[] = await this.teamMemberService.findAllTeamMembers();
      res.status(200).json({ data: findAllTeamMemData, message: 'findAll', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
  //get Teams by id
  public getTeamMemberById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Team_Mem_Id: string = req.params.id;
      console.log('inside by id == ', Team_Mem_Id);

      const findOneTeamData: TeamMember = await this.teamMemberService.findTeamMemById(Team_Mem_Id);

      res.status(200).json({ data: findOneTeamData, message: 'findOne', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
  // create language
  public createTeamMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const TeamMemberData: TeamMemberDto = req.body;
      //console.log("Team Controller ==>",localeData)
      const createlocaleData: TeamMember = await this.teamMemberService.createTeamMember(TeamMemberData);
      res.status(201).json({ data: createlocaleData, message: 'created', statusCode: 201 });
    } catch (error) {
      next(error);
    }
  };
  //update team
  public updateTeamMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const TeamMemId: any = req.params.id;
      const teamMemData: TeamMemberDto = req.body;
     console.log('inside update  == ', teamMemData);
      const updateTeamMemData: TeamMember = await this.teamMemberService.updateTeamMember(TeamMemId, teamMemData);

      res.status(200).json({ data: updateTeamMemData, message: 'updated', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
  //delete language
  public deleteTeamMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teamMemId: any = req.params.id;
      const isActive: number = parseInt(req.params.isActive)
      const deleteLocaleData: TeamMember = await this.teamMemberService.deleteTeamMem(teamMemId, isActive);
      console.log(teamMemId);
      res.status(200).json({ data: deleteLocaleData, message: 'deleted', statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

}

export default TeamMemberController;

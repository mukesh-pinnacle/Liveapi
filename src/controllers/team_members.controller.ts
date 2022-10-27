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
  // //update language
  // public updateTeam = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const TeamId: any = req.params.id;
  //     const teamData: TeamDto = req.body;
  //     console.log('inside update  == ', teamData);
  //     const updateLocaleData: Team = await this.teamService.updateTeam(TeamId, teamData);

  //     res.status(200).json({ data: updateLocaleData, message: 'updated', statusCode: 200 });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  // //delete language
  // public deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const teamId: any = req.params.id;
  //     const deleteLocaleData: Team = await this.teamService.deleteTeam(teamId);
  //     console.log(teamId);
  //     res.status(200).json({ data: deleteLocaleData, message: 'deleted', statusCode: 200 });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

}

export default TeamMemberController;

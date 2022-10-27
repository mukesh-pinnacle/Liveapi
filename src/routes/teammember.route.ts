import { Router } from 'express';
import TeamMemberController from '@controllers/team_members.controller';
import { TeamMemberDto } from '@dtos/TeamMemberDto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware'



class TeamMemberRoute implements Routes {
  public path = '/team-members';
  public router: Router = Router();
  public teamMemberController = new TeamMemberController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
    this.router.get(`${this.path}`, [validationMiddleware(TeamMemberDto, 'body', true)],this.teamMemberController.getAllTeamMember);
    this.router.get(`${this.path}/:id`,[validationMiddleware(TeamMemberDto, 'body', true)], this.teamMemberController.getTeamMemberById);
    this.router.post(`${this.path}`, [validationMiddleware(TeamMemberDto, 'body', true)], this.teamMemberController.createTeamMember);
  //  this.router.put(`${this.path}/:id`, [validationMiddleware(TeamMemberDto, 'body', true)], this.teamMemberController.updateTeam);
  //  this.router.delete(`${this.path}/:id`, [validationMiddleware(TeamMemberDto, 'body', true)], this.teamMemberController.deleteTeam);
  }
}

export default TeamMemberRoute;

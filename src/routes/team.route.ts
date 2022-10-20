import { Router } from 'express';
import TeamController from '@controllers/team.controller';
import { TeamDto } from '@dtos/team.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware'



class TeamRoute implements Routes {
  public path = '/team';
  public router: Router = Router();
  public teamController = new TeamController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
    this.router.get(`${this.path}`, [validationMiddleware(TeamDto, 'body', true)],this.teamController.getTeam);
    this.router.get(`${this.path}/:id`,[validationMiddleware(TeamDto, 'body', true)], this.teamController.getTeamById);
    this.router.post(`${this.path}`, [validationMiddleware(TeamDto, 'body', true)], this.teamController.createTeam);
    this.router.put(`${this.path}/:id`, [validationMiddleware(TeamDto, 'body', true)], this.teamController.updateTeam);
    this.router.delete(`${this.path}/:id`, [validationMiddleware(TeamDto, 'body', true)], this.teamController.deleteTeam);
  }
}

export default TeamRoute;

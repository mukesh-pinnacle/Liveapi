import { TeamDto } from '@/dtos/team.dto';
import { Team } from '@/interfaces/team.interface';
import { HttpException } from '@exceptions/HttpException';
import TeamModel from '@models/team.model';
import { isEmpty } from '@utils/util';
import { Types } from 'mongoose';
//import { Types } from 'mongoose';

class TeamService {
    public teamModel = TeamModel;
    // find All record
    public async findAllTeam(): Promise<Team[]> {
        const team: Team[] = await this.teamModel.find();
        return team;
    }
    //find by id
    public async findTeamById(Team_Id: number): Promise<Team> {
        if (isEmpty(Team_Id)) throw new HttpException(400, 'Team Id is empty');
        if (!Types.ObjectId.isValid(Team_Id)) throw new HttpException(400, 'Team Id is invalid');

        const findLocale: Team = await this.teamModel.findOne({ team_id: Team_Id });
        if (!findLocale) throw new HttpException(409, "Team doesn't exist");

        return findLocale;
    }
    //create record
    public async createTeam(teamData: TeamDto): Promise<Team> {
        console.log("Team Services", teamData);
        if (isEmpty(teamData)) throw new HttpException(400, 'Team Data is empty');
        const findteam: Team = await this.teamModel.findOne({ name: teamData.name, account_id:teamData.account_id });
        if (findteam) throw new HttpException(409, `The Team Name :  ${teamData.name}  for account ID ${teamData.account_id} is already exists`);
        const createTeamData: Team = await this.teamModel.create(teamData);
        return createTeamData;
    }
      //update record
      public async updateTeam(teamId: number, teamData: TeamDto): Promise<Team> {
        if (isEmpty(teamData)) throw new HttpException(400, 'Team Data is empty');
        console.log('inside update service===', teamId);
        
        
        if (teamId) {
          const findteam: Team = await this.teamModel.findOne({ _id: teamId });
        }
        const updateTeamById: Team = await this.teamModel.updateOne({ _id: teamId }, { $set:teamData });
        console.log(updateTeamById);
        if (!updateTeamById) throw new HttpException(409, "Team doesn't exist");
        return updateTeamById;
      }
      // deleted record
      public async deleteTeam(localeId: number): Promise<Team> {
        console.log(localeId);
        const deleteTeamById: Team = await this.teamModel.updateOne( {lng_id:localeId} , { $set: { is_active: 0 } });
        //findOneAndDelete(localeId);
        if (!deleteTeamById) throw new HttpException(409, "Team doesn't exist");
        return deleteTeamById;
      }

}


export default TeamService;

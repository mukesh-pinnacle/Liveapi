
import { TeamMemberDto } from '@/dtos/TeamMemberDto';
import { TeamMember } from '@/interfaces/team_member.interface';
import { isEmpty } from '@/utils/util';
import { HttpException } from '@exceptions/HttpException';
import TeamMemberModel from '@models/team_member.model';
import { ObjectId, Types } from 'mongoose';

class TeamMemberService {
    public teamMemberModel = TeamMemberModel;

    // find All record
    public async findAllTeamMembers(): Promise<TeamMember[]> {
        const team: TeamMember[] = await this.teamMemberModel.find();
        return team;
    }
    //find by id
    public async findTeamMemById(_Id: string): Promise<TeamMember> {
        console.log(_Id);
        
        if (isEmpty(_Id)) throw new HttpException(400, 'Team Id is empty');
        if (!Types.ObjectId.isValid(_Id)) throw new HttpException(400, 'Team Member Id is invalid');

        const findTeamMem: TeamMember = await this.teamMemberModel.findOne({ _id: _Id });
        if (!findTeamMem) throw new HttpException(409, "Team doesn't exist");

        return findTeamMem;
    }
    // //create record
    public async createTeamMember(teamMemData: TeamMemberDto): Promise<TeamMember> {
        console.log("Team Services", teamMemData);
        if (isEmpty(teamMemData)) throw new HttpException(400, 'Team Data is empty');
        const findteam: TeamMember = await this.teamMemberModel.findOne({ account_user_id: teamMemData.account_user_id, team_id:teamMemData.team_id });
        if (findteam) throw new HttpException(409, `The Team Member already present for the Account user : ${teamMemData.account_user_id} and team  ${teamMemData.team_id}`);
        const createTeamMemData: TeamMember = await this.teamMemberModel.create(teamMemData);
        return createTeamMemData;
    }
    //   //update record
    //   public async updateTeam(teamId: number, teamData: TeamDto): Promise<Team> {
    //     if (isEmpty(teamData)) throw new HttpException(400, 'Team Data is empty');
    //     console.log('inside update service===', teamId);
        
        
    //     if (teamId) {
    //       const findteam: Team = await this.teamModel.findOne({ _id: teamId });
    //     }
    //     const updateTeamById: Team = await this.teamModel.updateOne({ _id: teamId }, { $set:teamData });
    //     console.log(updateTeamById);
    //     if (!updateTeamById) throw new HttpException(409, "Team doesn't exist");
    //     return updateTeamById;
    //   }
    //   // deleted record
    //   public async deleteTeam(localeId: number): Promise<Team> {
    //     console.log(localeId);
    //     const deleteTeamById: Team = await this.teamModel.updateOne( {lng_id:localeId} , { $set: { is_active: 0 } });
    //     //findOneAndDelete(localeId);
    //     if (!deleteTeamById) throw new HttpException(409, "Team doesn't exist");
    //     return deleteTeamById;
    //   }

}


export default TeamMemberService;

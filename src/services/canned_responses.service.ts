import { TeamDto } from '@/dtos/team.dto';
import { CannedRes } from '@/interfaces/canned_response';
import { HttpException } from '@exceptions/HttpException';
import CannedResModel from '@/models/canned_response.model';
import { isEmpty } from '@utils/util';
import { ObjectId, Types } from 'mongoose';
import { CannedResponsesDto } from '@/dtos/CannedResponses.dto';
//import { Types } from 'mongoose';

class CannedResService {
    public cannedResModel = CannedResModel;
        // find canned responses by account id
    public async findAllCannedRes(accountId: string): Promise<CannedRes[]> {
        console.log("canned services",accountId);
        
        if (isEmpty(accountId)) throw new HttpException(400, 'Account Id is empty');
        if (!Types.ObjectId.isValid(accountId)) throw new HttpException(400, 'Account Id is invalid');
        const findbyAccountID: CannedRes[] = await this.cannedResModel.find({ account_id: accountId });
        if (!findbyAccountID) throw new HttpException(409, "Canned Responses doesn't exist");
        return findbyAccountID;
    }
      //find by caaned Responses By short_codes
      public async findCannedRespByShort_code(accountId: string,shortcode: string): Promise<CannedRes[]> {
        console.log('inside by Short Code == ', shortcode);
        if (isEmpty(shortcode)) throw new HttpException(400, 'Short_Code is empty');
        const findCannedResByShortCode: CannedRes[] = await this.cannedResModel.find({ $and: [{ account_id : accountId  },{ short_code  :  new RegExp(shortcode, 'i') }]});
        if (!findCannedResByShortCode) throw new HttpException(409, "Short_Code doesn't exist");
        return findCannedResByShortCode;
      }
      //create record
      public async createCannedResp(cannedData: CannedResponsesDto): Promise<CannedRes> {
        console.log("canned create Services", cannedData);
        if (isEmpty(cannedData)) throw new HttpException(400, 'Team Data is empty');
        const findCannedRes: CannedRes = await this.cannedResModel.findOne({ short_code: { $regex: new RegExp(cannedData.short_code, "i") }, account_id: cannedData.account_id });
        if (findCannedRes) throw new HttpException(409, `The short_code :  ${cannedData.short_code}  for account id ${cannedData.account_id} is already exists`);
        const createcannedResData: CannedRes = await this.cannedResModel.create(cannedData);
        return createcannedResData;
      }
    //   //update record
    //   public async updateTeam(teamId: string, teamData: TeamDto): Promise<Team> {
    //     if (isEmpty(teamData)) throw new HttpException(400, 'Team Data is empty');
    //     if (!Types.ObjectId.isValid(teamId)) throw new HttpException(400, 'Team Id is invalid');
    //     console.log('inside update service===', teamId);
    //     if (teamId) {
    //       const findteam: Team = await this.teamModel.findOne({ name: teamData.name });
    //       if (findteam && findteam._id != teamId) throw new HttpException(409, `This ${teamData.name} already exists`);
    //       // find other object id which have languge
    //     }
    //     const updateTeamById: Team = await this.teamModel.findByIdAndUpdate(teamId, { $set: teamData , updated_at: Date.now() }, { new: true, runValidators: true });
    //     console.log(updateTeamById);
    //     if (!updateTeamById) throw new HttpException(409, "Team doesn't exist");
    //     return updateTeamById;
    //   }
    //   // deleted record
    //   public async deleteTeam(teamId: string, isActive: number): Promise<Team> {
    //     if (!Types.ObjectId.isValid(teamId)) throw new HttpException(400, 'Team Id is invalid');
    //     console.log(teamId);
    //     const deleteTeamById: Team = await this.teamModel.findByIdAndUpdate(teamId, { $set: { is_active: isActive, updated_at: Date.now()  } }, { new: true, runValidators: true });
    //     console.log(deleteTeamById);

    //     //findOneAndDelete(localeId);
    //     if (!deleteTeamById) throw new HttpException(409, "Team doesn't exist");
    //     return deleteTeamById;
    //   }

}


export default CannedResService;

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
            const cannedresbyaccid = req.params.accountId;
            const findAllCannedResBYAcID: CannedRes[] = await this.cannedResService.findAllCannedRes(cannedresbyaccid);
            res.status(200).json({ data: findAllCannedResBYAcID, message: 'findAll', statusCode: 200 });
        } catch (error) {
            next(error);
        }
    };
    //get Teams by id
    public getCannedRespByShort_code = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cannedresbyaccid = req.params.accountId;
            const shortcode: string = req.params.shortcode;

            const findcannedResData: CannedRes[] = await this.cannedResService.findCannedRespByShort_code(cannedresbyaccid, shortcode);
            res.status(200).json({ data: findcannedResData, message: 'find', statusCode: 200 });
        } catch (error) {
            next(error);
        }
    };
    // create Canned Responses
    public createCannedResp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cannedData: CannedResponsesDto = req.body;
            console.log("canned Controller ==>", cannedData)
            const createCannedRespData: CannedRes = await this.cannedResService.createCannedResp(cannedData);
            res.status(201).json({ data: createCannedRespData, message: 'created', statusCode: 201 });
        } catch (error) {
            next(error);
        }
    };
    //update language
    public updateCannedResp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const accountid = req.params.accountId;
            const shortcode: string = req.params.shortcode;
            const CannedData: CannedResponsesDto = req.body;
            console.log('inside update  == ', accountid);
            const updateCannedData: CannedRes = await this.cannedResService.updateCannedResp(accountid, shortcode, CannedData);
            res.status(200).json({ data: updateCannedData, message: 'updated', statusCode: 200 });
        } catch (error) {
            next(error);
        }
    };
    //delete language
    public deleteCannedRes = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const accountid = req.params.accountId;
            const shortcode: string = req.params.shortcode;
            const deleteCannedData: CannedRes = await this.cannedResService.deleteCannedResp(accountid, shortcode);
            res.status(200).json({ data: deleteCannedData, message: 'deleted', statusCode: 200 });
        } catch (error) {
            next(error);
        }
    };

}

export default CannedResController;

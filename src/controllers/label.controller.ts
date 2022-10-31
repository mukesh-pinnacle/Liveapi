import { LabelDto } from "@/dtos/label.dto";
import { Label } from "@/interfaces/label.interface";
import LabelService from "@/services/label.service";
import { NextFunction, Request, Response } from "express";
class LabelController {
    public labelService = new LabelService();
    //create Notes for contact 
    public createLabel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const labelData: LabelDto = req.body;
            const createLabelData: Label = await this.labelService.createLabel(labelData);
            res.status(201).json({ data: createLabelData, message: 'Label created', statusCode: 201 });
        } catch (error) {
            next(error);
        }
    }
    // public getNotes = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const accountid = req.params.accountid;
    //         const userid: string = req.params.userid;
    //         const contactid: string = req.params.contactid
    //         // console.log("hello from notes controller");
    //         const findNoteData: Note[] = await this.noteService.findNotes(accountid, userid, contactid);
    //         res.status(200).json({ data: findNoteData, message: 'findNotes', statusCode: 200 });
    //     } catch (error) {
    //         next(error);
    //     }
    // }
    // // update Notes By Object ID
    // public updateNote = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const id: string = req.params.id;
    //         const noteData: NoteDto = req.body;
    //         const updateNotes: Note = await this.noteService.updateNote(id, noteData);
    //         res.status(200).json({ data: updateNotes, message: 'UpdateNotes', statusCode: 200 });

    //     } catch (error) {
    //         next(error);
    //     }
    // }
    // // delete Notes By Object ID
    // public deleteNote = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       const Id: string = req.params.id;
    //       const deleteNoteData: Note = await this.noteService.deleteNote(Id);
    //       console.log(Id);
    //       res.status(200).json({ data: deleteNoteData, message: 'delete Note', statusCode: 200 });
    //     } catch (error) {
    //       next(error);
    //     }
    //   };

}
export default LabelController;
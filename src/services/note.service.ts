import { NoteDto } from "@/dtos/note.dto";
import { HttpException } from "@/exceptions/HttpException";
import { Note } from "@/interfaces/note.interface";
import NoteModel from "@/models/note.model";
import { isEmpty } from "@/utils/util";
import { Types } from "mongoose";


class NoteService {
    public noteModel = NoteModel;
    //create record
    public async createNote(NoteData: NoteDto): Promise<Note> {
        console.log("Team Services", NoteData);
        if (isEmpty(NoteData)) throw new HttpException(400, 'Note Data is empty');
        const findnote: Note = await this.noteModel.findOne({ content: { $regex: new RegExp(NoteData.content, "i") }, account_id: NoteData.account_id, user_id: NoteData.user_id });
        if (findnote) throw new HttpException(409, `The Note : ${NoteData.content}  for account ${NoteData.user_id} is already exists`);
        const createTeamData: Note = await this.noteModel.create(NoteData);
        return createTeamData;
    };
    //get Notes
    public async findNotes(accountid: string, userid: string, contactid: string): Promise<Note[]> {
        if (isEmpty(accountid)) throw new HttpException(400, 'Account id is empty');
        if (isEmpty(userid)) throw new HttpException(400, 'User Id is empty');
        if (isEmpty(contactid)) throw new HttpException(400, 'Contact Id is empty');
        if (!Types.ObjectId.isValid(contactid)) throw new HttpException(400, 'Contact Id is invalid');
        if (!Types.ObjectId.isValid(accountid)) throw new HttpException(400, 'Account Id is invalid');
        if (!Types.ObjectId.isValid(userid)) throw new HttpException(400, 'User Id is invalid');

        const findNote: Note[] = await this.noteModel.find({ account_id: accountid, user_id: userid, contact_id: contactid });
        if (!findNote) throw new HttpException(409, "Conteact Notes not available");
        return findNote;
    };
    // update Note
    //update record
    public async updateNote(id: string, noteData: NoteDto): Promise<Note> {
        if (isEmpty(noteData)) throw new HttpException(400, 'Note Data is empty');
        if (!Types.ObjectId.isValid(id)) throw new HttpException(400, 'Note ID is invalid');
        console.log('inside Note Update service===', id);
        if (id) {
            const findNote: Note = await this.noteModel.findOne({ content: noteData.content });
            if (findNote && findNote._id != id) throw new HttpException(409, `This  ${noteData.content} already exists`);
            // find other notes id which have content
        }
        const updateNoteById: Note = await this.noteModel.findByIdAndUpdate(id, { $set: noteData, updated_at: Date.now() }, { new: true, runValidators: true });
        console.log(updateNoteById);
        if (!updateNoteById) throw new HttpException(409, "Note doesn't exist");
        return updateNoteById;
    }
    // deleted record
    public async deleteNote(Id: string): Promise<Note> {
        console.log(Id);
        const deleteNoteById: Note = await this.noteModel.findByIdAndDelete({ _id: Id },  { new: true, runValidators: true });
        //findOneAndDelete(localeId);
        if (!deleteNoteById) throw new HttpException(409, "Notes doesn't exist");
        return deleteNoteById;
    }

}
export default NoteService;
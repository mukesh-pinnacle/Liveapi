import { Router } from 'express';
import LabelController from '@controllers/label.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware'
import authMiddleware from '@/middlewares/auth.middleware';
import { LabelDto } from '@/dtos/label.dto';


class NoteRoute implements Routes {
    public path = '/label';
    public router: Router = Router();
    public labelController = new LabelController();
    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
         this.router.post(`${this.path}`, [validationMiddleware(LabelDto, 'body', true), authMiddleware], this.labelController.createLabel);
        // this.router.get(`${this.path}/:accountid/:userid/:contactid`, [validationMiddleware(NoteDto, 'body', true), authMiddleware], this.noteController.getNotes);
        // this.router.put(`${this.path}/:id`, [validationMiddleware(NoteDto, 'body', true), authMiddleware], this.noteController.updateNote);
        // this.router.delete(`${this.path}/:id`, [validationMiddleware(NoteDto, 'body', true), authMiddleware], this.noteController.deleteNote);
    }
}

export default NoteRoute;
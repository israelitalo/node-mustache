import { Request, Response } from 'express';
import Pet from '../models/Pet';

export default class SearchController {

    public search(request: Request, response: Response) {
        const query: string = request.query.q as string;

        if (!query) {
            return response.redirect("/");
        }

        const pet = new Pet();

        const pets = pet.getFromName(query);

        response.render("pages/home", {
            pets,
            query
        });

    }

}
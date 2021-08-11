import { Request, Response } from "express";
import Pet from "../models/Pet";
import { createMenu } from '../utils/createMenu';

export default class PageController {
    public index(request: Request, response: Response) {
        const petModel = new Pet();

        const pets = petModel.getAll();

        return response.render("pages/home", {
            menu: createMenu('all'),
            banner: {
                title: 'Todos os animais',
                image: 'allanimals.jpg'
            },
            pets
        });
    }

    public getDogs(request: Request, response: Response) {
        const petModel = new Pet();

        const pets = petModel.getWithType('dog');

        return response.render("pages/home", {
            menu: createMenu('dog'),
            banner: {
                title: 'Cachorros',
                image: 'banner_dog.jpg'
            },
            pets
        });
    }

    public getCats(request: Request, response: Response) {
        const petModel = new Pet();

        const pets = petModel.getWithType('cat');

        return response.render("pages/home", {
            menu: createMenu('cat'),
            banner: {
                title: 'Gatos',
                image: 'banner_cat.jpg'
            },
            pets
        });
    }

    public getFishes(request: Request, response: Response) {
        const petModel = new Pet();

        const pets = petModel.getWithType('fish');

        return response.render("pages/home", {
            menu: createMenu('fish'),
            banner: {
                title: 'Peixes',
                image: 'banner_fish.jpg'
            },
            pets
        });
    }
}
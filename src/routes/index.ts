import { Router, Request, Response } from 'express';

const router = Router();

router.get("/", (request: Request, response: Response) => {
    const name = "Israel";
    const idade = 29;
    let mostrarIdade = true;

    idade < 30 ? mostrarIdade = true : mostrarIdade = false;

    const stacks: any = [];

    return response.render("pages/home", {
        name,
        idade,
        mostrarIdade,
        stacks
    });
});

router.get("/user/:id", (request: Request, response: Response) => {
    const { id } = request.params;

    return response.json(id);
});

router.post("/user", (request: Request, response: Response) => {
    const { name, email, password } = request.body;

    return response.json({ name, email, password });
});

export default router;
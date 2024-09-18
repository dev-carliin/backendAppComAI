import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritinService";

 export interface DataProps {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string
    objective: string
    level: string
}

class CreateNutritionController {
    async handle(request: FastifyRequest, refly: FastifyReply) {
        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute({
            name, weight, height, age, gender, objective, level
        });

        refly.send(nutrition);

    }
}

export { CreateNutritionController }
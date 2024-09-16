import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritinService";

 export interface DataProps {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string
    objectve: string
    level: string
}

class CreateNutritionController {
    async handle(request: FastifyRequest, refly: FastifyReply) {
        const { name, weight, height, age, gender, objectve, level } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute({
            name, weight, height, age, gender, objectve, level
        });

        refly.send(nutrition);

    }
}

export { CreateNutritionController }
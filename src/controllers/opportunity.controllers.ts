import { Request, Response, response } from "express";
import { OpportunityServices } from "../services/opportunity.services";

export class OpportunityControllers{
    async create(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = await opportunityServices.create(req.body);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = await opportunityServices.findMany();

        return res.status(200).json(response);
    }

    async findOne(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = await opportunityServices.findOne(+req.params.id);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response){

    }

    async delete(req: Request, res: Response){
        
    }
}
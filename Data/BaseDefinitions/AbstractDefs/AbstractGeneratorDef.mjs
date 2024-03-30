import { AdvSimRecipe } from "../HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { AbstractMachine } from "./AbstractMachineDef.mjs";


export class AbstractGenerator extends AbstractMachine{
    constructor(RecipeDef, Cost, Width, Length, PowerCapacity, PollutionDef){
        super(Cost, Width, Length, PowerCapacity, PollutionDef)
        if(RecipeDef instanceof AdvSimRecipe){
            this.RecipeDef = RecipeDef
        }else if(RecipeDef instanceof Array){
            if(RecipeDef.length == 5){
                this.RecipeDef = new AdvSimRecipe(RecipeDef[0], RecipeDef[1], RecipeDef[2], RecipeDef[3], 
                    RecipeDef[4])
            }else{
                throw new Error("Array of RecipeDef does not have the right length (5)")
            }
        }else{
            throw new Error("RecipeDef has invalid Args! Either provide a RecipeDef class or a 5-long Array")
        }
    }

    #parseCustomGet(toparse){
        switch (toparse) {
            case "MoneyFlowIn":
                return this.RecipeDef.getMoneyFlowIn()
                break;
/*            case "MoneyFlowOut":
                return this.RecipeDef.getMoneyFlowOut()
                break;
            case "MoneyFlow":
                return this.RecipeDef.totalMoneyFlow()
                break; */
            case "Power":
                return this.RecipeDef.getPowerDef().getPowerFlow()
                break;
            case "Pollution":
                return this.getPollutionDef
                break;
            case "Surface":
                return this.getSurface()
                break;
            case "Cost":
                return this.getCost()
                break;
            default:
                throw new Error("You picked the wrong house, fool")
                break;
        }
    }

    getCustom(Thingie, perValue){
        return this.#parseCustomGet(Thingie) / this.#parseCustomGet(perValue)
    }
}
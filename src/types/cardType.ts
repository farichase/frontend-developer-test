export interface CardType {
    name : string,
    alias: string,
    organization: {
        name : string,
        license : string,
        logo : string
    }
    customerRequirements: {
        documents: number,
        age : number,
        manAgeAtRepayment : number,
        femaleAgeAtRepayment : number,
        lastExperience : number,
        fullExperience : number,
        salary : number,
    },
    rate : {
        periods : [
            {
                rate: {
                    from: number,
                    to : number,
                }
                termUnit : string,
                term : {
                    from : number,
                    to : number
                },
                isFloatingRate : boolean
            }
        ],
        currency : string,
        creditAmount: {
            from : number,
            to : number,
        },
        initialAmount: {
            from : number,
            to : number,
        }
    }
}
export default CardType
/* Created By: JAshMe */
/*
    Description: To provide Mathematical Methods
*/

/* Method to generate random integer between [from,to) */
export const randomNumber = (from:number, to:number) : number => from + Math.floor(Math.random()*(to - from))

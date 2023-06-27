import { Injectable } from '@nestjs/common';
import { Configuration, CreateCompletionRequest, OpenAIApi } from "openai";
const MODULE_ID="text-davinci-003"
const defaultTemperature=0.9
@Injectable()
export class ChatGptAiService {
    private readonly OpenAiApi:OpenAIApi
    constructor(){
        const configuration = new Configuration({
            organization: process.env.ORGANISATION_ID,
            apiKey: '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',
        });
        this.OpenAiApi = new OpenAIApi(configuration);
    }
    async getModelAnswer(question:string,temperature?:number){
        try{
           const params:CreateCompletionRequest={
            prompt : question,
            model : MODULE_ID,
            temperature: temperature!=undefined?temperature:defaultTemperature
           }
           const response = await this.OpenAiApi.createCompletion(params)
           const {data} = response
           if(data.choices.length){
            return data.choices
           }
           return response.data
        }catch(error){
            console.error('Error:', error);
        }
    }
} 

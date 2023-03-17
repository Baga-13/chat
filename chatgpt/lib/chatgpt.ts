import { Configuration, OpenAIApi } from "openai"

type Data= {
    text: any;
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

// this is to access the info provided by chatgpt api
const openai = new OpenAIApi(configuration)

// const message: Message = {
//     text: response || "ChatGPT was unable to find an answer for that",
// }

export default openai
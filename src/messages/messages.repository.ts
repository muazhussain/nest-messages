import { Injectable } from "@nestjs/common";
import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

@Injectable()
export class MessageRepository {

    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        writeFile('messages.json', JSON.stringify(messages));
    }
}
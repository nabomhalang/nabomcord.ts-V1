

import { ApplicationCommandDataResolvable, Client } from 'discord.js';
import fs from 'fs';;
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(client: Client) {

    const commandsArray: ApplicationCommandDataResolvable[] = new Array();
    // const TestCommandsArray: ApplicationCommandDataResolvable[] = new Array();
    const commandsDir = fs.readdirSync(path.join(__dirname, "/../commands/"), { withFileTypes: true }).filter(dir => dir.isDirectory());
    for (const Category of commandsDir) {
        const commandsFile = fs.readdirSync(path.join(__dirname, `/../commands/${Category.name}`)).filter(file => file.endsWith('js'));
        for (const file of commandsFile) {
            const command = (await import(path.join(__dirname, `/../commands/${Category.name}/${file}`))).default;

            client.commands.set(command.data.name, command);
            // TestCommandsArray.push(command.data.toJSON());
            commandsArray.push(command.data.toJSON());
        }
    }

    const eventsDir = fs.readdirSync(path.join(__dirname, "/../events/"), { withFileTypes: true }).filter(dir => dir.isDirectory());
    for (const Category of eventsDir) {
        const eventsFile = fs.readdirSync(path.join(__dirname, `/../events/${Category.name}`)).filter(file => file.endsWith('js'));
        for (const file of eventsFile) {
            (await import(path.join(__dirname, `/../events/${Category.name}/${file}`))).default;
        }
    }

    client.on("ready", async () => {
        // await client.guilds.cache.get(process.env.GUILD_ID).commands.set(TestCommandsArray);
        await client.application?.commands.set(commandsArray);
    });
}
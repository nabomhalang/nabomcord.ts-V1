

import "dotenv/config";

import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import Handler from "./handler/index.js";
import chalk from "chalk";

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, any>;
    }
}

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();

client.once(Events.ClientReady, () => {
    console.log(chalk.bold(chalk.green(`[+] Success running nabom Discord bot...`)));
});

Handler(client);

client.login(process.env.TOKEN);
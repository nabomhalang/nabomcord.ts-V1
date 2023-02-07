

import chalk from "chalk";
import { Interaction } from "discord.js";
import { client } from "../../index.js";

client.on("interactionCreate", async (interactive: Interaction) => {
    if (!interactive.inCachedGuild() || !interactive.isChatInputCommand()) return;

    const command = client.commands.get(interactive.commandName);
    await interactive.deferReply();

    if (!command) return;

    command.execute(client, interactive);
    // console.log(chalk.white(`[COMMAND] ${interactive.guild.name}(${interactive.guild.id}) - ${interactive.user.tag}(${interactive.user.id}) executed ${interactive.commandName}`))
});
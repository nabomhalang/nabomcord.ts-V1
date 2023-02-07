

import { CommandInteraction, Client, SlashCommandBuilder, EmbedBuilder } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!")
        .setDMPermission(false),

    execute: async function (client: Client, interactive: CommandInteraction) {
        if (!interactive.isChatInputCommand()) return;

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle("Pong!!")
            .setDescription(`ws : ${client.ws.ping}ws`)
            .setTimestamp()
            .setAuthor({ name: `Requested by ${interactive.user.tag}`, iconURL: `${interactive.user.displayAvatarURL()}` })
            .setFooter({ text: `Made by 나봄하랑#7597` })

        interactive.followUp({ embeds: [embed], ephemeral: true });
    }
}
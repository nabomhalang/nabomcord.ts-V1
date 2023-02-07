

import { CommandInteraction, Client, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"
import invitaion from '../../buttons/invitation/link.js';

export default {
    data: new SlashCommandBuilder()
        .setName("invitaion")
        .setDescription("Give a link to invite the nabom bot."),

    execute: async function (client: Client, interactive: CommandInteraction) {
        if (!interactive.inCachedGuild()) return;

        const button = new ActionRowBuilder<ButtonBuilder>().addComponents(invitaion.data);
        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`💌 Invitaion`)
            .setThumbnail(`https://png.pngtree.com/png-clipart/20190611/original/pngtree-parchment-png-image_2332809.jpg`)
            .setDescription(`Currently, there are ${client.guilds.cache.size} servers, ${client.users.cache.size} users.`)
            .setTimestamp()
            .setAuthor({ name: `Requested by ${interactive.user.tag}`, iconURL: `${interactive.user.displayAvatarURL()}` })
            .setFooter({ text: `Made by 나봄하랑#7597` })
        await interactive.followUp({ ephemeral: true, embeds: [embed], components: [button] });
    }
}
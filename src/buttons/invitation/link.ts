

import { ButtonBuilder, ButtonStyle } from "discord.js";

export default {
    data: new ButtonBuilder()
        .setLabel("invitaion")
        .setEmoji("💌")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1072119068242489424&permissions=1085824953584&scope=bot%20applications.commands")
}

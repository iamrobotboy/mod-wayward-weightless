import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import Message from "language/dictionary/Message";
import { MessageType } from "game/entity/player/IMessageManager";
import { Stat } from "game/entity/IStats";
import { HookMethod } from "mod/IHookHost";
import Player from "game/entity/player/Player";

export default class Weightless extends Mod {
    @Register.message("Version")
    public readonly messageVersion: Message;

    @HookMethod
    public onGameStart(isLoadingSave: boolean, playedCount: number): void {
        localPlayer.stat.set(Stat.Weight, 0);
    }

    @HookMethod
    public onGameScreenVisible(): void {
        localPlayer.messages.type(MessageType.Good).send(this.messageVersion);
    }

    @HookMethod
    public onUpdateWeight(player: Player, newWeight: number): number {
        return 0;
    }
}

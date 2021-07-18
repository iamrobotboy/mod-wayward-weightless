import Mod from "mod/Mod";
import Message from "language/dictionary/Message";
import Player from "game/entity/player/Player";
export default class Weightless extends Mod {
    readonly messageVersion: Message;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onGameScreenVisible(): void;
    onUpdateWeight(player: Player, newWeight: number): number;
}

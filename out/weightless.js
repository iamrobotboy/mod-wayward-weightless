var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "mod/ModRegistry", "game/entity/player/IMessageManager", "game/entity/IStats", "mod/IHookHost"], function (require, exports, Mod_1, ModRegistry_1, IMessageManager_1, IStats_1, IHookHost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Weightless extends Mod_1.default {
        onGameStart(isLoadingSave, playedCount) {
            localPlayer.stat.set(IStats_1.Stat.Weight, 0);
        }
        onGameScreenVisible() {
            localPlayer.messages.type(IMessageManager_1.MessageType.Good).send(this.messageVersion);
        }
        onUpdateWeight(player, newWeight) {
            return 0;
        }
    }
    __decorate([
        ModRegistry_1.default.message("Version")
    ], Weightless.prototype, "messageVersion", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], Weightless.prototype, "onGameStart", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Weightless.prototype, "onGameScreenVisible", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Weightless.prototype, "onUpdateWeight", null);
    exports.default = Weightless;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VpZ2h0bGVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3dlaWdodGxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBUUEsTUFBcUIsVUFBVyxTQUFRLGFBQUc7UUFLaEMsV0FBVyxDQUFDLGFBQXNCLEVBQUUsV0FBbUI7WUFDMUQsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBR00sbUJBQW1CO1lBQ3RCLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDZCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBR00sY0FBYyxDQUFDLE1BQWMsRUFBRSxTQUFpQjtZQUNuRCxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7S0FDSjtJQWhCRztRQURDLHFCQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztzREFDWTtJQUd4QztRQURDLHNCQUFVO2lEQUdWO0lBR0Q7UUFEQyxzQkFBVTt5REFHVjtJQUdEO1FBREMsc0JBQVU7b0RBR1Y7SUFqQkwsNkJBa0JDIn0=
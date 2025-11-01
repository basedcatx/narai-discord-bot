import {test, expect} from "bun:test"
import { GuildFactory } from "../../classes/base/GuildFactory"
import { botClient } from "../.."

test("Verifies that a new guild object is created and could be used to retrieve an instanciated guild name", function hyp() {
    const guild = GuildFactory.fromId("asdlfkasdfasdf", botClient);
    expect(typeof guild?.getName()).toBe("string")
    expect (typeof guild?.getId()).toBe("string")
})
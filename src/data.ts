type FissureData = {
    node: string,
    missionType: string,
    enemy: string,
    tier: string,
    tierNum: number,
    eta: string,
}

type InvasionData = {
    node: string,
    attacker: Object,
    defender: Object, 
    desc: string,
    eta: string,
}

type DropData = {
    place: string,
    item: string,
    rarity: string,
    chance: number,
}

type PlatinumData = {
    avg_price: number,
    median: number,
}

export { FissureData, InvasionData, DropData, PlatinumData};
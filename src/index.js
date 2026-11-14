export default {
  async fetch() {
    const common = [
      "Bud Light 🍺",
      "Coors Light 🍺",
      "Miller Lite 🍺",
      "PBR 🍺",
      "Modelo 🍺",
      "Corona 🍺",
      "Guinness 🍺",
      "Blue Moon 🌙🍺",
      "Heineken 🍺",
      "Yuengling 🍺",
      "Michelob Ultra 🍺",
      "Sam Adams Boston Lager 🍺",
      "Shock Top 🍊🍺",
      "Dos Equis 🍺",
      "Kona Big Wave 🌊🍺",
      "Sierra Nevada Pale Ale 🍺",
      "Fat Tire 🚲🍺",
      "Anchor Steam ⚓🍺",
      "Boddingtons 🍺",
      "Newcastle Brown Ale 🍺"
    ];

    const uncommon = [
      "Oyster Stout 🦪🍺",
      "Dragon's Milk 🐉🥛🍺",
      "Milk Stout 🥛🍺",
      "Belgian Tripel 🇧🇪🍺",
      "Rauchbier 🔥🍺",
      "Kentucky Bourbon Barrel Ale 🥃🍺",
      "Chocolate Stout 🍫🍺",
      "Peanut Butter Porter 🥜🍺",
      "Coffee Porter ☕🍺",
      "Hazy IPA ☁️🍺",
      "Imperial Porter 🍺",
      "Marzen 🍂🍺",
      "Weihenstephaner 🍺",
      "Saison 🌾🍺",
      "Barleywine 🍷🍺",
      "Scotch Ale 🥃🍺",
      "Black IPA 🌑🍺",
      "Cream Ale 🍺",
      "Doppelbock 🐐🍺",
      "Pumpkin Ale 🎃🍺"
    ];

    const rare = [
      "Pliny the Elder 🌲🍺",
      "Heady Topper 👽🍺",
      "Westmalle Tripel 👑🍺",
      "Bourbon County Stout 🥃🍺",
      "Cantillon Gueuze 🐑🍺",
      "Rodenbach Grand Cru 🍷🍺",
      "Russian River Blind Pig 🐷🍺",
      "3 Floyds Dark Lord 😈🍺",
      "Aventinus Weizenbock ⚔️🍺",
      "Founders KBS 🔥🍺",
      "Zombie Dust 🧟🍺",
      "Supplication 🙏🍺",
      "Consecration ⛪🍺",
      "Black Tuesday 🌑🍺",
      "Parabola 🌌🍺"
    ];

    const legendary = [
      "Westvleteren 12 👑🍺",
      "Samuel Adams Utopias 🏆🍺",
      "Assassin Stout 🗡️🍺",
      "King Julius 🍊👑🍺",
      "Hunahpu's Imperial Stout ☠️🍺",
      "Double Barrel Hunahpu 🔥🍺",
      "Rare Bourbon County 👑🥃🍺",
      "Kentucky Brunch Brand Stout ☕🍺",
      "Mornin' Delight 🌅🍺",
      "Very Green 🌳🍺"
    ];

    const mythic = [
      "Beer of Infinite Refreshment ♾️🍺",
      "Phoenix Ember Ale 🔥🦅🍺",
      "Kraken Ink Stout 🐙🍺",
      "Cosmic Nebula IPA 🌌🍺",
      "Voidwalker Porter 🕳️🍺",
      "Elder Dragon Quad 🐲🍺",
      "Tavern of the Gods Mead ⚡🍯🍺",
      "LOOP_HAZARD Reserve Infinity Barrel 😈🍺",
      "The Final Sip of Creation 🌠🍺",
      "Chronomancer's Lager ⏳🍺"
    ];

    const commonVessels = [
      "pint glass 🍻",
      "beer mug 🍺",
      "tankard 🍻",
      "stein 🍺",
      "nonic glass 🍻",
      "tulip glass 🌷",
      "weizen glass 🍺",
      "snifter 🍷",
      "mason jar 🫙",
      "boot mug 👢",
      "red solo cup 🔴",
      "ceramic mug ☕",
      "pub glass 🍺",
      "pitcher 🍻",
      "growler 🏺"
    ];

    const rareVessels = [
      "crystal goblet 💎",
      "silver chalice ⚔️",
      "gold-rimmed snifter ✨",
      "copper mug 🥉",
      "oak cask mug 🌳",
      "pirate tankard 🏴‍☠️",
      "viking horn 🦌",
      "dragon chalice 🐲",
      "jeweled stein 💍",
      "wizard's cup 🧙"
    ];

    const legendaryVessels = [
      "Dragon-Forged Chalice 🐉🏆",
      "King's Golden Stein 👑",
      "Cup of Eternal Foam ♾️",
      "Goblet of Infinite Beer ✨🍺",
      "Loop_Hazard's Secret Mug 😈",
      "The Grail of Hops 🌟",
      "Titan's Tankard ⚡",
      "Celestial Chalice 🌌"
    ];

    const chaosEvents = [
      "💥 CHAOS! Chat spilled your beer before the first sip!",
      "😈 LOOP_HAZARD stole your beer and escaped into the night!",
      "🍺 You dropped your beer while showing off.",
      "🐕 A random dog appeared and drank it.",
      "🌪️ A beer tornado carried it away.",
      "👻 A ghost stole the vessel. The beer is floating.",
      "🚨 LOOP_HAZARD replaced your beer with warm tap water.",
      "🤡 Chat distracted you and someone swiped your drink.",
      "💀 The bartender accidentally drank it.",
      "🐉 A dragon mistook it for treasure.",
      "🦝 A raccoon claimed ownership of the beer.",
      "🎣 A fisherman hooked your vessel and reeled it away.",
      "☄️ A meteor landed directly in your beer.",
      "⚡ Lightning struck the mug and vaporized the foam.",
      "🧙 A wizard turned it into root beer."
    ];

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const roll = Math.random() * 100;

    let beer;
    let vessel;
    let rarity;

    if (roll < 5) {
      rarity = "🌈 MYTHIC";
      beer = pick(mythic);
      vessel = pick(legendaryVessels);
    } else if (roll < 15) {
      rarity = "🟣 LEGENDARY";
      beer = pick(legendary);
      vessel = pick(legendaryVessels);
    } else if (roll < 35) {
      rarity = "🔵 RARE";
      beer = pick(rare);
      vessel = pick(rareVessels);
    } else if (roll < 65) {
      rarity = "🟢 UNCOMMON";
      beer = pick(uncommon);
      vessel = Math.random() < 0.5
        ? pick(commonVessels)
        : pick(rareVessels);
    } else {
      rarity = "🟤 COMMON";
      beer = pick(common);
      vessel = pick(commonVessels);
    }

    const chaosRoll = Math.random() * 100;

    if (chaosRoll < 5) {
      return new Response(
        `${rarity} | ${beer} served in a ${vessel}. ${pick(chaosEvents)}`,
        {
          headers: {
            "content-type": "text/plain; charset=UTF-8"
          }
        }
      );
    }

    return new Response(
      `${rarity} | You received ${beer} served in a ${vessel}! 🍻`,
      {
        headers: {
          "content-type": "text/plain; charset=UTF-8"
        }
      }
    );
  }
};

// Dados estruturados completos do módulo Roland V-Drums V31
// Extraídos de V31_DataList_eng02_W.pdf e V31_Reference_ptb03_W.pdf

const PRESET_DRUM_KITS_1_TO_70 = [
  { number: 1, code: "001", name: "Studio A", subName: "" },
  { number: 2, code: "002", name: "Studio B", subName: "" },
  { number: 3, code: "003", name: "Rock Energy", subName: "" },
  { number: 4, code: "004", name: "Jazz Sizzle", subName: "" },
  { number: 5, code: "005", name: "Massive Metal", subName: "" },
  { number: 6, code: "006", name: "Vintage Loose", subName: "" },
  { number: 7, code: "007", name: "Neo Funk", subName: "" },
  { number: 8, code: "008", name: "Drum'n'Bass", subName: "" },
  { number: 9, code: "009", name: "Pure Analog", subName: "Mid-O Style" },
  { number: 10, code: "010", name: "Deep Rock", subName: "" },
  { number: 11, code: "011", name: "Ghost Note King", subName: "" },
  { number: 12, code: "012", name: "Live is Life", subName: "Live Pop Rock" },
  { number: 13, code: "013", name: "Piccolo Funk", subName: "Voice Samples on Tom Rim" },
  { number: 14, code: "014", name: "Bop Shop", subName: "Sizzle Swing" },
  { number: 15, code: "015", name: "Dark & Open", subName: "" },
  { number: 16, code: "016", name: "Modern Gospel", subName: "" },
  { number: 17, code: "017", name: "JS Garage", subName: "Snare Explosion" },
  { number: 18, code: "018", name: "Hall Ambience", subName: "" },
  { number: 19, code: "019", name: "Vintage e-Drums", subName: "Hexagonal Pads" },
  { number: 20, code: "020", name: "Crush Comp", subName: "" },
  { number: 21, code: "021", name: "Dry & Muffled", subName: "" },
  { number: 22, code: "022", name: "Blast Attack", subName: "Thrash Metal" },
  { number: 23, code: "023", name: "Crisp Drive", subName: "Preamped Beatmaker" },
  { number: 24, code: "024", name: "All Big Sizes", subName: "Big Arena" },
  { number: 25, code: "025", name: "Large Room", subName: "" },
  { number: 26, code: "026", name: "Vintage Comp", subName: "" },
  { number: 27, code: "027", name: "12\"Ringing Snare", subName: "" },
  { number: 28, code: "028", name: "Classic Rock", subName: "" },
  { number: 29, code: "029", name: "Babylon Shuffle", subName: "" },
  { number: 30, code: "030", name: "Hard Rock", subName: "" },
  { number: 31, code: "031", name: "Jazz Legend", subName: "Floor Tom Kick" },
  { number: 32, code: "032", name: "Funkifyer", subName: "Live Funk Studio" },
  { number: 33, code: "033", name: "Jazzinator", subName: "Hybrid Jazz Gig" },
  { number: 34, code: "034", name: "Pro Studio", subName: "" },
  { number: 35, code: "035", name: "Viking Metal", subName: "Norwegian Metal" },
  { number: 36, code: "036", name: "Shallow Pop", subName: "" },
  { number: 37, code: "037", name: "Crossing Front", subName: "" },
  { number: 38, code: "038", name: "Alternative Rock", subName: "" },
  { number: 39, code: "039", name: "Acoustic Popper", subName: "Aggressive - Hip Hop" },
  { number: 40, code: "040", name: "Heavy&Distorted", subName: "" },
  { number: 41, code: "041", name: "Lowbit World", subName: "Bit Crusher" },
  { number: 42, code: "042", name: "Gate in the Air", subName: "COMPRESSED" },
  { number: 43, code: "043", name: "DIGIKIT!", subName: "SnappDkik" },
  { number: 44, code: "044", name: "Synthetix", subName: "" },
  { number: 45, code: "045", name: "Electro Synth", subName: "" },
  { number: 46, code: "046", name: "UK Wet Booth", subName: "" },
  { number: 47, code: "047", name: "UK Wet Studio", subName: "" },
  { number: 48, code: "048", name: "LoFi Overdrive", subName: "" },
  { number: 49, code: "049", name: "TR-808", subName: "Transistor Rhythm" },
  { number: 50, code: "050", name: "TR-909", subName: "Transistor Rhythm" },
  { number: 51, code: "051", name: "TR-707", subName: "Transistor Rhythm" },
  { number: 52, code: "052", name: "CR-78", subName: "CompuRhythm" },
  { number: 53, code: "053", name: "TR-909 Inspire", subName: "" },
  { number: 54, code: "054", name: "TexMex FX", subName: "" },
  { number: 55, code: "055", name: "R&B Ballad", subName: "" },
  { number: 56, code: "056", name: "Mellow R&B", subName: "" },
  { number: 57, code: "057", name: "The Big One", subName: "Tom Rim Bend" },
  { number: 58, code: "058", name: "Detroit", subName: "Hip Hop" },
  { number: 59, code: "059", name: "Dancing LA", subName: "" },
  { number: 60, code: "060", name: "Junk Noise", subName: "" },
  { number: 61, code: "061", name: "Orchestral", subName: "Pedal Bend" },
  { number: 62, code: "062", name: "Mermaid", subName: "Steelpan" },
  { number: 63, code: "063", name: "Bateria", subName: "Carnaval do Brasil" },
  { number: 64, code: "064", name: "Latin Festa!", subName: "" },
  { number: 65, code: "065", name: "Wild Drumming", subName: "Conga & Djembe" },
  { number: 66, code: "066", name: "Ethnic Perc", subName: "" },
  { number: 67, code: "067", name: "Camel Journey", subName: "" },
  { number: 68, code: "068", name: "Air From Asia", subName: "Pedal Bend" },
  { number: 69, code: "069", name: "Jazz Brushes", subName: "Small Room" },
  { number: 70, code: "070", name: "Modern Brushes", subName: "Large Room w/ Sizzle" }
];

const USER_DRUM_KITS_71_TO_200 = Array.from({ length: 130 }, (_, idx) => {
  const num = idx + 71;
  return {
    number: num,
    code: String(num).padStart(3, "0"),
    name: "User Kit",
    subName: ""
  };
});

const ALL_DRUM_KITS = [...PRESET_DRUM_KITS_1_TO_70, ...USER_DRUM_KITS_71_TO_200];

const KIT_PHRASES = [
  { number: 1, code: "01", name: "8beat - Med", label: "01: 8beat - Med" },
  { number: 2, code: "02", name: "8beat - Fast", label: "02: 8beat - Fast" },
  { number: 3, code: "03", name: "8beat - Slow", label: "03: 8beat - Slow" },
  { number: 4, code: "04", name: "16beat 1", label: "04: 16beat 1" },
  { number: 5, code: "05", name: "16beat 2", label: "05: 16beat 2" },
  { number: 6, code: "06", name: "16beat Slow 1", label: "06: 16beat Slow 1" },
  { number: 7, code: "07", name: "16beat Slow 2", label: "07: 16beat Slow 2" },
  { number: 8, code: "08", name: "Ballad", label: "08: Ballad" },
  { number: 9, code: "09", name: "Rock - Fast 1", label: "09: Rock - Fast 1" },
  { number: 10, code: "10", name: "Rock - Fast 2", label: "10: Rock - Fast 2" },
  { number: 11, code: "11", name: "Rock - Med 1", label: "11: Rock - Med 1" },
  { number: 12, code: "12", name: "Rock - Med 2", label: "12: Rock - Med 2" },
  { number: 13, code: "13", name: "Rock - Fast", label: "13: Rock - Fast" },
  { number: 14, code: "14", name: "Rock - Slow", label: "14: Rock - Slow" },
  { number: 15, code: "15", name: "Tom Beat 1", label: "15: Tom Beat 1" },
  { number: 16, code: "16", name: "Tom Beat 2", label: "16: Tom Beat 2" },
  { number: 17, code: "17", name: "Metal 1", label: "17: Metal 1" },
  { number: 18, code: "18", name: "Metal 2", label: "18: Metal 2" },
  { number: 19, code: "19", name: "Metal 3", label: "19: Metal 3" },
  { number: 20, code: "20", name: "Jazz Funk 1", label: "20: Jazz Funk 1" },
  { number: 21, code: "21", name: "Jazz Funk 2", label: "21: Jazz Funk 2" },
  { number: 22, code: "22", name: "Funk", label: "22: Funk" },
  { number: 23, code: "23", name: "Funk Shuffle1", label: "23: Funk Shuffle1" },
  { number: 24, code: "24", name: "Funk Shuffle2", label: "24: Funk Shuffle2" },
  { number: 25, code: "25", name: "Funk Shuffle3", label: "25: Funk Shuffle3" },
  { number: 26, code: "26", name: "R&B - Shuffle", label: "26: R&B - Shuffle" },
  { number: 27, code: "27", name: "R&B - Slow", label: "27: R&B - Slow" },
  { number: 28, code: "28", name: "Modern Gospel", label: "28: Modern Gospel" },
  { number: 29, code: "29", name: "Samba Kick", label: "29: Samba Kick" },
  { number: 30, code: "30", name: "Samba Bateria", label: "30: Samba Bateria" },
  { number: 31, code: "31", name: "Songo", label: "31: Songo" },
  { number: 32, code: "32", name: "Latin Jazz", label: "32: Latin Jazz" },
  { number: 33, code: "33", name: "Jazz - Slow", label: "33: Jazz - Slow" },
  { number: 34, code: "34", name: "Jazz - Med 1", label: "34: Jazz - Med 1" },
  { number: 35, code: "35", name: "Jazz - Med 2", label: "35: Jazz - Med 2" },
  { number: 36, code: "36", name: "Jazz - Med 3", label: "36: Jazz - Med 3" },
  { number: 37, code: "37", name: "Jazz - Fast 1", label: "37: Jazz - Fast 1" },
  { number: 38, code: "38", name: "Jazz - Fast 2", label: "38: Jazz - Fast 2" },
  { number: 39, code: "39", name: "Jazz Tom Beat", label: "39: Jazz Tom Beat" },
  { number: 40, code: "40", name: "Second Line", label: "40: Second Line" },
  { number: 41, code: "41", name: "Elec Beat 1", label: "41: Elec Beat 1" },
  { number: 42, code: "42", name: "Elec Beat 2", label: "42: Elec Beat 2" },
  { number: 43, code: "43", name: "Elec Beat 3", label: "43: Elec Beat 3" },
  { number: 44, code: "44", name: "Drum'n'Bass", label: "44: Drum'n'Bass" },
  { number: 45, code: "45", name: "Trap 1", label: "45: Trap 1" },
  { number: 46, code: "46", name: "Trap 2", label: "46: Trap 2" },
  { number: 47, code: "47", name: "Dub Step", label: "47: Dub Step" },
  { number: 48, code: "48", name: "Break Beats", label: "48: Break Beats" },
  { number: 49, code: "49", name: "Sound Check 1", label: "49: Sound Check 1" },
  { number: 50, code: "50", name: "Sound Check 2", label: "50: Sound Check 2" },
  { number: 51, code: "51", name: "Sound Check 3", label: "51: Sound Check 3" },
  { number: 52, code: "52", name: "Sound Check 4", label: "52: Sound Check 4" }
];

const BUILTIN_SONGS = [
  { number: 1, code: "001", name: "Drum Solo", label: "001: Drum Solo", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 2, code: "002", name: "Sound Check 1", label: "002: Sound Check 1", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 3, code: "003", name: "Sound Check 2", label: "003: Sound Check 2", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 4, code: "004", name: "Sound Check 3", label: "004: Sound Check 3", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 5, code: "005", name: "Drum Phrase 16beat", label: "005: Drum Phrase 16beat", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 6, code: "006", name: "Drum Phrase Metal", label: "006: Drum Phrase Metal", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 7, code: "007", name: "Drum Phrase Jazz", label: "007: Drum Phrase Jazz", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 8, code: "008", name: "Drum Phrase Funk", label: "008: Drum Phrase Funk", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 9, code: "009", name: "Drum Phrase HipHop", label: "009: Drum Phrase HipHop", type: "DRUM REC / MIDI", dataCategory: "Dados de performance de bateria (001–009)" },
  { number: 10, code: "010", name: "Rock 1 (AUDIO)", label: "010: Rock 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 11, code: "011", name: "Rock 2 (AUDIO)", label: "011: Rock 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 12, code: "012", name: "Rock 3 (AUDIO)", label: "012: Rock 3 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 13, code: "013", name: "Rock 4 (AUDIO)", label: "013: Rock 4 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 14, code: "014", name: "Jazz 1 (AUDIO)", label: "014: Jazz 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 15, code: "015", name: "Jazz 2 (AUDIO)", label: "015: Jazz 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 16, code: "016", name: "Jazz 3 (AUDIO)", label: "016: Jazz 3 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 17, code: "017", name: "Jazz 4 (AUDIO)", label: "017: Jazz 4 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 18, code: "018", name: "Jazz 5 (AUDIO)", label: "018: Jazz 5 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 19, code: "019", name: "Pop 1 (AUDIO)", label: "019: Pop 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 20, code: "020", name: "Pop 2 (AUDIO)", label: "020: Pop 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 21, code: "021", name: "Pop 3 (AUDIO)", label: "021: Pop 3 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 22, code: "022", name: "Pop 4 (AUDIO)", label: "022: Pop 4 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 23, code: "023", name: "Pop 5 (AUDIO)", label: "023: Pop 5 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 24, code: "024", name: "Pop 6 (AUDIO)", label: "024: Pop 6 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 25, code: "025", name: "Funk 1 (AUDIO)", label: "025: Funk 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 26, code: "026", name: "Funk 2 (AUDIO)", label: "026: Funk 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 27, code: "027", name: "Funk 3 (AUDIO)", label: "027: Funk 3 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 28, code: "028", name: "Funk 4 (AUDIO)", label: "028: Funk 4 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 29, code: "029", name: "Funk 5 (AUDIO)", label: "029: Funk 5 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 30, code: "030", name: "Metal 1 (AUDIO)", label: "030: Metal 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 31, code: "031", name: "Metal 2 (AUDIO)", label: "031: Metal 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 32, code: "032", name: "Metal 3 (AUDIO)", label: "032: Metal 3 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 33, code: "033", name: "Dance 1 (AUDIO)", label: "033: Dance 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 34, code: "034", name: "Dance 2 (AUDIO)", label: "034: Dance 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 35, code: "035", name: "Dance 3 (AUDIO)", label: "035: Dance 3 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 36, code: "036", name: "DEMO SONG 1 (AUDIO)", label: "036: DEMO SONG 1 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" },
  { number: 37, code: "037", name: "DEMO SONG 2 (AUDIO)", label: "037: DEMO SONG 2 (AUDIO)", type: "AUDIO", dataCategory: "Dados de áudio (010–037)" }
];

const TRIG_TYPES = [
  { usedPad: "KD-A22", trigType: "KD-A22", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Conversor de bumbo acústico de 22 polegadas" },
  { usedPad: "KD-22", trigType: "KD-22", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bumbo acústico V-Drums 22\"" },
  { usedPad: "KD-222", trigType: "KD-222", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bumbo V-Drums Acoustic Design 22\"" },
  { usedPad: "KD-220", trigType: "KD-220", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bumbo V-Drums 22\"" },
  { usedPad: "KD-200", trigType: "KD-200", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bumbo V-Drums Acoustic Design 20\"" },
  { usedPad: "KD-20", trigType: "KD-20", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo 20\"" },
  { usedPad: "KD-18", trigType: "KD-18", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo 18\"" },
  { usedPad: "KD-180", trigType: "KD-180", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bumbo V-Drums Acoustic Design 18\"" },
  { usedPad: "KD-180L", trigType: "KD-180L", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bumbo V-Drums Acoustic Design 18\" raso" },
  { usedPad: "KD-140", trigType: "KD-140", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "V-Kick 14\" mesh" },
  { usedPad: "KD-12", trigType: "KD-12", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo 12\"" },
  { usedPad: "KD-120", trigType: "KD-120", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "V-Kick 12\" mesh" },
  { usedPad: "KD-85", trigType: "KD-85", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "V-Kick 8\" mesh" },
  { usedPad: "KD-10", trigType: "KD-10", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo padrão (TD316)" },
  { usedPad: "KD-9", trigType: "KD-9", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo com superfície em tecido" },
  { usedPad: "KD-8", trigType: "KD-8", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo vertical em borracha" },
  { usedPad: "KD-7", trigType: "KD-7", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Trigger dinâmico de bumbo" },
  { usedPad: "KDQ-8", trigType: "KDQ-8", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de bumbo silencioso V-Drums Quiet Design" },
  { usedPad: "KT-10", trigType: "KT-10", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pedal de trigger de bumbo integrado" },
  { usedPad: "KT-9", trigType: "KT-9", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pedal de trigger de bumbo silencioso sem batedor" },
  { usedPad: "PDA120", trigType: "PDA120", rimShot: true, bellShot: false, posHead: false, posRim: true, chokePlay: false, notes: "Tom pad V-Drums Acoustic Design 12\" (suporta Rim Shot e Positional Sensing Rim)" },
  { usedPad: "PDA120L", trigType: "PDA120L", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Tom pad raso 12\" (suporta Rim Shot)" },
  { usedPad: "PDA100", trigType: "PDA100", rimShot: true, bellShot: false, posHead: false, posRim: true, chokePlay: false, notes: "Tom pad V-Drums Acoustic Design 10\" (suporta Rim Shot e Positional Sensing Rim)" },
  { usedPad: "PDA100L", trigType: "PDA100L", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Tom pad raso 10\" (suporta Rim Shot)" },
  { usedPad: "PDA140F", trigType: "PDA140F", rimShot: true, bellShot: false, posHead: false, posRim: true, chokePlay: false, notes: "Surdo V-Drums Acoustic Design 14\" (suporta Rim Shot e Positional Sensing Rim)" },
  { usedPad: "PD-12X", trigType: "PD-12X", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "Pad V-Drums 12\" com Positional Sensing na pele e no aro" },
  { usedPad: "PD-12P", trigType: "PD-12P", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "Pad 12\" padrão (SNARE no banco TD316) com Positional Sensing na pele e no aro" },
  { usedPad: "PD-128", trigType: "PD-128", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 12\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PD-125X", trigType: "PD-125X", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 12\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PD-125", trigType: "PD-125", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 12\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PD-10X", trigType: "PD-10X", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "Pad V-Drums 10\" com Positional Sensing na pele e no aro" },
  { usedPad: "PD-10P", trigType: "PD-10P", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "Pad 10\" com Positional Sensing na pele e no aro" },
  { usedPad: "PD-108", trigType: "PD-108", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 10\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PD-105X", trigType: "PD-105X", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 10\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PD-105", trigType: "PD-105", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 10\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PD-85", trigType: "PD-85", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 8\" mesh com Positional Sensing na pele e no aro" },
  { usedPad: "PDX-100", trigType: "PDX-100", rimShot: true, bellShot: false, posHead: true, posRim: true, chokePlay: false, notes: "V-Pad 10\" leve com Positional Sensing na pele e no aro" },
  { usedPad: "PDX-12", trigType: "PDX-12", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "V-Pad 12\" dual-trigger (pele/aro)" },
  { usedPad: "PD-10H", trigType: "PD-10H", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad 10\" dual-trigger (TOM3 no banco TD316)" },
  { usedPad: "PD-8H", trigType: "PD-8H", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad 8\" dual-trigger (TOM1/TOM2 no banco TD316)" },
  { usedPad: "PDX-8", trigType: "PDX-8", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "V-Pad 8\" mesh dual-trigger" },
  { usedPad: "PDX-6", trigType: "PDX-6", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "V-Pad 6.5\" mesh dual-trigger" },
  { usedPad: "PDQ-8S", trigType: "PDQ-8S", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de caixa silencioso V-Drums Quiet Design (suporta Rim Shot)" },
  { usedPad: "PDQ-8", trigType: "PDQ-8", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad de tom silencioso V-Drums Quiet Design (somente pele)" },
  { usedPad: "PD-8", trigType: "PD-8", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "Pad em borracha dual-trigger (suporta Rim Shot e Choke)" },
  { usedPad: "VH-13", trigType: "VH-13", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "V-Hi-Hat de 2 peças com sensor de movimento óptico" },
  { usedPad: "VH-12", trigType: "VH-12", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "V-Hi-Hat de 2 peças" },
  { usedPad: "VH-11", trigType: "VH-11", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "V-Hi-Hat flutuante de 1 peça" },
  { usedPad: "VH-10", trigType: "VH-10", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "V-Hi-Hat flutuante fino (padrão no banco TD316)" },
  { usedPad: "CY-16R-T", trigType: "CY-16R-T", rimShot: true, bellShot: true, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Ride/Crash 16\" fino (3 zonas + Positional Sensing no corpo)" },
  { usedPad: "CY-15R", trigType: "CY-15R", rimShot: true, bellShot: true, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Ride 15\" (3 zonas + Positional Sensing no corpo)" },
  { usedPad: "CY-14R-T", trigType: "CY-14R-T", rimShot: true, bellShot: true, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Ride 14\" fino (padrão RIDE no banco TD316; 3 zonas + Positional Sensing)" },
  { usedPad: "CY-14C-T", trigType: "CY-14C-T", rimShot: true, bellShot: false, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Crash 14\" fino (borda/corpo + Positional Sensing + Choke)" },
  { usedPad: "CY-14C", trigType: "CY-14C", rimShot: true, bellShot: false, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Crash 14\" (borda/corpo + Positional Sensing + Choke)" },
  { usedPad: "CY-13R", trigType: "CY-13R", rimShot: true, bellShot: true, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Ride 13\" (3 zonas + Positional Sensing + Choke)" },
  { usedPad: "CY-12C", trigType: "CY-12C", rimShot: true, bellShot: false, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Crash 12\" (borda/corpo + Positional Sensing + Choke)" },
  { usedPad: "CY-12R/C", trigType: "CY-12R/C", rimShot: true, bellShot: true, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Ride/Crash 12\" (3 zonas + Positional Sensing + Choke)" },
  { usedPad: "CY-12C-T", trigType: "CY-12C-T", rimShot: true, bellShot: false, posHead: true, posRim: false, chokePlay: true, notes: "V-Cymbal Crash 12\" fino (padrão CRASH1/2 no banco TD316)" },
  { usedPad: "CY-8", trigType: "CY-8", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "V-Cymbal 12\" dual-trigger (borda/corpo + Choke)" },
  { usedPad: "CY-5", trigType: "CY-5", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "Pad de prato 10\" dual-trigger para chimbal/splash" },
  { usedPad: "CYQ-12", trigType: "CYQ-12", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "Pad de prato silencioso V-Drums Quiet Design 12\"" },
  { usedPad: "BT-1", trigType: "BT-1", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Bar Trigger Pad curvo de zona única" },
  { usedPad: "BT-1", trigType: "BT-1 SENS", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "*1 Aumenta a sensibilidade para batidas suaves no BT-1, porém aumenta a possibilidade de disparo indesejado por vibração do ambiente." },
  { usedPad: "Generic pads", trigType: "PAD1", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "Pad genérico tipo 1 (suporta Rim Shot e Choke)" },
  { usedPad: "Generic pads", trigType: "PAD2", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Pad genérico tipo 2 (suporta Rim Shot)" },
  { usedPad: "Generic pads", trigType: "PAD3", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: true, notes: "Pad genérico tipo 3 (suporta Rim Shot e Choke)" },
  { usedPad: "RT-30K", trigType: "RT-30K", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Trigger de bateria acústica para bumbo (suporta ExtNoiseCancel)" },
  { usedPad: "RT-30HR", trigType: "RT-30HR", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Trigger acústico dual (pele e aro; suporta ExtNoiseCancel)" },
  { usedPad: "RT-30H", trigType: "RT-30H SN", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "*2 Selecionar ao fixar um RT-30H na caixa (não suporta ExtNoiseCancel)." },
  { usedPad: "RT-30H", trigType: "RT-30H TM", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "*3 Selecionar ao fixar um RT-30H em um tom (não suporta ExtNoiseCancel)." },
  { usedPad: "RT-10K", trigType: "RT-10K", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Trigger acústico série RT-10 para bumbo" },
  { usedPad: "RT-10S", trigType: "RT-10S", rimShot: true, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Trigger acústico série RT-10 dual para caixa" },
  { usedPad: "RT-10T", trigType: "RT-10T", rimShot: false, bellShot: false, posHead: false, posRim: false, chokePlay: false, notes: "Trigger acústico série RT-10 para tom" }
];

const V31_PADS = [
  {
    id: "KICK",
    name: "KICK",
    labelPt: "Bumbo (KICK)",
    defaultTrigType: "KD-10",
    isVirtualPad: false,
    usbAudioInCh: "Ch 5-6",
    usbAudioOutCh: "Ch 3-4",
    supportsPositionalHead: false,
    supportsRimShotNuance: false,
    zones: [
      { id: "HEAD", label: "KICK (HEAD)", midiNote: 36, midiNoteName: "C2", defaultInstA: "021 Mx VT Maple 3 K", defaultInstB: "020 Mx VT Maple 2 K", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "SNARE",
    name: "SNARE",
    labelPt: "Caixa (SNARE)",
    defaultTrigType: "PD-12P (ou PD-14DSX / PD-140DS via Digital)",
    isVirtualPad: false,
    usbAudioInCh: "Ch 7-8",
    usbAudioOutCh: "Ch 5-6",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "SNARE HEAD", midiNote: 38, midiNoteName: "D2", defaultInstA: "035 DW Concrete S", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "SNARE RIM", midiNote: 40, midiNoteName: "E2", defaultInstA: "036 DW Concrete SR", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "BRUSH", label: "SNARE BRUSH", midiNote: 23, midiNoteName: "B0", defaultInstA: "EXV003: 001 Pl MapleBrush S", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "XSTICK", label: "SNARE XSTICK", midiNote: 37, midiNoteName: "C#2", defaultInstA: "057 DW Concrete X", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "THROW_ON", label: "SNARE THROW ON", midiNote: 21, midiNoteName: "A0", defaultInstA: "Strainer Throw Sound (TYPE1)", defaultInstB: "-", defaultInstC: "-" },
      { id: "THROW_OFF", label: "SNARE THROW OFF", midiNote: 20, midiNoteName: "G#0", defaultInstA: "Strainer Throw Sound (TYPE1)", defaultInstB: "-", defaultInstC: "-" },
      { id: "THROW_OFF_HEAD", label: "SNARE THROW OFF HEAD", midiNote: 19, midiNoteName: "G0", defaultInstA: "035 DW Concrete S (Strainer Off)", defaultInstB: "-", defaultInstC: "-" },
      { id: "THROW_OFF_RIM", label: "SNARE THROW OFF RIM", midiNote: 18, midiNoteName: "F#0", defaultInstA: "036 DW Concrete SR (Strainer Off)", defaultInstB: "-", defaultInstC: "-" },
      { id: "THROW_OFF_BRUSH", label: "SNARE THROW OFF BRUSH", midiNote: 17, midiNoteName: "F0", defaultInstA: "Brush Sweep (Strainer Off)", defaultInstB: "-", defaultInstC: "-" },
      { id: "THROW_OFF_XSTICK", label: "SNARE THROW OFF XSTICK", midiNote: 16, midiNoteName: "E0", defaultInstA: "057 DW Concrete X (Strainer Off)", defaultInstB: "-", defaultInstC: "-" }
    ]
  },
  {
    id: "TOM1",
    name: "TOM 1",
    labelPt: "Tom 1 (High Tom)",
    defaultTrigType: "PD-8H",
    isVirtualPad: false,
    usbAudioInCh: "Ch 9-10",
    usbAudioOutCh: "Ch 7-8",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "TOM 1 HEAD", midiNote: 48, midiNoteName: "C3", defaultInstA: "112 So PL Maple T1", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "TOM 1 RIM", midiNote: 50, midiNoteName: "D3", defaultInstA: "113 So PL Maple T1R", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "TOM2",
    name: "TOM 2",
    labelPt: "Tom 2 (Middle Tom)",
    defaultTrigType: "PD-8H",
    isVirtualPad: false,
    usbAudioInCh: "Ch 11-12",
    usbAudioOutCh: "Ch 9-10",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "TOM 2 HEAD", midiNote: 45, midiNoteName: "A2", defaultInstA: "114 So PL Maple T2", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "TOM 2 RIM", midiNote: 47, midiNoteName: "B2", defaultInstA: "115 So PL Maple T2R", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "TOM3",
    name: "TOM 3",
    labelPt: "Surdo / Tom 3 (Low Tom)",
    defaultTrigType: "PD-10H",
    isVirtualPad: false,
    usbAudioInCh: "Ch 13-14",
    usbAudioOutCh: "Ch 11-12",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "TOM 3 HEAD", midiNote: 43, midiNoteName: "G2", defaultInstA: "118 So PL Maple T4", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "TOM 3 RIM", midiNote: 58, midiNoteName: "A#3", defaultInstA: "119 So PL Maple T4R", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "HI-HAT",
    name: "HI-HAT",
    labelPt: "Chimbal (HI-HAT)",
    defaultTrigType: "VH-10 (ou VH-14D via Digital)",
    isVirtualPad: false,
    usbAudioInCh: "Ch 17-18",
    usbAudioOutCh: "Ch 15-16",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "OPEN_HEAD", label: "HI-HAT OPEN HEAD (BOW)", midiNote: 46, midiNoteName: "A#2", defaultInstA: "147 Zd KC D HH", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "OPEN_RIM", label: "HI-HAT OPEN RIM (EDGE)", midiNote: 26, midiNoteName: "D1", defaultInstA: "148 Zd KC D HHE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "CLOSE_HEAD", label: "HI-HAT CLOSE HEAD (BOW)", midiNote: 42, midiNoteName: "F#2", defaultInstA: "147 Zd KC D HH", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "CLOSE_RIM", label: "HI-HAT CLOSE RIM (EDGE)", midiNote: 22, midiNoteName: "A#0", defaultInstA: "148 Zd KC D HHE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "CLOSED_PEDAL", label: "HI-HAT CLOSED-PEDAL", midiNote: 44, midiNoteName: "G#2", defaultInstA: "147 Zd KC D HH (Pedal)", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "CRASH1",
    name: "CRASH 1",
    labelPt: "Prato de Ataque 1 (CRASH 1)",
    defaultTrigType: "CY-12C-T",
    isVirtualPad: false,
    usbAudioInCh: "Ch 19-20",
    usbAudioOutCh: "Ch 17-18",
    supportsPositionalHead: true,
    supportsRimShotNuance: false,
    zones: [
      { id: "HEAD", label: "CRASH 1 HEAD (BOW)", midiNote: 49, midiNoteName: "C#3", defaultInstA: "180 Zd AThin 1 Cr", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "CRASH 1 RIM (EDGE)", midiNote: 55, midiNoteName: "G3", defaultInstA: "181 Zd AThin 1 CrE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "CRASH2",
    name: "CRASH 2",
    labelPt: "Prato de Ataque 2 (CRASH 2)",
    defaultTrigType: "CY-12C-T",
    isVirtualPad: false,
    usbAudioInCh: "Ch 21-22",
    usbAudioOutCh: "Ch 19-20",
    supportsPositionalHead: true,
    supportsRimShotNuance: false,
    zones: [
      { id: "HEAD", label: "CRASH 2 HEAD (BOW)", midiNote: 57, midiNoteName: "A3", defaultInstA: "182 Zd AThin 2 Cr", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "CRASH 2 RIM (EDGE)", midiNote: 52, midiNoteName: "E3", defaultInstA: "183 Zd AThin 2 CrE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "RIDE",
    name: "RIDE",
    labelPt: "Prato de Condução (RIDE)",
    defaultTrigType: "CY-14R-T (ou CY-18DR via Digital)",
    isVirtualPad: false,
    usbAudioInCh: "Ch 23-24",
    usbAudioOutCh: "Ch 21-22",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "RIDE HEAD (BOW)", midiNote: 51, midiNoteName: "D#3", defaultInstA: "158 Zd KC H Rd", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "RIDE RIM (EDGE)", midiNote: 59, midiNoteName: "B3", defaultInstA: "159 Zd KC H RdE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "BELL", label: "RIDE BELL", midiNote: 53, midiNoteName: "F3", defaultInstA: "160 Zd KC H RdB", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "AUX",
    name: "AUX (Expansion 1)",
    labelPt: "Pad Auxiliar 1 (AUX / TOM 4)",
    defaultTrigType: "CY-12C-T / PDX-100",
    isVirtualPad: false,
    usbAudioInCh: "Ch 25-26",
    usbAudioOutCh: "Ch 23-24",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "AUX HEAD", midiNote: 27, midiNoteName: "D#1", defaultInstA: "212 Mn Bz Dual Sp", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "AUX RIM", midiNote: 28, midiNoteName: "E1", defaultInstA: "213 Mn Bz Dual SpE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "TOM4",
    name: "TOM 4 (Expansion 2)",
    labelPt: "Surdo 2 / Tom 4 (Conector AUX/TOM4 ou Pad Virtual)",
    defaultTrigType: "PD-10H (ou Virtual Pad quando AUX selecionado)",
    isVirtualPad: true,
    usbAudioInCh: "Ch 15-16",
    usbAudioOutCh: "Ch 13-14",
    supportsPositionalHead: true,
    supportsRimShotNuance: true,
    zones: [
      { id: "HEAD", label: "TOM 4 HEAD", midiNote: 41, midiNoteName: "F2", defaultInstA: "120 So PL Maple T5", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "TOM 4 RIM", midiNote: 39, midiNoteName: "D#2", defaultInstA: "121 So PL Maple T5R", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "AUX2",
    name: "AUX 2",
    labelPt: "Pad Virtual AUX 2",
    defaultTrigType: "Virtual Pad (Show Virtual Pad = ON)",
    isVirtualPad: true,
    usbAudioInCh: "Ch 27-28",
    usbAudioOutCh: "Ch 25-26",
    supportsPositionalHead: false,
    supportsRimShotNuance: false,
    zones: [
      { id: "HEAD", label: "AUX 2 HEAD", midiNote: 29, midiNoteName: "F1", defaultInstA: "208 Zd C-B 1 Ch", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "AUX 2 RIM", midiNote: 30, midiNoteName: "F#1", defaultInstA: "209 Zd C-B 1 ChE", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "AUX3",
    name: "AUX 3",
    labelPt: "Pad Virtual AUX 3",
    defaultTrigType: "Virtual Pad (Show Virtual Pad = ON)",
    isVirtualPad: true,
    usbAudioInCh: "Ch 29-30",
    usbAudioOutCh: "Ch 27-28",
    supportsPositionalHead: false,
    supportsRimShotNuance: false,
    zones: [
      { id: "HEAD", label: "AUX 3 HEAD", midiNote: 31, midiNoteName: "G1", defaultInstA: "227 Cowbell Tip", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "AUX 3 RIM", midiNote: 32, midiNoteName: "G#1", defaultInstA: "228 Cowbell", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  },
  {
    id: "AUX4",
    name: "AUX 4",
    labelPt: "Pad Virtual AUX 4",
    defaultTrigType: "Virtual Pad (Show Virtual Pad = ON)",
    isVirtualPad: true,
    usbAudioInCh: "Ch 31-32",
    usbAudioOutCh: "Ch 29-30",
    supportsPositionalHead: false,
    supportsRimShotNuance: false,
    zones: [
      { id: "HEAD", label: "AUX 4 HEAD", midiNote: 33, midiNoteName: "A1", defaultInstA: "232 Tambourine", defaultInstB: "000 OFF", defaultInstC: "000 OFF" },
      { id: "RIM", label: "AUX 4 RIM", midiNote: 34, midiNoteName: "A#1", defaultInstA: "235 Clap", defaultInstB: "000 OFF", defaultInstC: "000 OFF" }
    ]
  }
];

const SET_LIST_BANKS = [
  {
    bank: 1,
    code: "01",
    name: "Standard",
    steps: [
      { step: 1, kitNumber: 1, kitCode: "001", kitName: "Studio A", subName: "" },
      { step: 2, kitNumber: 2, kitCode: "002", kitName: "Studio B", subName: "" },
      { step: 3, kitNumber: 3, kitCode: "003", kitName: "Rock Energy", subName: "" },
      { step: 4, kitNumber: 4, kitCode: "004", kitName: "Jazz Sizzle", subName: "" },
      { step: 5, kitNumber: 5, kitCode: "005", kitName: "Massive Metal", subName: "" },
      { step: 6, kitNumber: 6, kitCode: "006", kitName: "Vintage Loose", subName: "" },
      { step: 7, kitNumber: 7, kitCode: "007", kitName: "Neo Funk", subName: "" },
      { step: 8, kitNumber: 8, kitCode: "008", kitName: "Drum'n'Bass", subName: "" }
    ]
  },
  {
    bank: 2,
    code: "02",
    name: "Rock/Metal",
    steps: [
      { step: 1, kitNumber: 3, kitCode: "003", kitName: "Rock Energy", subName: "" },
      { step: 2, kitNumber: 10, kitCode: "010", kitName: "Deep Rock", subName: "" },
      { step: 3, kitNumber: 12, kitCode: "012", kitName: "Live is Life", subName: "Live Pop Rock" },
      { step: 4, kitNumber: 22, kitCode: "022", kitName: "Blast Attack", subName: "Thrash Metal" },
      { step: 5, kitNumber: 24, kitCode: "024", kitName: "All Big Sizes", subName: "Big Arena" },
      { step: 6, kitNumber: 28, kitCode: "028", kitName: "Classic Rock", subName: "" },
      { step: 7, kitNumber: 30, kitCode: "030", kitName: "Hard Rock", subName: "" },
      { step: 8, kitNumber: 35, kitCode: "035", kitName: "Viking Metal", subName: "Norwegian Metal" }
    ]
  },
  {
    bank: 3,
    code: "03",
    name: "Jazz",
    steps: [
      { step: 1, kitNumber: 4, kitCode: "004", kitName: "Jazz Sizzle", subName: "" },
      { step: 2, kitNumber: 14, kitCode: "014", kitName: "Bop Shop", subName: "Sizzle Swing" },
      { step: 3, kitNumber: 31, kitCode: "031", kitName: "Jazz Legend", subName: "Floor Tom Kick" },
      { step: 4, kitNumber: 33, kitCode: "033", kitName: "Jazzinator", subName: "Hybrid Jazz Gig" },
      { step: 5, kitNumber: 69, kitCode: "069", kitName: "Jazz Brushes", subName: "Small Room" },
      { step: 6, kitNumber: 70, kitCode: "070", kitName: "Modern Brushes", subName: "Large Room w/ Sizzle" }
    ]
  },
  {
    bank: 4,
    code: "04",
    name: "Electronic",
    steps: [
      { step: 1, kitNumber: 8, kitCode: "008", kitName: "Drum'n'Bass", subName: "" },
      { step: 2, kitNumber: 19, kitCode: "019", kitName: "Vintage e-Drums", subName: "Hexagonal Pads" },
      { step: 3, kitNumber: 41, kitCode: "041", kitName: "Lowbit World", subName: "Bit Crusher" },
      { step: 4, kitNumber: 43, kitCode: "043", kitName: "DIGIKIT!", subName: "SnappDkik" },
      { step: 5, kitNumber: 49, kitCode: "049", kitName: "TR-808", subName: "Transistor Rhythm" },
      { step: 6, kitNumber: 50, kitCode: "050", kitName: "TR-909", subName: "Transistor Rhythm" },
      { step: 7, kitNumber: 51, kitCode: "051", kitName: "TR-707", subName: "Transistor Rhythm" },
      { step: 8, kitNumber: 52, kitCode: "052", kitName: "CR-78", subName: "CompuRhythm" }
    ]
  },
  {
    bank: 5,
    code: "05",
    name: "Percussion",
    steps: [
      { step: 1, kitNumber: 61, kitCode: "061", kitName: "Orchestral", subName: "Pedal Bend" },
      { step: 2, kitNumber: 62, kitCode: "062", kitName: "Mermaid", subName: "Steelpan" },
      { step: 3, kitNumber: 63, kitCode: "063", kitName: "Bateria", subName: "Carnaval do Brasil" },
      { step: 4, kitNumber: 64, kitCode: "064", kitName: "Latin Festa!", subName: "" },
      { step: 5, kitNumber: 65, kitCode: "065", kitName: "Wild Drumming", subName: "Conga & Djembe" },
      { step: 6, kitNumber: 66, kitCode: "066", kitName: "Ethnic Perc", subName: "" },
      { step: 7, kitNumber: 67, kitCode: "067", kitName: "Camel Journey", subName: "" },
      { step: 8, kitNumber: 68, kitCode: "068", kitName: "Air From Asia", subName: "Pedal Bend" }
    ]
  },
  ...Array.from({ length: 27 }, (_, idx) => {
    const bankNum = idx + 6;
    const code = String(bankNum).padStart(2, "0");
    return {
      bank: bankNum,
      code,
      name: `Set List ${code}`,
      steps: [
        { step: 1, kitNumber: 1, kitCode: "001", kitName: "Studio A", subName: "" }
      ]
    };
  })
];

const EXPANSIONS = {
  slots: [
    {
      slot: 1,
      id: "EXV001",
      name: "EXV001: Wood Room Studio UK 1",
      type: "Instrument Expansion",
      purchaseType: "Pre-installed",
      instrumentCount: 30,
      includedKits: [
        { number: 1, name: "1: UK Wet Booth", presetKitRef: "046: UK Wet Booth" },
        { number: 2, name: "2: UK Wet Studio", presetKitRef: "047: UK Wet Studio" },
        { number: 3, name: "3: UK Wood Studio", presetKitRef: "Pacote EXV001" },
        { number: 4, name: "4: UK Amb Studio", presetKitRef: "Pacote EXV001" },
        { number: 5, name: "5: LoFi Overdrive", presetKitRef: "048: LoFi Overdrive" }
      ],
      instrumentsSummary: "1–2 KICK (Cm Vintage K, Cm AmbLess K), 3–10 SNARE (Cv Vintage, Ld SP Vintage, Cv AmbLess, Ld SP AmbLess), 11–14 CROSS STICK, 15–30 TOM (Cm Vintage T1–T4R, Cm AmbLess T1–T4R)"
    },
    {
      slot: 2,
      id: "EXV002",
      name: "EXV002: Electronic&Percussion 1",
      type: "Instrument Expansion",
      purchaseType: "Pre-installed",
      instrumentCount: 712,
      includedKits: [
        { number: 1, name: "1: TR-808", presetKitRef: "049: TR-808" },
        { number: 2, name: "2: TR-909", presetKitRef: "050: TR-909" },
        { number: 3, name: "3: TR-707", presetKitRef: "051: TR-707" },
        { number: 4, name: "4: CR-78", presetKitRef: "052: CR-78" },
        { number: 5, name: "5: TR-909 Inspire", presetKitRef: "053: TR-909 Inspire" },
        { number: 6, name: "6: Bateria", presetKitRef: "063: Bateria (Carnaval do Brasil)" },
        { number: 7, name: "7: Wild Drumming", presetKitRef: "065: Wild Drumming (Conga & Djembe)" }
      ],
      instrumentsSummary: "1–89 KICK OTHERS, 90–120 KICK ELEC, 121–214 SNARE OTHERS, 215–250 SNARE ELEC, 251–253 TOM OTHERS, 254–295 TOM ELEC, 296–320 HI-HAT OTHERS/ELEC, 321–359 CYMBAL OTHERS/ELEC, 360–572 PERCUSSION/PERC ELEC, 573–630 CLAP, 631–712 SOUND FX"
    },
    {
      slot: 3,
      id: "EXV003",
      name: "EXV003: The Brush 1",
      type: "Instrument Expansion",
      purchaseType: "Pre-installed",
      instrumentCount: 22,
      includedKits: [
        { number: 1, name: "1: Jazz Brushes", presetKitRef: "069: Jazz Brushes (Small Room)" },
        { number: 2, name: "2: Modern Brushes", presetKitRef: "070: Modern Brushes (Large Room w/ Sizzle)" }
      ],
      instrumentsSummary: "1–2 SNARE (Pl MapleBrush S *B, Pl MapleBrush SR), 3 CROSS STICK (Pl MapleBrush X), 4–13 TOM (So PL BrushT1–T5R), 14–15 HI-HAT (Zd AC Brush HH/HHE), 16–18 RIDE (Zd AC Brush Rd/RdE/RdB), 19–22 CRASH (Zd AC Brush1/2 Cr/CrE)"
    },
    {
      slot: 4,
      id: null,
      name: "EMPTY",
      type: "Empty Slot",
      purchaseType: "-",
      instrumentCount: 0,
      includedKits: [],
      instrumentsSummary: "Slot livre para carregar Instrument Expansion ou Kit Pack do Rack"
    },
    {
      slot: 5,
      id: null,
      name: "EMPTY",
      type: "Empty Slot",
      purchaseType: "-",
      instrumentCount: 0,
      includedKits: [],
      instrumentsSummary: "Slot livre para carregar Instrument Expansion ou Kit Pack do Rack"
    },
    {
      slot: 6,
      id: null,
      name: "EMPTY",
      type: "Empty Slot",
      purchaseType: "-",
      instrumentCount: 0,
      includedKits: [],
      instrumentsSummary: "Slot livre para carregar Instrument Expansion ou Kit Pack do Rack"
    }
  ],
  racks: Array.from({ length: 100 }, (_, idx) => {
    const rackNum = idx + 1;
    if (rackNum === 1) {
      return {
        rack: 1,
        code: "001",
        id: "EXV001",
        name: "EXV001: Wood Room Studio UK 1",
        loadedSlot: "SLOT 1",
        purchaseType: "Pre-installed",
        canUninstall: false,
        includedKits: [
          "1: UK Wet Booth",
          "2: UK Wet Studio",
          "3: UK Wood Studio",
          "4: UK Amb Studio",
          "5: LoFi Overdrive"
        ]
      };
    }
    if (rackNum === 2) {
      return {
        rack: 2,
        code: "002",
        id: "EXV002",
        name: "EXV002: Electronic&Percussion 1",
        loadedSlot: "SLOT 2",
        purchaseType: "Pre-installed",
        canUninstall: false,
        includedKits: [
          "1: TR-808",
          "2: TR-909",
          "3: TR-707",
          "4: CR-78",
          "5: TR-909 Inspire",
          "6: Bateria",
          "7: Wild Drumming"
        ]
      };
    }
    if (rackNum === 3) {
      return {
        rack: 3,
        code: "003",
        id: "EXV003",
        name: "EXV003: The Brush 1",
        loadedSlot: "SLOT 3",
        purchaseType: "Pre-installed",
        canUninstall: false,
        includedKits: [
          "1: Jazz Brushes",
          "2: Modern Brushes"
        ]
      };
    }
    return {
      rack: rackNum,
      code: String(rackNum).padStart(3, "0"),
      id: null,
      name: "----------------",
      loadedSlot: null,
      purchaseType: "-",
      canUninstall: true,
      includedKits: []
    };
  }),
  sortRules: [
    { value: "Default", explanation: "Classifica por número de rack." },
    { value: "▲ Expansion ID", explanation: "Classifica por ID de expansão (ascendente)." },
    { value: "▼ Expansion ID", explanation: "Classifica por ID de expansão (descendente)." },
    { value: "▲ Purchase Type", explanation: "Classifica por tipo de compra da expansão de instrumentos/pacote de kits (Pré-instalada → Chave vitalícia → Assinatura)." },
    { value: "▼ Purchase Type", explanation: "Classifica por tipo de compra da expansão de instrumentos/pacote de kits (Assinatura → Chave vitalícia → Pré-instalada)." }
  ],
  userSamples: [
    {
      number: 1,
      code: "001",
      name: "Piano Loop",
      label: "001 Piano Loop",
      playType: "ONESHOT MONO",
      sampleGain: "0dB",
      channels: "STEREO",
      size: "344KB",
      startPoint: 0,
      endPoint: 88200
    },
    {
      number: 2,
      code: "002",
      name: "Ring Fx",
      label: "002 Ring Fx",
      playType: "ONESHOT POLY",
      sampleGain: "0dB",
      channels: "STEREO",
      size: "212KB",
      startPoint: 0,
      endPoint: 54272
    },
    {
      number: 3,
      code: "003",
      name: "Say What",
      label: "003 Say What",
      playType: "ONESHOT MONO",
      sampleGain: "0dB",
      channels: "MONO",
      size: "96KB",
      startPoint: 0,
      endPoint: 49152
    },
    {
      number: 4,
      code: "004",
      name: "Yeah",
      label: "004 Yeah",
      playType: "ONESHOT POLY",
      sampleGain: "0dB",
      channels: "MONO",
      size: "110KB",
      startPoint: 0,
      endPoint: 56320
    }
  ]
};

const ERROR_MESSAGES = [
  {
    category: "Lista de mensagens de erro",
    message: "SD card format error!",
    meaning: "Falha ao formatar o cartão SD.",
    action: "Insira um cartão SD corretamente. Desbloqueie o cartão SD."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Incorrect File!",
    meaning: "Os dados de backup ou dados de backup do kit estão danificados.",
    action: "Não use esses dados."
  },
  {
    category: "Lista de mensagens de erro",
    message: "MIDI buffer full!",
    meaning: "Muitas mensagens MIDI foram recebidas em um curto período e não puderam ser processadas completamente.",
    action: "Confirme se o dispositivo MIDI externo está conectado corretamente. Se o problema persistir, reduza a quantidade de mensagens MIDI enviadas para o V31."
  },
  {
    category: "Lista de mensagens de erro",
    message: "MIDI offline!",
    meaning: "Um cabo MIDI está desconectado (ou a comunicação com o dispositivo MIDI externo foi interrompida por algum motivo).",
    action: "Confira se o cabo MIDI não foi desconectado e se não há curto no cabo."
  },
  {
    category: "Lista de mensagens de erro",
    message: "No backup data!",
    meaning: "Não há dados de backup no cartão SD.",
    action: "-"
  },
  {
    category: "Lista de mensagens de erro",
    message: "No data!",
    meaning: "Você tentou exportar uma música para a qual não existem dados gravados.",
    action: "Exportar uma música para a qual existem dados gravados."
  },
  {
    category: "Lista de mensagens de erro",
    message: "SD card not inserted!",
    meaning: "Não há cartão SD no slot.",
    action: "Insira um cartão SD corretamente."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Rec data exists. Change rec number or check overwrite.",
    meaning: "Já existem dados de gravação no destino de gravação selecionado.",
    action: "Mude o destino da gravação ou altere as configurações de substituição de dados de gravação. (Consulte “Gravação como SMF (DRUM REC)”)."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Rec data full!",
    meaning: "O armazenamento do gravador de música está cheio e a gravação parou. / A gravação foi interrompida porque o número máximo de sons para uma única música foi excedido.",
    action: "-"
  },
  {
    category: "Lista de mensagens de erro",
    message: "Rec length too long!",
    meaning: "A gravação parou porque excedeu a duração máxima possível.",
    action: "Com o DRUM REC, os dados de performance são gravados em compassos. Diminua o andamento ou aumente o número de batidas (em outras palavras, use uma fórmula de compasso maior) nas configurações de metrônomo DRUM REC ao gravar (“Uso do metrônomo”). / Tente editar (reorganizar) a música para torná-la mais curta."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Song data too long!",
    meaning: "A gravação foi interrompida, pois o tempo máximo de gravação (60 min) foi excedido.",
    action: "-"
  },
  {
    category: "Lista de mensagens de erro",
    message: "Temporary memory full!",
    meaning: "A gravação foi interrompida, pois o tempo de gravação disponível na memória temporária foi excedido.",
    action: "-"
  },
  {
    category: "Lista de mensagens de erro",
    message: "Sample length too long!",
    meaning: "O arquivo de áudio é muito grande e não pode ser importado.",
    action: "Não é possível importar arquivos com mais de 180 segundos."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Sample length too short!",
    meaning: "O arquivo de áudio é muito pequeno e não pode ser importado.",
    action: "Em alguns casos, não é possível importar arquivos de áudio com menos de um segundo."
  },
  {
    category: "Lista de mensagens de erro",
    message: "SD card is locked!",
    meaning: "O cartão SD está bloqueado. / O atributo de arquivo é somente leitura.",
    action: "Desbloqueie o cartão SD. / Verifique se o arquivo pode estar protegido contra gravação."
  },
  {
    category: "Lista de mensagens de erro",
    message: "SD card media error!",
    meaning: "Os dados no cartão SD estão danificados. / Falha ao salvar os dados gravados. / Falha ao exportar a música.",
    action: "Copie os dados necessários do cartão SD e depois formate o cartão SD no V31 (“Formatar um cartão SD”). Se isso não resolver o problema, tente usar outro cartão SD. / Verifique o estado de bloqueio do cartão SD. / Verifique se o arquivo pode estar protegido contra gravação."
  },
  {
    category: "Lista de mensagens de erro",
    message: "SD card full!",
    meaning: "Não há espaço disponível no cartão SD.",
    action: "Exclua os dados desnecessários (“Eliminar dados de backup de um cartão SD (DELETE/DEL 1 KIT)”)."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Unsupported format!",
    meaning: "Este equipamento não é compatível com esse formato.",
    action: "Verifique se esse formato de arquivo pode ser tocado (“Arquivos de áudio que podem ser tocados no V31” / “Importar e reproduzir arquivos de áudio (USER SAMPLE)”)."
  },
  {
    category: "Lista de mensagens de erro",
    message: "User Sample doesn't exist!",
    meaning: "Os user samples não existem.",
    action: "Selecione um local onde existem user samples."
  },
  {
    category: "Lista de mensagens de erro",
    message: "User Sample already exists!",
    meaning: "User samples existem.",
    action: "Exclua os user samples ou selecione um local com disponibilidade."
  },
  {
    category: "Lista de mensagens de erro",
    message: "User Sample import error!",
    meaning: "Os dados de áudio a importar estão danificados. / Os dados no cartão SD estão danificados.",
    action: "Não use esses dados de áudio. / Não use esse cartão SD."
  },
  {
    category: "Lista de mensagens de erro",
    message: "User Sample memory error!",
    meaning: "Os dados de backup ou dados de backup de kit, incluindo user samples, estão danificados. / Os dados no cartão SD estão danificados. / Um user sample vazio está atribuído (apenas para 1 KIT SAVE).",
    action: "Não use esses dados. / Não use esse cartão SD. / Você não pode usar 1 KIT SAVE para um drum kit com user samples vazios atribuídos."
  },
  {
    category: "Lista de mensagens de erro",
    message: "User Sample memory full!",
    meaning: "Não há espaço livre para user samples.",
    action: "Exclua user samples desnecessários."
  },
  {
    category: "Lista de mensagens de erro",
    message: "User Sample unsupported format!",
    meaning: "Este equipamento não é compatível com esse formato de user sample.",
    action: "Salve o sample em um formato que este equipamento reconheça."
  },
  {
    category: "Lista de mensagens de erro",
    message: "USB offline!",
    meaning: "O cabo USB foi desconectado (ou a comunicação USB foi interrompida por algum motivo).",
    action: "Se essa mensagem for mostrada, mas você não descobrir o motivo, confirme se o cabo USB está conectado corretamente e se não há um curto no cabo."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Change Audio Routing to LOOPBACK!",
    meaning: "O roteamento de áudio mudou para o modo LOOPBACK.",
    action: "Ao usar a configuração “LOOPBACK”, a entrada e a saída de áudio USB podem se conectar diretamente e produzir acidentalmente um som muito alto, dependendo das configurações do computador e do V31. Por esse motivo, tenha cuidado com essa configuração."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Change Audio Routing to NORMAL!",
    meaning: "O roteamento de áudio mudou para o modo NORMAL.",
    action: "-"
  },
  {
    category: "Lista de mensagens de erro",
    message: "Incorrect license! Remove the license.",
    meaning: "Os dados de licença para os dados em carregamento não correspondem aos dados de licença armazenados neste equipamento.",
    action: "Verifique se os dados que você está carregando estão corretos. Além disso, você pode usar a função “Remove License” para excluir os dados de licença já armazenados neste equipamento. Não é possível carregar dados de licença diferentes se os dados de licença já estiverem salvos neste equipamento (“Restauração de todas as configurações (inclusive dados de licença da Roland Cloud) para o padrão de fábrica”)."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Image import error!",
    meaning: "Um arquivo de imagem salvo no cartão SD foi corrompido. / O formato de arquivo usado para o arquivo de imagem salvo no cartão SD não é compatível com este equipamento.",
    action: "Não use esses dados. / Salve os dados em um formato compatível (.png). * Os arquivos PNG salvos no formato entrelaçado não podem ser usados."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Image size is too large!",
    meaning: "O arquivo de imagem é muito grande e não pode ser importado.",
    action: "Mude o tamanho do arquivo de imagem e tente importar de novo."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Image size is too small!",
    meaning: "O arquivo de imagem é muito pequeno e não pode ser importado.",
    action: "Mude o tamanho do arquivo de imagem e tente importar de novo."
  },
  {
    category: "Lista de mensagens de erro",
    message: "The Expansion rack is full!",
    meaning: "A capacidade de armazenamento da expansão de instrumentos/pacote de kits está esgotada.",
    action: "Desinstale as expansões de instrumentos/pacotes de kits de que você não precisa. * Não é possível desinstalar as expansões de instrumentos pré-instaladas."
  },
  {
    category: "Lista de mensagens de erro",
    message: "This Instrument Expansion has expired!",
    meaning: "A autenticação da expansão de instrumentos/pacote de kits expirou, portanto, ela não pode mais ser usada.",
    action: "As expansões de instrumentos/pacotes de kits instalados do Roland Cloud Connect não podem mais ser usados se a sua assinatura do Roland Cloud vencer ou você cancelar seu contrato. Verifique o status da sua associação ao Roland Cloud e conecte este equipamento à rede Wi-Fi."
  },
  {
    category: "Lista de mensagens de erro",
    message: "This Kit Pack has expired!",
    meaning: "A autenticação da expansão de instrumentos/pacote de kits expirou, portanto, ela não pode mais ser usada.",
    action: "As expansões de instrumentos/pacotes de kits instalados do Roland Cloud Connect não podem mais ser usados se a sua assinatura do Roland Cloud vencer ou você cancelar seu contrato. Verifique o status da sua associação ao Roland Cloud e conecte este equipamento à rede Wi-Fi."
  },
  {
    category: "Lista de mensagens de erro",
    message: "This data cannot be loaded into this module.",
    meaning: "A unidade não pode carregar esses dados de backup.",
    action: "Selecione dados compatíveis."
  },
  {
    category: "Lista de mensagens de erro",
    message: "This data cannot be loaded with the current firmware version.",
    meaning: "Os dados de backup não podem ser carregados com a versão atual do programa.",
    action: "Atualize o programa do sistema neste equipamento."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Wi-Fi Connection Error:Incorrect license! Setup Wi-Fi using the installed license or remove the license.",
    meaning: "Você não pode se conectar à rede Wi-Fi porque as informações de Roland Account configuradas para Wi-Fi não correspondem à licença de usuário do conteúdo instalado neste equipamento.",
    action: "Use a conta que você usou para instalar o conteúdo. Ou execute a função “Remove License” (“Restauração de todas as configurações (inclusive dados de licença da Roland Cloud) para o padrão de fábrica”). Consulte o “Guia de configuração do Roland Cloud Connect” (documento separado)."
  },
  {
    category: "Lista de mensagens de erro",
    message: "Wi-Fi Connection Error:Unregistered device! Setup Wi-Fi again.",
    meaning: "O registro do dispositivo foi removido da conta Roland configurada para Wi-Fi.",
    action: "Configure novamente o Wi-Fi. Consulte o “Guia de configuração do Roland Cloud Connect” (documento separado)."
  },
  {
    category: "Outras mensagens",
    message: "USB Driver: The modified settings will become effective after restart.",
    meaning: "As configurações do controlador USB são aplicadas quando este instrumento é reiniciado.",
    action: "Reinicie a unidade."
  },
  {
    category: "Outras mensagens",
    message: "Layer Mode: HI-HAT - Only available when you assign a Synth Wave or an ONESHOT User Sample to the hi-hat.",
    meaning: "O Layer Mode “HI-HAT” só está disponível quando um user sample Synth Wave ou ONESHOT está atribuído à camada do chimbal.",
    action: "–"
  }
];

const TROUBLESHOOTING = [
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "Os cabos estão conectados corretamente a cada pad e pedal?",
    action: "Verifique as conexões.",
    pageRef: "“Painel traseiro (conexão do seu equipamento)”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "O instrumento está desligado (“OFF”)?",
    action: "Atribua um instrumento.",
    pageRef: "“Editar um instrumento (INSTRUMENT)”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "O valor do “Volume” está muito baixo?",
    action: "Ajusta o volume de cada instrumento.",
    pageRef: "“Configuração do volume e do panorâmico do pad (PAD VOL)”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "O interruptor de camada (A–C) pode estar desligado.",
    action: "Ligue o interruptor da camada.",
    pageRef: "“Sobreposição dos instrumentos (camada)”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "As configurações para “OUTPUT” foram feitas corretamente?",
    action: "Verifique as configurações para “OUTPUT”.",
    pageRef: "“Atribuições de saída de áudio (OUTPUT)”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "O valor do fader é muito baixo?",
    action: "Ajuste o fader.",
    pageRef: "“Operações básicas”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "É possível que os user samples foram excluídos?",
    action: "Se você excluir o user sample atribuído a um pad, ele não produzirá som. Carregue novamente o user sample ou atribua um instrumento diferente.",
    pageRef: "“Importar e reproduzir arquivos de áudio (USER SAMPLE)”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "O “trigger type” do pad está definido corretamente?",
    action: "Defina o “trigger type” do pad.",
    pageRef: "“Configurações do acionador”"
  },
  {
    category: "Problemas com som",
    problem: "Um pad específico não toca",
    check: "O cabo de conexão está conectado corretamente em TRIGGER IN ou na porta DIGITAL TRIGGER IN?",
    action: "Verifique as conexões.",
    pageRef: "“Painel traseiro (conexão do seu equipamento)”"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "O equipamento está conectado corretamente aos outros dispositivos?",
    action: "Verifique as conexões.",
    pageRef: "“Painel traseiro (conexão do seu equipamento)”"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "É possível reduzir o volume do instrumento?",
    action: "Ajuste o volume em um nível adequado.",
    pageRef: "“Operações básicas”"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "É possível baixar o volume do alto-falante amplificado conectado?",
    action: "Ajuste o volume em um nível adequado.",
    pageRef: "-"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "O interruptor de entrada do sistema áudio está na posição correta?",
    action: "Verifique o seu sistema de áudio.",
    pageRef: "-"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "O volume do dispositivo conectado ao conector MIX IN está muito baixo?",
    action: "Ajuste o volume em um nível adequado.",
    pageRef: "-"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "O volume de entrada neste equipamento está baixo demais?",
    action: "Gire o botão [BACKING] para ajustar os níveis de forma adequada.",
    pageRef: "“Painel superior”"
  },
  {
    category: "Problemas com som",
    problem: "Nenhum som/volume insuficiente",
    check: "“Local Control” pode estar desativado (“OFF”)?",
    action: "Normalmente, esse valor é “ON”.",
    pageRef: "Consulte “Data List” (site da Roland)."
  },
  {
    category: "Problemas com som",
    problem: "Sem som ao percutir um pad conectado à porta TRIGGER IN / Acionador não responde",
    check: "Se um pad conectado às portas DIGITAL TRIGGER IN estiver atribuído à mesma entrada de acionador que o pad conectado a um conector TRIGGER IN, o pad conectado ao conector TRIGGER IN não produz som.",
    action: "Desconecte o cabo de conexão de pad da porta DIGITAL TRIGGER IN.",
    pageRef: "“Painel traseiro (conexão do seu equipamento)”"
  },
  {
    category: "Problemas com som",
    problem: "Sem som ao percutir um pad conectado à porta DIGITAL TRIGGER IN / Acionador não responde",
    check: "A entrada do acionador está configurada corretamente?",
    action: "Após conectar o pad, especifique a entrada do acionador que será tocada.",
    pageRef: "“Configurações do acionador”"
  },
  {
    category: "Problemas com som",
    problem: "Sem som ao percutir um pad conectado à porta DIGITAL TRIGGER IN / Acionador não responde",
    check: "Você está usando baquetas de carbono ou metal?",
    action: "Use baquetas de madeira ou plástico. Usar baquetas de carbono ou metal pode fazer com que os sensores apresentem problemas de funcionamento.",
    pageRef: "-"
  },
  {
    category: "Problemas com som",
    problem: "Sem som ao percutir um pad conectado à porta DIGITAL TRIGGER IN / Acionador não responde",
    check: "Você está usando vassourinhas de metal?",
    action: "Use vassourinhas de nylon. Usar vassourinhas metálicas pode fazer com que os sensores apresentem problemas de funcionamento ou arranhem o pad.",
    pageRef: "-"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "O cartão SD está conectado mas não é reconhecido / Os dados não estão visíveis",
    check: "O cartão SD está formatado corretamente?",
    action: "Formate o cartão SD nesse produto.",
    pageRef: "“Formatar um cartão SD”"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "O cartão SD está conectado mas não é reconhecido / Os dados não estão visíveis",
    check: "Você está usando um cartão SD compatível com este equipamento?",
    action: "Use um cartão SD compatível neste equipamento.",
    pageRef: "“Painel lateral e painel frontal”"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "Não é possível reproduzir o arquivo MP3/WAV",
    check: "A taxa de amostragem e a taxa de bits do arquivo MP3 ou de quantização do arquivo WAV são compatíveis com este equipamento?",
    action: "Use arquivos MP3/WAV aceitos pelo produto.",
    pageRef: "“Arquivos de áudio que podem ser tocados no V31”"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "Não é possível reproduzir o arquivo MP3/WAV",
    check: "Pode não ser possível manter a reprodução caso você aumente a velocidade da reprodução de um MP3 com bit rate alto.",
    action: "-",
    pageRef: "-"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "Não é possível definir corretamente os tempos de repetição A-B",
    check: "Ao usar um arquivo MP3, pode não ser possível reproduzir a região de repetição A-B corretamente.",
    action: "-",
    pageRef: "-"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "Não é possível reproduzir ou importar um arquivo de áudio",
    check: "O formato do arquivo de áudio está correto?",
    action: "Verifique o formato do arquivo de áudio, nome do arquivo e extensão do nome do arquivo.",
    pageRef: "“Arquivos de áudio que podem ser tocados no V31”"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "Não é possível reproduzir ou importar um arquivo de áudio",
    check: "O arquivo de áudio está no local correto?",
    action: "Verifique o local do arquivo de áudio.",
    pageRef: "“Ao salvar arquivos do computador para um cartão SD”"
  },
  {
    category: "Problemas com o cartão SD",
    problem: "Não é possível reproduzir ou importar um arquivo de áudio",
    check: "Pode haver um grande número de arquivos de áudio na pasta?",
    action: "Mantenha até 200 arquivos de áudio ou menos na pasta.",
    pageRef: "-"
  },
  {
    category: "Problemas com USB",
    problem: "Não é possível se conectar com um computador",
    check: "O cabo USB está conectado corretamente?",
    action: "Verifique as conexões.",
    pageRef: "“Painel traseiro (conexão do seu equipamento)”"
  },
  {
    category: "Problemas com USB",
    problem: "Não é possível se conectar com um computador",
    check: "Está tentando transmitir/receber três ou mais canais de áudio USB?",
    action: "Você precisa instalar um controlador USB para transmitir ou receber três ou mais canais de áudio USB. Instale o driver USB em seu computador.",
    pageRef: "“Configurar o driver USB”"
  },
  {
    category: "Problemas com USB",
    problem: "Não é possível se conectar com um computador",
    check: "Você está usando um cabo que suporte USB 2.0?",
    action: "O produto não pode ser usado com cabos compatíveis com USB 3.0. Use o cabo compatível com USB 2.0.",
    pageRef: "-"
  },
  {
    category: "Problemas com USB",
    problem: "Não é possível se conectar com um computador",
    check: "As configurações para “Driver Mode” foram feitas corretamente?",
    action: "Escolha as configurações apropriadas para sua situação.",
    pageRef: "“Configurar o driver USB”"
  },
  {
    category: "Problemas com MIDI",
    problem: "Sem som",
    check: "Os cabos MIDI estão conectados corretamente?",
    action: "Verifique as conexões.",
    pageRef: "“Painel traseiro (conexão do seu equipamento)”"
  },
  {
    category: "Problemas com MIDI",
    problem: "Sem som",
    check: "O canal MIDI está definido corretamente?",
    action: "Defina os canais MIDI do produto e dispositivo MIDI externo para a mesma configuração.",
    pageRef: "Consulte “Data List” (site da Roland)."
  },
  {
    category: "Problemas com MIDI",
    problem: "Sem som",
    check: "O número de nota foi definido corretamente?",
    action: "Configure o “NOTE NO” do pad.",
    pageRef: "Consulte “Data List” (site da Roland)."
  },
  {
    category: "Outros problemas",
    problem: "O equipamento não desliga automaticamente, mesmo quando a função de desligamento automático está configurada",
    check: "O equipamento está conectado ao computador/smartphone via USB? Quando um computador/smartphone é conectado a este equipamento via USB, ele não desliga automaticamente.",
    action: "-",
    pageRef: "-"
  }
];

window.V31_KITS_AND_LISTS = {
  drumKits: ALL_DRUM_KITS,
  kitPhrases: KIT_PHRASES,
  songs: BUILTIN_SONGS,
  trigTypes: TRIG_TYPES,
  pads: V31_PADS,
  setListBanks: SET_LIST_BANKS,
  expansions: EXPANSIONS,
  errorMessages: ERROR_MESSAGES,
  troubleshooting: TROUBLESHOOTING
};

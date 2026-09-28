/* THE GREENHOUSE EFFECT MASTER — Educational Content
   Carl Dennis · Class XII · West Bengal, India */

const POEM = {
  title: "The Greenhouse Effect",
  poet: "Carl Dennis",
  lines: [
    { id: 1, text: "The gradual warming trend will likely go on", stanza: 1 },
    { id: 2, text: "And the grain belts begin to slide closer to the poles.", stanza: 1 },
    { id: 3, text: "The Plains States will be abandoned as giant dust bowls.", stanza: 1 },
    { id: 4, text: "Greenland and Antarctica will join the new Great Powers.", stanza: 1 },
    { id: 5, text: "Even if we play them off against each other", stanza: 1 },
    { id: 6, text: "For more aid, we'll still be poorer than we are now.", stanza: 1 },
    { id: 7, text: "Life will be different, good tillable land so dear", stanza: 2 },
    { id: 8, text: "The suburbs will give way to farms, the cities", stanza: 2 },
    { id: 9, text: "Fill up again with people too poor to own cars,", stanza: 2 },
    { id: 10, text: "Walking to work or crowding on trollies,", stanza: 2 },
    { id: 11, text: "We'll move down streets lined with practical nut trees,", stanza: 2 },
    { id: 12, text: "Not elms and oaks, with vegetables crowding the front lawns.", stanza: 2 },
    { id: 13, text: "The tax base will be too small to support the public buildings.", stanza: 3 },
    { id: 14, text: "We'll have to donate hours after work each week", stanza: 3 },
    { id: 15, text: "To rake the lawn of the Library and City Hall,", stanza: 3 },
    { id: 16, text: "To tuckpoint the chimney of the Federal Building", stanza: 3 },
    { id: 17, text: "If we don't want the place to fall like temples in Rome,", stanza: 3 },
    { id: 18, text: "Don't want sheep to graze in our squares", stanza: 3 },
    { id: 19, text: "As they grazed in the Forum for a thousand years.", stanza: 3 },
    { id: 20, text: "With a little effort the country will go on.", stanza: 4 },
    { id: 21, text: "So what if we've lost our high place to stronger Carthages", stanza: 4 },
    { id: 22, text: "Whose far-flung fleets will be loaded with merchandise", stanza: 4 },
    { id: 23, text: "Cheaper than ours. We'll be glad to watch from the beach", stanza: 4 },
    { id: 24, text: "As the lights from Korean armadas pass", stanza: 4 },
    { id: 25, text: "On their endless patrols around the world.", stanza: 4 },
    { id: 26, text: "Let them have their little time in the sun,", stanza: 4 },
    { id: 27, text: "We'll say to ourselves as we begin to sway", stanza: 4 },
    { id: 28, text: "To the strains of our native beach band,", stanza: 4 },
    { id: 29, text: "Ignoring the hits from the Arctic on the radio.", stanza: 4 }
  ]
};

const VOCAB = [
  { word: "gradual warming trend", phon: "", bnPhon: "", pos: "Noun phrase", bn: "ক্রমশ উষ্ণায়নের প্রবণতা", en: "slow, continuous rise in global temperature", syn: "climate warming", ctx: "Greenhouse effect / global warming", line: 1 },
  { word: "grain belts", phon: "", bnPhon: "", pos: "Noun", bn: "শস্য অঞ্চল / শস্য বলয়", en: "large agricultural zones known for grain cultivation", syn: "farming regions", ctx: "Will shift toward the poles as climate warms", line: 2 },
  { word: "poles", phon: "/pəʊlz/", bnPhon: "পোলস", pos: "Noun", bn: "মেরু (উত্তর ও দক্ষিণ)", en: "the North and South Poles", syn: "polar regions", ctx: "Grain belts move closer to colder latitudes", line: 2 },
  { word: "Plains States", phon: "", bnPhon: "", pos: "Proper noun", bn: "মার্কিন সমভূমি অঙ্গরাজ্যগুলি", en: "US Midwest states with vast plains", syn: "Great Plains", ctx: "Will become uninhabitable dust bowls", line: 3 },
  { word: "dust bowls", phon: "", bnPhon: "", pos: "Noun", bn: "ধূলিঝড় অঞ্চল / ধূসর মরুভূমি", en: "areas of land reduced to dust by drought and poor farming", syn: "barren lands", ctx: "Historical Dust Bowl of the 1930s; here a future scenario", line: 3 },
  { word: "Greenland", phon: "", bnPhon: "", pos: "Proper noun", bn: "গ্রিনল্যান্ড", en: "large Arctic island, mostly ice-covered", syn: "", ctx: "Will become a powerful nation as ice melts", line: 4 },
  { word: "Antarctica", phon: "", bnPhon: "", pos: "Proper noun", bn: "অ্যান্টার্কটিকা", en: "the southernmost continent", syn: "", ctx: "Will join the new Great Powers after ice melt", line: 4 },
  { word: "Great Powers", phon: "", bnPhon: "", pos: "Noun phrase", bn: "মহাশক্তি / প্রধান শক্তি", en: "nations with major political and economic influence", syn: "superpowers", ctx: "Greenland and Antarctica rise as new powers", line: 4 },
  { word: "play them off", phon: "", bnPhon: "", pos: "Phrasal verb", bn: "একে অপরের বিরুদ্ধে খেলা", en: "to set rivals against each other for advantage", syn: "manipulate rivalry", ctx: "Seeking aid by playing powers against each other", line: 5 },
  { word: "tillable", phon: "/ˈtɪləbl/", bnPhon: "টিলেবল", pos: "Adjective", bn: "চাষযোগ্য", en: "capable of being farmed productively", syn: "arable, cultivable", ctx: "Good farmland becomes scarce and expensive", line: 7 },
  { word: "suburbs", phon: "/ˈsʌbɜːbz/", bnPhon: "সাবার্বস", pos: "Noun", bn: "শহরতলি", en: "outlying residential districts of a city", syn: "outskirts", ctx: "Will be converted back into farms", line: 8 },
  { word: "trollies", phon: "/ˈtrɒliz/", bnPhon: "ট্রলিজ", pos: "Noun", bn: "ট্রাম / বৈদ্যুতিক গাড়ি", en: "streetcars / tram vehicles", syn: "trams, streetcars", ctx: "Public transport replaces private cars", line: 10 },
  { word: "practical nut trees", phon: "", bnPhon: "", pos: "Noun phrase", bn: "ব্যবহারযোগ্য বাদাম গাছ", en: "trees grown for food rather than ornament", syn: "food trees", ctx: "Beauty replaced by usefulness", line: 11 },
  { word: "elms and oaks", phon: "", bnPhon: "", pos: "Noun", bn: "এলম ও ওক গাছ", en: "traditional ornamental shade trees", syn: "", ctx: "Symbolic of a more affluent past", line: 12 },
  { word: "tax base", phon: "", bnPhon: "", pos: "Noun phrase", bn: "কর ভিত্তি", en: "the total wealth or income that can be taxed", syn: "revenue base", ctx: "Too small to fund public buildings", line: 13 },
  { word: "tuckpoint", phon: "/ˈtʌkpɔɪnt/", bnPhon: "টাকপয়েন্ট", pos: "Verb", bn: "ইটের ফাঁক মেরামত করা", en: "to repair mortar joints in brickwork", syn: "repoint", ctx: "Citizens must maintain public buildings", line: 16 },
  { word: "temples in Rome", phon: "", bnPhon: "", pos: "Noun phrase", bn: "রোমের মন্দির", en: "reference to the ruins of ancient Rome", syn: "", ctx: "Symbol of a fallen civilisation", line: 17 },
  { word: "Forum", phon: "/ˈfɔːrəm/", bnPhon: "ফোরাম", pos: "Noun", bn: "রোমান ফোরাম", en: "the public square of ancient Rome", syn: "", ctx: "Sheep grazed there after Rome’s decline", line: 19 },
  { word: "Carthages", phon: "/ˈkɑːθɪdʒɪz/", bnPhon: "কার্থেজ", pos: "Proper noun", bn: "কার্থেজ (প্রাচীন বাণিজ্য নগরী)", en: "ancient North African trading power; here = rising rival nations", syn: "rival powers", ctx: "Metaphor for new economic superpowers", line: 21 },
  { word: "far-flung fleets", phon: "", bnPhon: "", pos: "Noun phrase", bn: "দূরপ্রসারী নৌবহর", en: "ships operating across distant seas", syn: "global fleets", ctx: "Trade dominance of rising powers", line: 22 },
  { word: "merchandise", phon: "/ˈmɜːtʃəndaɪs/", bnPhon: "মার্চেন্ডাইজ", pos: "Noun", bn: "পণ্যদ্রব্য", en: "goods for sale", syn: "goods, products", ctx: "Cheaper foreign goods", line: 22 },
  { word: "armadas", phon: "/ɑːˈmɑːdəz/", bnPhon: "আর্মাডাজ", pos: "Noun", bn: "নৌবহর", en: "large fleets of ships", syn: "fleets", ctx: "Korean naval/trade power", line: 24 },
  { word: "patrols", phon: "/pəˈtrəʊlz/", bnPhon: "প্যাট্রোলস", pos: "Noun", bn: "টহল", en: "regular movements to watch or control an area", syn: "rounds", ctx: "Endless global presence", line: 25 },
  { word: "time in the sun", phon: "", bnPhon: "", pos: "Idiom", bn: "সুযোগের সময় / খ্যাতির সময়", en: "a period of success or prominence", syn: "moment of glory", ctx: "Rising powers enjoy temporary dominance", line: 26 },
  { word: "strains", phon: "/streɪnz/", bnPhon: "স্ট্রেনস", pos: "Noun", bn: "সুর", en: "melodies; musical passages", syn: "tunes", ctx: "Music of the local beach band", line: 28 },
  { word: "native beach band", phon: "", bnPhon: "", pos: "Noun phrase", bn: "স্থানীয় সৈকতের ব্যান্ড", en: "local musicians playing by the sea", syn: "", ctx: "Ordinary local culture continues", line: 28 },
  { word: "hits from the Arctic", phon: "", bnPhon: "", pos: "Noun phrase", bn: "আর্কটিক থেকে আসা হিট গান", en: "popular songs from the Arctic region", syn: "", ctx: "Arctic becomes cultural centre; speakers ignore it", line: 29 }
];

const LINE_ANALYSIS = [
  { id: 1, text: "The gradual warming trend will likely go on", bn: "ক্রমশ উষ্ণায়নের প্রবণতা সম্ভবত চলতে থাকবে", simple: "The Earth will keep getting warmer slowly.", simpleBn: "পৃথিবী ধীরে ধীরে আরও গরম হতে থাকবে।", detailed: "Opens with a calm, almost scientific statement. ‘Gradual’ and ‘likely’ understate the crisis.", detailedBn: "শান্ত, প্রায় বৈজ্ঞানিক বক্তব্য। সংকটকে কমিয়ে বলা হয়েছে।", keywords: ["gradual warming trend"], symbolism: "Warming = irreversible climate change", imagery: "Scientific", devices: ["Understatement"], tone: "Calm, resigned", exam: "Sets the factual premise of continuing global warming." },
  { id: 2, text: "And the grain belts begin to slide closer to the poles.", bn: "এবং শস্য অঞ্চলগুলি মেরুর দিকে সরে যেতে শুরু করবে।", simple: "Farming regions will move toward the colder poles.", simpleBn: "চাষের এলাকা ঠান্ডা মেরুর দিকে সরে যাবে।", detailed: "Climate shift forces agriculture toward the poles. ‘Slide’ suggests slow, inevitable movement.", detailedBn: "জলবায়ু পরিবর্তনে কৃষি মেরুর দিকে সরবে।", keywords: ["grain belts", "poles"], symbolism: "Poles = new agricultural frontiers", imagery: "Geographic", devices: ["Metaphor"], tone: "Matter-of-fact", exam: "Shows how climate change redraws food production." },
  { id: 3, text: "The Plains States will be abandoned as giant dust bowls.", bn: "সমভূমি অঙ্গরাজ্যগুলি বিশাল ধূলিঝড় অঞ্চল হয়ে পরিত্যক্ত হবে।", simple: "The American plains will become dry, empty dust lands.", simpleBn: "আমেরিকার সমভূমি শুকনো ধুলোর দেশ হয়ে যাবে।", detailed: "Echoes the 1930s Dust Bowl. Fertile heartland becomes uninhabitable.", detailedBn: "১৯৩০-এর ডাস্ট বোলের প্রতিধ্বনি।", keywords: ["Plains States", "dust bowls"], symbolism: "Dust bowls = ecological collapse", imagery: "Barren landscape", devices: ["Historical allusion"], tone: "Bleak", exam: "Key image of agricultural and social collapse." },
  { id: 4, text: "Greenland and Antarctica will join the new Great Powers.", bn: "গ্রিনল্যান্ড ও অ্যান্টার্কটিকা নতুন মহাশক্তিতে পরিণত হবে।", simple: "Icy lands will become powerful countries when ice melts.", simpleBn: "বরফ গললে বরফাবৃত দেশগুলি শক্তিশালী হয়ে উঠবে।", detailed: "Ironic reversal: the coldest places become centres of power.", detailedBn: "বিদ্রূপাত্মক উল্টো অবস্থা।", keywords: ["Greenland", "Antarctica", "Great Powers"], symbolism: "Ice melt → geopolitical power", imagery: "Political map", devices: ["Irony"], tone: "Ironic, prophetic", exam: "Geopolitical consequences of global warming." },
  { id: 5, text: "Even if we play them off against each other", bn: "এমনকি যদি আমরা তাদের একে অপরের বিরুদ্ধে লড়াই করাই", simple: "Even if we set the new powers against each other…", simpleBn: "এমনকি যদি আমরা নতুন শক্তিগুলিকে একে অপরের বিরুদ্ধে দাঁড় করাই…", detailed: "‘Play off’ = diplomatic manipulation by a weakened nation.", detailedBn: "কূটনৈতিক চালাকি।", keywords: ["play them off"], symbolism: "Declining power’s last tactics", imagery: "Political", devices: ["Colloquial diction"], tone: "Cynical", exam: "Residual political manoeuvring amid decline." },
  { id: 6, text: "For more aid, we'll still be poorer than we are now.", bn: "আরও সাহায্যের জন্য, তবু আমরা এখনকার চেয়ে গরিবই থাকব।", simple: "Even with aid, we will be poorer than today.", simpleBn: "সাহায্য পেলেও আমরা আজকের চেয়ে গরিব থাকব।", detailed: "No strategy recovers lost prosperity. Poverty is structural.", detailedBn: "কোনো কৌশলে হারানো সমৃদ্ধি ফিরে আসে না।", keywords: ["aid", "poorer"], symbolism: "Aid cannot restore former wealth", imagery: "Economic", devices: ["Anticlimax"], tone: "Resigned", exam: "States the economic cost of climate change." },
  { id: 7, text: "Life will be different, good tillable land so dear", bn: "জীবন আলাদা হবে, ভালো চাষযোগ্য জমি এত দুর্লভ", simple: "Life will change; good farmland will be very expensive.", simpleBn: "জীবন বদলে যাবে; ভালো চাষের জমি খুব দামি হবে।", detailed: "‘Dear’ = expensive. Scarcity of arable land reshapes society.", detailedBn: "চাষযোগ্য জমির অভাব সমাজ বদলে দেয়।", keywords: ["tillable", "dear"], symbolism: "Land = ultimate wealth", imagery: "Agricultural", devices: ["Understatement"], tone: "Reflective", exam: "Links climate change to land scarcity." },
  { id: 8, text: "The suburbs will give way to farms, the cities", bn: "শহরতলি খামারে রূপান্তরিত হবে, শহরগুলি", simple: "Suburbs will become farms again; cities will…", simpleBn: "শহরতলি আবার খামার হবে; শহর…", detailed: "Reversal of modern urban sprawl. Land returns to food production.", detailedBn: "আধুনিক শহরতলির স্বপ্নের অবসান।", keywords: ["suburbs", "farms"], symbolism: "End of suburban affluence", imagery: "Landscape transformation", devices: ["Contrast"], tone: "Matter-of-fact", exam: "Reversal of twentieth-century urban patterns." },
  { id: 9, text: "Fill up again with people too poor to own cars,", bn: "আবার ভরে যাবে এমন মানুষে যারা গাড়ি কেনার মতো ধনী নয়,", simple: "Cities will fill with people too poor for cars.", simpleBn: "শহর ভরে যাবে গাড়ি কেনার সামর্থ্যহীন মানুষে।", detailed: "Poverty forces denser urban living and the end of car culture.", detailedBn: "দারিদ্র্য ঘন শহুরে জীবন ও গাড়ির সংস্কৃতির অবসান ঘটায়।", keywords: ["poor", "cars"], symbolism: "Cars = lost middle-class status", imagery: "Crowded cities", devices: ["Social realism"], tone: "Somber", exam: "Connects climate poverty to transport." },
  { id: 10, text: "Walking to work or crowding on trollies,", bn: "হাঁটায় কাজে যাওয়া বা ট্রলিতে ভিড় করা,", simple: "People will walk or take crowded trams to work.", simpleBn: "মানুষ হেঁটে বা ভিড় করা ট্রামে কাজে যাবে।", detailed: "Everyday detail makes the future concrete.", detailedBn: "দৈনন্দিন বিবরণ ভবিষ্যৎকে বাস্তব করে।", keywords: ["walking", "trollies"], symbolism: "Simpler, poorer mobility", imagery: "Street-level life", devices: ["Concrete detail"], tone: "Observational", exam: "Grounds the dystopia in daily routine." },
  { id: 11, text: "We'll move down streets lined with practical nut trees,", bn: "আমরা ব্যবহারযোগ্য বাদাম গাছে ঘেরা রাস্তা দিয়ে হাঁটব,", simple: "Streets will have useful nut trees, not decorative ones.", simpleBn: "রাস্তায় সাজানো গাছ নয়, কাজে লাগে এমন বাদাম গাছ থাকবে।", detailed: "Beauty yields to utility. ‘Practical’ is the key word of the new ethic.", detailedBn: "সৌন্দর্যের জায়গায় ব্যবহারিকতা।", keywords: ["practical nut trees"], symbolism: "Utility over ornament", imagery: "Street trees as food", devices: ["Contrast"], tone: "Pragmatic", exam: "Shows how scarcity changes values." },
  { id: 12, text: "Not elms and oaks, with vegetables crowding the front lawns.", bn: "এলম ও ওক নয়, সামনের লনে সবজি ভিড় করবে।", simple: "No fancy shade trees; front lawns will grow vegetables.", simpleBn: "ফ্যাশনেবল ছায়ার গাছ নয়; সামনের লনে সবজি জন্মাবে।", detailed: "Front lawns — symbols of suburban pride — become kitchen gardens.", detailedBn: "শহরতলির গর্বের প্রতীক লন রান্নাঘরের বাগানে পরিণত।", keywords: ["elms and oaks", "vegetables", "front lawns"], symbolism: "Lawn = lost leisure; vegetables = survival", imagery: "Domestic landscape", devices: ["Contrast"], tone: "Ironic, resigned", exam: "Iconic image of domestic space for survival." },
  { id: 13, text: "The tax base will be too small to support the public buildings.", bn: "কর ভিত্তি এত ছোট হবে যে সরকারি ভবন রক্ষণাবেক্ষণ সম্ভব হবে না।", simple: "There won’t be enough tax money to maintain public buildings.", simpleBn: "সরকারি ভবন রক্ষার মতো কর আদায় হবে না।", detailed: "Fiscal collapse follows environmental and economic decline.", detailedBn: "পরিবেশ ও অর্থনৈতিক পতনের পর রাজস্ব সংকট।", keywords: ["tax base", "public buildings"], symbolism: "Weak state capacity", imagery: "Institutional", devices: ["Cause–effect"], tone: "Dry", exam: "Links climate decline to public institutions." },
  { id: 14, text: "We'll have to donate hours after work each week", bn: "আমাদের প্রতি সপ্তাহে কাজের পর ঘণ্টা দান করতে হবে", simple: "We will have to volunteer time after work every week.", simpleBn: "কাজের পর প্রতি সপ্তাহে স্বেচ্ছায় সময় দিতে হবে।", detailed: "Citizenship becomes unpaid labour.", detailedBn: "নাগরিকত্ব অবেতনিক শ্রমে পরিণত।", keywords: ["donate hours"], symbolism: "Civic duty as survival work", imagery: "After-work labour", devices: ["Irony"], tone: "Resigned duty", exam: "Ordinary people must sustain the state." },
  { id: 15, text: "To rake the lawn of the Library and City Hall,", bn: "লাইব্রেরি ও সিটি হলের লন পরিষ্কার করতে,", simple: "To rake the grass at the library and city hall.", simpleBn: "লাইব্রেরি ও সিটি হলের ঘাস পরিষ্কার করতে।", detailed: "Culture and government survive only through citizen labour.", detailedBn: "সংস্কৃতি ও সরকার নাগরিক শ্রমে টিকে থাকে।", keywords: ["Library", "City Hall"], symbolism: "Culture and local government", imagery: "Mundane maintenance", devices: ["Concrete catalogue"], tone: "Humble", exam: "Institutional survival made personal." },
  { id: 16, text: "To tuckpoint the chimney of the Federal Building", bn: "ফেডারেল বিল্ডিং-এর চিমনির ইটের ফাঁক মেরামত করতে", simple: "To repair the brickwork of the government building’s chimney.", simpleBn: "সরকারি ভবনের চিমনির ইট মেরামত করতে।", detailed: "‘Tuckpoint’ is a precise craft word — diction grounded in real work.", detailedBn: "‘Tuckpoint’ বাস্তব কাজের শব্দ।", keywords: ["tuckpoint", "Federal Building"], symbolism: "National government reduced to brick repair", imagery: "Craft / labour", devices: ["Technical diction"], tone: "Practical", exam: "Even the national state depends on unpaid repair." },
  { id: 17, text: "If we don't want the place to fall like temples in Rome,", bn: "যদি আমরা চাই না জায়গাটা রোমের মন্দিরের মতো ভেঙে পড়ুক,", simple: "If we don’t want buildings to collapse like ancient Roman temples.", simpleBn: "যদি চাই না ভবনগুলি প্রাচীন রোমের মন্দিরের মতো ভেঙে পড়ুক।", detailed: "Allusion to the fall of Rome. Civilisational decline is the parallel.", detailedBn: "রোমের পতনের ইঙ্গিত। সভ্যতার অবক্ষয়।", keywords: ["temples in Rome"], symbolism: "Rome = fallen civilisation", imagery: "Ruins", devices: ["Historical allusion"], tone: "Warning", exam: "Central civilisational comparison." },
  { id: 18, text: "Don't want sheep to graze in our squares", bn: "চাই না আমাদের চত্বরে ভেড়া চরুক", simple: "We don’t want sheep eating grass in our public squares.", simpleBn: "চাই না আমাদের চত্বরে ভেড়া ঘাস খায়।", detailed: "Pastoral image of decline — the city returns to countryside.", detailedBn: "পতনের গ্রাম্য চিত্র।", keywords: ["sheep", "squares"], symbolism: "Sheep in squares = urban collapse", imagery: "Pastoral / urban", devices: ["Irony"], tone: "Wry", exam: "Memorable image of civic space reclaimed by nature." },
  { id: 19, text: "As they grazed in the Forum for a thousand years.", bn: "যেমন তারা হাজার বছর ধরে ফোরামে চরেছিল।", simple: "Just as sheep grazed in Rome’s Forum for a thousand years.", simpleBn: "ঠিক যেমন ভেড়া হাজার বছর রোমের ফোরামে চরেছিল।", detailed: "Historical fact: after Rome’s fall, the Forum became pasture.", detailedBn: "ঐতিহাসিক সত্য: রোমের পতনের পর ফোরাম চারণভূমি হয়েছিল।", keywords: ["Forum", "thousand years"], symbolism: "Long aftermath of collapse", imagery: "Historical pastoral", devices: ["Allusion", "Parallelism"], tone: "Solemn", exam: "Completes the Rome analogy." },
  { id: 20, text: "With a little effort the country will go on.", bn: "অল্প চেষ্টায় দেশ চলতে থাকবে।", simple: "With some effort, the nation will continue.", simpleBn: "কিছু চেষ্টা করলে দেশ টিকে থাকবে।", detailed: "Turning point. Survival is possible — not glory, but continuation.", detailedBn: "মোড়। টিকে থাকা সম্ভব — গৌরব নয়, চালিয়ে যাওয়া।", keywords: ["little effort", "go on"], symbolism: "Modest survival", imagery: "National continuity", devices: ["Understatement"], tone: "Quietly hopeful", exam: "Shift from decline to adapted survival." },
  { id: 21, text: "So what if we've lost our high place to stronger Carthages", bn: "তাই যদি আমরা শক্তিশালী কার্থেজদের কাছে আমাদের উচ্চস্থান হারিয়ে থাকি", simple: "So what if stronger new powers have taken our top position?", simpleBn: "তাই যদি শক্তিশালী নতুন শক্তি আমাদের জায়গা নিয়ে নেয়?", detailed: "Carthage = ancient rival of Rome; here = rising economic powers.", detailedBn: "কার্থেজ = উদীয়মান অর্থনৈতিক শক্তি।", keywords: ["Carthages", "high place"], symbolism: "Carthage = new global rivals", imagery: "Geopolitical", devices: ["Allusion", "Rhetorical question"], tone: "Dismissive, accepting", exam: "Classical allusion for modern power shift." },
  { id: 22, text: "Whose far-flung fleets will be loaded with merchandise", bn: "যাদের দূরপ্রসারী নৌবহর পণ্যদ্রব্যে ভরা থাকবে", simple: "Whose distant fleets will carry lots of goods…", simpleBn: "যাদের দূরের জাহাজ প্রচুর মাল বহন করবে…", detailed: "Trade dominance replaces military empire.", detailedBn: "বাণিজ্যিক আধিপত্য সামরিক সাম্রাজ্যের জায়গা নেয়।", keywords: ["far-flung fleets", "merchandise"], symbolism: "Trade = new form of power", imagery: "Maritime commerce", devices: ["Visual detail"], tone: "Observational", exam: "Economic rather than military supremacy." },
  { id: 23, text: "Cheaper than ours. We'll be glad to watch from the beach", bn: "আমাদের চেয়ে সস্তা। আমরা সমুদ্র সৈকত থেকে দেখে খুশি হব", simple: "Cheaper than our goods. We’ll happily watch from the beach.", simpleBn: "আমাদের মালের চেয়ে সস্তা। আমরা সৈকত থেকে দেখে খুশি থাকব।", detailed: "Acceptance replaces rivalry. ‘Glad’ and ‘beach’ introduce a peaceful image.", detailedBn: "প্রতিদ্বন্দ্বিতার জায়গায় গ্রহণ।", keywords: ["Cheaper", "beach"], symbolism: "Beach = spectator’s edge of history", imagery: "Coastal", devices: ["Tone shift"], tone: "Calm", exam: "Emotional acceptance of diminished status." },
  { id: 24, text: "As the lights from Korean armadas pass", bn: "যখন কোরিয়ান নৌবহরের আলো চলে যায়", simple: "As the lights of Korean fleets pass by…", simpleBn: "যখন কোরিয়ান জাহাজের আলো চলে যায়…", detailed: "Korea stands for Asian economic rise. ‘Lights’ are almost beautiful.", detailedBn: "কোরিয়া এশীয় অর্থনৈতিক উত্থানের প্রতীক।", keywords: ["Korean armadas", "lights"], symbolism: "Korea = rising global power", imagery: "Ships’ lights at night", devices: ["Specificity"], tone: "Quiet, almost admiring", exam: "Names a real region to ground the prophecy." },
  { id: 25, text: "On their endless patrols around the world.", bn: "পৃথিবী জুড়ে তাদের অন্তহীন টহলে।", simple: "On their never-ending rounds around the planet.", simpleBn: "পৃথিবী ঘুরে তাদের অন্তহীন টহলে।", detailed: "‘Endless patrols’ suggests permanent global presence.", detailedBn: "স্থায়ী বৈশ্বিক উপস্থিতি।", keywords: ["endless patrols"], symbolism: "Permanent new world order", imagery: "Global circulation", devices: ["Hyperbole"], tone: "Accepting", exam: "Continuous foreign dominance." },
  { id: 26, text: "Let them have their little time in the sun,", bn: "তাদের রোদে তাদের ছোট্ট সময়টা কাটাতে দাও,", simple: "Let them enjoy their short period of success.", simpleBn: "তাদের সফলতার ছোট সময়টা উপভোগ করতে দাও।", detailed: "All power is temporary — generous and slightly dismissive.", detailedBn: "সব ক্ষমতাই সাময়িক।", keywords: ["time in the sun"], symbolism: "All glory is temporary", imagery: "Sunlight as success", devices: ["Idiom", "Irony"], tone: "Philosophical", exam: "Universalises decline." },
  { id: 27, text: "We'll say to ourselves as we begin to sway", bn: "আমরা নিজেদের বলব যখন আমরা দোলাতে শুরু করব", simple: "We’ll tell ourselves this as we start to sway…", simpleBn: "আমরা নিজেদের এটা বলব যখন দোলাতে থাকব…", detailed: "Swaying to music — the body finds pleasure despite historical loss.", detailedBn: "সঙ্গীতে দোলা — ইতিহাসের ক্ষতি সত্ত্বেও আনন্দ।", keywords: ["sway"], symbolism: "Music as consolation", imagery: "Bodily movement", devices: ["Sensory detail"], tone: "Gentle, human", exam: "Human resilience through ordinary pleasure." },
  { id: 28, text: "To the strains of our native beach band,", bn: "আমাদের স্থানীয় সৈকতের ব্যান্ডের সুরে,", simple: "To the music of our local beach band.", simpleBn: "আমাদের স্থানীয় সৈকতের ব্যান্ডের গানে।", detailed: "Local, modest culture continues. ‘Native’ stresses rootedness.", detailedBn: "স্থানীয়, সাদাসিধে সংস্কৃতি চলতে থাকে।", keywords: ["native beach band"], symbolism: "Local culture vs global power", imagery: "Music by the sea", devices: ["Contrast"], tone: "Affectionate", exam: "Values ordinary local life over imperial grandeur." },
  { id: 29, text: "Ignoring the hits from the Arctic on the radio.", bn: "রেডিওতে আর্কটিক থেকে আসা হিট গান উপেক্ষা করে।", simple: "Ignoring the popular songs from the Arctic on the radio.", simpleBn: "রেডিওতে আর্কটিকের জনপ্রিয় গান উপেক্ষা করে।", detailed: "Final irony: the Arctic is now a cultural exporter. Choosing local music is quiet resistance.", detailedBn: "আর্কটিক এখন সাংস্কৃতিক রপ্তানিকারক। স্থানীয় সঙ্গীত বেছে নেওয়া নীরব প্রতিরোধ।", keywords: ["hits from the Arctic", "radio"], symbolism: "Arctic as new cultural centre; local choice as agency", imagery: "Radio", devices: ["Irony", "Understatement"], tone: "Gently defiant, peaceful", exam: "Closes with local preference — soft dignity." }
];

const THEMES = [
  { id: "climate", title: "Climate Change & Global Warming", bn: "জলবায়ু পরিবর্তন ও বৈশ্বিক উষ্ণায়ন", en: "The poem’s foundation is continuing warming and its cascading effects on agriculture, geography, and power.", bnExpl: "কবিতার ভিত্তি হল পৃথিবীর ক্রমবর্ধমান উষ্ণতা এবং তার প্রভাব।", examPara: "Carl Dennis presents climate change not as sudden catastrophe but as a ‘gradual warming trend’ that slowly redraws the map — grain belts slide, plains become dust bowls, polar regions rise as new powers." },
  { id: "poverty", title: "Poverty and Economic Decline", bn: "দারিদ্র্য ও অর্থনৈতিক অবক্ষয়", en: "Warming leads to scarce tillable land, no cars, crowded trollies, and a tax base too small for public buildings.", bnExpl: "উষ্ণায়ন চাষযোগ্য জমির অভাব, গাড়ির বিলুপ্তি ও অপর্যাপ্ত কর ভিত্তি নিয়ে আসে।", examPara: "The poem links environmental change to economic decline. People become ‘too poor to own cars’; suburbs turn into farms; citizens volunteer labour to maintain libraries and government buildings." },
  { id: "civilisation", title: "Rise and Fall of Civilisations", bn: "সভ্যতার উত্থান ও পতন", en: "Rome’s Forum and temples, and Carthage, frame Western decline within a long historical pattern.", bnExpl: "রোমের ফোরাম ও মন্দির এবং কার্থেজ পাশ্চাত্য পতনকে দীর্ঘ ঐতিহাসিক ছকে রাখে।", examPara: "By comparing future decline to Rome — sheep in the Forum, temples in ruins — and calling rising powers ‘Carthages’, Dennis places climate-driven change inside the ancient cycle of empires." },
  { id: "adaptation", title: "Adaptation and Modest Survival", bn: "অভিযোজন ও সাদাসিধে টিকে থাকা", en: "The poem does not end in despair. ‘With a little effort the country will go on.’ Local culture continues.", bnExpl: "কবিতা হতাশায় শেষ হয় না। ‘অল্প চেষ্টায় দেশ চলবে।’", examPara: "After mapping loss, Dennis turns to survival: practical nut trees, vegetables on lawns, volunteer maintenance, and the native beach band. Dignity lies in continuing ordinary life." },
  { id: "power-shift", title: "Geopolitical Power Shift", bn: "ভূরাজনৈতিক ক্ষমতার স্থানান্তর", en: "Greenland, Antarctica, and Korean armadas represent a world where old centres lose rank.", bnExpl: "গ্রিনল্যান্ড, অ্যান্টার্কটিকা ও কোরিয়ান আর্মাডা পুরনো কেন্দ্রের মর্যাদা হারানোর প্রতীক।", examPara: "The poem imagines a multipolar future: polar regions as Great Powers, Korean fleets on endless patrols. The response is not rage but ‘Let them have their little time in the sun.’" },
  { id: "utility", title: "Utility over Ornament", bn: "সৌন্দর্যের চেয়ে ব্যবহারিকতা", en: "Elms and oaks give way to nut trees; front lawns to vegetables.", bnExpl: "এলম ও ওকের জায়গায় বাদাম গাছ; লনের জায়গায় সবজি।", examPara: "Dennis contrasts the ornamental landscape of affluence with the practical landscape of scarcity." },
  { id: "local", title: "Local Culture and Quiet Dignity", bn: "স্থানীয় সংস্কৃতি ও নীরব মর্যাদা", en: "Against global fleets and Arctic hits, speakers choose their native beach band.", bnExpl: "বৈশ্বিক নৌবহরের বিপরীতে স্থানীয় সৈকতের ব্যান্ড।", examPara: "The closing lines affirm local belonging. Ignoring the ‘hits from the Arctic’ is a deliberate preference for the near and the native." }
];

const DEVICES = [
  { name: "Imagery", examples: [
    { text: "giant dust bowls", note: "Barren, ecological collapse" },
    { text: "practical nut trees", note: "Utility landscape" },
    { text: "vegetables crowding the front lawns", note: "Domestic space reclaimed" },
    { text: "sheep to graze in our squares", note: "Urban space returned to nature" },
    { text: "lights from Korean armadas", note: "Night-time maritime power" }
  ]},
  { name: "Allusion", examples: [
    { text: "temples in Rome / Forum", note: "Fall of the Roman Empire" },
    { text: "Carthages", note: "Ancient rival of Rome; rising powers" },
    { text: "dust bowls", note: "1930s American Dust Bowl" }
  ]},
  { name: "Irony", examples: [
    { text: "Greenland and Antarctica will join the new Great Powers", note: "Coldest places become centres of power" },
    { text: "hits from the Arctic on the radio", note: "Former ice desert as cultural exporter" },
    { text: "Let them have their little time in the sun", note: "Casual dismissal of former rivals’ glory" }
  ]},
  { name: "Understatement", examples: [
    { text: "The gradual warming trend will likely go on", note: "Calm tone for catastrophic change" },
    { text: "With a little effort the country will go on", note: "Modest claim for national survival" },
    { text: "So what if we've lost our high place", note: "Deliberately casual about decline" }
  ]},
  { name: "Contrast", examples: [
    { text: "practical nut trees / Not elms and oaks", note: "Utility vs ornament" },
    { text: "suburbs will give way to farms", note: "Sprawl vs food production" },
    { text: "native beach band / hits from the Arctic", note: "Local vs global culture" }
  ]},
  { name: "Symbolism", examples: [
    { text: "dust bowls", note: "Environmental and social ruin" },
    { text: "cars", note: "Middle-class mobility and status" },
    { text: "front lawns", note: "Suburban leisure and pride" },
    { text: "Rome / Forum", note: "Civilisational collapse" },
    { text: "beach band", note: "Continuing ordinary culture" }
  ]}
];

const QUIZ = [
  { q: "Who wrote ‘The Greenhouse Effect’?", opts: ["Robert Frost", "Carl Dennis", "Seamus Heaney", "Billy Collins"], ans: 1, exp: "Carl Dennis (b. 1939) is the author." },
  { q: "What is the central environmental concern?", opts: ["Ozone hole only", "Gradual global warming and its social effects", "Only melting of ice", "Volcanic eruptions"], ans: 1, exp: "The poem focuses on the gradual warming trend and its cascading effects." },
  { q: "What happens to the grain belts?", opts: ["They expand toward the equator", "They begin to slide closer to the poles", "They disappear", "They move to the oceans"], ans: 1, exp: "As the climate warms, grain belts shift toward the poles." },
  { q: "What will the Plains States become?", opts: ["New capitals", "Giant dust bowls", "Ocean ports", "Forest reserves"], ans: 1, exp: "They will be abandoned as giant dust bowls." },
  { q: "Which regions join the new Great Powers?", opts: ["Sahara and Amazon", "Greenland and Antarctica", "Himalayas and Alps", "Australia and NZ"], ans: 1, exp: "Greenland and Antarctica rise as powers when ice melts." },
  { q: "What does ‘tillable’ mean?", opts: ["Worth selling", "Capable of being farmed", "Covered with trees", "Under water"], ans: 1, exp: "Tillable = capable of being farmed productively." },
  { q: "What happens to the suburbs?", opts: ["They become airports", "They give way to farms", "They turn into deserts", "They become bases"], ans: 1, exp: "Suburbs give way to farms as land becomes precious." },
  { q: "Why do people fill the cities again?", opts: ["For entertainment", "They are too poor to own cars", "For better education", "Because of war"], ans: 1, exp: "Cities fill with people too poor to own cars." },
  { q: "What replaces elms and oaks?", opts: ["Palm trees", "Practical nut trees", "Cactus", "Plastic trees"], ans: 1, exp: "Practical nut trees replace ornamental trees." },
  { q: "What crowds the front lawns?", opts: ["Flowers only", "Vegetables", "Statues", "Cars"], ans: 1, exp: "Vegetables crowd the front lawns." },
  { q: "What must citizens do after work?", opts: ["Watch television", "Donate hours to maintain public buildings", "Leave the country", "Build highways"], ans: 1, exp: "They donate hours to rake lawns and tuckpoint chimneys." },
  { q: "What historical parallel does the poem draw?", opts: ["Roman military victory", "Temples falling and sheep in the Forum", "Roman roads", "Roman law"], ans: 1, exp: "Fear of falling like temples in Rome and sheep grazing as in the Forum." },
  { q: "What are ‘Carthages’ in the poem?", opts: ["Ancient ruins only", "Metaphor for stronger rising powers", "African farms", "Icebergs"], ans: 1, exp: "Carthages stand for stronger rival nations." },
  { q: "What do Korean armadas represent?", opts: ["Ancient history", "Rising Asian economic/naval power", "Fishing boats", "Tourist ships"], ans: 1, exp: "Korean armadas symbolise a new global power." },
  { q: "What is the speakers’ final attitude?", opts: ["Angry revenge", "Quiet acceptance and preference for local culture", "Complete despair", "Military resistance"], ans: 1, exp: "They prefer their native beach band and let others have their time in the sun." },
  { q: "Overall tone of the poem?", opts: ["Panicked", "Calm, resigned, with quiet acceptance", "Celebratory", "Comic"], ans: 1, exp: "Measured, understated, moving toward quiet acceptance." },
  { q: "Carl Dennis was born in:", opts: ["London", "St. Louis, Missouri", "New York", "Dublin"], ans: 1, exp: "Born in St. Louis, Missouri (17 September 1939)." },
  { q: "‘Little time in the sun’ suggests:", opts: ["Eternal power", "Temporary period of success", "Climate only", "Agricultural season"], ans: 1, exp: "A temporary period of prominence." },
  { q: "With a little effort:", opts: ["The climate will reverse", "The country will go on", "All poverty will end", "Rome will return"], ans: 1, exp: "‘With a little effort the country will go on.’" },
  { q: "Main message?", opts: ["Climate change is a myth", "Climate change will reshape society; adaptation and local dignity remain possible", "Only polar regions matter", "Technology solves everything"], ans: 1, exp: "Maps serious decline but ends with modest survival and local cultural preference." }
];

const FLASHCARDS = [
  { front: "Main theme?", back: "Climate change and its social, economic and political effects; adaptation and quiet dignity.", bn: "জলবায়ু পরিবর্তন ও তার প্রভাব; অভিযোজন ও নীরব মর্যাদা।" },
  { front: "What happens to grain belts?", back: "They begin to slide closer to the poles.", bn: "শস্য অঞ্চল মেরুর দিকে সরে যায়।" },
  { front: "Plains States become?", back: "Giant dust bowls.", bn: "বিশাল ধূলিঝড় অঞ্চল।" },
  { front: "New Great Powers?", back: "Greenland and Antarctica.", bn: "গ্রিনল্যান্ড ও অ্যান্টার্কটিকা।" },
  { front: "What replaces ornamental trees?", back: "Practical nut trees.", bn: "ব্যবহারযোগ্য বাদাম গাছ।" },
  { front: "What crowds front lawns?", back: "Vegetables.", bn: "সবজি।" },
  { front: "Historical parallel?", back: "Fall of Rome — temples, sheep in the Forum.", bn: "রোমের পতন — মন্দির, ফোরামে ভেড়া।" },
  { front: "What do Carthages stand for?", back: "Stronger rising rival powers.", bn: "শক্তিশালী উদীয়মান প্রতিদ্বন্দ্বী শক্তি।" },
  { front: "Final attitude?", back: "Quiet acceptance; prefer native beach band over Arctic hits.", bn: "নীরব গ্রহণ; স্থানীয় ব্যান্ড।" },
  { front: "Who is the poet?", back: "Carl Dennis (b. 1939, St. Louis, Missouri).", bn: "কার্ল ডেনিস (জন্ম ১৯৩৯)।" },
  { front: "What does tillable mean?", back: "Capable of being farmed productively.", bn: "চাষযোগ্য।" },
  { front: "Key message?", back: "Climate will reshape the world; with effort life continues; local dignity remains.", bn: "জলবায়ু পৃথিবী বদলাবে; চেষ্টায় জীবন চলবে; স্থানীয় মর্যাদা থাকবে।" }
];

const EXAM_QS = {
  veryShort: [
    { q: "Who is the poet of ‘The Greenhouse Effect’?", a: "Carl Dennis.", bn: "কার্ল ডেনিস।" },
    { q: "What is a ‘dust bowl’?", a: "An area of land reduced to dust by drought and erosion.", bn: "খরা ও ক্ষয়ে ধুলোয় পরিণত ভূমি।" },
    { q: "What does ‘tillable’ mean?", a: "Capable of being farmed productively.", bn: "চাষযোগ্য।" },
    { q: "Name the two regions that become new Great Powers.", a: "Greenland and Antarctica.", bn: "গ্রিনল্যান্ড ও অ্যান্টার্কটিকা।" },
    { q: "What historical city is alluded to with ‘Carthages’?", a: "Ancient Carthage (rival of Rome).", bn: "প্রাচীন কার্থেজ।" }
  ],
  short: [
    { q: "How does the poem show effects of global warming on agriculture?", a: "Grain belts slide closer to the poles; Plains States become giant dust bowls; tillable land becomes scarce; suburbs turn into farms and front lawns into vegetable plots.", bn: "শস্য অঞ্চল মেরুর দিকে; সমভূমি ধূলিঝড়; চাষযোগ্য জমি দুর্লভ; শহরতলি খামার ও লন সবজিতে পরিণত।" },
    { q: "Explain the significance of the Rome allusion.", a: "The poet fears public buildings falling like temples in Rome and sheep grazing in squares as in the Forum. The allusion frames climate-driven decline as civilisational.", bn: "রোমের মন্দির ও ফোরামের তুলনা পতনকে সভ্যতার পতন হিসেবে দেখায়।" },
    { q: "What is the attitude of the speakers in the last part?", a: "They accept loss of high place to stronger powers, are glad to watch from the beach, and prefer their native beach band — quiet, dignified adaptation.", bn: "তারা উচ্চস্থান হারানো মেনে নেয় এবং স্থানীয় ব্যান্ড বেছে নেয় — নীরব মর্যাদাপূর্ণ অভিযোজন।" },
    { q: "How does the poem connect climate change with everyday life?", a: "Through concrete details: no cars, crowded trollies, walking to work, nut trees instead of elms, vegetables on lawns, unpaid hours maintaining public buildings.", bn: "গাড়ি নেই, ট্রলিতে ভিড়, হেঁটে কাজ, বাদাম গাছ, লনে সবজি, অবেতনিক রক্ষণাবেক্ষণ।" }
  ],
  broad: [
    { q: "Discuss ‘The Greenhouse Effect’ as a poem about climate change and human adaptation.", a: "Carl Dennis presents climate change as a gradual process that reshapes geography, economy and power. Grain belts move, plains become dust bowls, polar regions rise as Great Powers. Society becomes poorer: cars disappear, suburbs become farms, citizens maintain buildings by unpaid labour. Allusions to Rome and Carthage place this in a long cycle of civilisations. Yet the poem does not end in despair. ‘With a little effort the country will go on.’ Speakers accept a diminished place and find dignity in local culture. The poem balances warning with a quiet ethic of adaptation.", bn: "ডেনিস জলবায়ু পরিবর্তনকে ধীর প্রক্রিয়া হিসেবে দেখান। সমাজ গরিব হয়; তবু ‘অল্প চেষ্টায় দেশ চলবে।’ স্থানীয় সংস্কৃতিতে মর্যাদা। কবিতা সতর্কবার্তা ও অভিযোজনকে একসাথে রাখে।" },
    { q: "Examine the use of imagery and allusion in the poem.", a: "Dennis builds the future through concrete images: dust bowls, nut trees, vegetable lawns, crowded trollies, sheep in squares, lights of Korean armadas. These make abstract climate change visible. Allusions to the Dust Bowl, Rome’s temples and Forum, and Carthage deepen the meaning. The closing beach band against Arctic hits contrasts local belonging with new global centres. Imagery and allusion turn a scientific trend into a human story of loss, labour and modest survival.", bn: "ডেনিস ধূলিঝড়, বাদাম গাছ, সবজির লন, ভেড়ার চত্বর, কোরিয়ান নৌবহরের আলোর মতো চিত্রে ভবিষ্যৎ গড়েন। রোম ও কার্থেজের ইঙ্গিত অর্থ গভীর করে।" }
  ]
};

const POET = {
  name: "Carl Dennis",
  years: "b. 17 September 1939",
  knownAs: "American poet, quiet intelligence and meditative style",
  summary: "Carl Dennis was born in St. Louis, Missouri. His work is known for quiet intelligence, meditative bent, and honest exploration of middle-class American life. He shapes everyday speech into casually regular pentameter. He published Poetry as Persuasion (2001) and won the Pulitzer Prize for Poetry (2002) for Practical Gods.",
  bnSummary: "কার্ল ডেনিস সেন্ট লুইস, মিসৌরিতে জন্মগ্রহণ করেন। তাঁর কবিতা শান্ত বুদ্ধিমত্তা ও আমেরিকান মধ্যবিত্ত জীবনের সৎ অন্বেষণের জন্য পরিচিত।",
  facts: [
    { label: "Born", value: "17 September 1939, St. Louis, Missouri" },
    { label: "Nationality", value: "American" },
    { label: "Style", value: "Meditative, conversational, quietly intelligent" },
    { label: "Criticism", value: "Poetry as Persuasion (2001)" },
    { label: "Award", value: "Pulitzer Prize for Poetry (2002)" }
  ],
  timeline: [
    { year: "1939", event: "Born in St. Louis, Missouri" },
    { year: "2001", event: "Publishes Poetry as Persuasion" },
    { year: "2002", event: "Pulitzer Prize for Practical Gods" }
  ],
  works: "Dennis’s poetry often uses ordinary language to explore ethical and social questions. ‘The Greenhouse Effect’ treats climate, power and decline through understated, concrete detail."
};

const ABOUT_POEM = {
  what: "A free-verse poem that imagines the social, economic and geopolitical consequences of continuing global warming, and ends with quiet acceptance of diminished status and local cultural continuity.",
  bnWhat: "মুক্তছন্দের কবিতা যা বৈশ্বিক উষ্ণায়নের সামাজিক, অর্থনৈতিক ও ভূরাজনৈতিক পরিণতি কল্পনা করে এবং নীরব গ্রহণ ও স্থানীয় সংস্কৃতিতে শেষ হয়।",
  structure: {
    form: "Free verse; organised in movements of thought",
    movement: "1) Climate and geopolitical shift → 2) Social and domestic change → 3) Civic labour and Rome parallel → 4) Acceptance and local dignity",
    tone: "Calm, understated, resigned, finally gently accepting"
  },
  argument: "Global warming will continue; agriculture and power will shift; society will become poorer and more practical; institutions will need citizen labour; yet with modest effort life continues, and local culture retains its value."
};

const SECTIONS = [
  "home", "poet", "about", "poem", "vocab", "bangla", "analysis",
  "devices", "themes", "background", "critical", "exam", "quiz", "revision", "teach", "progress"
];

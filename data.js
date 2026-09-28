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
  { word: "gradual warming trend", phon: "", bnPhon: "", pos: "Noun phrase", bn: "ক্রমশ উষ্ণায়নের প্রবণতা", en: "slow, continuous rise in global temperature", syn: "climate warming", ctx: "Greenhouse effect", line: 1 },
  { word: "grain belts", phon: "", bnPhon: "", pos: "Noun", bn: "শস্য অঞ্চল", en: "large agricultural zones for grain", syn: "farming regions", ctx: "Shift toward poles", line: 2 },
  { word: "poles", phon: "/pəʊlz/", bnPhon: "পোলস", pos: "Noun", bn: "মেরু", en: "North and South Poles", syn: "polar regions", ctx: "New agricultural frontiers", line: 2 },
  { word: "Plains States", phon: "", bnPhon: "", pos: "Proper noun", bn: "মার্কিন সমভূমি অঙ্গরাজ্য", en: "US Midwest plains states", syn: "Great Plains", ctx: "Become dust bowls", line: 3 },
  { word: "dust bowls", phon: "", bnPhon: "", pos: "Noun", bn: "ধূলিঝড় অঞ্চল", en: "land reduced to dust by drought", syn: "barren lands", ctx: "1930s Dust Bowl echo", line: 3 },
  { word: "Greenland", phon: "", bnPhon: "", pos: "Proper noun", bn: "গ্রিনল্যান্ড", en: "large Arctic island", syn: "", ctx: "New Great Power", line: 4 },
  { word: "Antarctica", phon: "", bnPhon: "", pos: "Proper noun", bn: "অ্যান্টার্কটিকা", en: "southernmost continent", syn: "", ctx: "New Great Power", line: 4 },
  { word: "Great Powers", phon: "", bnPhon: "", pos: "Noun phrase", bn: "মহাশক্তি", en: "nations with major influence", syn: "superpowers", ctx: "Polar rise", line: 4 },
  { word: "play them off", phon: "", bnPhon: "", pos: "Phrasal verb", bn: "একে অপরের বিরুদ্ধে খেলা", en: "set rivals against each other", syn: "manipulate rivalry", ctx: "Seeking aid", line: 5 },
  { word: "tillable", phon: "/ˈtɪləbl/", bnPhon: "টিলেবল", pos: "Adjective", bn: "চাষযোগ্য", en: "capable of being farmed", syn: "arable", ctx: "Land becomes scarce", line: 7 },
  { word: "suburbs", phon: "/ˈsʌbɜːbz/", bnPhon: "সাবার্বস", pos: "Noun", bn: "শহরতলি", en: "outlying residential districts", syn: "outskirts", ctx: "Become farms", line: 8 },
  { word: "trollies", phon: "/ˈtrɒliz/", bnPhon: "ট্রলিজ", pos: "Noun", bn: "ট্রাম", en: "streetcars / trams", syn: "trams", ctx: "Replace cars", line: 10 },
  { word: "practical nut trees", phon: "", bnPhon: "", pos: "Noun phrase", bn: "ব্যবহারযোগ্য বাদাম গাছ", en: "trees grown for food not ornament", syn: "food trees", ctx: "Utility over beauty", line: 11 },
  { word: "elms and oaks", phon: "", bnPhon: "", pos: "Noun", bn: "এলম ও ওক", en: "ornamental shade trees", syn: "", ctx: "Affluent past", line: 12 },
  { word: "tax base", phon: "", bnPhon: "", pos: "Noun phrase", bn: "কর ভিত্তি", en: "wealth that can be taxed", syn: "revenue base", ctx: "Too small for buildings", line: 13 },
  { word: "tuckpoint", phon: "/ˈtʌkpɔɪnt/", bnPhon: "টাকপয়েন্ট", pos: "Verb", bn: "ইটের ফাঁক মেরামত", en: "repair mortar in brickwork", syn: "repoint", ctx: "Citizen labour", line: 16 },
  { word: "temples in Rome", phon: "", bnPhon: "", pos: "Noun phrase", bn: "রোমের মন্দির", en: "ruins of ancient Rome", syn: "", ctx: "Fallen civilisation", line: 17 },
  { word: "Forum", phon: "/ˈfɔːrəm/", bnPhon: "ফোরাম", pos: "Noun", bn: "রোমান ফোরাম", en: "public square of ancient Rome", syn: "", ctx: "Sheep grazed after fall", line: 19 },
  { word: "Carthages", phon: "/ˈkɑːθɪdʒɪz/", bnPhon: "কার্থেজ", pos: "Proper noun", bn: "কার্থেজ", en: "ancient rival of Rome; rising powers", syn: "rival powers", ctx: "New superpowers", line: 21 },
  { word: "far-flung fleets", phon: "", bnPhon: "", pos: "Noun phrase", bn: "দূরপ্রসারী নৌবহর", en: "ships across distant seas", syn: "global fleets", ctx: "Trade dominance", line: 22 },
  { word: "merchandise", phon: "/ˈmɜːtʃəndaɪs/", bnPhon: "মার্চেন্ডাইজ", pos: "Noun", bn: "পণ্যদ্রব্য", en: "goods for sale", syn: "goods", ctx: "Cheaper foreign goods", line: 22 },
  { word: "armadas", phon: "/ɑːˈmɑːdəz/", bnPhon: "আর্মাডাজ", pos: "Noun", bn: "নৌবহর", en: "large fleets", syn: "fleets", ctx: "Korean power", line: 24 },
  { word: "patrols", phon: "/pəˈtrəʊlz/", bnPhon: "প্যাট্রোলস", pos: "Noun", bn: "টহল", en: "regular control rounds", syn: "rounds", ctx: "Global presence", line: 25 },
  { word: "time in the sun", phon: "", bnPhon: "", pos: "Idiom", bn: "খ্যাতির সময়", en: "period of success", syn: "moment of glory", ctx: "Temporary dominance", line: 26 },
  { word: "strains", phon: "/streɪnz/", bnPhon: "স্ট্রেনস", pos: "Noun", bn: "সুর", en: "melodies", syn: "tunes", ctx: "Beach band music", line: 28 },
  { word: "native beach band", phon: "", bnPhon: "", pos: "Noun phrase", bn: "স্থানীয় সৈকতের ব্যান্ড", en: "local sea-side musicians", syn: "", ctx: "Local culture continues", line: 28 },
  { word: "hits from the Arctic", phon: "", bnPhon: "", pos: "Noun phrase", bn: "আর্কটিক হিট গান", en: "popular songs from the Arctic", syn: "", ctx: "New cultural centre ignored", line: 29 }
];

const LINE_ANALYSIS = [
  { id: 1, text: "The gradual warming trend will likely go on", bn: "ক্রমশ উষ্ণায়নের প্রবণতা সম্ভবত চলতে থাকবে", simple: "The Earth will keep getting warmer slowly.", simpleBn: "পৃথিবী ধীরে ধীরে আরও গরম হতে থাকবে।", detailed: "Opens with calm understatement of crisis.", detailedBn: "সংকটকে শান্ত অবমূল্যায়নে বলা।", keywords: ["gradual warming trend"], symbolism: "Irreversible climate change", imagery: "Scientific", devices: ["Understatement"], tone: "Calm, resigned", exam: "Sets factual premise of continuing warming." },
  { id: 2, text: "And the grain belts begin to slide closer to the poles.", bn: "শস্য অঞ্চল মেরুর দিকে সরে যেতে শুরু করবে।", simple: "Farming regions move toward the poles.", simpleBn: "চাষের এলাকা মেরুর দিকে সরে।", detailed: "Climate redraws food map; ‘slide’ = slow inevitability.", detailedBn: "জলবায়ু খাদ্য মানচিত্র বদলায়।", keywords: ["grain belts", "poles"], symbolism: "New agricultural frontiers", imagery: "Geographic", devices: ["Metaphor"], tone: "Matter-of-fact", exam: "Climate redraws food production." },
  { id: 3, text: "The Plains States will be abandoned as giant dust bowls.", bn: "সমভূমি অঙ্গরাজ্য ধূলিঝড় অঞ্চল হয়ে পরিত্যক্ত হবে।", simple: "American plains become dry dust lands.", simpleBn: "সমভূমি শুকনো ধুলোর দেশ হবে।", detailed: "Echoes 1930s Dust Bowl — ecological collapse.", detailedBn: "১৯৩০-এর ডাস্ট বোলের প্রতিধ্বনি।", keywords: ["dust bowls"], symbolism: "Ecological collapse", imagery: "Barren", devices: ["Historical allusion"], tone: "Bleak", exam: "Key image of collapse." },
  { id: 4, text: "Greenland and Antarctica will join the new Great Powers.", bn: "গ্রিনল্যান্ড ও অ্যান্টার্কটিকা নতুন মহাশক্তি হবে।", simple: "Icy lands become powerful when ice melts.", simpleBn: "বরফ গললে বরফাবৃত দেশ শক্তিশালী হয়।", detailed: "Ironic: coldest places become power centres.", detailedBn: "বিদ্রূপ: ঠান্ডা জায়গা ক্ষমতার কেন্দ্র।", keywords: ["Great Powers"], symbolism: "Ice melt → power", imagery: "Political map", devices: ["Irony"], tone: "Ironic", exam: "Geopolitical consequences." },
  { id: 5, text: "Even if we play them off against each other", bn: "এমনকি যদি তাদের একে অপরের বিরুদ্ধে লড়াই করাই", simple: "Even if we set new powers against each other…", simpleBn: "নতুন শক্তিকে একে অপরের বিরুদ্ধে দাঁড় করালেও…", detailed: "Diplomatic manipulation by weakened nation.", detailedBn: "দুর্বল জাতির কূটনৈতিক চালাকি।", keywords: ["play them off"], symbolism: "Last tactics of decline", imagery: "Political", devices: ["Colloquial diction"], tone: "Cynical", exam: "Manoeuvring amid decline." },
  { id: 6, text: "For more aid, we'll still be poorer than we are now.", bn: "সাহায্য পেলেও আমরা এখনকার চেয়ে গরিব থাকব।", simple: "Even with aid we will be poorer.", simpleBn: "সাহায্যেও গরিব থাকব।", detailed: "Poverty is structural; aid cannot restore wealth.", detailedBn: "দারিদ্র্য কাঠামোগত।", keywords: ["aid", "poorer"], symbolism: "Irrecoverable loss", imagery: "Economic", devices: ["Anticlimax"], tone: "Resigned", exam: "Economic cost of climate change." },
  { id: 7, text: "Life will be different, good tillable land so dear", bn: "জীবন আলাদা হবে, চাষযোগ্য জমি দুর্লভ", simple: "Life changes; farmland becomes expensive.", simpleBn: "জীবন বদলায়; চাষের জমি দামি হয়।", detailed: "‘Dear’ = expensive; land scarcity reshapes society.", detailedBn: "জমির অভাব সমাজ বদলায়।", keywords: ["tillable", "dear"], symbolism: "Land as ultimate wealth", imagery: "Agricultural", devices: ["Understatement"], tone: "Reflective", exam: "Land scarcity and social change." },
  { id: 8, text: "The suburbs will give way to farms, the cities", bn: "শহরতলি খামারে রূপান্তরিত হবে, শহর", simple: "Suburbs become farms again.", simpleBn: "শহরতলি আবার খামার হয়।", detailed: "Reversal of urban sprawl; land returns to food.", detailedBn: "শহরতলির স্বপ্নের অবসান।", keywords: ["suburbs", "farms"], symbolism: "End of suburban affluence", imagery: "Landscape", devices: ["Contrast"], tone: "Matter-of-fact", exam: "Reversal of urban patterns." },
  { id: 9, text: "Fill up again with people too poor to own cars,", bn: "গাড়ি কেনার সামর্থ্যহীন মানুষে শহর ভরে", simple: "Cities fill with people too poor for cars.", simpleBn: "গাড়িহীন মানুষে শহর ভরে।", detailed: "End of car culture; denser urban poverty.", detailedBn: "গাড়ির সংস্কৃতির অবসান।", keywords: ["poor", "cars"], symbolism: "Lost middle-class status", imagery: "Crowded cities", devices: ["Social realism"], tone: "Somber", exam: "Climate poverty and transport." },
  { id: 10, text: "Walking to work or crowding on trollies,", bn: "হাঁটায় বা ট্রলিতে ভিড় করে কাজে যাওয়া", simple: "Walk or take crowded trams to work.", simpleBn: "হেঁটে বা ট্রামে কাজে যাওয়া।", detailed: "Everyday detail makes future concrete.", detailedBn: "দৈনন্দিন বিবরণ ভবিষ্যৎ বাস্তব করে।", keywords: ["walking", "trollies"], symbolism: "Poorer mobility", imagery: "Street life", devices: ["Concrete detail"], tone: "Observational", exam: "Dystopia in daily routine." },
  { id: 11, text: "We'll move down streets lined with practical nut trees,", bn: "ব্যবহারযোগ্য বাদাম গাছে ঘেরা রাস্তা", simple: "Streets have useful nut trees, not decorative ones.", simpleBn: "রাস্তায় কাজে লাগে এমন বাদাম গাছ।", detailed: "Utility replaces ornament — new ethic.", detailedBn: "সৌন্দর্যের জায়গায় ব্যবহারিকতা।", keywords: ["practical nut trees"], symbolism: "Utility over ornament", imagery: "Food trees", devices: ["Contrast"], tone: "Pragmatic", exam: "Scarcity changes values." },
  { id: 12, text: "Not elms and oaks, with vegetables crowding the front lawns.", bn: "এলম-ওক নয়, লনে সবজি", simple: "No fancy trees; lawns grow vegetables.", simpleBn: "সাজানো গাছ নয়; লনে সবজি।", detailed: "Suburban pride becomes kitchen garden.", detailedBn: "লন রান্নাঘরের বাগান।", keywords: ["vegetables", "front lawns"], symbolism: "Survival over leisure", imagery: "Domestic", devices: ["Contrast"], tone: "Ironic", exam: "Domestic space for survival." },
  { id: 13, text: "The tax base will be too small to support the public buildings.", bn: "কর ভিত্তি সরকারি ভবন রক্ষায় অপর্যাপ্ত", simple: "Not enough tax money for public buildings.", simpleBn: "সরকারি ভবনের কর নেই।", detailed: "Fiscal collapse after environmental decline.", detailedBn: "রাজস্ব সংকট।", keywords: ["tax base"], symbolism: "Weak state", imagery: "Institutional", devices: ["Cause-effect"], tone: "Dry", exam: "Institutions erode." },
  { id: 14, text: "We'll have to donate hours after work each week", bn: "কাজের পর ঘণ্টা দান করতে হবে", simple: "Volunteer time after work every week.", simpleBn: "কাজের পর স্বেচ্ছায় সময় দিতে হবে।", detailed: "Citizenship becomes unpaid labour.", detailedBn: "নাগরিকত্ব অবেতনিক শ্রম।", keywords: ["donate hours"], symbolism: "Civic duty as survival", imagery: "After-work labour", devices: ["Irony"], tone: "Resigned duty", exam: "People sustain the state." },
  { id: 15, text: "To rake the lawn of the Library and City Hall,", bn: "লাইব্রেরি ও সিটি হলের লন পরিষ্কার", simple: "Rake grass at library and city hall.", simpleBn: "লাইব্রেরি ও সিটি হলের ঘাস পরিষ্কার।", detailed: "Culture survives only through citizen labour.", detailedBn: "সংস্কৃতি নাগরিক শ্রমে টিকে।", keywords: ["Library", "City Hall"], symbolism: "Culture and local government", imagery: "Maintenance", devices: ["Catalogue"], tone: "Humble", exam: "Institutional survival personal." },
  { id: 16, text: "To tuckpoint the chimney of the Federal Building", bn: "ফেডারেল বিল্ডিং-এর চিমনি মেরামত", simple: "Repair government building chimney brickwork.", simpleBn: "সরকারি ভবনের চিমনি মেরামত।", detailed: "Precise craft word — grounded diction.", detailedBn: "বাস্তব কাজের শব্দ।", keywords: ["tuckpoint"], symbolism: "State reduced to brick repair", imagery: "Craft", devices: ["Technical diction"], tone: "Practical", exam: "National state depends on unpaid repair." },
  { id: 17, text: "If we don't want the place to fall like temples in Rome,", bn: "রোমের মন্দিরের মতো ভেঙে পড়ুক না", simple: "If we don't want collapse like Roman temples.", simpleBn: "রোমের মন্দিরের মতো ভেঙে না পড়ুক।", detailed: "Central civilisational parallel.", detailedBn: "সভ্যতার পতনের তুলনা।", keywords: ["temples in Rome"], symbolism: "Fallen civilisation", imagery: "Ruins", devices: ["Allusion"], tone: "Warning", exam: "Central Rome comparison." },
  { id: 18, text: "Don't want sheep to graze in our squares", bn: "চত্বরে ভেড়া চরুক না", simple: "Don't want sheep in public squares.", simpleBn: "চত্বরে ভেড়া না চরুক।", detailed: "City returns to countryside — decline.", detailedBn: "শহর গ্রামে ফিরে যায়।", keywords: ["sheep", "squares"], symbolism: "Urban collapse", imagery: "Pastoral in city", devices: ["Irony"], tone: "Wry", exam: "Civic space reclaimed by nature." },
  { id: 19, text: "As they grazed in the Forum for a thousand years.", bn: "যেমন ফোরামে হাজার বছর চরেছিল", simple: "As sheep grazed in Rome’s Forum for centuries.", simpleBn: "রোমের ফোরামে ভেড়া চরেছিল।", detailed: "Historical fact completes the parallel.", detailedBn: "ঐতিহাসিক সত্য তুলনা সম্পূর্ণ করে।", keywords: ["Forum"], symbolism: "Long aftermath of collapse", imagery: "Historical pastoral", devices: ["Allusion", "Parallelism"], tone: "Solemn", exam: "Completes Rome analogy." },
  { id: 20, text: "With a little effort the country will go on.", bn: "অল্প চেষ্টায় দেশ চলবে", simple: "With some effort the nation continues.", simpleBn: "চেষ্টায় দেশ টিকে থাকবে।", detailed: "Turning point: modest survival, not glory.", detailedBn: "মোড়: সাদাসিধে টিকে থাকা।", keywords: ["little effort", "go on"], symbolism: "Modest survival", imagery: "Continuity", devices: ["Understatement"], tone: "Quietly hopeful", exam: "Shift to adapted survival." },
  { id: 21, text: "So what if we've lost our high place to stronger Carthages", bn: "শক্তিশালী কার্থেজদের কাছে উচ্চস্থান হারালেও", simple: "So what if stronger powers took our top place?", simpleBn: "শক্তিশালী শক্তি জায়গা নিলেও কী?", detailed: "Carthage = rising rivals; casual dismissal.", detailedBn: "কার্থেজ = উদীয়মান শক্তি।", keywords: ["Carthages"], symbolism: "New global rivals", imagery: "Geopolitical", devices: ["Allusion", "Rhetorical question"], tone: "Accepting", exam: "Classical allusion for power shift." },
  { id: 22, text: "Whose far-flung fleets will be loaded with merchandise", bn: "যাদের নৌবহর পণ্যে ভরা", simple: "Whose distant fleets carry lots of goods…", simpleBn: "দূরের জাহাজ মাল বহন করে…", detailed: "Trade dominance replaces military empire.", detailedBn: "বাণিজ্যিক আধিপত্য।", keywords: ["far-flung fleets"], symbolism: "Trade as power", imagery: "Maritime", devices: ["Visual detail"], tone: "Observational", exam: "Economic supremacy." },
  { id: 23, text: "Cheaper than ours. We'll be glad to watch from the beach", bn: "আমাদের চেয়ে সস্তা। সৈকত থেকে দেখে খুশি", simple: "Cheaper goods. We’ll watch happily from the beach.", simpleBn: "সস্তা মাল। সৈকত থেকে দেখে খুশি।", detailed: "Acceptance replaces rivalry.", detailedBn: "প্রতিদ্বন্দ্বিতার জায়গায় গ্রহণ।", keywords: ["beach"], symbolism: "Spectator’s edge of history", imagery: "Coastal", devices: ["Tone shift"], tone: "Calm", exam: "Acceptance of diminished status." },
  { id: 24, text: "As the lights from Korean armadas pass", bn: "কোরিয়ান নৌবহরের আলো চলে যায়", simple: "As lights of Korean fleets pass by…", simpleBn: "কোরিয়ান জাহাজের আলো…", detailed: "Korea = Asian economic rise; lights almost beautiful.", detailedBn: "কোরিয়া = এশীয় উত্থান।", keywords: ["Korean armadas"], symbolism: "Rising global power", imagery: "Ships’ lights", devices: ["Specificity"], tone: "Quiet", exam: "Grounds prophecy in real region." },
  { id: 25, text: "On their endless patrols around the world.", bn: "পৃথিবী জুড়ে অন্তহীন টহল", simple: "On never-ending rounds around the planet.", simpleBn: "পৃথিবী ঘুরে অন্তহীন টহল।", detailed: "Permanent new world order.", detailedBn: "স্থায়ী নতুন বিশ্ব ব্যবস্থা।", keywords: ["endless patrols"], symbolism: "New world order", imagery: "Global", devices: ["Hyperbole"], tone: "Accepting", exam: "Continuous foreign dominance." },
  { id: 26, text: "Let them have their little time in the sun,", bn: "তাদের রোদের ছোট সময় দাও", simple: "Let them enjoy their short success.", simpleBn: "সফলতার ছোট সময় উপভোগ করতে দাও।", detailed: "All glory is temporary.", detailedBn: "সব খ্যাতি সাময়িক।", keywords: ["time in the sun"], symbolism: "Temporary glory", imagery: "Sunlight", devices: ["Idiom", "Irony"], tone: "Philosophical", exam: "Universalises decline." },
  { id: 27, text: "We'll say to ourselves as we begin to sway", bn: "দোলাতে দোলাতে নিজেদের বলব", simple: "We’ll tell ourselves this as we sway…", simpleBn: "দোলাতে দোলাতে নিজেদের বলব…", detailed: "Body finds pleasure despite historical loss.", detailedBn: "ক্ষতি সত্ত্বেও শরীর আনন্দ খুঁজে।", keywords: ["sway"], symbolism: "Music as consolation", imagery: "Bodily movement", devices: ["Sensory"], tone: "Gentle", exam: "Resilience through ordinary pleasure." },
  { id: 28, text: "To the strains of our native beach band,", bn: "স্থানীয় সৈকতের ব্যান্ডের সুরে", simple: "To the music of our local beach band.", simpleBn: "স্থানীয় সৈকতের ব্যান্ডের গানে।", detailed: "Local culture continues; rootedness.", detailedBn: "স্থানীয় সংস্কৃতি চলে।", keywords: ["native beach band"], symbolism: "Local vs global", imagery: "Music by sea", devices: ["Contrast"], tone: "Affectionate", exam: "Ordinary local life over grandeur." },
  { id: 29, text: "Ignoring the hits from the Arctic on the radio.", bn: "রেডিওতে আর্কটিক হিট উপেক্ষা করে", simple: "Ignoring popular Arctic songs on the radio.", simpleBn: "আর্কটিকের গান উপেক্ষা করে।", detailed: "Final irony; local choice = soft agency.", detailedBn: "স্থানীয় পছন্দ = নরম স্বাধীনতা।", keywords: ["hits from the Arctic"], symbolism: "Local agency", imagery: "Radio", devices: ["Irony", "Understatement"], tone: "Gently defiant", exam: "Closes with soft dignity." }
];

const THEMES = [
  { id: "climate", title: "Climate Change & Global Warming", bn: "জলবায়ু পরিবর্তন", en: "Foundation: continuing warming and cascading effects.", bnExpl: "ক্রমবর্ধমান উষ্ণতা ও তার প্রভাব।", examPara: "Dennis presents climate change as a ‘gradual warming trend’ that redraws grain belts, creates dust bowls, and raises polar powers." },
  { id: "poverty", title: "Poverty and Economic Decline", bn: "দারিদ্র্য", en: "Scarce land, no cars, crowded trollies, weak tax base.", bnExpl: "জমির অভাব, গাড়ি নেই, দুর্বল কর ভিত্তি।", examPara: "Environmental change links to economic decline: people too poor for cars; citizens volunteer to maintain public buildings." },
  { id: "civilisation", title: "Rise and Fall of Civilisations", bn: "সভ্যতার উত্থান-পতন", en: "Rome’s Forum and Carthages frame Western decline.", bnExpl: "রোম ও কার্থেজ পাশ্চাত্য পতনের কাঠামো।", examPara: "Sheep in the Forum and ‘Carthages’ place climate decline inside the ancient cycle of empires." },
  { id: "adaptation", title: "Adaptation and Modest Survival", bn: "অভিযোজন", en: "Country goes on; local culture continues.", bnExpl: "দেশ চলবে; স্থানীয় সংস্কৃতি থাকে।", examPara: "After loss, survival: nut trees, vegetable lawns, volunteer labour, native beach band." },
  { id: "power-shift", title: "Geopolitical Power Shift", bn: "ক্ষমতার স্থানান্তর", en: "Polar powers and Korean armadas.", bnExpl: "মেরু শক্তি ও কোরিয়ান আর্মাডা।", examPara: "Multipolar future: polar Great Powers, Korean fleets; response is ‘Let them have their little time in the sun.’" },
  { id: "utility", title: "Utility over Ornament", bn: "ব্যবহারিকতা", en: "Nut trees replace elms; vegetables replace lawns.", bnExpl: "বাদাম গাছ ও সবজি লন।", examPara: "Affluent ornament yields to practical landscape of scarcity." },
  { id: "local", title: "Local Culture and Quiet Dignity", bn: "স্থানীয় মর্যাদা", en: "Native beach band over Arctic hits.", bnExpl: "স্থানীয় ব্যান্ড আর্কটিক হিটের উপরে।", examPara: "Closing preference for the near and native is soft agency against new global centres." }
];

const DEVICES = [
  { name: "Imagery", examples: [
    { text: "giant dust bowls", note: "Ecological collapse" },
    { text: "practical nut trees", note: "Utility landscape" },
    { text: "vegetables crowding the front lawns", note: "Domestic survival" },
    { text: "sheep to graze in our squares", note: "Urban collapse" },
    { text: "lights from Korean armadas", note: "Maritime power" }
  ]},
  { name: "Allusion", examples: [
    { text: "temples in Rome / Forum", note: "Fall of Rome" },
    { text: "Carthages", note: "Rising rival powers" },
    { text: "dust bowls", note: "1930s Dust Bowl" }
  ]},
  { name: "Irony", examples: [
    { text: "Greenland and Antarctica as Great Powers", note: "Coldest places become centres" },
    { text: "hits from the Arctic", note: "Ice desert as cultural exporter" },
    { text: "little time in the sun", note: "Casual dismissal of glory" }
  ]},
  { name: "Understatement", examples: [
    { text: "gradual warming trend will likely go on", note: "Calm for catastrophe" },
    { text: "With a little effort the country will go on", note: "Modest survival" },
    { text: "So what if we've lost our high place", note: "Casual about decline" }
  ]},
  { name: "Contrast", examples: [
    { text: "nut trees / elms and oaks", note: "Utility vs ornament" },
    { text: "suburbs / farms", note: "Sprawl vs food" },
    { text: "native beach band / Arctic hits", note: "Local vs global" }
  ]},
  { name: "Symbolism", examples: [
    { text: "dust bowls", note: "Ruin" },
    { text: "cars", note: "Middle-class status" },
    { text: "front lawns", note: "Suburban leisure" },
    { text: "Rome / Forum", note: "Civilisational collapse" },
    { text: "beach band", note: "Ordinary culture" }
  ]}
];

const QUIZ = [
  { q: "Who wrote ‘The Greenhouse Effect’?", opts: ["Robert Frost", "Carl Dennis", "Seamus Heaney", "Billy Collins"], ans: 1, exp: "Carl Dennis (b. 1939)." },
  { q: "Central environmental concern?", opts: ["Ozone only", "Gradual global warming and social effects", "Ice only", "Volcanoes"], ans: 1, exp: "Gradual warming and cascading effects." },
  { q: "What happens to grain belts?", opts: ["Expand to equator", "Slide closer to the poles", "Disappear", "Move to oceans"], ans: 1, exp: "They slide closer to the poles." },
  { q: "Plains States become?", opts: ["Capitals", "Giant dust bowls", "Ports", "Forests"], ans: 1, exp: "Giant dust bowls." },
  { q: "New Great Powers?", opts: ["Sahara", "Greenland and Antarctica", "Himalayas", "Australia"], ans: 1, exp: "Greenland and Antarctica." },
  { q: "‘Tillable’ means?", opts: ["Sellable", "Capable of being farmed", "Forested", "Underwater"], ans: 1, exp: "Capable of being farmed." },
  { q: "Suburbs become?", opts: ["Airports", "Farms", "Deserts", "Bases"], ans: 1, exp: "Farms." },
  { q: "Why fill cities?", opts: ["Entertainment", "Too poor to own cars", "Education", "War"], ans: 1, exp: "Too poor to own cars." },
  { q: "Replace elms and oaks?", opts: ["Palms", "Practical nut trees", "Cactus", "Plastic"], ans: 1, exp: "Practical nut trees." },
  { q: "Front lawns hold?", opts: ["Flowers", "Vegetables", "Statues", "Cars"], ans: 1, exp: "Vegetables." },
  { q: "Citizens after work?", opts: ["TV", "Donate hours to maintain buildings", "Emigrate", "Highways"], ans: 1, exp: "Maintain public buildings." },
  { q: "Rome parallel?", opts: ["Victory", "Temples falling; sheep in Forum", "Roads", "Law"], ans: 1, exp: "Temples and Forum." },
  { q: "Carthages mean?", opts: ["Ruins only", "Stronger rising powers", "Farms", "Ice"], ans: 1, exp: "Rising rival powers." },
  { q: "Korean armadas?", opts: ["History", "Rising Asian power", "Fishing", "Tourism"], ans: 1, exp: "Rising Asian power." },
  { q: "Final attitude?", opts: ["Revenge", "Quiet acceptance; local culture", "Despair", "War"], ans: 1, exp: "Quiet acceptance and local band." },
  { q: "Overall tone?", opts: ["Panicked", "Calm, resigned, accepting", "Celebratory", "Comic"], ans: 1, exp: "Calm understatement to acceptance." },
  { q: "Dennis born?", opts: ["London", "St. Louis, Missouri", "New York", "Dublin"], ans: 1, exp: "St. Louis, Missouri." },
  { q: "‘Time in the sun’?", opts: ["Eternal power", "Temporary success", "Climate", "Season"], ans: 1, exp: "Temporary success." },
  { q: "With a little effort?", opts: ["Climate reverses", "Country will go on", "Poverty ends", "Rome returns"], ans: 1, exp: "Country will go on." },
  { q: "Main message?", opts: ["Myth", "Climate reshapes society; adaptation and local dignity possible", "Poles only", "Tech solves all"], ans: 1, exp: "Decline mapped; modest survival and local dignity." }
];

const FLASHCARDS = [
  { front: "Main theme?", back: "Climate change; social/economic effects; adaptation and dignity.", bn: "জলবায়ু; প্রভাব; অভিযোজন ও মর্যাদা।" },
  { front: "Grain belts?", back: "Slide closer to the poles.", bn: "মেরুর দিকে সরে।" },
  { front: "Plains States?", back: "Giant dust bowls.", bn: "ধূলিঝড় অঞ্চল।" },
  { front: "New Great Powers?", back: "Greenland and Antarctica.", bn: "গ্রিনল্যান্ড ও অ্যান্টার্কটিকা।" },
  { front: "Replace ornamental trees?", back: "Practical nut trees.", bn: "বাদাম গাছ।" },
  { front: "Front lawns?", back: "Vegetables.", bn: "সবজি।" },
  { front: "Historical parallel?", back: "Rome — temples, sheep in Forum.", bn: "রোম — মন্দির, ফোরাম।" },
  { front: "Carthages?", back: "Stronger rising powers.", bn: "উদীয়মান শক্তি।" },
  { front: "Final attitude?", back: "Acceptance; native beach band over Arctic hits.", bn: "গ্রহণ; স্থানীয় ব্যান্ড।" },
  { front: "Poet?", back: "Carl Dennis (b. 1939, St. Louis).", bn: "কার্ল ডেনিস।" },
  { front: "Tillable?", back: "Capable of being farmed.", bn: "চাষযোগ্য।" },
  { front: "Key message?", back: "Climate reshapes world; effort continues life; local dignity remains.", bn: "জলবায়ু বদলায়; চেষ্টায় জীবন; স্থানীয় মর্যাদা।" }
];

const EXAM_QS = {
  veryShort: [
    { q: "Who is the poet?", a: "Carl Dennis.", bn: "কার্ল ডেনিস।" },
    { q: "What is a dust bowl?", a: "Land reduced to dust by drought and erosion.", bn: "খরায় ধুলোয় পরিণত ভূমি।" },
    { q: "Meaning of tillable?", a: "Capable of being farmed productively.", bn: "চাষযোগ্য।" },
    { q: "New Great Powers?", a: "Greenland and Antarctica.", bn: "গ্রিনল্যান্ড ও অ্যান্টার্কটিকা।" },
    { q: "Carthages allude to?", a: "Ancient Carthage; rising rival powers.", bn: "কার্থেজ; উদীয়মান শক্তি।" }
  ],
  short: [
    { q: "Effects on agriculture?", a: "Grain belts slide to poles; Plains become dust bowls; tillable land scarce; suburbs→farms; lawns→vegetables.", bn: "শস্য মেরুর দিকে; ধূলিঝড়; জমি দুর্লভ; শহরতলি খামার; লনে সবজি।" },
    { q: "Rome allusion?", a: "Fear of temples falling and sheep in squares as in the Forum — climate decline as civilisational.", bn: "মন্দির ও ফোরাম — সভ্যতার পতন।" },
    { q: "Speakers’ final attitude?", a: "Accept loss of high place; glad to watch from beach; prefer native beach band — quiet adaptation.", bn: "উচ্চস্থান মেনে নেওয়া; স্থানীয় ব্যান্ড — নীরব অভিযোজন।" },
    { q: "Climate and everyday life?", a: "No cars, crowded trollies, walking, nut trees, vegetable lawns, unpaid maintenance of public buildings.", bn: "গাড়ি নেই, ট্রলি, হাঁটা, বাদাম গাছ, সবজির লন, অবেতনিক রক্ষণাবেক্ষণ।" }
  ],
  broad: [
    { q: "Climate change and human adaptation in the poem.", a: "Dennis maps gradual warming: grain belts move, dust bowls form, polar powers rise. Society grows poorer — no cars, farms replace suburbs, citizens maintain buildings unpaid. Rome and Carthage place this in imperial cycles. Yet ‘with a little effort the country will go on.’ Speakers accept diminished rank and choose local culture. Warning balanced with adaptation and dignity.", bn: "উষ্ণায়নের মানচিত্র; দারিদ্র্য; রোম-কার্থেজ; তবু দেশ চলবে; স্থানীয় মর্যাদা।" },
    { q: "Imagery and allusion.", a: "Concrete images (dust bowls, nut trees, vegetable lawns, sheep in squares, Korean lights) make climate social. Allusions to Dust Bowl, Rome, Carthage deepen meaning. Closing beach band vs Arctic hits contrasts local belonging with new centres. Science becomes human story of loss, labour, modest survival.", bn: "মূর্ত চিত্র ও রোম-কার্থেজ ইঙ্গিত; স্থানীয় ব্যান্ড; মানব কাহিনি।" }
  ]
};

const POET = {
  name: "Carl Dennis",
  years: "b. 17 September 1939",
  summary: "Born in St. Louis, Missouri. Quiet intelligence, meditative style, middle-class American life. Everyday speech in verse. Poetry as Persuasion (2001). Pulitzer Prize for Poetry (2002) for Practical Gods.",
  bnSummary: "সেন্ট লুইস, মিসৌরি। শান্ত বুদ্ধিমত্তা, ধ্যানমগ্নতা, মধ্যবিত্ত জীবন।",
  facts: [
    { label: "Born", value: "17 September 1939, St. Louis, Missouri" },
    { label: "Nationality", value: "American" },
    { label: "Style", value: "Meditative, conversational" },
    { label: "Criticism", value: "Poetry as Persuasion (2001)" },
    { label: "Award", value: "Pulitzer Prize (2002)" }
  ],
  timeline: [
    { year: "1939", event: "Born in St. Louis" },
    { year: "2001", event: "Poetry as Persuasion" },
    { year: "2002", event: "Pulitzer for Practical Gods" }
  ],
  works: "Ordinary language for ethical and social questions. The Greenhouse Effect treats climate through understated detail."
};

const ABOUT_POEM = {
  what: "Free-verse poem on social, economic and geopolitical consequences of global warming; ends in quiet acceptance and local cultural continuity.",
  bnWhat: "মুক্তছন্দ; উষ্ণায়নের সামাজিক-অর্থনৈতিক-ভূরাজনৈতিক পরিণতি; নীরব গ্রহণ ও স্থানীয় সংস্কৃতি।",
  structure: { form: "Free verse", movement: "Climate → Society → Civic labour/Rome → Acceptance", tone: "Calm, understated, accepting" },
  argument: "Warming continues; power and agriculture shift; society poorer and more practical; yet with effort life goes on; local culture retains value."
};

const PROSODY = {
  form: {
    title: "Form & Prosody",
    bn: "রূপ ও প্রসোডি",
    points: [
      { en: "Free verse — no regular rhyme scheme or fixed stanza pattern.", bn: "মুক্তছন্দ — নিয়মিত মিল বা স্থির স্তবক নেই।" },
      { en: "Organised in four movements of thought rather than strict quatrains.", bn: "চারটি চিন্তার গতিতে সাজানো।" },
      { en: "Conversational rhythm close to everyday speech; casual pentameter tendency in places.", bn: "দৈনন্দিন কথার কাছাকাছি ছন্দ।" },
      { en: "Frequent enjambment — sense runs across line breaks.", bn: "এনজ্যাম্বমেন্ট বহুল — অর্থ লাইন ভেঙে চলে।" },
      { en: "Tone: calm prophecy → practical detail → civic duty → quiet acceptance.", bn: "সুর: শান্ত ভবিষ্যদ্বাণী → ব্যবহারিক বিবরণ → নাগরিক কর্তব্য → নীরব গ্রহণ।" }
    ]
  },
  sound: {
    title: "Sound Devices",
    bn: "শব্দ-কৌশল",
    points: [
      { en: "Alliteration: gradual warming; practical/public; far-flung fleets.", bn: "অনুপ্রাস: gradual warming; far-flung fleets." },
      { en: "Assonance: long vowels in go on, poles, dust bowls slow the pace.", bn: "স্বরানুপ্রাস গতি ধীর করে।" },
      { en: "Soft endings support meditative, non-hysterical tone.", bn: "কোমল সমাপ্তি ধ্যানমগ্ন সুর রাখে।" }
    ]
  },
  rhetoric: {
    title: "Rhetorical Strategies",
    bn: "অলংকার ও যুক্তির কৌশল",
    devices: [
      { name: "Understatement", bn: "অবমূল্যায়ন", en: "Catastrophe stated calmly — makes the future more chilling.", example: "Line 1; With a little effort the country will go on." },
      { name: "Irony", bn: "বিদ্রূপ", en: "Coldest places become Great Powers; Arctic exports radio hits.", example: "Lines 4, 29" },
      { name: "Historical allusion", bn: "ঐতিহাসিক ইঙ্গিত", en: "Rome’s temples/Forum; Carthages as rising rivals.", example: "Lines 17–19, 21" },
      { name: "Catalogue / concrete list", bn: "তালিকা", en: "Nut trees, vegetables, rake, tuckpoint — everyday labour makes dystopia tangible.", example: "Lines 11–16" },
      { name: "Rhetorical dismissal", bn: "হালকা উপেক্ষা", en: "So what if we’ve lost our high place — turns loss into shrug before acceptance.", example: "Line 21" },
      { name: "Contrast", bn: "বৈপরীত্য", en: "Ornament vs utility; global fleets vs native beach band.", example: "Lines 11–12, 28–29" },
      { name: "Collective ‘we’", bn: "সমষ্টিগত আমরা", en: "National we invites reader into shared fate and labour.", example: "Throughout" }
    ]
  },
  scansionNote: {
    en: "Dennis often approaches loose iambic pentameter without locking into it — speech that feels measured but natural, suitable for a quiet warning.",
    bn: "ঢিলেঢালা পেন্টামিটারের কাছাকাছি — মাপা কিন্তু স্বাভাবিক কথা; শান্ত সতর্কবার্তার উপযোগী।"
  }
};

const CRITICAL_FULL = {
  intro: {
    en: "Carl Dennis’s The Greenhouse Effect meditates on climate change without panic or denial. In free verse with a conversational surface, it maps slow social and geopolitical consequences of a gradual warming trend and ends not in apocalypse but in modest survival and local cultural preference.",
    bn: "ডেনিসের কবিতা জলবায়ু নিয়ে ধ্যান — আতঙ্ক বা অস্বীকৃতি নয়। মুক্তছন্দে ধীর সামাজিক-ভূরাজনৈতিক পরিণতি; শেষে সাদাসিধে টিকে থাকা ও স্থানীয় সংস্কৃতি।"
  },
  structure: {
    en: "Four movements: (1) climate and power shift; (2) social and domestic change; (3) civic labour and Rome parallel; (4) acceptance — country goes on, Carthages, Korean armadas, native beach band.",
    bn: "চার গতি: জলবায়ু-ক্ষমতা; সামাজিক পরিবর্তন; নাগরিক শ্রম ও রোম; গ্রহণ ও স্থানীয় ব্যান্ড।"
  },
  style: {
    en: "Hallmark is understatement. Catastrophe as practical forecast. Concrete details ground prophecy. Rome and Carthage enlarge the frame without bombast.",
    bn: "অবমূল্যায়ন বৈশিষ্ট্য। সর্বনাশ ব্যবহারিক পূর্বাভাস। মূর্ত বিবরণ। রোম-কার্থেজ কাঠামো বড় করে অলংকারের জোরে নয়।"
  },
  themesCritical: {
    en: "Climate as irreversible process; economic decline; rise and fall of civilisations; adaptation through everyday labour; geopolitical shift; utility over ornament; quiet dignity of local culture.",
    bn: "অপরিবর্তনীয় জলবায়ু; অবক্ষয়; সভ্যতার চক্র; দৈনন্দিন শ্রমে অভিযোজন; ক্ষমতার স্থানান্তর; ব্যবহারিকতা; স্থানীয় মর্যাদা।"
  },
  evaluation: {
    en: "Strength is ethical and tonal restraint. It invites imagining a poorer, practical future and still finding a way to go on. For exams: understatement, Rome/Carthage, domestic imagery, closing beach band as soft agency.",
    bn: "নৈতিক ও সুরের সংযম। পরীক্ষায়: অবমূল্যায়ন, রোম/কার্থেজ, ঘরোয়া চিত্র, স্থানীয় ব্যান্ড।"
  },
  examTips: {
    en: "5 marks: three images + Rome allusion + closing attitude. 8–10 marks: four movements, tone/understatement, adaptation and local dignity.",
    bn: "৫ নম্বর: তিন চিত্র + রোম + শেষ মনোভাব। ৮–১০: চার গতি, সুর, অভিযোজন ও মর্যাদা।"
  }
};

const SECTIONS = [
  "home", "poet", "about", "poem", "vocab", "bangla", "analysis",
  "devices", "themes", "background", "prosody", "critical", "exam", "quiz", "revision", "teach", "progress"
];

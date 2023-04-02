const settings = ["real photo", "digital artwork", "oil painting", "charcoal drawing", "watercolor painting", "acrylic painting", "pastel drawing", "ink sketch", "collage art", "etching print", "woodcut print", "screenprint", "photorealistic drawing", "chalk art", "gouache painting", "pen and ink drawing", "oil pastel drawing", "bronze sculpture", "ceramic sculpture", "glass blowing", "encaustic painting", "sgraffito pottery", "fresco painting", "tempera painting", "mosaic art", "tapestry weaving", "quilt art", "stained glass", "lithograph print", "engraving print", "charcoal sketch", "digital painting", "pixel art", "3d modeling", "animation art", "clay modeling", "sand sculpture", "ice sculpture", "bronze casting", "wood carving", "ink painting", "mixed media art", "pencil drawing", "marker drawing", "graffiti art"];
const styles = ["in the style of a coloring book", "style inspired by ancient greece", "impressionist style", "style inspired by japanese prints", "style inspired by anime films", "style inspired by comic books", "style inspired by chinese calligraphy", "in the style of science fiction", "style inspired by baroque paintings", "style inspired by fantasy art", "style inspired by impressionism", "style inspired by cubism", "in the style of oil painting", "style inspired by pop art", "style inspired by surrealism", "in the style of street art", "in the style of graffiti", "style inspired by abstract expressionism", "style inspired by minimalism", "style inspired by art nouveau", "in the style of digital art", "style inspired by art deco", "in the style of pointillism", "style inspired by fauvism", "style inspired by renaissance art", "in the style of manga", "style inspired by de stijl", "in the style of art informel", "style inspired by constructivism", "in the style of dada", "style inspired by rococo art", "in the style of neo-classicism", "style inspired by symbolism", "style inspired by romanticism", "in the style of tonalism", "style inspired by post-impressionism", "in the style of surrealist automatism", "style inspired by abstract art", "style inspired by constructed photography", "in the style of conceptual art", "style inspired by land art", "in the style of performance art"];
const scenes = ["a tranquil beach at sunset", "a cozy living room with a fireplace", "a dramatic mountain landscape", "a bustling city street in the rain", "a peaceful countryside field", "a misty forest in the morning", "a quiet park bench in the fall", "an urban rooftop at night", "a serene lakeside dock", "a quaint village marketplace", "a busy airport terminal", "a picturesque snow-covered town", "a rustic farmstead at sunrise", "a vibrant carnival fairground", "a tranquil riverside trail", "a charming seaside village", "a lively music festival crowd", "a remote desert oasis", "a misty harbor at dawn", "a majestic canyon vista", "a buzzing shopping mall", "a quaint country church", "a festive new year's eve party", "a peaceful garden in bloom", "a cozy ski chalet in the winter", "a lively sports stadium", "a scenic vineyard at harvest time", "a bustling fish market", "a mysterious abandoned building", "a majestic castle on a hill", "a sun-drenched mediterranean town", "a quaint beachside cafe", "a peaceful zen garden", "a bustling train station", "a quaint cottage in the woods", "a lively street festival", "a tranquil park pond", "a dreamy lavender field at twilight", "a warm sunlit greenhouse filled with exotic plants", "an enchanting waterfall hidden in a lush jungle", "a serene mountaintop temple overlooking the valley", "a charming cobblestone alleyway in a historic city", "a rustic treehouse nestled among autumn foliage", "a moonlit beach with bioluminescent waves", "a bustling urban coffee shop on a chilly day", "an elegant ballroom during a masquerade ball", "a windswept lighthouse overlooking a rugged coastline", "a colorful coral reef teeming with marine life", "a tranquil bamboo grove rustling in the breeze", "a cozy bookshop filled with hidden treasures", "a lively street corner with a vibrant mural", "a snow-covered ice-skating rink under twinkling lights", "a lush tropical rainforest canopy", "a quaint cobblestone bridge over a babbling brook", "an atmospheric jazz club on a sultry night", "a sunlit meadow filled with wildflowers", "an otherworldly cavern with sparkling stalactites", "a bustling harbor with bobbing sailboats"];
const subjects = ["elephant", "giraffe", "zebra", "lion", "tiger", "leopard", "panther", "cheetah", "hippopotamus", "rhino", "gorilla", "chimpanzee", "orangutan", "monkey", "sloth", "kangaroo", "koala", "gazelle", "antelope", "hyena", "wolf", "fox", "bear", "deer", "moose", "reindeer", "otter", "beaver", "squirrel", "raccoon", "porcupine", "hedgehog", "bat", "mouse", "rat", "hamster", "gerbil", "guinea pig", "rabbit", "hare", "kitten", "puppy", "parrot", "canary", "chair", "table", "flower", "star", "moon", "sun", "planet", "universe", "galaxy", "forest", "desert", "jungle", "island", "building", "bridge", "road", "mountain", "valley", "canyon", "waterfall", "volcano", "cottage", "castle", "ship", "airplane", "train", "bicycle", "motorcycle", "car", "truck", "helicopter", "submarine", "rocket", "sunset", "rainbow", "snowflake", "diamond", "crystal", "candle", "tornado", "river", "lake", "oasis", "waterfall", "cave", "mine", "quarry", "harbor", "beach", "park", "garden", "mountain", "hill", "canyon", "valley", "cove", "island", "forest", "jungle", "desert", "prairie", "savannah", "tundra", "ocean", "sea", "lake", "riverbank", "cliff", "lighthouse", "skyscraper", "barn", "tent", "cabin", "mansion", "castle", "palace", "temple", "cathedral", "monastery", "shrine", "tower"]

function generatePrompt() {
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomScene = scenes[Math.floor(Math.random() * scenes.length)];

    const prompt = `${randomScene}:: ${randomSetting}:: ${randomSubject}, ${randomStyle}`;
    document.getElementById("generatedPrompt").innerText = prompt;
}
function copyText() {
    var varText = document.getElementById("generatedPrompt").innerText;
    navigator.clipboard.writeText(varText);
}
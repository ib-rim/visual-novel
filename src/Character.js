class Character {

    constructor (name, happyPortrait, sadPortrait, neutralPortrait) {
        this.name = name;
        this.portraits = {
            happy: happyPortrait,
            sad: sadPortrait,
            neutral: neutralPortrait,
        };
    }
}

export default Character;
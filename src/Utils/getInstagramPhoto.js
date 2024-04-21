const cheerio = require('cheerio');

async function getProfilePhoto(username) {
    try {
        const response = await axios.get(`https://www.instagram.com/${username}/`);
        const html = response.data;
        const $ = cheerio.load(html);
        const script = $('script[type="application/ld+json"]').html();
        if (script) {
            const json = JSON.parse(script);
            const profilePicture = json.mainEntityofPage.profilePicture;
            res.json({ profilePicture });
        } else {
            res.status(404).json({ error: 'Foto de perfil não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao obter a foto de perfil do Instagram:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

module.exports = { getProfilePhoto }
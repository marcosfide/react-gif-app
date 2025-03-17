import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba en getGif()', () => {
    test('debe de retornar un arrglo de gifs', async() => {

        const gifs = await getGifs('OnePunch');
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
        
    })
})
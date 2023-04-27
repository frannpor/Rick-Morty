const app = require("../src/app");
const session = require("supertest");
const request = session(app);
const character = {
    id: 987,
    name: "Pirulo",
    species: "unknown",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpg",
    gender: "Genderless",
    status: "unknown"
}

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.get("/rickandmorty/character/1")
            expect(response.statusCode).toBe(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get("/rickandmorty/character/1")
            for (const prop in character) {
                expect(response.body).toHaveProperty(prop)
            }
        })
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get("/rickandmorty/character/4200j");
            expect(response.statusCode).toBe(500);
        })
    })
    describe("GET /rickandmorty/login", () => {
        const access = { access: true }
        it("Reponde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
            const response = await request.get("/rickandmorty/login?email=frannporciel@gmail.com&password=42323332")
            expect(response.body).toEqual(access);
        })
        it("Reponde con un objeto con la propiedad access en true si la información del usuario no es válida", async () => {
            const response = await request.get("/rickandmorty/login?email=fraporciel@gmail.com&password=423332")
            access.access = false;
            expect(response.body).toEqual(access);
        })
    })
    describe("POST /rickandmorty/fav", () => {
        it("Debería guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").
                send(character);
            expect(response.body).toContainEqual(character)
        })
        it("Debería agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 2653;
            character.name = "Pirulete Garbando"
            const response = await request.post("/rickandmorty/fav").
                send(character);
            expect(response.body.length).toBe(2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Debería retornar un arreglo con todos los favoritos si el ID solicitado no existe", async () => {
            const response = await request.delete("/rickandmorty/fav/4353d2")
            expect(response.body.length).toBe(2)
        })
        it("Debería eliminar un personaje correctamente", async () => {
            const response = await request.delete("/rickandmorty/fav/2653")
            expect(response.body.length).toBe(1)
        })
    })
})
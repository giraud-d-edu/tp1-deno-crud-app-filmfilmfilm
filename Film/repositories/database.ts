import { MongoClient } from "https://deno.land/x/mongo@v0.31.2/mod.ts";

const MONGODB_URI = "mongodb://localhost:27017";
const DB_NAME = "td2-deno-mongodb";

if (!MONGODB_URI) {
    console.error("❌ MONGO_URI is not set");
}

let client: MongoClient;
let db: any;
let film;

try {
    console.log("⏳ Connexion à MongoDB...");
    client = new MongoClient();
    await client.connect(MONGODB_URI);
    db = client.database(DB_NAME);
    console.log("✅ Connecté à MongoDB");
    film = db.collection("film")
} catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error);
}

export { db, client, film };
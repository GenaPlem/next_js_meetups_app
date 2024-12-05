import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}.wgb0k.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

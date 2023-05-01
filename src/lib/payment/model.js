import clientPromise from "@/lib/db";

const collectionName = "payments";

async function createPayment(payment) {
  const mongoClient = await clientPromise;
  const db = mongoClient.db("payin-demo-db");
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(payment);
  return result.insertedId;
}

async function getPayments() {
  const mongoClient = await clientPromise;
  const db = mongoClient.db("payin-demo-db");
  const collection = db.collection(collectionName);
  const payments = await collection
    .find({})
    .project({})
    .sort({ _id: -1 })
    .limit(100)
    .toArray();
  return payments;
}

export { createPayment, getPayments };

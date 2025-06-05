import "dotenv/config";
import { db } from "./libs/dbConnect.js";

const users = [
   {
      username: "marcel67",
      email: "marcel@mail.com",
      password: "password123",
      avatar: "https://g.codewithnathan.com/default-user.png",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
   },
   {
      username: "adela75",
      email: "adela@mail.com",
      password: "password123",
      avatar: "https://g.codewithnathan.com/default-user.png",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
   },
   {
      username: "peter60",
      email: "peter@mail.com",
      password: "password123",
      avatar: "https://g.codewithnathan.com/default-user.png",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
   },
];

const tasks = [
   {
      name: "Read Atomit Habits",
      description: "Finish reading Atomic Habits by James Clear",
      priority: "not urgent",
      due: new Date().toISOString(),
      status: "open",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
   },
   {
      name: "Learn MERN Stack",
      description: "Learn the MERN stack and build a full-stack application with it",
      priority: "urgent",
      due: new Date().toISOString(),
      status: "open",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
   },
];

try {
   // Seeding users
   let collection = db.collection("users");
   console.log("[seed]", "Seeding users...");
   const result = await collection.insertMany(users);
   console.log(result.insertedIds);
   console.log("[seed]", "Seeding users done");

   // Seeding tasks
   tasks[0].owner = result.insertedIds[0];
   tasks[1].owner = result.insertedIds[1];

   collection = db.collection("tasks");
   console.log("[seed]", "Seeding tasks...");
   await collection.insertMany(tasks);
   console.log("[seed]", "Seeding tasks done");

   console.log("[seed]", "All done");
} catch (error) {
   console.log("[seed]", "Error: ", error);
}

process.exit();

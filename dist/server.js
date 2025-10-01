import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
let server;
const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://noteApp:jFEA84xvGKKrHidS@cluster0.bmhyihx.mongodb.net/tour-management-backend?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to DB");
        server = app.listen(5000, () => {
            console.log(`Server is listening to port 50000`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection detected... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// Unhandled Rejection Error
// Promise.reject(new Error("I forgot to catch this promise"))
process.on("uncaughtException", (err) => {
    console.log("Unhandled Exception detected... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// Uncaught Exception Error
// throw new Error("I forgot to handle this local error")
process.on("SIGTERM", () => {
    console.log("SIGTERM signal received... Server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("SIGINT", () => {
    console.log("SIGINT signal received... Server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
/**
 * unhandled rejection error
 * uncaught rejection error
 * signal termination sigterm
 * **/
//# sourceMappingURL=server.js.map
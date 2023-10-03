import express from "express";
import { config } from "./config/config.js";
import { engine } from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { initializePassport } from "./config/passportConfig.js";
import passport from "passport";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter } from "./routes/views.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";

const port = config.server.port;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log("server listening on port 8080"));



app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/views"));

app.use(viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/sessions", sessionsRouter)


app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true
}));

initializePassport();
app.use(passport.initialize());
app.use(passport.session());
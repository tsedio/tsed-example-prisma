import {Configuration} from "@tsed/di";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import "@tsed/swagger";
import {config, rootDir} from "./config";
import * as rest from "./controllers/rest";
import * as pages from "./controllers/pages";
import "./boot/BootDBModule";
// import {PrismaService} from "./services/PrismaService";

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  mount: {
    "/rest": [...Object.values(rest)],
    "/": [...Object.values(pages)]
  },
  disableComponentsScan: true,
  swagger: [
    {
      path: "/docs",
      specVersion: "3.0.1"
    }
  ],
  views: {
    root: `${rootDir}/../views`,
    viewEngine: "ejs"
  },
  middlewares: [
    "cors",
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    {use: "urlencoded-parser", options: {extended: true}}
  ]
})
export class Server {}

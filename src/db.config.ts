import {createConnections} from "typeorm";

const databaseConfig = createConnections([
  {
    name: "devMaster",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "basic-db",
    entities: [__dirname + "/entity/*{.js,.ts}"],
    synchronize: true
  }, 
  // {
  //   name: "devReplica",
  //   type: "mysql",
  //   host: "localhost",
  //   port: 3306,
  //   username: "root",
  //   password: "admin",
  //   database: "db2",
  //   entities: [__dirname + "/entity/*{.js,.ts}"],
  //   synchronize: true
  // }
]);

export { databaseConfig }
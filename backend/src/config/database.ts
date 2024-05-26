import mongoose from 'mongoose';

class Database {
  private static dbInstance: Database;

  private static createDBInstance() {
    const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1l7qa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    };

    //Initialize the database connection
    return mongoose.connect(connectionString, options);
  }

  public static connect(): Database {
    if (!this.dbInstance) {
      this.dbInstance = this.createDBInstance();
    }

    return this.dbInstance;
  }
}

export default Database;

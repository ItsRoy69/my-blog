import mongoose from 'mongoose'

const Connection = async () => {
  try{
        const URL = 'mongodb+srv://Roy:123456roy@blogweb.lqmf9.mongodb.net/Blog?retryWrites=true&w=majority'

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
      }
  catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

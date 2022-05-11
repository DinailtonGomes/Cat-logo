
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

export const connection = new Sequelize(

    'postgres://discografia_user:HnY9MMA9ukJJMKLxtxJxM6GjFowDwKLx@dpg-c9t2s4j19n07ml7tlqbg-a.oregon-postgres.render.com/discografia', {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)


 

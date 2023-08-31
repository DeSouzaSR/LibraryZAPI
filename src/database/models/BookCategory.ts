import { Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Category from './Category';
import Book from './Book';

class BookCategory extends Model {
    declare bookId: number
    declare categoryId: number
}

BookCategory.init({
    bookId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'book',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    categoryId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
},
    {
        sequelize: db,
        tableName: 'book_category',
        underscored: true,
        timestamps: false
    }
)

Book.belongsToMany(Category, {
    foreignKey: 'bookId',
    otherKey: 'categoryId',
    as: 'categories',
    through: BookCategory
})

Category.belongsToMany(Book, {
    foreignKey: 'categoryId',
    otherKey: 'bookId',
    as: 'books',
    through: BookCategory
})

export default BookCategory
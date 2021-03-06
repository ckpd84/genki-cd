module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define ('categories', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            name: {
                type: dataTypes.STRING(45),
                allowNull: false
            }, 
            created_at: {
                type: dataTypes.DATE
            },
            updated_at: {
                type: dataTypes.DATE
            }
        }, 
        {
            tableName: 'categories',
            underscored: true,
            timestamps: true
        }
    );
    Category.associate = function (models){
        Category.hasMany (models.products, {
            as: 'products',
            foreignKey: "category_id"
        })
    }
    return Category;
}
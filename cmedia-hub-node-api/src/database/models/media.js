const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../../config/config'); // Import the Sequelize configuration

const Media = sequelize.define('media', {
  id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,

      // defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: 'N/A',
  },
  privacy: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'public',

  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type:DataTypes.INTEGER,
    allowNull: true,
  },
  channel_id: {
    type:DataTypes.STRING,
    defaultValue:'public',
  },
  format: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



// Add a hook to exclude the 'media_url' field by default
// Media.addHook('afterFind', (result) => {
  // if (Array.isArray(result)) {
  //   result.forEach((instance) => {
  //     if (instance.dataValues) {
  //       delete instance.dataValues.media_url;
  //     }
  //   });
  // } else if (result && result.dataValues) {
  //   delete result.dataValues.media_url;
  // }
// });


// Synchronize the model with the database to create the table
sequelize.sync()
  .then(() => {
    console.log('Table created successfully!');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });



  
module.exports = Media;

const mongoose = require('mongoose');

/**
 * User
 */
const UserSchema = new mongoose.Schema({
    /**
     * Email of user.  [REQUIRED][UNIQUE]
     */
    email: {
        type: String,
        index: true,
        unique: true,
        required: [true, 'The email is required.']
    },
    /**
     * Password of user. [REQUIRED]
     */
    password: {
        type: String,
        required: [true, 'The password is required.']
    },
    /**
     * Role of user.
     */
    rol: {
        type: String,
        required: false,
        default: 'ROLE_SECRETARIA'
    },
}, {
    /**
     * Collation, define: locale and strenght.
     */
    collation: { locale: 'es', strength: 1 }
});

UserSchema.index({ email: 1 });

module.exports = mongoose.model('User', UserSchema);
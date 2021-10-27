import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: 'admin',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        }
    ],
    license: [
        {
            deviceId: 'testId1',
            date: Date.now()
        },
        {
            deviceId: 'testId2',
            date: Date.now()
        }
    ]
};
export default data;
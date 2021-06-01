require('dotenv').config();

const karan_ph_no = process.env.KARAN_PH_NO
const requirementData = [
    {
        'name': 'Saurabh Ranjan',
        'district_id': 140,
        'phone': karan_ph_no,
        'vaccine': 'COVAXIN',
        'date': '04-06-2021'
    }, {
        'name': 'Saurabh 2',
        'district_id': 149,
        'phone': karan_ph_no,
        'vaccine': 'COVAXIN',
        'date': '04-06-2021'
    }
];

module.exports = ({ requirementData });
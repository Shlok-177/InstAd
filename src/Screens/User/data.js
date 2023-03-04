import axios from "axios";

const getData = async () => {
    const res = await axios.get('https://instad-backend-production.up.railway.app/api/company/fetchcompany');
    console.log(res.data);
    return res.data;
}

const createWebsites = async () => {
    const newData = await getData();

    const websites = [
        ...newData
    ];

    return websites;
};

const categories = ['sports', 'entertainment', 'news', 'technology', 'food', 'travel'];

export { categories };
export default createWebsites;

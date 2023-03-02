import axios from "axios";

const getData = async () => {
    const res = await axios.get('http://localhost:4000/api/company/fetchcompany');
    console.log(res.data);
    return res.data;
}

const createWebsites = async () => {
    const newData = await getData();

    const websites = [
        {
            cName: 'abc',
            adType: 'sports',
            time: new Date(),
            occupied: true,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste similique, veritatis deserunt ipsam nemo velit accusamus at. Quibusdam non at, accusantium amet expedita eos?',
            walletAddress : 1333454675346989798989
        },
        ...newData
    ];

    return websites;
};

const categories = ['sports', 'entertainment', 'news', 'technology', 'food', 'travel'];

export { categories };
export default createWebsites;

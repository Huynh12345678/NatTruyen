import { store } from "../../store";
import nettruyen from '../nettruyen/home';
import lxhentai from '../lxhentai/home';

const getHome = async (page: number = 1): Promise<any> => {
    const state = store.getState();

    switch (state.source) {
        case '1':
            return nettruyen(page); //nettruyen
        case '2':
            return nettruyen(page); //nhattruyen
        case '3':
            return lxhentai(page); //lxhentai
    }
};

export default getHome;